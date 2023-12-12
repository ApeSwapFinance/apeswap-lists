import { ChainId } from '@ape.swap/sdk'
import { PoolConfig, PoolCategory } from '../types'
import tokens from './tokens'

// Current BNB Sous ID is 2
// Current MATIC Sous ID is 1000
// Current ETH Sous ID is 2000

const poolsV2: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'ABOND',
    image: 'ABOND.svg',
    stakingToken: tokens.abond,
    rewardToken: tokens.veabond,
    contractAddress: {
      [ChainId.BSC]: '0xF3073734a539c0c151Bdfc093DC816bCEFb4135c',
    },
    poolCategory: PoolCategory.REAL_YIELD,
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.021433470508',
    tokenPerBlock: `0`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 2,
    tokenName: 'ABOND',
    image: 'ABOND.svg',
    stakingToken: tokens.abond,
    rewardToken: tokens.abond,
    contractAddress: {
      [ChainId.BSC]: '0x8DB43af8aE6988657C6363e0Aca8d658FDAEA1f7',
    },
    poolCategory: PoolCategory.REAL_YIELD,
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.021433470508',
    tokenPerBlock: `0`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  /* Polygon Pools Starts Here */
  {
    sousId: 1000,
    tokenName: 'ABOND',
    image: 'ABOND.svg',
    stakingToken: tokens.abondMatic_QS,
    rewardToken: tokens.abond,
    contractAddress: {
      [ChainId.MATIC]: '0x2B41D626C7C3ab5620AA128dc664145564102dC3',
    },
    poolCategory: PoolCategory.REAL_YIELD,
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.004286694102',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]
export default poolsV2
