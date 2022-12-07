import { ChainId } from '@ape.swap/sdk'
import { FarmConfig, QuoteToken } from './types'
import tokens from './tokens'

const farmsV2: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: tokens.farmAway.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.farmAway.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.farmAway.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.farmAway.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.farmAway.address,
  },
  {
    pid: 1,
    lpSymbol: tokens.bananaBusd.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.bananaBusd.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.banana.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.banana.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
  {
    pid: 2,
    lpSymbol: tokens.bnbBusd.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.bnbBusd.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.wbnb.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.wbnb.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
]

export default farmsV2