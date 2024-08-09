export declare enum QuoteToken {
  'BNB' = 'BNB',
  'BANANA' = 'BANANA',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'ETH' = 'ETH',
  'USDT' = 'USDT',
}
export declare enum PoolCategory {
  'COMMUNITY' = 'Community',
  'APEZONE' = 'ApeZone',
  'CORE' = 'Core',
  'REAL_YIELD' = 'Real Yield',
  'JUNGLE' = 'Jungle',
}
export declare enum ChainId {
  MAINNET = 1,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  BSC = 56,
  BSC_TESTNET = 97,
  TLOS = 40,
  ARBITRUM = 42161,
  INEVM_TESTNET = 2424,
  INEVM = 2525,
  SEPOLIA = 11155111,
  LINEA = 59144,
  LIGHTLINK = 1890,
  IOTA_TESTNET = 1075,
  IOTA = 8822,
  BASE = 8453,
}
export declare enum LiquidityDex {
  ApeSwapV2 = 'ApeSwapV2',
  ApeSwapV3 = 'ApeSwapV3',
  PancakeSwapV2 = 'PancakeSwapV2',
  PancakeSwapV3 = 'PancakeSwapV3',
  SushiSwapV3 = 'SushiSwapV3',
  UniswapV2 = 'UniswapV2',
  ThenaV1 = 'ThenaV1',
  /**
   * Initially, LiquidityDex was for the price getter and that checks algebra pricing
   *  (gamma wraps over it so no pricing there).
   * Now we use it for zapVersion as well where Gamma is better.
   */
  Algebra = 'Algebra',
  QuickswapV2 = 'QuickswapV2',
  UniswapV3 = 'UniswapV3',
  External = 'External',
  Spartadex = 'Spartadex',
  Nile = 'Nile',
  XFAI = 'XFAI',
  Lynex = 'Lynex',
  Metavault = 'Metavault',
  Elektrik = 'Elektrik',
  Synthswap = 'Synthswap',
  Aerodrome = 'Aerodrome',
  SmarDex = 'SmarDex',
  MagicSea = 'MagicSea',
}
export declare enum IchiSupportedDex {
  Ascent = 'Ascent',
  Blueprint = 'Blueprint',
  Cleo = 'Cleo',
  Equalizer = 'Equalizer',
  Fenix = 'Fenix',
  Forge = 'Forge',
  Henjin = 'Henjin',
  Kinetix = 'Kinetix',
  Linehub = 'Linehub',
  Lynex = 'Lynex',
  Metavault = 'Metavault',
  Nile = 'Nile',
  Pancakeswap = 'PancakeSwap',
  Quickswap = 'QuickSwap',
  Ramses = 'Ramses',
  Retro = 'Retro',
  SaucerSwap = 'SaucerSwap',
  SpiritSwap = 'SpiritSwap',
  Sushiswap = 'SushiSwap',
  Thena = 'Thena',
  Thirdfy = 'Thirdfy',
  UniswapV3 = 'Uniswap V3',
  Velocore = 'Velocore',
  XSwap = 'XSwap',
}
export declare enum ZapVersion {
  External = 'External',
  ZapV1 = 'ZapV1',
  Wido = 'Wido',
  SoulZap = 'SoulZap',
  SoulZapApi = 'SoulZapApi',
}
export declare enum Protocols {
  Both = 1,
  V2 = 2,
  V3 = 3,
  Algebra = 4,
  Gamma = 5,
  Steer = 6,
  Solidly = 7,
  XFAI = 8,
}
export interface FarmStyles {
  deprecated: string
  warning: string
  featured: string
  inactive: string
}
export interface Token {
  symbol: string
  address: Partial<Record<ChainId, string>>
  active: boolean
  decimals: Partial<Record<ChainId, number | null>>
  dontFetch?: boolean
  lpToken?: boolean
  price?: number
  liquidityDex?: Partial<Record<ChainId, LiquidityDex>>
  getLpUrl?: Partial<Record<ChainId, string>>
  ichiUnderlyingDex?: IchiSupportedDex
}
export interface MasterChef {
  pid: Partial<Record<ChainId, number>>
  address: Partial<Record<ChainId, string>>
  rewardsPerBlock: Partial<Record<ChainId, string>>
  rewardToken: Token
}
export declare enum BillVersion {
  V1 = 'V1',
  V2 = 'V2',
  FixedPrice = 'FixedPrice',
  V3 = 'V3',
  TieredSale = 'TieredSale',
  FlashTieredSale = 'FlashTieredSale',
}
/**
 * This enum defines the art collection used to generate the art for a bill (bond).
 *
 * NOTE: Collections start at 1. The collection number provides a method to make new releases around
 * the same theme or project.
 */
