import { JungleFarmConfig } from 'types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const jungleFarmsV2: JungleFarmConfig[] = [
  //Current Jungle ID = 1

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
    rewardsPerSecond: '0.333333',
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
    rewardsPerSecond: '0.333333',
    tokenPerBlock: '0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
]

export default jungleFarmsV2
