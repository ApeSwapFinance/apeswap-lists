import { Token } from './types'
import tokens from './tokens'

const zapInputTokens: Record<string, Token> = {
  wbnb: tokens.wbnb,
  eth: tokens.eth,
  busd: tokens.busd,
  usdc: tokens.usdc,
  usdt: tokens.usdt,
  dai: tokens.dai,
  wmatic: tokens.wmatic,
  avax: tokens.avax,
  ada: tokens.ada,
  btc: tokens.btc,
}

export default zapInputTokens
