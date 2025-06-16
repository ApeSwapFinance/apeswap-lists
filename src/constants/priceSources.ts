import { ChainId } from '../types/index'

//Price API Sources
enum PriceSource {
  Dex = 'dex',
  Coingecko = 'coingecko',
  Dexscreener = 'dexscreener',
  Mexc = 'mexc',
  LBank = 'lbank',
  Bitmart = 'bitmart',
  Fixed = 'fixed', // Mostly for testing
}

type BasePriceSourceConfig = {
  name: string
  symbol: string
  decimals: number
  tokenAddress: string
}

type CoinGeckoPriceSourceConfig = BasePriceSourceConfig & {
  source: PriceSource.Coingecko
  id: string
}

type DexScreenerPriceSourceConfig = BasePriceSourceConfig & {
  source: PriceSource.Dexscreener
  type: 'token' | 'pair'
  targetChain?: ChainId
  originalTokenAddress?: string
}

type MexcPriceSourceConfig = BasePriceSourceConfig & {
  source: PriceSource.Mexc
  id: string
}

type LBankPriceSourceConfig = BasePriceSourceConfig & {
  source: PriceSource.LBank
  id: string
}

type BitmartPriceSourceConfig = BasePriceSourceConfig & {
  source: PriceSource.Bitmart
  id: string
}

type FixedPriceSourceConfig = BasePriceSourceConfig & {
  source: PriceSource.Fixed
  price: number
}

type PriceSourceConfigs =
  | CoinGeckoPriceSourceConfig
  | DexScreenerPriceSourceConfig
  | MexcPriceSourceConfig
  | LBankPriceSourceConfig
  | BitmartPriceSourceConfig
  | FixedPriceSourceConfig

