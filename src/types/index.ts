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
  CAMP_TESTNET = 325000,
  GRAPHLINQ = 614,
  AVAX = 43114,
  BLAST = 81457,
  SINGULARITY_TESTNET = 751,
  CROSSFI = 4158,
  SONIC = 146,
  MONAD_TESTNET = 10143,
  SOL = 7565164, // This is actually the id deBridge uses for Solana
  BERACHAIN = 80094,
  KATANA_TESTNET = 129399,
  KATANA = 747474,
  UNICHAIN = 130,
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
  Curve = 'Curve',
  Wagmi = 'Wagmi',
  LFJ = 'LFJ',
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
  TrebleSwapV2 = 'TrebleSwap V2',
  TrebleAlgebraIntegral = 'Treble Algebra Integral',

  //IOTA
  MagicSea = 'MagicSea',

  //ARBITRUM
  CamelotV2 = 'Camelotv2',

  //AVALANCHE
  Pharaoh = 'Pharaoh',
  Pangolin = 'Pangolin',

  //BLAST
  ThrusterV2_03 = 'ThrusterV2_03', //0.3% fee
  ThrusterV2_1 = 'ThrusterV2_1', //1% fee
  ThrusterV3 = 'ThrusterV3',

  //SINGULARITY TESTNET
  Citea = 'Citea',

  //CROSSFI
  XSwap = 'XSwap',

  //SONIC
  ShadowExchange = 'ShadowExchange', //V2
  // ShadowExchangeV3 = 'ShadowExchangeV3',
  SwapX = 'SwapX', //V2
  SwapXAlgebraIntegral = 'SwapXAlgebraIntegral',
  Equalizer = 'Equalizer',

  //BERACHAIN
  KodiakV2 = 'KodiakV2', //V2
  KodiakV3 = 'KodiakV3', //V3
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
  SoulZap = 'SoulZap', //TODO: deprecate this
  SoulZapApi = 'SoulZapApi',
}

//Price API Protocols
export enum PriceApiProtocols {
  UniV2 = 0,
  UniV3 = 1,
  UniV4 = 2,
  Algebra = 3,
  AlgebraIntegral = 4,
  Solidly = 5,
  Curve = 6,
}

export enum Wrappers {
  Gamma = 0,
  Ichi = 1,
  Steer = 2,
}

export const ProtocolsWithWrapper: PriceApiProtocols[] = [
  PriceApiProtocols.UniV3,
  PriceApiProtocols.UniV4,
  PriceApiProtocols.Algebra,
  PriceApiProtocols.AlgebraIntegral,
]

//Protocols
export enum Protocols {
  Both = 1, //deprecated. Pick one protocol
  V2 = 2,
  V3 = 3,
  Algebra = 4,
  Gamma = 5, //deprecated. You probably want V3 or Algebra as this is a concentrated liquidity wrapper
  Steer = 6, //deprecated. You probably want V3 or Algebra as this is a concentrated liquidity wrapper
  Solidly = 7,
  XFAI = 8,
  Curve = 9,
  AlgebraIntegral = 10,
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
  liquidityDex?: Partial<Record<ChainId, LiquidityDex>> // the dex type where most liquidity/actual lp is
  getLpUrl?: Partial<Record<ChainId, string>> //Needed for ZapVersion.External
  ichiUnderlyingDex?: IchiSupportedDex // The dex ichi is wrapping. only necessary for Ichi Zap
  liquidityWrapper?: Wrappers // The wrapper used to wrap the liquidity and make it erc20
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
  V3 = 'V3',
  V4 = 'V4', // extra bonus for tiers
  FixedPrice = 'FixedPrice',
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
  GPT_Collection1 = 'GPT_Collection1',
  GoldenTicket_Collection1 = 'GoldenTicket_Collection1',
  Berachain_Collection1 = 'Berachain_Collection1',
}

