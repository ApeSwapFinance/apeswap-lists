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
} from '../src/constants'
import billsJson from '../config/bills.json'
import farmsJson from '../config/farms.json'
import jungleFarmsJson from '../config/jungleFarms.json'
import poolsJson from '../config/pools.json'
import tokensJson from '../config/tokens.json'
import vaultsJson from '../config/vaults.json'
import dualFarmsJson from '../config/dualFarms.json'
import nfaStakingPoolJson from '../config/nfaStakingPools.json'
import iaosJson from '../config/iaos.json'
import zapInputTokensJson from '../config/zapInputTokens.json'

const stringifiedBills = JSON.stringify(bills, null, 2)
const stringifiedBillsJson = JSON.stringify(billsJson, null, 2)

const stringifiedFarms = JSON.stringify(farms, null, 2)
const stringifiedFarmsJson = JSON.stringify(farmsJson, null, 2)

const stringifiedJungleFarms = JSON.stringify(pools, null, 2)
const stringifiedJungleFarmsJson = JSON.stringify(poolsJson, null, 2)

const stringifiedPools = JSON.stringify(jungleFarms, null, 2)
const stringifiedPoolsJson = JSON.stringify(jungleFarmsJson, null, 2)

const stringifiedTokens = JSON.stringify(tokens, null, 2)
const stringifiedTokensJson = JSON.stringify(tokensJson, null, 2)

const stringifiedVaults = JSON.stringify(vaults, null, 2)
const stringifiedVaultsJson = JSON.stringify(vaultsJson, null, 2)

const stringifiedDualFarms = JSON.stringify(dualFarms, null, 2)
const stringifiedDualFarmsJson = JSON.stringify(dualFarmsJson, null, 2)

const stringifyNfaStakingPools = JSON.stringify(nfaStakingPools, null, 2)
const stringifiedNfaStakingPoolsJson = JSON.stringify(nfaStakingPoolJson, null, 2)

const stringifyIaos = JSON.stringify(iaos, null, 2)
const stringifiedIaosJson = JSON.stringify(iaosJson, null, 2)

const stringifyZapInputTokens = JSON.stringify(zapInputTokens, null, 2)
const stringifiedZapInputTokensJson = JSON.stringify(zapInputTokensJson, null, 2)

describe('JSON files are most recent and are correct', () => {
  it('Test if bills have been generated', () => {
    expect(stringifiedBillsJson).toBe(stringifiedBills)
  })
  it('Test if farms have been generated', () => {
    expect(stringifiedFarmsJson).toBe(stringifiedFarms)
  })
  it('Test if jungle farms have been generated', () => {
    expect(stringifiedJungleFarmsJson).toBe(stringifiedJungleFarms)
  })
  it('Test if pools have been generated', () => {
    expect(stringifiedPoolsJson).toBe(stringifiedPools)
  })
  it('Test if tokens have been generated', () => {
    expect(stringifiedTokensJson).toBe(stringifiedTokens)
  })
  it('Test if vaults have been generated', () => {
    expect(stringifiedVaultsJson).toBe(stringifiedVaults)
  })
  it('Test if dual farms have been generated', () => {
    expect(stringifiedDualFarmsJson).toBe(stringifiedDualFarms)
  })
  it('Test if nfa staking pools have been generated', () => {
    expect(stringifiedNfaStakingPoolsJson).toBe(stringifyNfaStakingPools)
  })
  it('Test if iaos have been generated', () => {
    expect(stringifiedIaosJson).toBe(stringifyIaos)
  })
  it('Test if zap Input Tokens have been generated', () => {
    expect(stringifiedZapInputTokensJson).toBe(stringifyZapInputTokens)
  })
})
