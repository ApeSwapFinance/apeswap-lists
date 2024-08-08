import path from 'path'
import fs from 'fs'
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
  zapInputTokens,
  farmsV2,
  vaultsV3,
  jungleFarmsV2,
  poolsV2,
  launchProjects,
  flashBonds,
} from '../constants'
import { BillsConfig } from 'types'

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
  [zapInputTokens, 'zapInputTokens'],
  [jungleFarmsV2, 'jungleFarmsV2'],
  [poolsV2, 'poolsV2'],
  [launchProjects, 'launchProjects'],
  [flashBonds, 'flashBonds'],
]

const buildList = (listProp: any, listName: string) => {
  const tokenListPath = `${path.resolve()}/config/${listName}.json`
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
  const stringifiedList = JSON.stringify(list, null, 2)
  fs.writeFile(tokenListPath, stringifiedList, function (err) {
    if (err) console.error(err)
    console.info(`✅  ${listName} complete`)
  })
}

const buildTokens = () => {
  const filterActiveTokens = Object.fromEntries(Object.entries(tokens).filter(([, val]) => val.active))
  const tokenListPath = `${path.resolve()}/config/tokens.json`
  const stringifiedList = JSON.stringify(filterActiveTokens, null, 2)
  fs.writeFile(tokenListPath, stringifiedList, function (err) {
    if (err) console.error(err)
    console.info(`✅  tokens complete`)
  })
}

export const buildLegacyConfig = () => {
  listMap.map((curList) => {
    const [list, listName] = curList
    buildList(list, listName)
  })
  buildTokens()
}