export const defaultBillArtCollection = BillArtCollection.ApeBond_Collection1

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
  chainId: ChainId // this is the chain where the money is raised/bonds are deployed, regardless of any airdrop
  hideProjectPage?: boolean
  bonds: TieredSaleBondConfig[]
  saleStartTime: string
  totalAllocation: string
  salePriceString: string
  vestingTimeString: string
  vestingTimeTooltip?: string
  refundable?: boolean
  projectInfo: {
    marketingSubtitle?: string
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
      launchpadImg: string // big image on launchpad page
      launchpadSmallImg: string // small image on the card
      launchpadIcon: string
      headerImg: string // big background image on project page header
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
  chainId: ChainId
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
  finishTime: Partial<Record<ChainId, number>> // timestamp the sale finishes (i.e. IT IS NOT START VESTING TIMESTAMP)
  redeemTime?: Partial<Record<ChainId, number>> // timestamp the sale is going to be manually finalized and user will be able to redeem real or mock tokens
  startVestingTimestamp: Partial<Record<ChainId, number>>
  initPrice: Partial<Record<ChainId, number>>
  initialRelease: number
  refundPeriod?: number
  refundFee?: number // just plain number. 5% fee should be 5
  saleSchedule?: {
    [key: string]: { start: number; end: number }
  }
  tokensDistributedAtRedeem?: boolean
  distributionTimestamp?: number // timestamp when users will be able to get the real tokens
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

export interface PreTGEBond {
  index: number
  chainId: ChainId
  refundable: boolean
  vestingTimeString: string
  tgeString: string
  shortDescription: string
  tags: string[]
  contractAddress: string
  billVersion: BillVersion
  billType: string
  token: Token
  earnToken: Token
  billNnftAddress: Partial<Record<ChainId, string>>
  soldOut: boolean
  billArt: {
    collection: BillArtCollection
  }
  redeemTime: number
  tgePrice: number // price at TGE
  tokensDistributedAtRedeem: boolean
  projectLink?: string
  twitter?: string
  audit?: string
  tiersAirdrop?: {
    [key: string]: number
  }
}

// Version Mapping
// 2.0.0 => old bonds
// 2.1.0 => tiered bonds
// 2.1.1 => cex bonds (require api pricing)

// Start of list types
export interface BillsConfig {
  index: number
  version: string // This will be used to check compatibility versions
  cmcId?: number
  chainId: ChainId
  contractAddress: Partial<Record<ChainId, string>>
  billVersion: BillVersion
  billType: 'liquidity' | 'reserve' | 'launch' | 'migration' | 'cex' | 'staking'
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
  // * These are used for the individual bond page view
  shortDescription?: string
  fullDescription?: string
  featuredURLS?: string[]
  partnersURLS?: string[]
  tags?: string[]
  vestingCliff?: number
  onlyPartner?: boolean
  minTier?: LaunchBondTiers
  feeInPayout?: number
  warningCard?: string
  // * This is only used for the bond migration page
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

export const dexFactories: Partial<
  Record<ChainId, Partial<Record<LiquidityDex, { factory: string; router?: string; protocol: Protocols }>>>
> = {
  [ChainId.MAINNET]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV2]: {
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: Protocols.V3,
    },
    [LiquidityDex.PancakeSwapV2]: {
      factory: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
      protocol: Protocols.V2,
    },
  },
  [ChainId.BSC]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
      protocol: Protocols.V2,
    },
    [LiquidityDex.PancakeSwapV2]: {
      factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
      protocol: Protocols.V2,
      router: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    },
    [LiquidityDex.ApeSwapV3]: {
      factory: '0x7Bc382DdC5928964D7af60e7e2f6299A1eA6F48d',
      protocol: Protocols.V3,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
      protocol: Protocols.V3,
    },
    [LiquidityDex.PancakeSwapV3]: {
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x306F06C147f064A010530292A1EB6737c3e378e4', //Thena
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.ThenaV1]: {
      factory: '0xAFD89d21BdB66d00817d4153E055830B1c2B3970', //ThenaV1
      protocol: Protocols.Solidly,
      router: '0xd4ae6eCA985340Dd434D38F470aCCce4DC78D109',
    },
  },
  [ChainId.MATIC]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xcf083be4164828f00cae704ec15a36d711491284',
      protocol: Protocols.V2,
    },
    [LiquidityDex.QuickswapV2]: {
      factory: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x411b0facc3489691f28ad58c47006af5e3ab3a28', //Quickswap
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.SushiSwapV3]: {
      factory: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
      protocol: Protocols.V3,
    },
  },
  [ChainId.ARBITRUM]: {
    [LiquidityDex.ApeSwapV2]: {
      factory: '0xCf083Be4164828f00cAE704EC15a36D711491284',
      protocol: Protocols.V2,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x9C2ABD632771b433E5E7507BcaA41cA3b25D8544', //Zyberswap
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.CamelotV2]: {
      factory: '0x6EcCab422D763aC031210895C81787E87B43A652',
      protocol: Protocols.V2,
      router: '0xc873fEcbd354f5A56E00E710B90EF4201db2448d',
    },
    [LiquidityDex.Curve]: {
      factory: '0x98EE851a00abeE0d95D08cF4CA2BdCE32aeaAF7F',
      protocol: Protocols.Curve,
    },
    [LiquidityDex.PancakeSwapV3]: {
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: Protocols.V3,
    },
  },
  [ChainId.LINEA]: {
    [LiquidityDex.Spartadex]: {
      factory: '0x9E4Fc4a5A0769ba74088856C229c4a1Db2Ea5A9e',
      protocol: Protocols.V2,
    },
    [LiquidityDex.Nile]: {
      factory: '0xAAA16c016BF556fcD620328f0759252E29b1AB57', //I've changed it
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.Algebra]: {
      factory: '0x622b2c98123D303ae067DB4925CD6282B3A08D0F', //Lynex
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.Lynex]: {
      factory: '0xBc7695Fd00E3b32D08124b7a4287493aEE99f9ee',
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.XFAI]: {
      factory: '0xa5136eAd459F0E61C99Cec70fe8F5C24cF3ecA26',
      protocol: Protocols.XFAI,
    },
    [LiquidityDex.Metavault]: {
      factory: '0x9367c561915f9D062aFE3b57B18e30dEC62b8488',
      protocol: Protocols.V3,
    },
  },
  [ChainId.LIGHTLINK]: {
    [LiquidityDex.Elektrik]: {
      factory: '0xEE6099234bbdC793a43676D98Eb6B589ca7112D7',
      protocol: Protocols.V3,
    },
  },
  [ChainId.BASE]: {
    [LiquidityDex.Synthswap]: {
      factory: '0x4bd16d59A5E1E0DB903F724aa9d721a31d7D720D',
      protocol: Protocols.V2,
    },
    [LiquidityDex.Algebra]: {
      factory: '0xa37359E63D1aa44C0ACb2a4605D3B45785C97eE3', // Synthswap
      protocol: Protocols.Algebra,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Aerodrome]: {
      factory: '0x420DD381b31aEf6683db6B902084cB0FFECe40Da',
      router: '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43',
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.SmarDex]: {
      factory: '0xdd4536dD9636564D891c919416880a3e250f975A',
      protocol: Protocols.V2, //SmarDex is not actually a V2. Way of calculating price is similar though
    },
    [LiquidityDex.UniswapV2]: {
      factory: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
      router: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
      protocol: Protocols.V2,
    },
  },
  [ChainId.IOTA]: {
    [LiquidityDex.MagicSea]: {
      factory: '0x349aaAc3a500014981CBA11b64C76c66a6c1e8D0',
      protocol: Protocols.V2,
    },
    [LiquidityDex.Wagmi]: {
      factory: '0x01Bd510B2eA106917e711f9a05a42fC162bee2Ac',
      protocol: Protocols.V3,
    },
  },
  [ChainId.AVAX]: {
    [LiquidityDex.LFJ]: {
      factory: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
      protocol: Protocols.V2,
    },
    [LiquidityDex.Pharaoh]: {
      factory: '0xAAA32926fcE6bE95ea2c51cB4Fcb60836D320C42',
      protocol: Protocols.V3,
    },
    [LiquidityDex.UniswapV3]: {
      factory: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Pangolin]: {
      factory: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
      protocol: Protocols.V2,
    },
  },
  [ChainId.BLAST]: {
    [LiquidityDex.ThrusterV2_03]: {
      factory: '0xb4A7D971D0ADea1c73198C97d7ab3f9CE4aaFA13',
      protocol: Protocols.V2,
    },
    [LiquidityDex.ThrusterV2_1]: {
      factory: '0x37836821a2c03c171fB1a595767f4a16e2b93Fc4',
      protocol: Protocols.V2,
    },
    [LiquidityDex.ThrusterV3]: {
      factory: '0x71b08f13B3c3aF35aAdEb3949AFEb1ded1016127',
      protocol: Protocols.V3,
    },
  },
  [ChainId.SINGULARITY_TESTNET]: {
    [LiquidityDex.Citea]: {
      factory: '0xd8388EECE67C003eF952D32c4E3943113C5f5608',
      protocol: Protocols.V2,
    },
  },
  [ChainId.CROSSFI]: {
    [LiquidityDex.XSwap]: {
      factory: '0x3ca837175312070f4E4fF64972a199122Ee03805',
      protocol: Protocols.V2,
    },
  },
  [ChainId.SONIC]: {
    [LiquidityDex.ShadowExchange]: {
      factory: '0x2dA25E7446A70D7be65fd4c053948BEcAA6374c8',
      router: '0x1D368773735ee1E678950B7A97bcA2CafB330CDc',
      protocol: Protocols.Solidly,
    },
    // [LiquidityDex.ShadowExchangeV3]: {
    //   factory: '	0xcD2d0637c94fe77C2896BbCBB174cefFb08DE6d7',
    //   protocol: Protocols.V3,
    // },
    [LiquidityDex.SwapX]: {
      factory: '0x05c1be79d3aC21Cc4B727eeD58C9B2fF757F5663',
      router: '0xF5F7231073b3B41c04BA655e1a7438b1a7b29c27',
      protocol: Protocols.Solidly,
    },
    [LiquidityDex.SwapXAlgebraIntegral]: {
      factory: '0x8121a3F8c4176E9765deEa0B95FA2BDfD3016794',
      protocol: Protocols.AlgebraIntegral,
    },
    [LiquidityDex.Wagmi]: {
      factory: '0x56CFC796bC88C9c7e1b38C2b0aF9B7120B079aef',
      protocol: Protocols.V3,
    },
    [LiquidityDex.Equalizer]: {
      factory: '0xDDD9845Ba0D8f38d3045f804f67A1a8B9A528FcC',
      router: '0x7635cD591CFE965bE8beC60Da6eA69b6dcD27e4b',
      protocol: Protocols.Solidly,
    },
  },
  [ChainId.MONAD_TESTNET]: {
    [LiquidityDex.PancakeSwapV2]: {
      factory: '0x82438CE666d9403e488bA720c7424434e8Aa47CD',
      protocol: Protocols.V2,
    },
    [LiquidityDex.LFJ]: {
      factory: '0xe32D45C2B1c17a0fE0De76f1ebFA7c44B7810034',
      protocol: Protocols.V2,
    },
  },
  [ChainId.BERACHAIN]: {
    [LiquidityDex.KodiakV2]: {
      factory: '0x5e705e184d233ff2a7cb1553793464a9d0c3028f',
      protocol: Protocols.V2,
    },
    [LiquidityDex.KodiakV3]: {
      factory: '0xD84CBf0B02636E7f53dB9E5e45A616E05d710990',
      protocol: Protocols.V3,
    },
  },
}

