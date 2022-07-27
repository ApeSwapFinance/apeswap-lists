import { ChainId } from '@apeswapfinance/sdk'

export interface Address {
  [ChainId.BSC]: string
  [ChainId.MATIC]: string
  [ChainId.MAINNET]: string
  [ChainId.BSC_TESTNET]: string
}

// Since farms and pools are only on BSC and TESTNET we dont need other chains
export interface FarmsAndPoolAddress {
  [ChainId.BSC]: string
  [ChainId.BSC_TESTNET]: string
}

// Since vaults are only on BSC and TESTNET we dont need other chains
export interface ChainToNumber {
  [ChainId.BSC]: number
  [ChainId.BSC_TESTNET]: number | null
}

export interface ChainToString {
  [ChainId.BSC]: string
  [ChainId.BSC_TESTNET]: string
}

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
  'JUNGLE' = 'Jungle',
}

export interface FarmStyles {
  deprecated: string
  warning: string
  featured: string
  inactive: string
}

export interface Token {
  symbol: string
  address: Address
  active: boolean
  decimals?: number
  dontFetch?: boolean
  lpToken?: boolean
  price?: number
}

// Interfaces used in Vaults
export interface MasterChef {
  pid: ChainToNumber
  // TODO: Change to type address and use each chain. Using any so we dont have to define each chain
  address: any
  rewardsPerBlock: ChainToString
  rewardToken: Token
}

// Start of list types

export interface BillsConfig {
  index: number
  contractAddress: Address
  billType: string
  token: Token
  quoteToken: Token
  lpToken: Token
  earnToken: Token
  billNnftAddress: Address
  inactive?: boolean
  projectLink?: string
  twitter?: string
}

export interface VaultConfig {
  id: number
  pid: number
  type: 'MAX' | 'AUTO' | 'BURN'
  version: 'V1' | 'V2'
  availableChains: number[]
  // TODO: Change to type address and use each chain. Using any so we dont have to define each chain
  stratAddress: any
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
  lpAddresses: FarmsAndPoolAddress
  tokenSymbol: string
  style?: keyof FarmStyles
  image?: string
  disableApr?: boolean
  tokenAddresses: FarmsAndPoolAddress
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
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
  rewardToken: Token | null
  contractAddress: FarmsAndPoolAddress
  poolCategory?: PoolCategory
  projectLink: string
  twitter?: string
  tokenPerBlock: string
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
  rewardToken: Token
  contractAddress: Address
  projectLink: string
  twitter?: string
  tokenPerBlock: string
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
}

export interface NfaStakingPoolConfig {
  sousId: number
  tier: number
  rewardToken: Token
  contractAddress: FarmsAndPoolAddress
  tokenPerBlock: string
  isFinished: boolean
  endBlock: number
}
