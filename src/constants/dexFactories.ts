import { ChainId, LiquidityDex, Protocols } from '../types'

export const dexFactories: Partial<
  Record<ChainId, Partial<Record<LiquidityDex, { factory: string; router?: string; protocol: Protocols }>>>
> = {
  [ChainId.MAINNET]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV2]: {
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: Protocols.V3,
    },
    [LiquidityDex.PancakeSwapV2]: {
      factory: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
      protocol: Protocols.V2,
    },
  },
  [ChainId.BSC]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
      protocol: Protocols.V2,
    },
    [LiquidityDex.PancakeSwapV2]: {
      factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
      protocol: Protocols.V2,
    },
    [LiquidityDex.ApeSwapV3]: {
      factory: '0x7Bc382DdC5928964D7af60e7e2f6299A1eA6F48d',
      protocol: Protocols.V3,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
      protocol: Protocols.V3,
    },
    [LiquidityDex.PancakeSwapV3]: {
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x306F06C147f064A010530292A1EB6737c3e378e4', //Thena
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.ThenaV1]: {
      factory: '0xAFD89d21BdB66d00817d4153E055830B1c2B3970', //ThenaV1
      protocol: Protocols.Solidly,
      router: '0xd4ae6eCA985340Dd434D38F470aCCce4DC78D109',
    },
  },
  [ChainId.MATIC]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xcf083be4164828f00cae704ec15a36d711491284',
      protocol: Protocols.V2,
    },
    [LiquidityDex.QuickswapV2]: {
      factory: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x411b0facc3489691f28ad58c47006af5e3ab3a28', //Quickswap
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.SushiSwapV3]: {
      factory: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
      protocol: Protocols.V3,
    },
  },
  [ChainId.ARBITRUM]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xCf083Be4164828f00cAE704EC15a36D711491284',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x9C2ABD632771b433E5E7507BcaA41cA3b25D8544', //Zyberswap
      protocol: Protocols.Algebra,
    },
  },
  [ChainId.LINEA]: {
    [LiquidityDex.Spartadex]: {
      factory: '0x9E4Fc4a5A0769ba74088856C229c4a1Db2Ea5A9e',
      protocol: Protocols.V2,
    },
    [LiquidityDex.Nile]: {
      factory: '0xAAA16c016BF556fcD620328f0759252E29b1AB57', //I've changed it
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x622b2c98123D303ae067DB4925CD6282B3A08D0F', //Lynex
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.Lynex]: {
      factory: '0xBc7695Fd00E3b32D08124b7a4287493aEE99f9ee',
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.XFAI]: {
      factory: '0xa5136eAd459F0E61C99Cec70fe8F5C24cF3ecA26',
      protocol: Protocols.XFAI,
    },
    [LiquidityDex.Metavault]: {
      factory: '0x9367c561915f9D062aFE3b57B18e30dEC62b8488',
      protocol: Protocols.V3,
    },
  },
  [ChainId.LIGHTLINK]: {
    [LiquidityDex.Elektrik]: {
      factory: '0xEE6099234bbdC793a43676D98Eb6B589ca7112D7',
      protocol: Protocols.V3,
    },
  },
  [ChainId.BASE]: {
    [LiquidityDex.Synthswap]: {
      factory: '0x4bd16d59A5E1E0DB903F724aa9d721a31d7D720D',
      protocol: Protocols.V2,
    },
    [LiquidityDex.Algebra]: {
      factory: '0xa37359E63D1aa44C0ACb2a4605D3B45785C97eE3', // Synthswap
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Aerodrome]: {
      factory: '0x420DD381b31aEf6683db6B902084cB0FFECe40Da',
      router: '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43',
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.SmarDex]: {
      factory: '0xdd4536dD9636564D891c919416880a3e250f975A',
      protocol: Protocols.V2, //SmarDex is not actually a V2. Way of calculating price is similar though
    },
    [LiquidityDex.UniswapV2]: {
      factory: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
      router: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
      protocol: Protocols.V2,
    },
  },
}

export const defaultDexFactories: Partial<Record<ChainId, Partial<Record<Protocols, string>>>> = {
  [ChainId.MAINNET]: {
    [Protocols.V2]: dexFactories[ChainId.MAINNET]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.MAINNET]?.UniswapV3?.factory,
  },
  [ChainId.BSC]: {
    [Protocols.V2]: dexFactories[ChainId.BSC]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.BSC]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.BSC]?.Algebra?.factory,
    [Protocols.Solidly]: dexFactories[ChainId.BSC]?.ThenaV1?.factory,
  },
  [ChainId.MATIC]: {
    [Protocols.V2]: dexFactories[ChainId.MATIC]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.MATIC]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.MATIC]?.Algebra?.factory,
  },
  [ChainId.ARBITRUM]: {
    [Protocols.V2]: dexFactories[ChainId.ARBITRUM]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.ARBITRUM]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.ARBITRUM]?.Algebra?.factory,
  },
  [ChainId.LINEA]: {
    [Protocols.V2]: dexFactories[ChainId.LINEA]?.Spartadex?.factory,
    [Protocols.V3]: dexFactories[ChainId.LINEA]?.Nile?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.LINEA]?.Algebra?.factory,
    [Protocols.Solidly]: dexFactories[ChainId.LINEA]?.Lynex?.factory,
    [Protocols.XFAI]: dexFactories[ChainId.LINEA]?.XFAI?.factory,
  },
  [ChainId.LIGHTLINK]: {
    [Protocols.V3]: dexFactories[ChainId.LIGHTLINK]?.Elektrik?.factory,
  },
  [ChainId.BASE]: {
    [Protocols.V2]: dexFactories[ChainId.BASE]?.SmarDex?.factory,
    [Protocols.V3]: dexFactories[ChainId.BASE]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.BASE]?.Algebra?.factory,
    [Protocols.Solidly]: dexFactories[ChainId.BASE]?.Aerodrome?.factory,
  },
}