export const defaultDexFactories: Partial<Record<ChainId, Partial<Record<Protocols, string>>>> = {
  [ChainId.MAINNET]: {
    [Protocols.V2]: dexFactories[ChainId.MAINNET]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.MAINNET]?.UniswapV3?.factory,
  },
  [ChainId.BSC]: {
    [Protocols.V2]: dexFactories[ChainId.BSC]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.BSC]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.BSC]?.Algebra?.factory,
    [Protocols.Solidly]: dexFactories[ChainId.BSC]?.ThenaV1?.factory,
  },
  [ChainId.MATIC]: {
    [Protocols.V2]: dexFactories[ChainId.MATIC]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.MATIC]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.MATIC]?.Algebra?.factory,
  },
  [ChainId.ARBITRUM]: {
    [Protocols.V2]: dexFactories[ChainId.ARBITRUM]?.ApeSwapV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.ARBITRUM]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.ARBITRUM]?.Algebra?.factory,
    [Protocols.Curve]: dexFactories[ChainId.ARBITRUM]?.Curve?.factory,
  },
  [ChainId.LINEA]: {
    [Protocols.V2]: dexFactories[ChainId.LINEA]?.Spartadex?.factory,
    [Protocols.V3]: dexFactories[ChainId.LINEA]?.Nile?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.LINEA]?.Algebra?.factory,
    [Protocols.Solidly]: dexFactories[ChainId.LINEA]?.Lynex?.factory,
    [Protocols.XFAI]: dexFactories[ChainId.LINEA]?.XFAI?.factory,
  },
  [ChainId.LIGHTLINK]: {
    [Protocols.V3]: dexFactories[ChainId.LIGHTLINK]?.Elektrik?.factory,
  },
  [ChainId.BASE]: {
    [Protocols.V2]: dexFactories[ChainId.BASE]?.SmarDex?.factory,
    [Protocols.V3]: dexFactories[ChainId.BASE]?.UniswapV3?.factory,
    [Protocols.Algebra]: dexFactories[ChainId.BASE]?.Algebra?.factory,
    [Protocols.Solidly]: dexFactories[ChainId.BASE]?.Aerodrome?.factory,
  },
  [ChainId.IOTA]: {
    [Protocols.V2]: dexFactories[ChainId.IOTA]?.MagicSea?.factory,
  },
  [ChainId.AVAX]: {
    [Protocols.V2]: dexFactories[ChainId.AVAX]?.LFJ?.factory,
    [Protocols.V3]: dexFactories[ChainId.AVAX]?.Pharaoh?.factory,
  },
  [ChainId.BLAST]: {
    [Protocols.V2]: dexFactories[ChainId.BLAST]?.ThrusterV2_03?.factory,
    [Protocols.V3]: dexFactories[ChainId.BLAST]?.ThrusterV3?.factory,
  },
  [ChainId.SINGULARITY_TESTNET]: {
    [Protocols.V2]: dexFactories[ChainId.SINGULARITY_TESTNET]?.Citea?.factory,
  },
  [ChainId.CROSSFI]: {
    [Protocols.V2]: dexFactories[ChainId.CROSSFI]?.XSwap?.factory,
  },
  [ChainId.SONIC]: {
    [Protocols.Solidly]: dexFactories[ChainId.SONIC]?.ShadowExchange?.factory,
    [Protocols.V3]: dexFactories[ChainId.SONIC]?.Wagmi?.factory,
    [Protocols.AlgebraIntegral]: dexFactories[ChainId.SONIC]?.SwapXAlgebraIntegral?.factory,
  },
  [ChainId.MONAD_TESTNET]: {
    [Protocols.V2]: dexFactories[ChainId.MONAD_TESTNET]?.LFJ?.factory,
  },
  [ChainId.BERACHAIN]: {
    [Protocols.V2]: dexFactories[ChainId.BERACHAIN]?.KodiakV2?.factory,
    [Protocols.V3]: dexFactories[ChainId.BERACHAIN]?.KodiakV3?.factory,
  },
}

