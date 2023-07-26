import { LiquidityDex } from '../types'
import { ChainId } from '@ape.swap/sdk'

export const zapContracts: Partial<Record<ChainId, Partial<Record<LiquidityDex, string>>>> = {
  [ChainId.BSC]: {
    [LiquidityDex.ApeSwapV2]: '0x7E060D0e0563fbD4CD2b3B845a992Eab31e47f8b',
    [LiquidityDex.PancakeSwapV2]: '0xB291bE87A7C4ECe8C94F908447B4C5b45C0e19dF',
  },
  [ChainId.BSC_TESTNET]: {
    [LiquidityDex.ApeSwapV2]: '0xEe0e3270d2C62AC598E435212a5f87A431e4dDcF',
  },
  [ChainId.MATIC]: {
    // aka Polygon
    [LiquidityDex.ApeSwapV2]: '0x236290f7da54465BF7A26f279d2B3553e5402780',
  },
  [ChainId.MATIC_TESTNET]: {
    // aka Polygon Mumbai
    [LiquidityDex.ApeSwapV2]: '',
  },
  [ChainId.TLOS]: {
    [LiquidityDex.ApeSwapV2]: '0x10614e4395AAc006ca0Ef4970d1412e8e921d911',
  },
  [ChainId.ARBITRUM]: {
    [LiquidityDex.ApeSwapV2]: '',
  },
}