export declare enum BillArtCollection {
  ApeSwap_Collection1 = 'ApeSwap_Collection1',
  Quickswap_Collection1 = 'Quickswap_Collection1',
  ApeBond_Collection1 = 'ApeBond_Collection1',
  CexFundBond_Collection1 = 'CexFundBond_Collection1',
  PlanetIX_Collection1 = 'PlanetIX_Collection1',
  ETH_Collection1 = 'ETH_Collection1',
  inEVM_Collection1 = 'inEVM_Collection1',
  AITECH_Collection1 = 'AITECH_Collection1',
}
export declare const defaultBillArtCollection = BillArtCollection.ApeSwap_Collection1
export declare const MigrationVestingTerms: {
  readonly '60d': 5184000
  readonly '120d': 10368000
  readonly '180d': 15552000
  readonly '360d': 31104000
}
export declare type MigrationVestingTermType = typeof MigrationVestingTerms[keyof typeof MigrationVestingTerms]
export interface LaunchProjectConfig {
  index: number
  projectId: string
  projectName: string
  bonds: TieredSaleBondConfig[]
  saleStartTime: string
  totalAllocation: string
  salePriceString: string
  vestingTimeString: string
  projectInfo: {
    shortDescription: string
    fullDescription: string
    tags: string[]
    socials: {
      twitter: string
      discord?: string
      website: string
      whitepaper: string
      tokenomicsURL: string
      teaserVideo: string
      telegram?: string
    }
    images: {
      launchpadImg: string
      launchpadSmallImg: string
      launchpadIcon: string
      headerImg: string
      headerImgMobile: string
      websiteImg: string
      whitepaperImg: string
      partnersImg: string
      tokenomicsImg: string
      teaserImg: string
    }
  }
}
export interface TieredSaleBondConfig {
  index: number
  contractAddress: Partial<Record<ChainId, string>>
  billVersion: BillVersion
  billType: 'fcfs' | 'oversubscription'
  token: Token
  earnToken: Token
  billNnftAddress: Partial<Record<ChainId, string>>
  soldOut: boolean
  billArt: {
    collection: BillArtCollection
  }
  initTime: Partial<Record<ChainId, number>>
  finishTime: Partial<Record<ChainId, number>>
  redeemTime?: Partial<Record<ChainId, number>>
  startVestingTimestamp: Partial<Record<ChainId, number>>
  initPrice: Partial<Record<ChainId, number>>
  initialRelease: number
}
export interface FlashBondConfig extends TieredSaleBondConfig {
  round: string
  totalRaiseString: string
  discountString: string
  tierString: string
}
export declare enum LaunchBondTiers {
  Bronze = 0,
  Silver = 1,
  Gold = 2,
  Diamond = 3,
  Legend = 4,
}
export interface BillsConfig {
  index: number
  cmcId?: number
  chainId: ChainId
  contractAddress: Partial<Record<ChainId, string>>
  billVersion: BillVersion
  billType: 'liquidity' | 'reserve' | 'launch' | 'migration' | 'cex'
  lpToken: Token
  earnToken: Token
  billNnftAddress: Partial<Record<ChainId, string>>
  inactive?: boolean
  projectLink?: string
  twitter?: string
  initTime?: Partial<Record<ChainId, number>>
  initPrice?: Partial<Record<ChainId, number>>
  audit?: string
  soldOut?: boolean
  billArt?: {
    collection: BillArtCollection
  }
  showcaseToken?: Token
  bondPartner?: string
  shortDescription?: string
  fullDescription?: string
  featuredURLS?: string[]
  partnersURLS?: string[]
  tags?: string[]
  onlyPartner?: boolean
  vestingTerm?: number
  multiplier?: number
}
export declare enum VaultVersion {
  V1 = 'V1',
  V2 = 'V2',
  V3 = 'V3',
}
export interface VaultConfig {
  id: number
  pid: number
  type: 'MAX' | 'AUTO' | 'BURN'
  version: VaultVersion
  availableChains: number[]
  stratAddress: Partial<Record<ChainId, string>>
  platform: string
  token: Token
  quoteToken?: Token
  stakeToken: Token
  rewardToken: Token
  masterchef: MasterChef
  inactive?: boolean
  depositFee?: number
  rewardsInSeconds?: boolean
  fee?: string
}
export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Partial<Record<ChainId, string>>
  tokenSymbol: string
  style?: keyof FarmStyles
  image?: string
  disableApr?: boolean
  tokenAddresses: Partial<Record<ChainId, string>>
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Partial<Record<ChainId, string>>
  multiplier?: string
  isCommunity?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  projectLink?: string
}
export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingToken: Token
  stakingLimit?: number
  bonusEndBlock?: number
  bonusEndTime?: number
  rewardToken: Token | null
  contractAddress: Partial<Record<ChainId, string>>
  poolCategory?: PoolCategory
  projectLink: string
  twitter?: string
  tokenPerBlock?: string
  rewardsPerSecond?: string
  sortOrder?: number
  harvest?: boolean
  reflect?: boolean
  isFinished?: boolean
  tokenDecimals: number
  displayDecimals?: number
  lpStaking?: boolean
  lpTokens?: {
    token: Token
    quoteToken: Token
  }
  forAdmins?: boolean
  emergencyWithdraw?: boolean
  isEarnTokenLp?: boolean
  zapable?: boolean
  audit?: string
}
export interface DualFarmConfig {
  pid: number
  network: number
  stakeTokenAddress: string
  rewarderAddress: string
  dualImage?: boolean
  stakeTokens: {
    token0: Token
    token1: Token
  }
  rewardTokens: {
    token0: Token
    token1?: Token
  }
}
export interface JungleFarmConfig {
  jungleId: number
  image?: string
  tokenName: string
  stakingToken: Token
  stakingLimit?: number
  bonusEndBlock?: number
  bonusEndTime?: number
  rewardToken: Token
  contractAddress: Partial<Record<ChainId, string>>
  projectLink: string
  twitter?: string
  tokenPerBlock?: string
  sortOrder?: number
  harvest?: boolean
  reflect?: boolean
  isFinished?: boolean
  tokenDecimals: number
  displayDecimals?: number
  lpStaking?: boolean
  lpTokens?: {
    token: Token
    quoteToken: Token
  }
  forAdmins?: boolean
  emergencyWithdraw?: boolean
  isEarnTokenLp?: boolean
  network: number
  unZapable?: boolean
  rewardsPerSecond?: string
  audit?: string
}
export interface NfaStakingPoolConfig {
  sousId: number
  tier: number
  rewardToken: Token
  contractAddress: Partial<Record<ChainId, string>>
  tokenPerBlock: string
  isFinished: boolean
  endBlock: number
}
export interface IaoConfig {
  id: string
  isActive: boolean
  isLinear: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  totalAmountRaised?: string
  bananaToBurn?: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  offeringCurrency: string
  tokenDecimals: number
  releaseBlockNumber: number
  vestingTime?: string
  vesting?: boolean
  startBlock?: number
  burnedTxUrl?: string
  expires?: number
  vestingTimeSeconds?: number
}
