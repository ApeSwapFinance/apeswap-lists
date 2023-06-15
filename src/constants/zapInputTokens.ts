import { Token } from '../types'
import tokens from './tokens'
import { ChainId } from '@ape.swap/sdk'

const zapInputTokens: Partial<Record<ChainId, Record<string, Token>>> = {
  [ChainId.BSC]: {
    eth: tokens.eth,
    busd: tokens.busd,
    usdc: tokens.usdc,
    usdt: tokens.usdt,
    dai: tokens.dai,
    wmatic: tokens.wmatic,
    avax: tokens.avax,
    ada: tokens.ada,
    btc: tokens.btc,
  },
  [ChainId.MATIC]: {
    dai: tokens.dai,
    eth: tokens.eth,
    usdc: tokens.usdc,
    usdt: tokens.usdt,
  },
  [ChainId.TLOS]: {
    eth: tokens.eth,
    usdc: tokens.usdc,
    usdt: tokens.usdt,
    btc: tokens.btc,
  },
  [ChainId.ARBITRUM]: {
    usdt: tokens.usdt,
    usdc: tokens.usdc,
  },
}

export default zapInputTokens
