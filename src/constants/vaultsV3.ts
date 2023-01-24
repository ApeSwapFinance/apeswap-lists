import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { VaultConfig, VaultVersion } from '../types'

const vaults: VaultConfig[] = [
  // V3 Vaults
  {
    id: 0,
    pid: 18,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xd56cc4175dDe03fCE7871db437b273252550C81c',
    },
    stakeToken: tokens.banana,
    token: tokens.banana,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 0,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 1,
    pid: 0,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x3a28a8b7e83255fDe74Af59a36380704d457F6ff',
    },
    stakeToken: tokens.bananaBnb,
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 6,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 2,
    pid: 1,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x927b1452F627B91e13Efa196E872D4fB17D80e77',
    },
    stakeToken: tokens.bananaBusd,
    token: tokens.banana,
    quoteToken: tokens.busd,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 7,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 3,
    pid: 2,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x64443214c3d5221838e5d208db579f699be8db67',
    },
    stakeToken: tokens.bnbBusd,
    token: tokens.wbnb,
    quoteToken: tokens.busd,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 8,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 4,
    pid: 3,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x8c89478434b045816B7B957E17De7d7407405F3b',
    },
    stakeToken: tokens.ethBnb,
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 10,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 5,
    pid: 4,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xC2B16dDd16113389C745Fa8D4aCdfAC23e8828C8',
    },
    stakeToken: tokens.adaBnb,
    token: tokens.ada,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 14,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 6,
    pid: 5,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x5A21f22f6009692bE29446e2D2881562eFA97cC2',
    },
    stakeToken: tokens.adaEth,
    token: tokens.ada,
    quoteToken: tokens.eth,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 15,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 7,
    pid: 6,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xEa615F716E22855a888C536C62FFBD5840F59775',
    },
    stakeToken: tokens.dotBnb,
    token: tokens.dot,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 17,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 8,
    pid: 7,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xB3989a5D8930D89d6A40B08DBEEb87d73A1C8BE3',
    },
    stakeToken: tokens.linkBnb,
    token: tokens.link,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 19,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 9,
    pid: 8,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x72e387F2e0Ff6BD050c0B1082a573a125fDB9dFE',
    },
    stakeToken: tokens.bnbMatic,
    token: tokens.wmatic,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 22,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 10,
    pid: 9,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x9b5C2A7788618c3e77dF428dD0560E661C61a10e',
    },
    stakeToken: tokens.aaveBnb,
    token: tokens.aave,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 23,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 11,
    pid: 10,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x6a7B5184037a1508c7DbA244DaB61f51C660E6C6',
    },
    stakeToken: tokens.compBnb,
    token: tokens.comp,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 24,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 12,
    pid: 11,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x9b8aD87bD0343737Ec5437b22566708557BC3223',
    },
    stakeToken: tokens.bnbFtm,
    token: tokens.ftm,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 25,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 13,
    pid: 12,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xC597A13850D611df6b4d93F4d47BC6737A7914E3',
    },
    stakeToken: tokens.avaxBnb,
    token: tokens.avax,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 26,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 14,
    pid: 13,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x9a499acDFa1cAb70FD29605706519c4eDA5f6C99',
    },
    stakeToken: tokens.ceekBnb,
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 36,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 15,
    pid: 14,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xeF35F0bbBC043D0cC975459A36548D9559146ee6',
    },
    stakeToken: tokens.filBnb,
    token: tokens.fil,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 40,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 16,
    pid: 15,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x4E38f86367F678AC93420f55A0C914b0Cf35725F',
    },
    stakeToken: tokens.anmlBnb,
    token: tokens.anml,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 46,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 17,
    pid: 16,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x80a61eb4cA27d7848eCe656Ff346EE42Ab1Cfb47',
    },
    stakeToken: tokens.froyoBnb,
    token: tokens.froyo,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 49,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
  {
    id: 18,
    pid: 17,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xcda59403221B43bec08564a325457aB6c82426f9',
    },
    stakeToken: tokens.primateBnb,
    token: tokens.primate,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 50,
      },
      address: {
        // MasterApe V2 contract
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },
]

export default vaults
