import { JungleFarmConfig } from 'types'
import tokens from './tokens'
import { ChainId } from '@ape.swap/sdk'

const jungleFarmsV2: JungleFarmConfig[] = [
  //Current Jungle ID = 1
  {
    jungleId: 1, //I'm using id 1 though this is actually ID 18 from the legacyList
    tokenName: tokens.lgcBnb.symbol,
    image: 'LGC.svg',
    stakingToken: tokens.lgcBnb,
    rewardToken: tokens.lgc,
    lpTokens: {
      token: tokens.lgc,
      quoteToken: tokens.wbnb,
    },
    contractAddress: {
      [ChainId.BSC]: '0xd98dc646823054E9c5e194b2aAc2C277cFba17FA',
    },
    projectLink: 'http://livegreencoin.com/',
    twitter: 'https://twitter.com/LiveGreenCoin1',
    audit: 'https://www.certik.com/projects/livegreencoin',
    harvest: true,
    tokenPerBlock: '0.464236111111111111',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
    isEarnTokenLp: false,
    network: ChainId.BSC,
  },
]

export default jungleFarmsV2
