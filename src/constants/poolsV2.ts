import { ChainId } from '@ape.swap/sdk'
import { PoolConfig, PoolCategory } from '../types'
import tokens from './tokens'

// Current BNB Sous ID is 240
// Current MATIC Sous ID is 1000

const poolsV2: PoolConfig[] = [
  {
    sousId: 240,
    tokenName: 'THE',
    image: 'THE.svg',
    stakingToken: tokens.the,
    rewardToken: tokens.the,
    contractAddress: {
      [ChainId.BSC]: '0x4e067401a0f1744248e99c0345E640a28cF1C8b6',
    },
    poolCategory: PoolCategory.REAL_YIELD,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.000003858024691',
    tokenPerBlock: `0`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  /* Polygon Pools Starts Here */
  {
    sousId: 1000,
    tokenName: 'QUICK',
    image: 'QUICK.svg',
    stakingToken: tokens.quick,
    rewardToken: tokens.quick,
    contractAddress: {
      [ChainId.MATIC]: '0x27cc4008129c7e790FD306b2aA3f62c3CDebD044',
    },
    poolCategory: PoolCategory.REAL_YIELD,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/ape_swap',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.000003858024691',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]
export default poolsV2
