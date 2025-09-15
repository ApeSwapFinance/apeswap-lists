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
  /**
   * Optional target chain for cross-chain price lookups.
   * When specified, the price will be fetched from this chain instead of the current chain.
   * Used when a token's price needs to be sourced from a different blockchain.
   */
  targetChain?: ChainId
  /**
   * The original token address that this price source configuration is for.
   * When using cross-chain price lookups, this should match the key address of the object.
   * The actual price will be fetched from the address specified in `tokenAddress` field.
   *
   * Example: If the object key is '0x4eB2Bd7beE16F38B1F4a0A5796Fffd028b6040e9' (WETH on MegaETH Testnet),
   * and you want to get the price from '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' (WETH on Ethereum mainnet),
   * then originalTokenAddress should be '0x4eB2Bd7beE16F38B1F4a0A5796Fffd028b6040e9' and
   * tokenAddress should be '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'.
   */
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
    '0xfdc66a08b0d0dc44c17bbd471b88f49f50cdd20f': {
      name: 'SmarDex Token',
      symbol: 'SDEX',
      decimals: 18,
      source: PriceSource.Coingecko,
      id: 'smardex',
      tokenAddress: '0xfdc66a08b0d0dc44c17bbd471b88f49f50cdd20f',
    },
    '0x09854c1349cd1412439461ca72609f97850d2218': {
      name: 'FusedNFurious',
      symbol: 'FNFS',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'FNFSUSDT',
      tokenAddress: '0x09854c1349cd1412439461ca72609f97850d2218',
    },
    '0xe07710cdcD1c9F0FB04bfd013F9854E4552671cE': {
      name: 'UCOIN',
      symbol: 'U',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'UCOINUSDT',
      tokenAddress: '0xe07710cdcD1c9F0FB04bfd013F9854E4552671cE',
    },
    '0x6730f7a6bbb7b9c8e60843948f7feb4b6a17b7f7': {
      name: 'Seed.Photo',
      symbol: 'SEED',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'PHOTOUSDT',
      tokenAddress: '0x6730f7a6bbb7b9c8e60843948f7feb4b6a17b7f7',
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
    '0x9Fe4860bd6C9E78C6d998aE88173f347A253C2de': {
      name: 'PicksTicket ',
      symbol: 'PICKST',
      decimals: 18,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '0x9Fe4860bd6C9E78C6d998aE88173f347A253C2de',
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
    '8CLGcTogo6FoYkEQQBm3Vm2PVckYCiCm3XXhdsr4skoR': {
      name: 'SKOR AI',
      symbol: 'SKORAI',
      decimals: 6,
      source: PriceSource.Coingecko,
      id: 'skor-ai',
      tokenAddress: '8CLGcTogo6FoYkEQQBm3Vm2PVckYCiCm3XXhdsr4skoR',
    },
    Aq8Gocyvyyi8xk5EYxd6viUfVmVvs9T9R6mZFzZFpump: {
      name: 'Hyperpigmentation',
      symbol: 'HYPER',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'Aq8Gocyvyyi8xk5EYxd6viUfVmVvs9T9R6mZFzZFpump',
    },
    JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN: {
      name: 'Jupiter',
      symbol: 'JUP',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    },
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    },
    STBuyENwJ1GP4yNZCjwavn92wYLEY3t5S1kVS5kwyS1: {
      name: 'stabble',
      symbol: 'STB',
      decimals: 9,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'STBuyENwJ1GP4yNZCjwavn92wYLEY3t5S1kVS5kwyS1',
    },
    '2Wu1g2ft7qZHfTpfzP3wLdfPeV1is4EwQ3CXBfRYAciD': {
      name: 'GOHOME',
      symbol: 'GOHOME',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '2Wu1g2ft7qZHfTpfzP3wLdfPeV1is4EwQ3CXBfRYAciD',
    },
    F4YXmo8CDLRvWGnXyxVZ62wwc7oWcBam7tu4G5kGSaKZ: {
      name: 'RKEY',
      symbol: 'RKEY',
      decimals: 6,
      source: PriceSource.Coingecko,
      id: 'rkey',
      tokenAddress: 'F4YXmo8CDLRvWGnXyxVZ62wwc7oWcBam7tu4G5kGSaKZ',
    },
    '5YSjRtJJTZpQ44YF6qDpyygPCrJ61q5eNJRJRZMvKjZD': {
      name: 'ORCA',
      symbol: 'ORCAI',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '5YSjRtJJTZpQ44YF6qDpyygPCrJ61q5eNJRJRZMvKjZD',
    },
    So11111111111111111111111111111111111111112: {
      name: 'Wrapped SOL',
      symbol: 'WSOL',
      decimals: 9,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'So11111111111111111111111111111111111111112',
    },
    '2eK5WyE5uVrn1SRmNp9SsxQovzrs1PhrN33breBTgkf1': {
      name: 'TRUMPENGUIN',
      symbol: 'TPG',
      decimals: 9,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '2eK5WyE5uVrn1SRmNp9SsxQovzrs1PhrN33breBTgkf1',
    },
    NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk: {
      name: 'Blockasset',
      symbol: 'BLOCK',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk',
    },
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
      name: 'USDT',
      symbol: 'USDT',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    },
    FUW4poh6s7uychceF8u1mo7NS65vzjX5vmS7Yi7GYQnz: {
      name: 'Solidus Ai Tech',
      symbol: 'AITECH',
      decimals: 9,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'FUW4poh6s7uychceF8u1mo7NS65vzjX5vmS7Yi7GYQnz',
    },
    Fy1RLA8gvudCj1x4tcpcCDRWG1jfuYHT7zpWKP1svJam: {
      name: 'Children Of The Sky',
      symbol: 'COTS',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'Fy1RLA8gvudCj1x4tcpcCDRWG1jfuYHT7zpWKP1svJam',
    },
    Gdck9KXSSiMMhNyjUjo4sVT1GDzeZnZP2yse9jhax3GR: {
      name: 'Hivello',
      symbol: 'HVLO',
      decimals: 8,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'Gdck9KXSSiMMhNyjUjo4sVT1GDzeZnZP2yse9jhax3GR',
    },
    AiXxRGmRc5oDiFXbEeRX9obPpr3Zir7rks1ef2NjddiF: {
      name: 'Ai Xovia',
      symbol: 'AIX',
      decimals: 9,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: 'AiXxRGmRc5oDiFXbEeRX9obPpr3Zir7rks1ef2NjddiF',
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
  [ChainId.SONIC]: {
    '0x08C5e3B7533Ee819A4d1F66e839D0E8F04ae3D0C': {
      name: 'scUSD-RZR', // this is the onchain name of the pair
      symbol: 'scUSD-RZR', // this is the onchain symbol of the pair
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'pair',
      tokenAddress: '0x08C5e3B7533Ee819A4d1F66e839D0E8F04ae3D0C',
    },
    '0xb4444468e444f89e1c2CAc2F1D3ee7e336cBD1f5': {
      name: 'Rezerve.money',
      symbol: 'RZR',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xb4444468e444f89e1c2CAc2F1D3ee7e336cBD1f5',
    },
    '0x4Cae73a23078e7A94D1e828Fa3bABa5080c04FcA': {
      name: 'Amped Finance',
      symbol: 'AMPED',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x4Cae73a23078e7A94D1e828Fa3bABa5080c04FcA',
    },
  },
  [ChainId.UNICHAIN]: {
    '0x4200000000000000000000000000000000000006': {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x4200000000000000000000000000000000000006',
    },
    '0x078D782b760474a361dDA0AF3839290b0EF57AD6': {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x078D782b760474a361dDA0AF3839290b0EF57AD6',
    },
    '0x9151434b16b9763660705744891fA906F660EcC5': {
      name: 'USD₮0',
      symbol: 'USD₮0',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x9151434b16b9763660705744891fA906F660EcC5',
    },
    '0x926DC7b96bb2F4A91C2A67e291Faf482691a3001': {
      name: 'UNICORN',
      symbol: 'UNICORN',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x926DC7b96bb2F4A91C2A67e291Faf482691a3001',
    },
    '0x7169a1874d4716094bdcE1b86a5cd00212CA1319': {
      name: 'bveCATX',
      symbol: 'bveCATX',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      originalTokenAddress: '0x7169a1874d4716094bdcE1b86a5cd00212CA1319',
      tokenAddress: '0x756ee6857F915A2b5366F2Ef56d8D13857aef8ad', //CATX
    },
    '0x756ee6857F915A2b5366F2Ef56d8D13857aef8ad': {
      name: 'CATEX',
      symbol: 'CATX',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x756ee6857F915A2b5366F2Ef56d8D13857aef8ad',
    },
  },
  [ChainId.MAINNET]: {
    '0x0624069497F830BEa84bd7Ad410b878270130035': {
      name: 'Airas',
      symbol: 'AIRAS',
      decimals: 18,
      source: PriceSource.Fixed,
      price: 0.0005,
      tokenAddress: '0x0624069497F830BEa84bd7Ad410b878270130035',
    },
    '0xfa63503f9e61fd59cbea137c122fa55c2daff14a': {
      name: 'LITAS',
      symbol: 'LITAS',
      decimals: 18,
      source: PriceSource.Mexc,
      id: 'LITASUSDT',
      tokenAddress: '0xfa63503f9e61fd59cbea137c122fa55c2daff14a',
    },
  },
  [ChainId.MEGAETH_TESTNET]: {
    '0x4eB2Bd7beE16F38B1F4a0A5796Fffd028b6040e9': {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      originalTokenAddress: '0x4eB2Bd7beE16F38B1F4a0A5796Fffd028b6040e9',
      targetChain: ChainId.MAINNET,
      tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', //ETH
    },
    '0x130abef84be9cf2343e56247a7896f9962450b08': {
      name: 'Bronto USDC',
      symbol: 'BUSDC',
      decimals: 6,
      source: PriceSource.Fixed,
      price: 1,
      tokenAddress: '0x130abef84be9cf2343e56247a7896f9962450b08',
    },
  },
  [ChainId.AVAX]: {
    '0xf8b22737cbfea137f9b2737d1dab2a8a21608cee': {
      name: 'TRADER',
      symbol: 'TRADER',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xf8b22737cbfea137f9b2737d1dab2a8a21608cee',
    },
    '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e': {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
    },
    '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7': {
      name: 'Wrapped AVAX',
      symbol: 'WAVAX',
      decimals: 18,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    },
    '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7': {
      name: 'Tether: USDT',
      symbol: 'USDT',
      decimals: 6,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
    },
    '0x152b9d0fdc40c096757f570a51e494bd4b943e50': {
      name: 'Bitcoin',
      symbol: 'BTC.b',
      decimals: 8,
      source: PriceSource.Dexscreener,
      type: 'token',
      tokenAddress: '0x152b9d0fdc40c096757f570a51e494bd4b943e50',
    },
  },
}

export default priceSources
