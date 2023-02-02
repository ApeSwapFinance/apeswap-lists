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
} from '../constants'

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
]

const buildList = (list: any, listName: string) => {
  const tokenListPath = `${path.resolve()}/config/${listName}.json`
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
