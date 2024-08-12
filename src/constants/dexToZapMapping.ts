import { ChainId, LiquidityDex, ZapVersion } from '../types'

export const dexToZapMapping: Record<LiquidityDex, Partial<Record<ChainId, ZapVersion>>> = {
  [LiquidityDex.ApeSwapV2]: {
    [ChainId.BSC]: ZapVersion.SoulZap,
    [ChainId.BSC_TESTNET]: ZapVersion.ZapV1,
    [ChainId.MATIC]: ZapVersion.ZapV1,
    [ChainId.MATIC_TESTNET]: ZapVersion.ZapV1,
    [ChainId.MAINNET]: ZapVersion.ZapV1,
    [ChainId.ARBITRUM]: ZapVersion.External,
    [ChainId.TLOS]: ZapVersion.ZapV1,
  },
  [LiquidityDex.Algebra]: {
    [ChainId.BSC]: ZapVersion.SoulZapApi,
    [ChainId.MATIC]: ZapVersion.SoulZapApi,
    [ChainId.LINEA]: ZapVersion.SoulZapApi,
    [ChainId.ARBITRUM]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.PancakeSwapV2]: {
    [ChainId.BSC]: ZapVersion.SoulZap,
    [ChainId.MAINNET]: ZapVersion.External,
  },
  [LiquidityDex.QuickswapV2]: {
    [ChainId.MATIC]: ZapVersion.SoulZap,
  },
  [LiquidityDex.ApeSwapV3]: {},
  [LiquidityDex.UniswapV3]: {},
  [LiquidityDex.ThenaV1]: { [ChainId.BSC]: ZapVersion.SoulZapApi },
  [LiquidityDex.UniswapV2]: {
    [ChainId.BASE]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.PancakeSwapV3]: {},
  [LiquidityDex.External]: {},
  [LiquidityDex.Spartadex]: {},
  [LiquidityDex.Nile]: {},
  [LiquidityDex.XFAI]: {},
  [LiquidityDex.Lynex]: {},
  [LiquidityDex.Metavault]: {},
  [LiquidityDex.Elektrik]: {},
  [LiquidityDex.SushiSwapV3]: {},
  [LiquidityDex.Synthswap]: {},
  [LiquidityDex.Aerodrome]: {
    [ChainId.BASE]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.SmarDex]: {},
  [LiquidityDex.MagicSea]: {
    [ChainId.IOTA]: ZapVersion.External,
  },
}
