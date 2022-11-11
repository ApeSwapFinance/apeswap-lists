import { ChainId } from '@ape.swap/sdk'
import { FarmConfig, QuoteToken } from './types'
import tokens from './tokens'

const farmsV2: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: tokens.bananaBusd.symbol,
    lpAddresses: {
      [ChainId.BSC_TESTNET]: tokens.bananaBusd.address[ChainId.BSC],
      [ChainId.BSC]: '',
    },
    tokenSymbol: tokens.banana.symbol,
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '',
      [ChainId.BSC]: tokens.banana.address[ChainId.BSC],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
  {
    pid: 1,
    lpSymbol: tokens.bnbBusd.symbol,
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '',
      [ChainId.BSC]: tokens.bnbBusd.address[ChainId.BSC],
    },
    tokenSymbol: tokens.wbnb.symbol,
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '',
      [ChainId.BSC]: tokens.wbnb.address[ChainId.BSC],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
]

export default farmsV2
