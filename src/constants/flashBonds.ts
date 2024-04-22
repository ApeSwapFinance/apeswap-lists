import { BillArtCollection, BillVersion, FlashBondConfig /* BillArtCollection, BillVersion, */ } from '../types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const flashBonds: FlashBondConfig[] = [
  {
    index: 0,
    round: '1',
    totalRaiseString: '$150K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0x7A4fE4beBF55A3EDB6e11DE821bCB1A17C21000d', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.btc,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1713813300, // April 23rd 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1713838500, //April 23rd 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1713838500, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 1,
    round: '1',
    discountString: '2%',
    totalRaiseString: '$50K',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.btc,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1713891600, // April 23rd 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1713895200, //April 23rd 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1713891600, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 2,
    round: '2',
    totalRaiseString: '$250K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.eth,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714064400, // April 25th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714068000, //April 25th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714064400, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 3,
    round: '2',
    totalRaiseString: '$75K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.eth,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714064400, // April 25th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714068000, //April 25th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714064400, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 4,
    round: '3',
    totalRaiseString: '$300K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.wbnb,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714496400, // April 30th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714500000, // April 30th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714496400, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 5,
    round: '3',
    totalRaiseString: '$80K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.wbnb,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714496400, // April 30th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714500000, // April 30th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714496400, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 6,
    round: '3',
    totalRaiseString: '$25K',
    discountString: '1%',
    tierString: 'gold',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.wbnb,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714496400, // April 30th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714500000, // April 30th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714496400, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 7,
    round: '4',
    totalRaiseString: '$200K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.btc,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714669200, // May 2nd 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714672800, // May 2nd 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714669200, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 8,
    round: '4',
    totalRaiseString: '$50K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.btc,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1714669200, // May 2nd 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1714672800, // May 2nd 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714669200, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 9,
    round: '5',
    totalRaiseString: '$250K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.btc,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1715101200, // May 7th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715104800, // May 7th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715101200, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 10,
    round: '5',
    totalRaiseString: '$50K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.btc,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1715101200, // May 7th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715104800, // May 7th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715101200, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 11,
    round: '6',
    totalRaiseString: '$300K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.eth,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1715274000, // May 9th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715277600, // May 9th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715274000, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 12,
    round: '6',
    totalRaiseString: '$80K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.eth,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1715274000, // May 9th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715277600, // May 9th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715274000, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 13,
    round: '6',
    totalRaiseString: '$20K',
    discountString: '1%',
    tierString: 'gold',
    contractAddress: {
      [ChainId.BSC]: '', //
    },
    billVersion: BillVersion.FlashTieredSale,
    billType: 'oversubscription',
    token: tokens.usdt,
    earnToken: tokens.eth,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: {
      [ChainId.BSC]: 1715274000, // May 9th 17 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715277600, // May 9th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715274000, //dummy
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
]

export default flashBonds