export const dexToZapMapping: Record<LiquidityDex, Partial<Record<ChainId, ZapVersion>>> = {
  [LiquidityDex.ApeSwapV2]: {
    [ChainId.BSC]: ZapVersion.SoulZap,
    [ChainId.BSC_TESTNET]: ZapVersion.ZapV1,
    [ChainId.MATIC]: ZapVersion.ZapV1,
    [ChainId.MATIC_TESTNET]: ZapVersion.ZapV1,
    [ChainId.MAINNET]: ZapVersion.ZapV1,
    [ChainId.ARBITRUM]: ZapVersion.External,
    [ChainId.TLOS]: ZapVersion.ZapV1,
  },
  [LiquidityDex.Algebra]: {
    [ChainId.BSC]: ZapVersion.SoulZapApi,
    [ChainId.MATIC]: ZapVersion.SoulZapApi,
    [ChainId.LINEA]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.PancakeSwapV2]: {
    [ChainId.BSC]: ZapVersion.SoulZap,
    [ChainId.MAINNET]: ZapVersion.External,
  },
  [LiquidityDex.QuickswapV2]: {
    [ChainId.MATIC]: ZapVersion.SoulZap,
  },
  [LiquidityDex.ApeSwapV3]: {},
  [LiquidityDex.UniswapV3]: {
    [ChainId.ARBITRUM]: ZapVersion.SoulZapApi,
    [ChainId.MATIC]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.ThenaV1]: { [ChainId.BSC]: ZapVersion.SoulZapApi },
  [LiquidityDex.UniswapV2]: {
    [ChainId.BASE]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.PancakeSwapV3]: {},
  [LiquidityDex.External]: {},
  [LiquidityDex.Spartadex]: {},
  [LiquidityDex.Nile]: {},
  [LiquidityDex.XFAI]: {},
  [LiquidityDex.Lynex]: {},
  [LiquidityDex.Metavault]: {},
  [LiquidityDex.Elektrik]: {},
  [LiquidityDex.SushiSwapV3]: {},
  [LiquidityDex.Synthswap]: {},
  [LiquidityDex.Aerodrome]: {
    [ChainId.BASE]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.SmarDex]: {},
  [LiquidityDex.MagicSea]: {
    [ChainId.IOTA]: ZapVersion.External,
  },
  [LiquidityDex.Wagmi]: {
    [ChainId.IOTA]: ZapVersion.External,
  },
  [LiquidityDex.CamelotV2]: {
    [ChainId.ARBITRUM]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.LFJ]: {
    [ChainId.AVAX]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.Pharaoh]: {},
  [LiquidityDex.Pangolin]: {
    [ChainId.AVAX]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.Curve]: {},
  [LiquidityDex.ThrusterV2_03]: {
    [ChainId.BLAST]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.ThrusterV2_1]: {
    [ChainId.BLAST]: ZapVersion.SoulZapApi,
  },
  [LiquidityDex.ThrusterV3]: {},
  [LiquidityDex.Citea]: {},
  [LiquidityDex.XSwap]: {},
  [LiquidityDex.ShadowExchange]: {},
  [LiquidityDex.SwapX]: {},
  [LiquidityDex.SwapXAlgebraIntegral]: {},
  [LiquidityDex.TrebleSwapV2]: {},
  [LiquidityDex.TrebleAlgebraIntegral]: {},
  [LiquidityDex.KodiakV2]: {},
  [LiquidityDex.KodiakV3]: {},
  [LiquidityDex.Equalizer]: {},
}