const priceSources: Partial<Record<ChainId, Record<string, PriceSourceConfigs>>> = {
  [ChainId.BSC]: {
    '0xf03Ca04Dd56D695a410f46F14feF4028B22FB79A': {
      name: 'NFE',
      symbol: 'NFE',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'edu3labs',
      tokenAddress: '0xf03Ca04Dd56D695a410f46F14feF4028B22FB79A',
    },
    '0x8613d52D74a48883A51bAdF8b25ab066714087Da': {
      name: 'Love Bit',
      symbol: 'LB',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'lovebit',
      tokenAddress: '0x8613d52D74a48883A51bAdF8b25ab066714087Da',
    },
    '0x09854c1349cd1412439461ca72609f97850d2218': {
      name: 'FusedNFurious',
      symbol: 'FNFS',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'FNFSUSDT',
      tokenAddress: '0x09854c1349cd1412439461ca72609f97850d2218',
    },
    '0xb6C53431608E626AC81a9776ac3e999c5556717c': {
      name: 'pTokens TLOS',
      symbol: 'TLOS',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xb6C53431608E626AC81a9776ac3e999c5556717c',
    },
    '0x71be881e9C5d4465B3FfF61e89c6f3651E69B5bb': {
      name: 'BRZ Token',
      symbol: 'BRZ',
      decimals: 4,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x71be881e9C5d4465B3FfF61e89c6f3651E69B5bb',
    },
    '0xBDf5bAfEE1291EEc45Ae3aadAc89BE8152D4E673': {
      name: 'CATAMOTO',
      symbol: 'CATA',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xBDf5bAfEE1291EEc45Ae3aadAc89BE8152D4E673',
    },
    '0xec9742f992ACc615C4252060D896c845ca8fC086': {
      name: 'BRICS Chain',
      symbol: 'BRICS',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'brics-chain',
      tokenAddress: '0xec9742f992ACc615C4252060D896c845ca8fC086',
    },
  },
  [ChainId.MATIC]: {
    '0x61bf130d973d59c69d3227f1668d534d83119860': {
      name: 'Trakx Token',
      symbol: 'TRKX',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x61bf130d973d59c69d3227f1668d534d83119860',
    },
    '0xB6a5ae40e79891E4DeAdAd06C8A7cA47396Df21C': {
      name: 'Carbify',
      symbol: 'CBY',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xB6a5ae40e79891E4DeAdAd06C8A7cA47396Df21C',
    },
    '0xE77aBB1E75D2913B2076DD16049992FFeACa5235': {
      name: 'Decentrawood',
      symbol: 'DEOD',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'DEODUSDT',
      tokenAddress: '0xE77aBB1E75D2913B2076DD16049992FFeACa5235',
    },
    '0x5742fE477b2afed92c25D092418BaC06CD076ceA': {
      name: 'FURI',
      symbol: 'FURI',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'FURIUSDT',
      tokenAddress: '0x5742fE477b2afed92c25D092418BaC06CD076ceA',
    },
  },
  [ChainId.BASE]: {
    '0xACf80A4e55F5f28e1e7d261a221cA495DB5bcbB3': {
      name: 'XAVI by Virtuals',
      symbol: 'XAVI',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xACf80A4e55F5f28e1e7d261a221cA495DB5bcbB3',
    },
    '0x00096697DC24bd10423690126D91546A20Ccb3F0': {
      name: 'Veritas',
      symbol: 'VPT',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'veritas',
      tokenAddress: '0x00096697DC24bd10423690126D91546A20Ccb3F0',
    },
    '0x672BB71A1A51e754FA2dd78629b05D371daC3184': {
      name: 'GOO',
      symbol: 'GOO',
      decimals: 18,
      source: PriceSource.Fixed,
      price: 0.0021,
      tokenAddress: '0x672BB71A1A51e754FA2dd78629b05D371daC3184',
    },
  },
  [ChainId.LINEA]: {
    '0xcc22F6AA610D1b2a0e89EF228079cB3e1831b1D1': {
      name: 'Linea Velocore',
      symbol: 'LVC',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xcc22F6AA610D1b2a0e89EF228079cB3e1831b1D1',
    },
  },
  [ChainId.ARBITRUM]: {
    '0x4D22e37Eb4d71D1acc5f4889a65936D2a44A2f15': {
      name: 'Hat',
      symbol: 'HAT',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x4D22e37Eb4d71D1acc5f4889a65936D2a44A2f15',
    },
  },
  [ChainId.GRAPHLINQ]: {
    '0x0000000000000000000000000000000000000000': {
      name: 'Graphlinq',
      symbol: 'GLQ',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'graphlinq-protocol',
      tokenAddress: '0x0000000000000000000000000000000000000000', //GLQ
    },
    '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6': {
      name: 'Wrapped Graphlinq',
      symbol: 'WQGL',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'graphlinq-protocol',
      tokenAddress: '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6', //WQGL
    },
    '0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442': {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'ethereum',
      tokenAddress: '0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442', //WETH
    },
  },
  [ChainId.INEVM]: {
    '0x69011706b3f6C6eaeD7D2Bc13801558B4fd94CBF': {
      name: 'Wrapped Injective',
      symbol: 'WINJ',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x69011706b3f6C6eaeD7D2Bc13801558B4fd94CBF',
    },
  },
  [ChainId.MONAD_TESTNET]: {
    '0xb83D8fe3D51b2ecc09242fCDa318057b17Ed5971': {
      name: 'AZEx Token',
      symbol: 'AZT',
      decimals: 18,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '0xb83D8fe3D51b2ecc09242fCDa318057b17Ed5971', //AZT
    },
    '0x1eA9099E3026e0b3F8Dd6FbacAa45f30fCe67431': {
      name: 'Atlantis',
      symbol: 'ATL',
      decimals: 18,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '0x1eA9099E3026e0b3F8Dd6FbacAa45f30fCe67431', //ATL
    },
  },
  [ChainId.KATANA_TESTNET]: {
    '0x17B8Ee96E3bcB3b04b3e8334de4524520C51caB4': {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'ethereum',
      tokenAddress: '0x17B8Ee96E3bcB3b04b3e8334de4524520C51caB4',
    },
  },
  [ChainId.KATANA]: {
    '0xEE7D8BCFb72bC1880D0Cf19822eB0A2e6577aB62': {
      name: 'Vault Bridge ETH',
      symbol: 'vbETH',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'ethereum',
      tokenAddress: '0xEE7D8BCFb72bC1880D0Cf19822eB0A2e6577aB62',
    },
    '0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36': {
      name: 'Vault Bridge USDC',
      symbol: 'vbUSDC',
      decimals: 6,
      source: PriceSource.Coingecko,
      id: 'usd-coin',
      tokenAddress: '0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36',
    },
    '0x2DCa96907fde857dd3D816880A0df407eeB2D2F2': {
      name: 'Vault Bridge USDT',
      symbol: 'vbUSDT',
      decimals: 6,
      source: PriceSource.Coingecko,
      id: 'tether',
      tokenAddress: '0x2DCa96907fde857dd3D816880A0df407eeB2D2F2',
    },
  },
  [ChainId.SOL]: {
    '6PkHvBX6A594Xnwyr3utFkrfP3eCUfqPjFTuSdxUuBCo': {
      name: 'Some Sol token',
      symbol: 'SOLTOKEN',
      decimals: 9,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '6PkHvBX6A594Xnwyr3utFkrfP3eCUfqPjFTuSdxUuBCo',
    },
    '4ZppDghtcPqh6S8zT2MehngWsmi6WDQvWK7njL1ppRZD': {
      name: 'Some Sol token',
      symbol: 'SOLTOKEN',
      decimals: 9,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '4ZppDghtcPqh6S8zT2MehngWsmi6WDQvWK7njL1ppRZD',
    },
    '9Go1k12GfUGyKSA4Hcw6svZ6E8T5Dkta8t3rmHF7xJNU': {
      name: 'Golden Banana',
      symbol: 'GNANA',
      decimals: 9,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '9Go1k12GfUGyKSA4Hcw6svZ6E8T5Dkta8t3rmHF7xJNU',
    },
    '6MkKT6ffNt6N22U2Q7yZaLC4QYrxGuFefwYrmd8XXsih': {
      name: 'Banana',
      symbol: 'BANANA',
      decimals: 9,
      source: PriceSource.Fixed,
      price: 69,
      tokenAddress: '6MkKT6ffNt6N22U2Q7yZaLC4QYrxGuFefwYrmd8XXsih',
    },
  },
  [ChainId.BERACHAIN]: {
    '0x28e0e3B9817012b356119dF9e217c25932D609c2': {
      name: 'Burr Governance Token',
      symbol: 'BURR',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x28e0e3B9817012b356119dF9e217c25932D609c2',
    },
  },
}

export default priceSources
