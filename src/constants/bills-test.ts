import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { BillArtCollection, BillsConfig, BillVersion } from '../types'

/**
 *
 * Central location to manage the test configurations for easy updates.
 *
 * Ideally this doesn't make it into a production publish.
 */
export const billsTest: BillsConfig[] = [
  {
    index: 16564,
    contractAddress: {
      [ChainId.BSC]: '0xff05Fd09Ee4dcab917E1710f937A6Cf4aFB9B3AB',
    },
    billType: 'liquidity',
    billVersion: BillVersion.V2,
    token: tokens.wbnb,
    quoteToken: tokens.usdt,
    lpToken: tokens.pcsBnbUsdt,
    earnToken: tokens.TTT,
    billNnftAddress: {
      [ChainId.BSC]: '0xce112e14e23b7700ad4915290ea24575f01609fa',
    },
    inactive: false,
    projectLink: 'https://www.PCS.app/',
    twitter: 'https://twitter.com/',
    audit: 'Add audit link',
    initTime: { [ChainId.MATIC]: 1690287710 },
    initPrice: { [ChainId.MATIC]: 0.00123 },
    billArt: { collection: BillArtCollection.Quickswap_Collection1 },
  },
  {
    index: 16543,
    contractAddress: {
      [ChainId.MATIC]: '0xeb822b7c6f44e4FF701Be94A93aE8B7C2E0C8F47',
    },
    billType: 'liquidity',
    billVersion: BillVersion.V2,
    token: tokens.quick,
    quoteToken: tokens.wmatic,
    lpToken: tokens.quickMatic,

    earnToken: tokens.TTT,
    billNnftAddress: {
      [ChainId.MATIC]: '0xa1c78af783fb9ea7be790cbbd01abff63beae769',
    },
    inactive: false,
    projectLink: 'https://www.quickswap.app/',
    twitter: 'https://twitter.com/',
    audit: 'Add audit link',
    initTime: { [ChainId.MATIC]: 1690287710 },
    initPrice: { [ChainId.MATIC]: 0.00123 },
    billArt: { collection: BillArtCollection.Quickswap_Collection1 },
  },
  // {
  //   index: 983649,
  //   contractAddress: {
  //     [ChainId.MATIC]: '0xA293cAD7a7163bD8327737bd6dc2Bc66613f0FC8',
  //   },
  //   billType: 'liquidity',
  //   billVersion: BillVersion.V2,
  //   token: tokens.doubloons,
  //   quoteToken: tokens.wmatic,
  //   lpToken: tokens.maticDoubloons,
  //   earnToken: tokens.doubloons,
  //   billNnftAddress: {
  //     [ChainId.MATIC]: '0xf63e25B5492A856189420724fe6f3573620966f3',
  //   },
  //   inactive: false,
  //   projectLink: 'https://www.quickswap.app/',
  //   twitter: 'https://twitter.com/',
  //   audit: 'Add audit link',
  //   initTime: { [ChainId.MATIC]: 1690087710 },
  //   initPrice: { [ChainId.MATIC]: 0.00123 },
  // },
  // {
  //   index: 16543,
  //   contractAddress: {
  //     [ChainId.MATIC]: '0x6D17B2013728D7900f131816013ade561e4D6150',
  //   },
  //   billType: 'liquidity',
  //   billVersion: BillVersion.V2,
  //   token: tokens.quick,
  //   quoteToken: tokens.wmatic,
  //   lpToken: tokens.quickMatic,
  //   earnToken: tokens.quicktest,
  //   billNnftAddress: {
  //     [ChainId.MATIC]: '0xf63e25B5492A856189420724fe6f3573620966f3',
  //   },
  //   inactive: false,
  //   projectLink: 'https://www.quickswap.app/',
  //   twitter: 'https://twitter.com/',
  //   audit: 'Add audit link',
  //   initTime: { [ChainId.MATIC]: 1690287710 },
  //   initPrice: { [ChainId.MATIC]: 0.00123 },
  // },
]
