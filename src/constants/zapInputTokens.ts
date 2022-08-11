import { Token } from './types'
import { ChainId } from '@apeswapfinance/sdk'
import tokens from './tokens'

const zapInputTokens: Record<string, Token> = {
  wbnb: {
    symbol: 'BNB',
    address: {
      [ChainId.BSC]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      [ChainId.MATIC]: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: 18,
    active: true,
  },
  eth: {
    symbol: 'ETH',
    address: {
      [ChainId.BSC]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      [ChainId.MATIC]: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378',
    },
    decimals: 18,
    active: true,
  },
  busd: {
    symbol: 'BUSD',
    address: {
      [ChainId.BSC]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    },
    decimals: 18,
    active: true,
  },
  usdc: {
    symbol: 'USDC',
    address: {
      [ChainId.BSC]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      [ChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  usdt: {
    symbol: 'USDT',
    address: {
      [ChainId.BSC]: '0x55d398326f99059ff775485246999027b3197955',
      [ChainId.MATIC]: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  dai: {
    symbol: 'DAI',
    address: {
      [ChainId.BSC]: '',
      [ChainId.MATIC]: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  wmatic: {
    symbol: 'MATIC',
    address: {
      [ChainId.BSC]: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
      [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  avax: {
    symbol: 'AVAX',
    address: {
      [ChainId.BSC]: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  ada: {
    symbol: 'ADA',
    address: {
      [ChainId.BSC]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  btc: {
    symbol: 'BTC',
    address: {
      [ChainId.BSC]: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      [ChainId.MATIC]: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8',
    },
    decimals: 18,
    active: true,
  },
}

export default zapInputTokens
