import { JungleFarmConfig } from 'types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const jungleFarmsV2: JungleFarmConfig[] = [
  //Current BNB Jungle ID = 2
  //Current MATIC Jungle ID: 1001
  //Current ETH Jungle ID: 2001

  {
    jungleId: 1,
    tokenName: tokens.abondBnb_Thena.symbol,
    image: 'ABOND.svg',
    stakingToken: tokens.abondBnb_Thena,
    rewardToken: tokens.abond,
    lpTokens: {
      token: tokens.abond,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x8A5de8f19789a9f05f8D1B465ED85b0bC1C1fCD3',
    },
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.021433470508',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
  {
    jungleId: 2,
    tokenName: tokens.abondBnb_Ichi.symbol,
    image: 'ABOND.svg',
    stakingToken: tokens.abondBnb_Ichi,
    rewardToken: tokens.abond,
    lpTokens: {
      token: tokens.abond,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0xc2478306b8021046FBe8569d74f844515abaE2fD',
    },
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.085733882030',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },

  /* Polygon Jungle Farms starts here */

  /* ETH jungle Farms Starts Here */
  {
    jungleId: 2000,
    tokenName: tokens.abondEth_UNIV2.symbol,
    image: 'ABOND.svg',
    stakingToken: tokens.abondEth_UNIV2,
    rewardToken: tokens.abond,
    lpTokens: {
      token: tokens.abond,
      quoteToken: tokens.eth,
    },
    contractAddress: {
      [ChainId.MAINNET]: '0x7a5172771fb1eBF67acE7f7876D1cA190937C9d7',
    },
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.021433470508',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.MAINNET,
  },
  {
    jungleId: 2001,
    tokenName: tokens.abondEth_Ichi.symbol,
    image: 'ABOND.svg',
    stakingToken: tokens.abondEth_Ichi,
    rewardToken: tokens.abond,
    lpTokens: {
      token: tokens.abond,
      quoteToken: tokens.eth,
    },
    contractAddress: {
      [ChainId.MAINNET]: '0x052FB14873e8ac8C1D5446a2ad60A6BB10A77C1D',
    },
    projectLink: 'https://ape.bond/',
    twitter: 'https://twitter.com/ApeBond',
    audit: 'https://paladinsec.co/projects/apeswap/',
    harvest: true,
    rewardsPerSecond: '0.085733882030',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.MAINNET,
  },
]

export default jungleFarmsV2
