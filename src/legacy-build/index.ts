import { resolve } from 'path'
import { writeFile } from 'fs'
import {
  farms,
  bills,
  pools,
  jungleFarms,
  tokens,
  vaults,
  dualFarms,
  nfaStakingPools,
  iaos,
  farmsV2,
  vaultsV3,
  jungleFarmsV2,
  poolsV2,
  launchProjects,
  flashBonds,
  dexFactoriesPriceApi,
  priceSources,
  preTGEBonds,
  WNATIVE,
  zapInputTokens,
} from '../constants'
import { BillsConfig, Token, ChainId, LiquidityDex } from '../types'

const listMap: [any, string][] = [
  [farms, 'farms'],
  [farmsV2, 'farmsV2'],
  [bills, 'bills'],
  [pools, 'pools'],
  [jungleFarms, 'jungleFarms'],
  [vaults, 'vaults'],
  [vaultsV3, 'vaultsV3'],
  [dualFarms, 'dualFarms'],
  [nfaStakingPools, 'nfaStakingPools'],
  [iaos, 'iaos'],
  [jungleFarmsV2, 'jungleFarmsV2'],
  [poolsV2, 'poolsV2'],
  [launchProjects, 'launchProjects'],
  [preTGEBonds, 'preTGEBonds'],
  [flashBonds, 'flashBonds'],
  [dexFactoriesPriceApi, 'dexFactoriesPriceApi'],
  [priceSources, 'priceSources'],
]

export const stringifyList = (listProp: any, listName: string) => {
  let list
  if (listName === 'bills') {
    list = listProp.map((bill: BillsConfig): BillsConfig => {
      const chainId = bill.chainId
      return {
        ...bill,
        contractAddress: {
          [chainId]: bill.contractAddress[chainId],
        },
        lpToken: {
          ...bill.lpToken,
          address: {
            [chainId]: bill.lpToken.address?.[chainId],
          },
          decimals: {
            [chainId]: bill.lpToken.decimals?.[chainId],
          },
          liquidityDex: {
            [chainId]: bill.lpToken.liquidityDex?.[chainId],
          },
        },
        earnToken: {
          ...bill.earnToken,
          address: {
            [chainId]: bill.earnToken.address?.[chainId],
          },
          decimals: {
            [chainId]: bill.earnToken.decimals?.[chainId],
          },
          liquidityDex: {
            [chainId]: bill.earnToken.liquidityDex?.[chainId],
          },
        },
      }
    })
  } else {
    list = listProp
  }
  return JSON.stringify(list, null, 2)
}

export const buildList = (listProp: any, listName: string) => {
  const tokenListPath = `${resolve()}/config/${listName}.json`
  const stringifiedList = stringifyList(listProp, listName)
  writeFile(tokenListPath, stringifiedList, function (err) {
    if (err) console.error(err)
    console.info(`✅  ${listName} complete`)
  })
}

const buildTokens = () => {
  const filterActiveTokens = Object.fromEntries(Object.entries(tokens).filter(([, val]) => val.active))
  const tokenListPath = `${resolve()}/config/tokens.json`
  const stringifiedList = JSON.stringify(filterActiveTokens, null, 2)
  writeFile(tokenListPath, stringifiedList, function (err) {
    if (err) console.error(err)
    console.info(`✅  tokens complete`)
  })
}

