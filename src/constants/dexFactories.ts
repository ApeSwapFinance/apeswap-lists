import { ChainId } from '@ape.swap/sdk'
import { LiquidityDex, Protocols } from '../types'

export const dexFactories: Partial<
  Record<ChainId, Partial<Record<LiquidityDex, { factory: string; protocol: Protocols }>>>
> = {
  [ChainId.MAINNET]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
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
    [LiquidityDex.Algebra]: {
      factory: '0x306F06C147f064A010530292A1EB6737c3e378e4', //Thena
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.ThenaV1]: {
      factory: '0xAFD89d21BdB66d00817d4153E055830B1c2B3970', //ThenaV1
      protocol: Protocols.Solidly,
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
}

export const defaultDexFactories: Partial<Record<ChainId, Partial<Record<Protocols, string>>>> = {
  [ChainId.MAINNET]: {
    [Protocols.V2]: dexFactories[ChainId.MAINNET]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.MAINNET]?.UniswapV3?.factory,
  },
  [ChainId.BSC]: {
    [Protocols.V2]: dexFactories[ChainId.BSC]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.BSC]?.ApeSwapV3?.factory,
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
}
