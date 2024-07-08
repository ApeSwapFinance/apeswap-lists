export enum QuoteToken {
  'BNB' = 'BNB',
  'BANANA' = 'BANANA',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'ETH' = 'ETH',
  'USDT' = 'USDT',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'APEZONE' = 'ApeZone',
  'CORE' = 'Core',
  'REAL_YIELD' = 'Real Yield',
  'JUNGLE' = 'Jungle',
}

export enum ChainId {
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

export enum LiquidityDex {
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

  //Linea
  Spartadex = 'Spartadex',
  Nile = 'Nile',
  XFAI = 'XFAI',
  Lynex = 'Lynex',
  Metavault = 'Metavault',

  //LightLink
  Elektrik = 'Elektrik',

  //Base
  Synthswap = 'Synthswap',
  Aerodrome = 'Aerodrome',
  SmarDex = 'SmarDex',
}

export enum IchiSupportedDex {
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

export enum ZapVersion {
  External = 'External', // This will redirect users to Token.getLpUrl with get lp button on FE
  ZapV1 = 'ZapV1', // TODO: deprecate this
  Wido = 'Wido', // TODO: deprecate this
  SoulZap = 'SoulZap',
  SoulZapApi = 'SoulZapApi',
}

export enum Protocols {
  Both = 1,
  V2 = 2,
  V3 = 3,
  Algebra = 4, // Ichi? (no, it depends what underlying LP I think)
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
  decimals?: Partial<Record<ChainId, number | null>>
  dontFetch?: boolean
  lpToken?: boolean
  price?: number
  liquidityDex?: Partial<Record<ChainId, LiquidityDex>> // the dex type where most liquidity/actual lp is
  getLpUrl?: Partial<Record<ChainId, string>> //Needed for ZapVersion.External
  ichiUnderlyingDex?: IchiSupportedDex // The dex ichi is wrapping. only necessary for Ichi Zap
}

// Interfaces used in Vaults
export interface MasterChef {
  pid: Partial<Record<ChainId, number>>
  address: Partial<Record<ChainId, string>>
  rewardsPerBlock: Partial<Record<ChainId, string>>
  rewardToken: Token
}

export enum BillVersion {
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
export enum BillArtCollection {
  ApeSwap_Collection1 = 'ApeSwap_Collection1',
  Quickswap_Collection1 = 'Quickswap_Collection1',
  ApeBond_Collection1 = 'ApeBond_Collection1',
  CexFundBond_Collection1 = 'CexFundBond_Collection1',
  PlanetIX_Collection1 = 'PlanetIX_Collection1',
  ETH_Collection1 = 'ETH_Collection1',
  inEVM_Collection1 = 'inEVM_Collection1',
  AITECH_Collection1 = 'AITECH_Collection1',
}

export const defaultBillArtCollection = BillArtCollection.ApeSwap_Collection1

export const MigrationVestingTerms = {
  '60d': 5184000,
  '120d': 10368000,
  '180d': 15552000,
  '360d': 31104000,
} as const

export type MigrationVestingTermType = typeof MigrationVestingTerms[keyof typeof MigrationVestingTerms]

export interface LaunchProjectConfig {
  index: number
  projectId: string // this should be unique!
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
  token: Token // i.e. principalToken
  earnToken: Token
  billNnftAddress: Partial<Record<ChainId, string>>
  soldOut: boolean
  billArt: {
    collection: BillArtCollection
  }
  initTime: Partial<Record<ChainId, number>> // timestamp the sale starts
  finishTime: Partial<Record<ChainId, number>> // timestamp the sale finished (i.e. IT IS NOT START VESTING TIMESTAMP)
  redeemTime?: Partial<Record<ChainId, number>> // timestamp the sale is going to be manually finalized
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

export enum LaunchBondTiers {
  Bronze,
  Silver,
  Gold,
  Diamond,
  Legend,
}

// Start of list types
export interface BillsConfig {
  index: number // FE
  cmcId?: number // FE
  chainId: ChainId // FE
  contractAddress: Partial<Record<ChainId, string>> // FE
  billVersion: BillVersion // FE
  billType: 'liquidity' | 'reserve' | 'launch' | 'migration' | 'cex' // FE
  token: Token
  quoteToken: Token
  lpToken: Token // FE
  earnToken: Token // FE
  billNnftAddress: Partial<Record<ChainId, string>> // FE
  inactive?: boolean // FE
  projectLink?: string // FE
  twitter?: string // FE
  initTime?: Partial<Record<ChainId, number>>
  initPrice?: Partial<Record<ChainId, number>>
  audit?: string // FE
  soldOut?: boolean // FE
  billArt?: {
    collection: BillArtCollection // i.e. BillArtCollection.ApeSwap_Collection1
  }
  showcaseToken?: Token // Fuck this shit
  bondPartner?: string // FE
  // * These are used for the individual bond page view
  shortDescription?: string // FE
  fullDescription?: string // FE
  featuredURLS?: string[] // FE
  partnersURLS?: string[] // FE
  tags?: string[] // FE
  onlyPartner?: boolean // FE
  vestingTerm?: number
  // * This is only used for the bond migration page
  multiplier?: number
}

export enum VaultVersion {
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
  // Jungle farms have changed to per second vs per block
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
  // Jungle farms have changed to per second vs per block
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
