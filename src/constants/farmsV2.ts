import { ChainId } from '@ape.swap/sdk'
import { FarmConfig, QuoteToken } from '../types'
import tokens from './tokens'

const farmsV2: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: tokens.banana.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.banana.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.banana.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.banana.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.banana.address,
  },
  {
    pid: 6,
    lpSymbol: tokens.bananaBnb.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.bananaBnb.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.banana.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.banana.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 7,
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
    pid: 8,
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
  {
    pid: 9,
    lpSymbol: tokens.bnbBtc.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.bnbBtc.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.btc.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.btc.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 10,
    lpSymbol: tokens.bnbEth.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.bnbEth.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.eth.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.eth.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 11,
    image: '',
    lpSymbol: 'BUSD-USDC',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BUSD-USDC BananaPair
      [ChainId.BSC]: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC Token address
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
  {
    pid: 12,
    image: 'BIFI.png',
    lpSymbol: 'BIFI-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xddd3f9d5bd347c55d18752c0c2075698ec657750', // BIFI-BNB BananaPair
    },
    tokenSymbol: 'BIFI',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A', // BIFI Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://www.beefy.finance/',
  },
  {
    pid: 13,
    image: '',
    lpSymbol: 'SUSHI-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BNB-SUSHI BananaPair
      [ChainId.BSC]: '0x1D0C3044eBf055986c52D38b19B5369374E6Bc6A',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://app.sushi.com/',
  },
  {
    pid: 14,
    image: '',
    lpSymbol: 'ADA-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1', // ADA-BNB BananaPair
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://cardano.org/',
  },
  {
    pid: 15,
    image: '',
    lpSymbol: 'ADA-ETH',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // ADA-ETH BananaPair
      [ChainId.BSC]: '0x61FE209E404166a53Cc627d0ae30A65606315dA7',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: tokens.eth.address,
    projectLink: 'https://cardano.org/',
  },
  {
    pid: 16,
    image: '',
    lpSymbol: 'IOTA-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x0D70924695B6Ae496F0A74A36bf79d47307dD519', // IOTA-BNB BananaPair
    },
    tokenSymbol: 'IOTA',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://www.iota.org/',
  },
  {
    pid: 17,
    image: '',
    lpSymbol: 'DOT-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef', // DOT-BNB BananaPair
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', // DOT Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://polkadot.network/',
  },
  {
    pid: 18,
    image: '',
    lpSymbol: 'BUSD-USDT',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x2e707261d086687470b515b320478eb1c88d49bb', // BUSD-USDT BananaPair
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x55d398326f99059ff775485246999027b3197955', // USDT Token
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
  {
    pid: 19,
    image: '',
    lpSymbol: 'LINK-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x092ada3818db7fbb8e0a2124ff218c5125c1cce6', // LINK-BNB BananaPair
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', // LINK Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://chain.link/',
  },
  {
    pid: 20,
    image: '',
    lpSymbol: 'DOGE-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xfd1ef328a17a8e8eeaf7e4ea1ed8a108e1f2d096', // DOGE-BNB BananaPair
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // DOGE Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://dogecoin.com/',
  },
  {
    pid: 21,
    image: '',
    lpSymbol: 'LTC-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x0f12362c017fe5101c7bba09390f1cb729f5b318', // LTC-BNB BananaPair
    },
    tokenSymbol: 'LTC',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', // LTC Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://litecoin.org/',
  },
  {
    pid: 22,
    image: '',
    lpSymbol: 'MATIC-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x29A4A3D77c010CE100A45831BF7e798f0f0B325D', // MATIC-BNB BananaPair
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd', // MATIC Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://polygon.technology/',
  },
  {
    pid: 23,
    image: '',
    lpSymbol: 'AAVE-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xf13e007e181A8F57eD3a4D4CcE0A9ff9E7241CEf', // AAVE-BNB BananaPair
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xfb6115445bff7b52feb98650c87f44907e58f802', // AAVE Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://aave.com/',
  },
  {
    pid: 24,
    image: '',
    lpSymbol: 'COMP-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xb4c0c621B2eDfE6C22585ebAC56b0e634907B8A7', // COMP-BNB BananaPair
    },
    tokenSymbol: 'COMP',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8', // COMP Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://compound.finance/',
  },
  {
    pid: 25,
    image: '',
    lpSymbol: 'FTM-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x47A0B7bA18Bb80E4888ca2576c2d34BE290772a6', // FTM-BNB BananaPair
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xad29abb318791d579433d831ed122afeaf29dcfe', // FTM Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://fantom.foundation/',
  },
  {
    pid: 26,
    image: 'AVAX.png',
    lpSymbol: 'AVAX-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x40afc7cbd0dc2be5860f0035b717d20afb4827b2', // AVAX-BNB BananaPair
    },
    tokenSymbol: 'AVAX',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041', // AVAX Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://www.avalabs.org/',
  },
  {
    pid: 27,
    image: 'ZEC.png',
    lpSymbol: 'ZEC-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x2B2C771e44aF4C6f858598308e05FB89b23f11cE', // ZEC-BNB BananaPair
    },
    tokenSymbol: 'ZEC',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb', // ZEC Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://z.cash/',
  },
  {
    pid: 28,
    image: '',
    lpSymbol: 'COTI-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xacfdcf0486adc2421aac3ffc0923b9c56faebc47', // COTI-BNB BananaPair
    },
    tokenSymbol: 'COTI',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xadbaf88b39d37dc68775ed1541f1bf83a5a45feb', // COTI Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://coti.io/',
  },
  {
    pid: 29,
    image: 'NEAR.png',
    lpSymbol: 'NEAR-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xb75724635a6cda850f08b578f23a568cedba099d', // NEAR-BNB BananaPair
    },
    tokenSymbol: 'NEAR',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63', // NEAR Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://near.org/',
  },
  {
    pid: 30,
    image: 'SHIB.png',
    lpSymbol: 'SHIB-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xc0afb6078981629f7eae4f2ae93b6dbea9d7a7e9', // SHIBA-BNB BananaPair
    },
    tokenSymbol: 'SHIB',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x2859e4544c4bb03966803b044a93563bd2d0dd4d', // SHIBA Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://shibatoken.com/',
  },
  {
    pid: 31,
    image: '',
    lpSymbol: 'SKILL-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x0deb588c1ec6f1d9f348126d401f05c4c7b7a80c',
    },
    tokenSymbol: 'SKILL',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://www.cryptoblades.io/',
  },
  {
    pid: 32,
    image: 'TWT.png',
    lpSymbol: 'TWT-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x4c48d692e3de076c7b844b956b28cdd1dd5c0945',
    },
    tokenSymbol: 'TWT',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://trustwallet.com/',
  },
  {
    pid: 33,
    image: '',
    lpSymbol: 'PACOCA-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x0fee6e1e55fa772fae71e6734a7f9e8622900d75',
    },
    tokenSymbol: 'PACOCA',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x55671114d774ee99d653d6c12460c780a67f1d18',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://pacoca.io',
  },
  {
    pid: 34,
    image: '',
    lpSymbol: 'LAND-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xB15f34082Baa4E3515A49E05D4d1D40cE933da0b',
    },
    tokenSymbol: 'LAND',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x9d986a3f147212327dd658f712d5264a73a1fdb0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://landshare.io/',
  },
  {
    pid: 35,
    image: '',
    lpSymbol: 'HOTCROSS-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x3b9aa711d1d90a4f8639f66c227881729a3317f2',
    },
    tokenSymbol: 'HOTCROSS',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x4fa7163e153419e0e1064e418dd7a99314ed27b6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://hotcross.com/',
  },
  {
    pid: 36,
    image: 'CEEK.png',
    lpSymbol: 'CEEK-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x119d6ebe840966c9cf4ff6603e76208d30ba2179',
    },
    tokenSymbol: 'CEEK',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://ceek.io/',
  },
  {
    pid: 37,
    image: 'DEP.png',
    lpSymbol: 'DEP-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x6518709dC42F70Dbf89934cA382F1d9dB26370e8',
    },
    tokenSymbol: 'DEP',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xcaF5191fc480F43e4DF80106c7695ECA56E48B18',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://dea.sg/',
  },
  {
    pid: 38,
    image: 'NFTY.png',
    lpSymbol: 'NFTY-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x884be30e2c95b9cfed614ad2b5edf40af2a144ad',
    },
    tokenSymbol: 'NFTY',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x5774b2fc3e91af89f89141eacf76545e74265982',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://nftynetwork.io/',
  },
  {
    pid: 39,
    image: '',
    lpSymbol: 'PROS-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x8205a8b42ee0bfdab43af3c971d97e150a1e48ae',
    },
    tokenSymbol: 'PROS',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xed8c8aa8299c10f067496bb66f8cc7fb338a3405',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://prosper.so/',
  },
  {
    pid: 40,
    image: '',
    lpSymbol: 'FIL-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xcaec8648dbac41b6504a8e408892931796d67d87',
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://filecoin.io/',
  },
  {
    pid: 41,
    image: '',
    lpSymbol: 'TOWER-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x1b332e08f0957d43ff8c2760bf49af8d3798959d',
    },
    tokenSymbol: 'TOWER',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xe7c9c6bc87b86f9e5b57072f907ee6460b593924',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://www.crazydefenseheroes.com/',
  },
  {
    pid: 42,
    image: 'FRAX.svg',
    lpSymbol: 'FRAX-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x5292600758A090490D34367d4864ed6291D254fe',
    },
    tokenSymbol: 'FRAX',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://frax.finance/',
  },
  {
    pid: 43,
    image: 'QUIDD.svg',
    lpSymbol: 'QUIDD-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x813cf14699a230185eada5266b18403d77593e12',
    },
    tokenSymbol: 'QUIDD',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://market.onquidd.com/',
  },
  {
    pid: 44,
    image: 'DOSE.svg',
    lpSymbol: 'DOSE-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xB69d0311dDff8EAc8AA9B426Ff2b7F8eE73bEe15',
    },
    tokenSymbol: 'DOSE',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x7837fd820bA38f95c54D6dAC4ca3751b81511357',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://dosetoken.com/',
  },
  {
    pid: 45,
    image: 'GMR2.svg',
    lpSymbol: 'GMR-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x5ff97410ff9bdb715b7b283828796dd0ad7a884a',
    },
    tokenSymbol: 'GMR',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xADCa52302e0a6c2d5D68EDCdB4Ac75DeB5466884',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://gmr.center/',
  },
  {
    pid: 46,
    image: 'ANML.png',
    lpSymbol: 'ANML-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x0ab82ec81c80f75b02a117fba9b414c17379ae8c',
    },
    tokenSymbol: 'ANML',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x06fda0758c17416726f77cb11305eac94c074ec0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://animalconcerts.com/',
  },
  {
    pid: 47,
    image: 'BOUNTIE.png',
    lpSymbol: 'BOUNTIE-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x1eE428e29AE776EEB9ADEf13d0bCeb6825c2b93b',
    },
    tokenSymbol: 'BOUNTIE',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x00f80a8f39bb4D04a3038C497E3642bf1B0A304e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://bountiehunter.io/',
  },
  {
    pid: 48,
    image: 'CPO.svg',
    lpSymbol: 'CPO-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x56def80e01dfd3ff1bfcb41bbdc380887d56d946',
    },
    tokenSymbol: 'CPO',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xea395DFaFEd39924988b475f2Ca7f4C72655203A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://cryptopolisgame.com/',
  },
  {
    pid: 49,
    image: 'FROYO.png',
    lpSymbol: 'FROYO-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x58ceF3eeDB9A4adc6B5a2Ee5c85Aea07D72787f0',
    },
    tokenSymbol: 'FROYO',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://froyo.games/home',
  },
  {
    pid: 50,
    image: 'PRIMATE.png',
    lpSymbol: 'PRIMATE-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x6acabA892562719085C8418EbA49b8B3475D995a',
    },
    tokenSymbol: 'PRIMATE',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xA19863E302FD1B41276fCe5A48D9C511DBeEf34c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://www.benjibananas.com/',
  },
  {
    pid: 51,
    image: 'ROOBEE.svg',
    lpSymbol: 'ROOBEE-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x9b35AeDD22E0Ad5e456557C17FE7B5DEa863F385',
    },
    tokenSymbol: 'ROOBEE',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xF77351D8f4eE853135961A936BB8d2e4fFa75f9D',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://roobee.io/',
  },
  {
    pid: 52,
    image: 'TLOS.svg',
    lpSymbol: 'TLOS-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x4D90DDC0A30968c4c6B1eD0535B0264E75A3C5f3',
    },
    tokenSymbol: 'TLOS',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xb6C53431608E626AC81a9776ac3e999c5556717c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://www.telos.net/',
  },
  {
    pid: 53,
    image: 'RADAR.png',
    lpSymbol: 'RADAR-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xe6fF591f818664865eCab584B1fe679DbB4904dB',
    },
    tokenSymbol: 'RADAR',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x489580eB70a50515296eF31E8179fF3e77E24965',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://dappradar.com/',
  },
  {
    pid: 54,
    image: 'H2ON.svg',
    lpSymbol: 'H2ON-USDT',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x7eb5c98f368e42f8d560d3f561f159eb4c2f4974',
    },
    tokenSymbol: 'H2ON',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xe0e81c29a68bfdd7c48072fd94e7c58f1f0146c1',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: tokens.usdt.address,
    projectLink: 'https://h2o-securities.com/',
  },
  {
    pid: 55,
    image: 'HEC.svg',
    lpSymbol: 'HEC-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xC0687a3cF463f3be0B021d6F41551584D124d9C5',
    },
    tokenSymbol: 'HEC',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x638EEBe886B0e9e7C6929E69490064a6C94d204d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://hector.network/',
  },
  {
    pid: 56,
    image: 'TOR.svg',
    lpSymbol: 'TOR-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x8B343c2Ba35d218111d56799F83EdfC3066faA2C',
    },
    tokenSymbol: 'TOR',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x1d6Cbdc6b29C6afBae65444a1f65bA9252b8CA83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://hector.network/',
  },
  {
    pid: 57,
    image: 'MHUNT.svg',
    lpSymbol: 'MHUNT-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xFBf322C7459AD405109e4ECC907559843571C782',
    },
    tokenSymbol: 'MHUNT',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x2c717059b366714d267039af8f59125cadce6d8c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://metashooter.gg/',
  },
  {
    pid: 58,
    image: 'BLID.svg',
    lpSymbol: 'BLID-USDT',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xc403a4b51d824eeb3f076bcaf4416dbbfde2016b',
    },
    tokenSymbol: 'BLID',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x766AFcf83Fd5eaf884B3d529b432CA27A6d84617',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: tokens.usdt.address,
    projectLink: 'https://bolide.fi/',
  },
  {
    pid: 59,
    image: 'SD.svg',
    lpSymbol: 'SD-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x867EB519b05d9C4798B2EdE0B11197274dfDFcC0',
    },
    tokenSymbol: 'SD',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://staderlabs.com/',
  },
  {
    pid: 60,
    image: 'PSTN.svg',
    lpSymbol: 'PSTN-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x57FA15D373cBBD3141A13f8baB10c380aC2B14D5',
    },
    tokenSymbol: 'PSTN',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xBfACD29427fF376FF3BC22dfFB29866277cA5Fb4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
    projectLink: 'https://piston-token.com/swap',
  },
  {
    pid: 61,
    image: 'CHRP.svg',
    lpSymbol: 'CHRP-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xcD10d0173651d1B3bd027DEcDBA007998bb03eaf',
    },
    tokenSymbol: 'CHRP',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xeD00Fc7D48B57B81FE65D1cE71c0985e4CF442CB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://chirpley.ai',
  },
  {
    pid: 62,
    image: '3AIR.svg',
    lpSymbol: '3AIR-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0xfdf84a54b35e06e4c3852ae35f10b7f38488204a',
    },
    tokenSymbol: '3AIR',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0x596834746B5b78F31A089EE7853fa595682824B7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
    projectLink: 'https://3air.io/',
  },
  {
    pid: 63,
    image: 'FRUIT.svg',
    lpSymbol: 'FRUIT-ETH',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      [ChainId.BSC]: '0x154c7293b0a705aa5723e698514514cbb5a19238',
    },
    tokenSymbol: 'FRUIT',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xadd14ca8e026c4555933d12b568b1310968503a2',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: tokens.eth.address,
    projectLink: 'https://cryptofruits.com/index.php',
  },
]

export default farmsV2
