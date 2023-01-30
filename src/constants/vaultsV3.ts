import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { VaultConfig, VaultVersion } from '../types'

const vaults: VaultConfig[] = [
  // SPECIAL V1 AUTO COMPOUND VAULT -> V2 MASTER APE
  {
    id: 41,
    pid: 41,
    availableChains: [ChainId.BSC],
    type: 'AUTO',
    version: VaultVersion.V1,
    stratAddress: {
      [ChainId.BSC]: '0xae9ed266ea3d7ae83cad8fa3b143d3dc86b640bf',
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
        [ChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'bananaPerSecond',
      },
      rewardToken: tokens.banana,
    },
  },

  // V3 Vaults
  {
    id: 0,
    pid: 0,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x8F7B5E2F9ca5C2829847743Fa31A4EFB97e3fca2',
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
    pid: 1,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x7743f72f3c300e20579192072B529Cc093759cCc',
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
    pid: 2,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xC8C45C52903117846174Dd5142A458546A81FFC5',
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
    pid: 3,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x1569637D5db9c3F15bb93eAc257b3c268113f977',
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
    pid: 4,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x7a558933b4dDfA045Ca58D97e211116f83Dd956f',
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
    pid: 5,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xFbd3Ff8Ac6D4CFb0Bb9F0B4Bba46fA0f638A7a12',
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
    pid: 6,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x425dd6927fd7799AD10dbB0F4d97F2B3CdB75656',
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
    pid: 7,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x85949316E8A46de1B54473F3A2F24f2123295058',
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
    pid: 8,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x920D1bB411DFB6CE2a21170D32a60C6cC101d395',
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
    pid: 9,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x088D9CacCaB515c1E2Ef83Dab0961a91FF52942e',
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
    pid: 10,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xCffBa099C6B2519332edFeeC060EdB583dC8B906',
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
    pid: 11,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xDcEA361C6477BF7584653C3467130E4109AeeE8a',
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
    pid: 12,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x2639A64D9d99462f06927B85b0aB303d311d3120',
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
    pid: 13,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xcd4007840b7765Be5C42D9CA3f4410E55856F17D',
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
    pid: 14,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x6C6E5A4e73343e51119b8904E8938693a6811767',
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
    pid: 15,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x80899A62Fe6790B7C1045eb7b4f28f91FC343eb7',
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
    pid: 16,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x118d61B2cbfdC859a9F9bB89d49b4a9212731158',
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
    pid: 17,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0x90aa28ba8D5369e664527B75527eE5440E183742',
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
    pid: 18,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V3,
    stratAddress: {
      [ChainId.BSC]: '0xa991f7c5c23365E23Ec13584386722C8381BDd93',
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
