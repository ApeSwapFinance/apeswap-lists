import { ChainId } from '@apeswapfinance/sdk'
import tokens from './tokens'
import { BillsConfig } from './types'

// TODO: Add project links

const bills: BillsConfig[] = [
  {
    index: 12,
    contractAddress: {
      [ChainId.BSC]: '0x3f02ce456b9da36352439fbd1897c2233a77e46f',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.radar,
    quoteToken: tokens.wbnb,
    lpToken: tokens.radarBnb,
    earnToken: tokens.radar,
    projectLink: 'https://dappradar.com/',
    twitter: 'https://twitter.com/DappRadar/',
  },
  {
    index: 5,
    contractAddress: {
      [ChainId.BSC]: '0x1c36913ca7c64365a54694cd91dde9c7cf5e44ec',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
    lpToken: tokens.ceekBnb,
    earnToken: tokens.ceek,
    projectLink: 'https://ceek.com/',
    twitter: 'https://twitter.com/CEEK/',
  },
  {
    index: 6,
    contractAddress: {
      [ChainId.BSC]: '0xd9e18fae215f10f4ce35a24fcbfe944fbfb96643',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.nfty,
    quoteToken: tokens.wbnb,
    lpToken: tokens.nftyBnb,
    earnToken: tokens.nfty,
    projectLink: 'https://nftynetwork.io/',
    twitter: 'https://twitter.com/NFTYLab',
  },
  {
    index: 7,
    contractAddress: {
      [ChainId.BSC]: '0xda0149da023cb204b3ffba33a88d9dd19393c6fc',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    inactive: true,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 8,
    contractAddress: {
      [ChainId.BSC]: '0xaf3016100f67c66af15c973cb8da94962653a726',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.stars,
    quoteToken: tokens.wbnb,
    lpToken: tokens.starsBnb,
    earnToken: tokens.stars,
    projectLink: 'https://www.mogulproductions.com/',
    twitter: 'https://twitter.com/mogulofficial_',
  },
  {
    index: 9,
    contractAddress: {
      [ChainId.BSC]: '0x6a5be77e3fc1c99ef4aae2846432d61fa78a564c',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
    projectLink: 'https://hotcross.com/',
    twitter: 'https://twitter.com/hotcrosscom',
  },
  {
    index: 10,
    contractAddress: {
      [ChainId.BSC]: '0xb5fd0ac23267da501fc6c59c6e12ae32831e72bb',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
    projectLink: 'https://hotcross.com/',
    twitter: 'https://twitter.com/hotcrosscom',
  },
  {
    index: 11,
    contractAddress: {
      [ChainId.BSC]: '0x4a3adf34b1f8830fb8d673477d52fa5cb91a2531',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    projectLink: 'https://www.telos.net/',
    twitter: 'https://twitter.com/HelloTelos',
  },
  {
    index: 0,
    contractAddress: {
      [ChainId.BSC]: '0x8b57Fc5BE65118188D50d42fcD5614e447F7FAbE',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 1,
    contractAddress: {
      [ChainId.BSC]: '0x4925AcdE0E885170801A74DEBcC8fbA91F3aE29b',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 2,
    contractAddress: {
      [ChainId.BSC]: '0xca1612f66292398a5df0ecadd98bb81dc264349d',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 3,
    contractAddress: {
      [ChainId.BSC]: '0xb2d516086BFc978950e40D2739c72125415441a8',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
  {
    index: 4,
    contractAddress: {
      [ChainId.BSC]: '0xBD9959320cbbC69b2eF7d07fb3f9870cceaeB44f',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
  },
]

export default bills
