import { ChainId } from '../types/index'

//Price API Sources
enum PriceSource {
  Dex = 'dex',
  Coingecko = 'coingecko',
  Dexscreener = 'dexscreener',
  Mexc = 'mexc',
  LBank = 'lbank',
  Bitmart = 'bitmart',
}

type CoinGeckoPriceSourceConfig = {
  source: PriceSource.Coingecko
  id: string
  tokenAddress: string
}

type DexScreenerPriceSourceConfig = {
  source: PriceSource.Dexscreener
  type: 'token' | 'pair'
  tokenAddress: string
}

type MexcPriceSourceConfig = {
  source: PriceSource.Mexc
  id: string
  tokenAddress: string
}

type LBankPriceSourceConfig = {
  source: PriceSource.LBank
  id: string
  tokenAddress: string
}

type BitmartPriceSourceConfig = {
  source: PriceSource.Bitmart
  id: string
  tokenAddress: string
}

type PriceSourceConfigs =
  | CoinGeckoPriceSourceConfig
  | DexScreenerPriceSourceConfig
  | MexcPriceSourceConfig
  | LBankPriceSourceConfig
  | BitmartPriceSourceConfig

const priceSources: Partial<Record<ChainId, Record<string, PriceSourceConfigs>>> = {
  [ChainId.BSC]: {
    '0xf03Ca04Dd56D695a410f46F14feF4028B22FB79A': {
      source: PriceSource.Coingecko,
      id: 'edu3labs',
      tokenAddress: '0xf03Ca04Dd56D695a410f46F14feF4028B22FB79A',
    },
    '0x8613d52D74a48883A51bAdF8b25ab066714087Da': {
      source: PriceSource.Coingecko,
      id: 'lovebit',
      tokenAddress: '0x8613d52D74a48883A51bAdF8b25ab066714087Da',
    },
    '0x09854c1349cd1412439461ca72609f97850d2218': {
      source: PriceSource.Mexc,
      id: 'FNFSUSDT',
      tokenAddress: '0x09854c1349cd1412439461ca72609f97850d2218',
    },
    '0xb6C53431608E626AC81a9776ac3e999c5556717c': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xb6C53431608E626AC81a9776ac3e999c5556717c', //TLOS
    },
    '0x71be881e9C5d4465B3FfF61e89c6f3651E69B5bb': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x71be881e9C5d4465B3FfF61e89c6f3651E69B5bb', //BRZ
    },
    '0xBDf5bAfEE1291EEc45Ae3aadAc89BE8152D4E673': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xBDf5bAfEE1291EEc45Ae3aadAc89BE8152D4E673', //CATA
    },
  },
  [ChainId.MATIC]: {
    '0x61bf130d973d59c69d3227f1668d534d83119860': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x61bf130d973d59c69d3227f1668d534d83119860', //TRKX
    },
    '0xB6a5ae40e79891E4DeAdAd06C8A7cA47396Df21C': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xB6a5ae40e79891E4DeAdAd06C8A7cA47396Df21C', //CBY
    },
  },
  [ChainId.BASE]: {
    '0xACf80A4e55F5f28e1e7d261a221cA495DB5bcbB3': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xACf80A4e55F5f28e1e7d261a221cA495DB5bcbB3', //XAVI
    },
    '0x00096697DC24bd10423690126D91546A20Ccb3F0': {
      source: PriceSource.Mexc,
      id: 'VPTUSDT',
      tokenAddress: '0x00096697DC24bd10423690126D91546A20Ccb3F0', //VPT
    },
  },
  [ChainId.LINEA]: {
    '0xcc22F6AA610D1b2a0e89EF228079cB3e1831b1D1': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xcc22F6AA610D1b2a0e89EF228079cB3e1831b1D1', //LVC
    },
  },
  [ChainId.ARBITRUM]: {
    '0x4D22e37Eb4d71D1acc5f4889a65936D2a44A2f15': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x4D22e37Eb4d71D1acc5f4889a65936D2a44A2f15', //HAT
    },
  },
  [ChainId.GRAPHLINQ]: {
    '0x0000000000000000000000000000000000000000': {
      source: PriceSource.Coingecko,
      id: 'graphlinq-protocol',
      tokenAddress: '0x0000000000000000000000000000000000000000', //GLQ
    },
    '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6': {
      source: PriceSource.Coingecko,
      id: 'graphlinq-protocol',
      tokenAddress: '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6', //WQGL
    },
    '0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442': {
      source: PriceSource.Coingecko,
      id: 'ethereum',
      tokenAddress: '0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442', //WETH
    },
  },
  [ChainId.INEVM]: {
    '0x69011706b3f6C6eaeD7D2Bc13801558B4fd94CBF': {
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x69011706b3f6C6eaeD7D2Bc13801558B4fd94CBF', //WINJ
    },
  },
}

export default priceSources
