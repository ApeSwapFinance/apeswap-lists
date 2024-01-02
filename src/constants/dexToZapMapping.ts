import { ChainId } from '@ape.swap/sdk'
import { LiquidityDex, ZapVersion } from '../types'

export const dexToZapMapping: Record<LiquidityDex, Partial<Record<ChainId, ZapVersion>>> = {
  [LiquidityDex.ApeSwapV2]: {
    [ChainId.BSC]: ZapVersion.ZapV1,
    [ChainId.BSC_TESTNET]: ZapVersion.ZapV1,
    [ChainId.MATIC]: ZapVersion.ZapV1,
    [ChainId.MATIC_TESTNET]: ZapVersion.ZapV1,
    [ChainId.MAINNET]: ZapVersion.ZapV1,
    [ChainId.ARBITRUM]: ZapVersion.External,
    [ChainId.TLOS]: ZapVersion.ZapV1,
  },
  [LiquidityDex.Algebra]: {
    [ChainId.MATIC]: ZapVersion.External,
  },
  [LiquidityDex.PancakeSwapV2]: {
    [ChainId.BSC]: ZapVersion.External,
    [ChainId.MAINNET]: ZapVersion.External,
  },
  [LiquidityDex.QuickswapV2]: {
    [ChainId.MATIC]: ZapVersion.SoulZap,
  },
  [LiquidityDex.ApeSwapV3]: {},
  [LiquidityDex.PancakeSwapV3]: {},
  [LiquidityDex.UniswapV3]: {},
  [LiquidityDex.ThenaV1]: {},
  [LiquidityDex.UniswapV2]: {},
}