const buildTokensSimplified = () => {
  // Create a reverse lookup map from token address+chainId to token key in tokens.ts
  const addressToKey = new Map<ChainId, Map<string, string>>()
  Object.entries(tokens).forEach(([key, token]) => {
    if (token.address) {
      Object.entries(token.address).forEach(([chainIdStr, address]) => {
        if (address) {
          const chainId = parseInt(chainIdStr) as ChainId
          let chainMap = addressToKey.get(chainId)
          if (!chainMap) {
            chainMap = new Map()
            addressToKey.set(chainId, chainMap)
          }
          // Store lowercase address for case-insensitive matching
          chainMap.set(address.toLowerCase(), key)
        }
      })
    }
  })

  // Get tokens from all bills (both active and sold out)
  const allBills = bills

  // Collect unique tokens from lpToken and earnToken of all bills, plus WNATIVE and zapInputTokens
  const collectedTokens = new Map<string, { token: Token; chainIds: Set<ChainId>; tokenKey: string }>()

  allBills.forEach((bill) => {
    const chainId = bill.chainId

    // Add lpToken
    if (bill.lpToken && bill.lpToken.address) {
      const lpAddress = bill.lpToken.address[chainId]
      if (lpAddress) {
        const address = lpAddress.toLowerCase()
        const tokenKey = addressToKey.get(chainId)?.get(address)
        if (tokenKey) {
          if (!collectedTokens.has(tokenKey)) {
            collectedTokens.set(tokenKey, { token: bill.lpToken, chainIds: new Set(), tokenKey })
          }
          const tokenData = collectedTokens.get(tokenKey)
          if (tokenData) {
            tokenData.chainIds.add(chainId)
          }
        }
      }
    }

    // Add earnToken
    if (bill.earnToken && bill.earnToken.address) {
      const earnAddress = bill.earnToken.address[chainId]
      if (earnAddress) {
        const address = earnAddress.toLowerCase()
        const tokenKey = addressToKey.get(chainId)?.get(address)
        if (tokenKey) {
          if (!collectedTokens.has(tokenKey)) {
            collectedTokens.set(tokenKey, { token: bill.earnToken, chainIds: new Set(), tokenKey })
          }
          const tokenData = collectedTokens.get(tokenKey)
          if (tokenData) {
            tokenData.chainIds.add(chainId)
          }
        }
      }
    }
  })

  // Add tokens from WNATIVE
  Object.entries(WNATIVE).forEach(([chainIdStr, token]) => {
    if (token && token.address) {
      const chainId = parseInt(chainIdStr) as ChainId
      const address = token.address[chainId]?.toLowerCase()
      const tokenKey = address ? addressToKey.get(chainId)?.get(address) : undefined

      if (tokenKey) {
        if (!collectedTokens.has(tokenKey)) {
          collectedTokens.set(tokenKey, { token, chainIds: new Set(), tokenKey })
        }
        const tokenData = collectedTokens.get(tokenKey)
        if (tokenData) {
          tokenData.chainIds.add(chainId)
        }
      }
    }
  })

  // Add tokens from zapInputTokens
  Object.entries(zapInputTokens).forEach(([chainIdStr, tokenArray]) => {
    if (tokenArray) {
      const chainId = parseInt(chainIdStr) as ChainId

      tokenArray.forEach((token) => {
        if (token.address) {
          const zapAddress = token.address[chainId]
          if (zapAddress) {
            const address = zapAddress.toLowerCase()
            const tokenKey = addressToKey.get(chainId)?.get(address)

            if (tokenKey) {
              if (!collectedTokens.has(tokenKey)) {
                collectedTokens.set(tokenKey, { token, chainIds: new Set(), tokenKey })
              }
              const tokenData = collectedTokens.get(tokenKey)
              if (tokenData) {
                tokenData.chainIds.add(chainId)
              }
            }
          }
        }
      })
    }
  })

  // Always include these tokens regardless of bond usage
  const alwaysIncludeTokenKeys = ['goo']

  alwaysIncludeTokenKeys.forEach((tokenKey) => {
    const token = tokens[tokenKey]
    if (token && token.address) {
      Object.entries(token.address).forEach(([chainIdStr, address]) => {
        if (address) {
          const chainId = parseInt(chainIdStr) as ChainId
          if (!collectedTokens.has(tokenKey)) {
            collectedTokens.set(tokenKey, { token, chainIds: new Set(), tokenKey })
          }
          const tokenData = collectedTokens.get(tokenKey)
          if (tokenData) {
            tokenData.chainIds.add(chainId)
          }
        }
      })
    }
  })

  // Build filtered tokens object with only the chains where tokens are used
  const filteredTokens: Record<string, Token> = {}

  collectedTokens.forEach(({ token, chainIds, tokenKey }) => {
    // Filter addresses and decimals to only include chains where tokens are used
    const filteredAddress: Partial<Record<ChainId, string>> = {}
    const filteredDecimals: Partial<Record<ChainId, number>> = {}
    const filteredLiquidityDex: Partial<Record<ChainId, LiquidityDex>> = {}

    chainIds.forEach((chainId) => {
      if (token.address && token.address[chainId]) {
        filteredAddress[chainId] = token.address[chainId]
      }
      if (token.decimals && token.decimals[chainId] !== undefined && token.decimals[chainId] !== null) {
        filteredDecimals[chainId] = token.decimals[chainId] as number
      }
      if (token.liquidityDex && token.liquidityDex[chainId]) {
        filteredLiquidityDex[chainId] = token.liquidityDex[chainId]
      }
    })

    // Build the filtered token object
    const filteredToken: Token = {
      symbol: token.symbol,
      address: filteredAddress,
      decimals: filteredDecimals,
      active: token.active !== false, // Default to true if not specified
    }

    // Add optional properties if they exist
    if (Object.keys(filteredLiquidityDex).length > 0) {
      filteredToken.liquidityDex = filteredLiquidityDex
    }
    if (token.dontFetch !== undefined) {
      filteredToken.dontFetch = token.dontFetch
    }
    if (token.lpToken !== undefined) {
      filteredToken.lpToken = token.lpToken
    }
    if (token.price !== undefined) {
      filteredToken.price = token.price
    }
    if (token.getLpUrl) {
      // Filter getLpUrl to only include chains where tokens are used
      const filteredGetLpUrl: Partial<Record<ChainId, string>> = {}
      chainIds.forEach((chainId) => {
        if (token.getLpUrl && token.getLpUrl[chainId]) {
          filteredGetLpUrl[chainId] = token.getLpUrl[chainId]
        }
      })
      if (Object.keys(filteredGetLpUrl).length > 0) {
        filteredToken.getLpUrl = filteredGetLpUrl
      }
    }
    if (token.ichiUnderlyingDex !== undefined) {
      filteredToken.ichiUnderlyingDex = token.ichiUnderlyingDex
    }
    if (token.liquidityWrapper !== undefined) {
      filteredToken.liquidityWrapper = token.liquidityWrapper
    }
    if (token.liquiditySource) {
      // Filter liquiditySource to only include chains where tokens are used
      const filteredLiquiditySource: Partial<Record<ChainId, LiquidityDex>> = {}
      chainIds.forEach((chainId) => {
        if (token.liquiditySource && token.liquiditySource[chainId]) {
          filteredLiquiditySource[chainId] = token.liquiditySource[chainId]
        }
      })
      if (Object.keys(filteredLiquiditySource).length > 0) {
        filteredToken.liquiditySource = filteredLiquiditySource
      }
    }

    // Only include tokens that have active: true
    if (filteredToken.active) {
      filteredTokens[tokenKey] = filteredToken
    }
  })

  const tokenListPath = `${resolve()}/config/tokensSimplified.json`
  const stringifiedList = JSON.stringify(filteredTokens, null, 2)
  writeFile(tokenListPath, stringifiedList, function (err) {
    if (err) console.error(err)
    console.info(`✅  tokensSimplified complete`)
  })
}

export const buildLegacyConfig = () => {
  listMap.map((curList) => {
    const [list, listName] = curList
    buildList(list, listName)
  })
  buildTokens()
  buildTokensSimplified()
}
