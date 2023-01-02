import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { DualFarmConfig } from '../types'

// Max PID is 13

const dualFarms: DualFarmConfig[] = [
  {
    pid: 0,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x034293F21F1cCE5908BC605CE5850dF2b1059aC0',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.banana,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 1,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x6Cf8654e85AB489cA7e70189046D507ebA233613',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.eth,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 2,
    network: ChainId.MATIC,
    stakeTokenAddress: '0xd32f3139A214034A0f9777c87eE0a064c1FF6AE2',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.dai,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 3,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x65D43B64E3B31965Cd5EA367D4c2b94c03084797',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.usdt,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 4,
    network: ChainId.MATIC,
    stakeTokenAddress: '0xe82635a105c520fd58e597181cBf754961d51E3e',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.btc,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 5,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x5b13B583D4317aB15186Ed660A1E4C65C10da659',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.usdc,
      token1: tokens.dai,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 6,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x0359001070cF696D5993E0697335157a6f7dB289',
    rewarderAddress: '0x1F234B1b83e21Cb5e2b99b4E498fe70Ef2d6e3bf',
    dualImage: false,
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.wbnb,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.wmatic,
    },
  },
  {
    pid: 7,
    network: ChainId.MATIC,
    stakeTokenAddress: '0xB8e54c9Ea1616beEBe11505a419DD8dF1000E02a',
    rewarderAddress: '0x75f73Fec666052149FaE95a3655890b911E160a4',
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.crystl,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.crystl,
    },
  },
  {
    pid: 8,
    network: ChainId.MATIC,
    stakeTokenAddress: '0xf67DE5Cf1fB01DC4df842a846Df2a7Ec07c41b93',
    rewarderAddress: '0xb08fc08D16eBE8B80c34d2E20628dD8462768E9b',
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.watch,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.watch,
    },
  },
  {
    pid: 9,
    network: ChainId.MATIC,
    stakeTokenAddress: '0xb01bAf15079eE93590A862Df37234e8f7C9825bF',
    rewarderAddress: '0xDe0a831D482bBd001aceB5a788e4adc502C5E6BA',
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.jdi,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.jdi,
    },
  },
  {
    pid: 10,
    network: ChainId.MATIC,
    stakeTokenAddress: '0xcBf71C04148e5C463223F07A64a50f2Df46B6cdc',
    rewarderAddress: '0x5237c7a45f4A8905140e1439F9463a27b663fB34',
    stakeTokens: {
      token0: tokens.usdc,
      token1: tokens.abr,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.abr,
    },
  },
  {
    pid: 11,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x2735d319739edc6c47c3a20aa5402b931c3f1a1e',
    rewarderAddress: '0x53074a829b27aebf8dfa892c715cb6f41fb2db6e',
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.nfty2,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.nfty2,
    },
  },
  {
    pid: 12,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x0806a407d6eea72788d91c36829a19d424446040',
    rewarderAddress: '0xc4e3457D0039815CF839f2Cb9141FCb442A6200b',
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.kom,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.kom,
    },
  },
  {
    pid: 13,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x545cb3055e62c86f54ba479c7cafc7e1e2eeec54',
    rewarderAddress: '0xfFc2Ab60A93C2e06eEa8d7C4d7a027fE4d02a67F',
    stakeTokens: {
      token0: tokens.wmatic,
      token1: tokens.traxx,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.dai,
    },
  },
  {
    pid: 16,
    network: ChainId.MATIC,
    stakeTokenAddress: '0x81A3F6a138F0B12eCBDCE4583972A6CA57514dBd',
    rewarderAddress: '0xDB25C31f864Ac2Ae43236D4639EC9056B0971736',
    stakeTokens: {
      token0: tokens.usdc,
      token1: tokens.axn,
    },
    rewardTokens: {
      token0: tokens.banana,
      token1: tokens.axn,
    },
  },
]

export default dualFarms
