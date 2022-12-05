import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { VaultConfig } from './types'

const vaults: VaultConfig[] = [
  // V3 Vaults
  {
    id: 0,
    pid: 0,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: 'V3',
    stratAddress: {
      [ChainId.BSC]: '0x39717e7D00388926832d014Bbaf8f44E419b20d1',
    },
    stakeToken: tokens.bananaBusd,
    token: tokens.banana,
    quoteToken: tokens.busd,
    rewardToken: tokens.farmAway,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 1,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x63d2495050309b0639d24C870f1c3BA4e88F4626',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerBlock',
      },
      rewardToken: tokens.farmAway,
    },
  },
  {
    id: 1,
    pid: 1,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: 'V3',
    stratAddress: {
      [ChainId.BSC]: '0x927b1452F627B91e13Efa196E872D4fB17D80e77',
    },
    stakeToken: tokens.bnbBusd,
    token: tokens.bnb,
    quoteToken: tokens.busd,
    rewardToken: tokens.farmAway,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 2,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x63d2495050309b0639d24C870f1c3BA4e88F4626',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerBlock',
      },
      rewardToken: tokens.farmAway,
    },
  },
]

export default vaults
