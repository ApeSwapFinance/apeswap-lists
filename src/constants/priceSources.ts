import { ChainId } from '../types/index'

//Price API Sources
enum PriceSource {
  Dex = 'dex',
  Coingecko = 'coingecko',
  Dexscreener = 'dexscreener',
  Mexc = 'mexc',
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

type PriceSourceConfigs = CoinGeckoPriceSourceConfig | DexScreenerPriceSourceConfig | MexcPriceSourceConfig

const priceSources: Partial<Record<ChainId, Record<string, PriceSourceConfigs>>> = {
  [ChainId.BSC]: {
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
  },
  [ChainId.GRAPHLINQ]: {
    '0x0000000000000000000000000000000000000000': {
      source: PriceSource.Coingecko,
      id: 'graphlinq-protocol',
      tokenAddress: '0x0000000000000000000000000000000000000000',
    },
    '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6': {
      source: PriceSource.Coingecko,
      id: 'graphlinq-protocol',
      tokenAddress: '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6',
    },
    '0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442': {
      source: PriceSource.Coingecko,
      id: 'ethereum',
      tokenAddress: '0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442',
    },
  },
}

export default priceSources
