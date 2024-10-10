import tokens from './tokens'
import { ChainId, VaultConfig, VaultVersion } from '../types'

const vaults: VaultConfig[] = [
  {
    id: 0,
    pid: 22,
    availableChains: [ChainId.BSC],
    type: 'AUTO',
    version: VaultVersion.V1,
    stratAddress: {
      [ChainId.BSC]: '0x9a668d5482828a444d7322fe5420ab5b44ce3de7',
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
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    fee: '0.1',
  },
  {
    id: 1,
    pid: 1,
    availableChains: [ChainId.BSC],
    type: 'AUTO',
    version: VaultVersion.V1,
    stratAddress: {
      [ChainId.BSC]: '0x4e4efe113214c1371b264c09f59f64c5f12589f8',
    },
    stakeToken: tokens.bananaBnb,
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.bananaBnb,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 1,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    inactive: true,
  },

  // BANANA - BUSD Vault config
  {
    id: 2,
    pid: 2,
    availableChains: [ChainId.BSC],
    type: 'AUTO',
    version: VaultVersion.V1,
    stratAddress: {
      [ChainId.BSC]: '0x234101c6612115cac7bdb74ee20f388bb95db8cc',
    },
    stakeToken: tokens.bananaBusd,
    token: tokens.banana,
    quoteToken: tokens.busd,
    rewardToken: tokens.bananaBusd,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 2,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    inactive: true,
  },

  // BANANA - BNB vault config

  {
    id: 3,
    pid: 0,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0xA25790303f72c940D5cb33EA4554Bbd4656a69Dd',
    },
    stakeToken: tokens.bananaBnb,
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 1,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // BANANA - BUSD vault config

  {
    id: 4,
    pid: 1,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x91C235A3D1B897915a95880bD6C8305849144583',
    },
    stakeToken: tokens.bananaBusd,
    token: tokens.banana,
    quoteToken: tokens.busd,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 2,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // BNB - BUSD vault config

  {
    id: 5,
    pid: 4,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x037AC1244C18Ea840D4cc459135698B384DAa750',
    },
    stakeToken: tokens.bnbBusd,
    token: tokens.wbnb,
    quoteToken: tokens.busd,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 3,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // POL - BNB vault config

  {
    id: 6,
    pid: 2,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0xc6C58318c5b180d820eC72bFe426ad41c04aee96',
    },
    stakeToken: tokens.bnbPol,
    token: tokens.wpol,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 45,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // FTM - BNB vault config

  {
    id: 7,
    pid: 3,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x99eBd87fF021e311d5DC5A53E26b8bA4d62eEe2a',
    },
    stakeToken: tokens.bnbFtm,
    token: tokens.ftm,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 49,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // ETH - BNB vault config

  {
    id: 8,
    pid: 5,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x17884b90f18B8875147D02a8119a6226841d282e',
    },
    stakeToken: tokens.ethBnb,
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 5,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // APE - BNB vault config

  {
    id: 9,
    pid: 6,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x6862c220a88e0267D9B0652b7102A2d0c72bF7Eb',
    },
    stakeToken: tokens.apeBNB,
    token: tokens.ape,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 191,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // DOT - BNB vault config

  {
    id: 10,
    pid: 7,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x9A4d08aa7E97f3e37945E3a431feD6a5afa031f6',
    },
    stakeToken: tokens.dotBnb,
    token: tokens.dot,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 33,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // AVAX - BNB vault config

  {
    id: 11,
    pid: 8,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0xC76FC2BB951B35D831a110D02D038De002bA0B18',
    },
    stakeToken: tokens.avaxBnb,
    token: tokens.avax,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 51,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // NFTY - BNB vault config

  {
    id: 12,
    pid: 9,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x5d069513b56fa4df25ee70ebceb233b9515cba6f',
    },
    stakeToken: tokens.nftyBnb,
    token: tokens.nfty,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 132,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // CEEK - BNB vault config

  {
    id: 13,
    pid: 10,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0xcc92c18e948aa5cd7821a87322f8f8c35cd79f71',
    },
    stakeToken: tokens.ceekBnb,
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 117,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // PRIMATE - BNB vault config

  {
    id: 14,
    pid: 11,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0xd8fa7c1bff86770cfcc500ecfcfd8c98f54ab49f',
    },
    stakeToken: tokens.primateBnb,
    token: tokens.primate,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 201,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // COMP - BNB vault config

  {
    id: 15,
    pid: 12,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x11d9757bc9e09b792d6a7be695ce3da377477735',
    },
    stakeToken: tokens.compBnb,
    token: tokens.comp,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 48,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // FIL - BNB vault config

  {
    id: 16,
    pid: 13,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x4b4ec4206d385304ad2d3d0bd229c8e570cba980',
    },
    stakeToken: tokens.filBnb,
    token: tokens.fil,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 142,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // ADA - BNB vault config

  {
    id: 17,
    pid: 14,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x6b8a11b50f653f4e50d4dcbb9607edba671aa792',
    },
    stakeToken: tokens.adaBnb,
    token: tokens.ada,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 17,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // ADA - ETH vault config

  {
    id: 18,
    pid: 15,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x4ac272a7f14e62a2c95bb4f33f6081aefc4cb03b',
    },
    stakeToken: tokens.adaEth,
    token: tokens.ada,
    quoteToken: tokens.eth,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 18,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // LINK - BNB vault config

  {
    id: 19,
    pid: 16,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x1282d55fe7e8cc0eb1895476e2666dd59d7a4171',
    },
    stakeToken: tokens.linkBnb,
    token: tokens.link,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 36,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // AAVE - BNB vault config

  {
    id: 20,
    pid: 17,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x28b8fe88897d507b051b1d16c35d163b27a79e23',
    },
    stakeToken: tokens.aaveBnb,
    token: tokens.aave,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 46,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // FROYO - BNB vault config

  {
    id: 21,
    pid: 18,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x49a8a2772ccf69ba8bb250ab511f4b662ef64ff5',
    },
    stakeToken: tokens.froyoBnb,
    token: tokens.froyo,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 200,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // ANML - BNB vault config

  {
    id: 22,
    pid: 19,
    availableChains: [ChainId.BSC],
    type: 'MAX',
    version: VaultVersion.V2,
    stratAddress: {
      [ChainId.BSC]: '0x5354dc56d8e0fcbb33ae384f07f98b1388107250',
    },
    stakeToken: tokens.anmlBnb,
    token: tokens.anml,
    quoteToken: tokens.wbnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [ChainId.BSC]: 192,
      },
      address: {
        [ChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [ChainId.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
  },

  // TESTNET VAULTS

  // {
  //   id: 1000,
  //   pid: 0,
  //   availableChains: [ChainId.BSC_TESTNET],
  //   type: 'MAX',
  //   version: VaultVersion.V2,
  //   stratAddress: {
  //     [ChainId.BSC_TESTNET]: '0xe635B6C53bCDB4e98224E2cDC50a130CA38f9647',
  //   },
  //   stakeToken: tokens.horNey,
  //   token: tokens.hor,
  //   quoteToken: tokens.ney,
  //   rewardToken: tokens.banana,
  //   platform: 'ApeSwap',
  //   masterchef: {
  //     pid: {
  //       [ChainId.BSC]: 0,
  //       [ChainId.BSC_TESTNET]: 7,
  //     },
  //     address: {
  //       [ChainId.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
  //     },
  //     rewardsPerBlock: {
  //       [ChainId.BSC_TESTNET]: 'cakePerBlock',
  //     },
  //     rewardToken: tokens.banana,
  //   },
  // },

  // {
  //   id: 1001,
  //   pid: 1,
  //   availableChains: [ChainId.BSC_TESTNET],
  //   type: 'MAX',
  //   version: VaultVersion.V2,
  //   stratAddress: {
  //     [ChainId.BSC_TESTNET]: '0x60ddD0e76a958Ba341aD677eAd713Af5Ef447D9d',
  //   },
  //   stakeToken: tokens.forEver,
  //   token: tokens.for,
  //   quoteToken: tokens.ever,
  //   rewardToken: tokens.banana,
  //   platform: 'ApeSwap',
  //   masterchef: {
  //     pid: {
  //       [ChainId.BSC]: 0,
  //       [ChainId.BSC_TESTNET]: 8,
  //     },
  //     address: {
  //       [ChainId.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
  //     },
  //     rewardsPerBlock: {
  //       [ChainId.BSC_TESTNET]: 'cakePerBlock',
  //     },
  //     rewardToken: tokens.banana,
  //   },
  // },
]

export default vaults
