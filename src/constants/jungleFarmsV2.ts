import { JungleFarmConfig } from 'types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const jungleFarmsV2: JungleFarmConfig[] = [
  //Current BNB Jungle ID = 2
  //Current MATIC Jungle ID: 1001

  {
    jungleId: 1,
    tokenName: tokens.theBnb_Ichi.symbol,
    image: 'THE.svg',
    stakingToken: tokens.theBnb_Ichi,
    rewardToken: tokens.the,
    lpTokens: {
      token: tokens.the,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0xAde0c701F7566D6481aFF6CF62a39b60e0b6EFD4',
    },
    projectLink: 'http://livegreencoin.com/',
    twitter: 'https://twitter.com/LiveGreenCoin1',
    audit: 'https://www.certik.com/projects/livegreencoin',
    harvest: true,
    rewardsPerSecond: '0.000003858024691',
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
    tokenName: tokens.busdBnb_Thena.symbol,
    image: 'THE.svg',
    stakingToken: tokens.busdBnb_Thena,
    rewardToken: tokens.the,
    lpTokens: {
      token: tokens.the,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0x01B9B9C2C2a5f97132858609249455FbF819FC21',
    },
    projectLink: 'http://livegreencoin.com/',
    twitter: 'https://twitter.com/LiveGreenCoin1',
    audit: 'https://www.certik.com/projects/livegreencoin',
    harvest: true,
    rewardsPerSecond: '0.000003858024691',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },

  /* Polygon Jungle Farms starts here */
  {
    jungleId: 1000,
    tokenName: tokens.maticEth_Ichi.symbol,
    image: 'QUICK.svg',
    stakingToken: tokens.maticEth_Ichi,
    rewardToken: tokens.quick,
    lpTokens: {
      token: tokens.wmatic,
      quoteToken: tokens.eth,
    },
    contractAddress: {
      [ChainId.MATIC]: '0xa74f2D6B10f8003A1e07d50d9f19A07c0B42deAf',
    },
    projectLink: 'http://livegreencoin.com/',
    twitter: 'https://twitter.com/LiveGreenCoin1',
    audit: 'https://www.certik.com/projects/livegreencoin',
    harvest: true,
    rewardsPerSecond: '0.000003858024691',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.MATIC,
  },
  {
    jungleId: 1001,
    tokenName: tokens.maticEth_Qs.symbol,
    image: 'QUICK.svg',
    stakingToken: tokens.maticEth_Qs,
    rewardToken: tokens.quick,
    lpTokens: {
      token: tokens.wmatic,
      quoteToken: tokens.eth,
    },
    contractAddress: {
      [ChainId.MATIC]: '0x36CD02D189AD121859d2669F031074AB17F7e21B',
    },
    projectLink: 'http://livegreencoin.com/',
    twitter: 'https://twitter.com/LiveGreenCoin1',
    audit: 'https://www.certik.com/projects/livegreencoin',
    harvest: true,
    rewardsPerSecond: '0.000003858024691',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.MATIC,
  },
]

export default jungleFarmsV2
