import { JungleFarmConfig } from 'types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const jungleFarmsV2: JungleFarmConfig[] = [
  //Current BNB Jungle ID = 2
  //Current MATIC Jungle ID: 1001

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
]

export default jungleFarmsV2
