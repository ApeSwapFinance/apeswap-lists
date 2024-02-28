import { LiquidityDex } from '../types'

export const dexDisplayAttributes: Record<LiquidityDex, { icon: string; tag: string }> = {
  [LiquidityDex.ApeSwapV2]: {
    icon: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/APE-LP.svg',
    tag: 'APESWAP LP',
  },
  [LiquidityDex.Algebra]: {
    icon: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/QUICK.png',
    tag: 'QUICKSWAP GAMMA LP',
  },
  [LiquidityDex.PancakeSwapV2]: {
    icon: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CAKE.png',
    tag: 'PANCAKE LP',
  },
  [LiquidityDex.QuickswapV2]: {
    icon: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/QUICK.png',
    tag: 'QUICKSWAP LP',
  },
  [LiquidityDex.ApeSwapV3]: {
    icon: '',
    tag: '',
  },
  [LiquidityDex.UniswapV3]: {
    icon: '',
    tag: '',
  },
  [LiquidityDex.ThenaV1]: {
    icon: '',
    tag: '',
  },
  [LiquidityDex.UniswapV2]: {
    icon: '',
    tag: '',
  },
  [LiquidityDex.PancakeSwapV3]: {
    icon: '',
    tag: '',
  },
  [LiquidityDex.External]: {
    icon: '',
    tag: '',
  },
}
