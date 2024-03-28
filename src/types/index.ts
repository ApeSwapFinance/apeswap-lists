import { ChainId } from '@ape.swap/sdk'

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

export enum LiquidityDex {
  ApeSwapV2 = 'ApeSwapV2',
  ApeSwapV3 = 'ApeSwapV3',
  PancakeSwapV2 = 'PancakeSwapV2',
  PancakeSwapV3 = 'PancakeSwapV3',
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
}

export enum ZapVersion {
  External = 'External', //This will redirect users to Token.getLpUrl with get lp button on FE
  ZapV1 = 'ZapV1', //First original inhouse built non multicall zap
  // NOTE: ZapV2 is not yet operational
  // ZapV2 = 'ZapV2', //Second inhouse built dynamic multicall zap
  Wido = 'Wido', //https://www.joinwido.com/
  SoulZap = 'SoulZap',
}

export enum Protocols {
  Both = 1,
  V2 = 2,
  V3 = 3,
  Algebra = 4,
  Gamma = 5,
  Steer = 6,
  Solidly = 7,
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
  liquidityDex?: Partial<Record<ChainId, LiquidityDex>> //the dex type where most liquidity/actual lp is
  getLpUrl?: Partial<Record<ChainId, string>> //Needed for ZapVersion.External
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
  bonds: LaunchBondConfig[]
  saleStartTime: string
  totalAllocation: string
  projectInfo: {
    shortDescription: string
    fullDescription: string
    tags: string[]
    socials: {
      twitter: string
      discord: string
      website: string
      whitepaper: string
      tokenomicsURL: string
      teaserVideo: string
    }
    images: {
      launchpadImg: string
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

export interface LaunchBondConfig {
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
  initTime: Partial<Record<ChainId, number>>
  initPrice: Partial<Record<ChainId, number>>
}

export enum LaunchBondTiers {
  Bronze,
  Silver,
  Gold,
  Diamond,
}

// Start of list types
export interface BillsConfig {
  index: number
  contractAddress: Partial<Record<ChainId, string>>
  billVersion: BillVersion
  billType: 'liquidity' | 'reserve' | 'launch' | 'migration' | 'cex'
  token: Token
  quoteToken: Token
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
    collection: BillArtCollection // i.e. BillArtCollection.ApeSwap_Collection1
  }
  showcaseToken?: Token
  bondPartner?: string // * Used for partners to filter bonds
  // * These are used for the bond highlight page
  bannerURL?: string
  shortDescription?: string
  fullDescription?: string
  tags?: string[]
  apeswapNote?: string
  featuredURLS?: string[] // add in frontend '-light|dark.png'
  partnersURLS?: string[] // add in frontend '-light|dark.png'
  // * These are used for the bond migration page
  vestingTerm?: number
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
