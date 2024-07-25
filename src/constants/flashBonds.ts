import {
  BillArtCollection,
  BillVersion,
  ChainId,
  FlashBondConfig /* BillArtCollection, BillVersion, */,
} from '../types'
import tokens from './tokens'

const flashBonds: FlashBondConfig[] = [
  {
    index: 0,
    round: '1',
    totalRaiseString: '$150K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0xE3aB699270B17477130E2A772e5B07F3Df090275', // legend
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
      [ChainId.BSC]: 1713895200, // April 23rd 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1713895200, // April 23rd 18 UTC
    },
    initPrice: {
      [ChainId.BSC]: 64602,
    },
    initialRelease: 100,
  },
  {
    index: 1,
    round: '1',
    totalRaiseString: '$50K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '0xA273509FB06D9f6325db14E1eDf2D3e1450A9F34', // diamond BTC
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
      [ChainId.BSC]: 1713895200, // April 23rd 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1713895200, // April 23rd 18 UTC
    },
    initPrice: {
      [ChainId.BSC]: 65268,
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
      [ChainId.BSC]: '0xd6E52Ab49D910d9A7eFe5f2c92208ccd9086b845',
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
      [ChainId.BSC]: 1714068000, // April 25th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714068000, // April 25th 18 UTC
    },
    initPrice: {
      [ChainId.BSC]: 3055.5,
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
      [ChainId.BSC]: '0xe6A87D0a7bA0a13Ee2B3f2f611520dC601f9b25e',
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
      [ChainId.BSC]: 1714068000, // April 25th 18 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1714068000, // April 25th 18 UTC
    },
    initPrice: {
      [ChainId.BSC]: 3087,
    },
    initialRelease: 100,
  },
  {
    index: 4,
    round: '3',
    totalRaiseString: '$180K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0x4e6aBD71528691d3b7158ea002D1449C63165437', // legend prod
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
      [ChainId.BSC]: 1715108400, // May 7th 1900 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715110200, // May 7th 1930 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715110200, // May 7th 1930 UTC
    },
    initPrice: {
      [ChainId.BSC]: 567.45,
    },
    initialRelease: 100,
  },
  {
    index: 5,
    round: '3',
    totalRaiseString: '$60K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '0xFd2a077A9BeDF95d871E60FDefe90DD334E669c1', // diamond prod
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
      [ChainId.BSC]: 1715104800, // May 7th 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715106600, // May 7th 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715106600, // May 7th 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 579.18,
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
      [ChainId.BSC]: '0xD6D1f59F12D03208c2db5454f6867d65Ed8b58C2', // prod bond
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
      [ChainId.BSC]: 1715101200, // May 7th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715103000, // May 7th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715103000, // May 7th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 584.1,
    },
    initialRelease: 100,
  },
  {
    index: 7,
    round: '4',
    totalRaiseString: '$160K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0x7dfa78c8a05Fa6Ad1AAb6dC5C434aD0dfCBAaa50', // legend prod
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
      [ChainId.BSC]: 1715364000, // May 10th 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715365800, // May 10th 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715365800, // May 10th 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 58784.91,
    },
    initialRelease: 100,
  },
  {
    index: 8,
    round: '4',
    totalRaiseString: '$60K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '0x74A332f2dfffB52A86D19a61EAFd501274b2b91F', // diamond prod
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
      [ChainId.BSC]: 1715360400, // May 10th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715362200, // May 10th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715362200, // May 10th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 59594.78,
    },
    initialRelease: 100,
  },
  {
    index: 9,
    round: '5',
    totalRaiseString: '$120K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0x64c95f7d6aE3A8510607D991277378801126e534', // legend prod
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
      [ChainId.BSC]: 1715709600, // May 14th 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715711400, // May 14th 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715711400, // May 14th 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 59703.5,
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
      [ChainId.BSC]: '0x3d29Ed03B3a933f72Fca3B68a4d26CB1b2A5c205', // diamond prod
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
      [ChainId.BSC]: 1715706000, // May 14th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1715707800, // May 14th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1715707800, // May 14th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 60368,
    },
    initialRelease: 100,
  },
  {
    index: 11,
    round: '6',
    totalRaiseString: '100K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0x529C86133833347B1DEc32Daf368c9ed74c8cd10', // legend prod!!
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
      [ChainId.BSC]: 1716577800, // May 24th 1910 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1716579600, // May 24th 1940 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1716579600, // May 24th 1940 UTC
    },
    initPrice: {
      [ChainId.BSC]: 3621.98,
    },
    initialRelease: 100,
  },
  {
    index: 12,
    round: '6',
    totalRaiseString: '40K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '0x4eA7b39560edFFA2717539984e80d699dC94B36F', // diamond prod
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
      [ChainId.BSC]: 1716574500, // May 24th 1815 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1716576000, // May 24th 1840 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1716576000, // May 24th 1840 UTC
    },
    initPrice: {
      [ChainId.BSC]: 3637.76,
    },
    initialRelease: 100,
  },
  {
    index: 13,
    round: '6',
    totalRaiseString: '20K',
    discountString: '1%',
    tierString: 'gold',
    contractAddress: {
      [ChainId.BSC]: '0xaB2C831ff65bBfac06b3D91E0422B03E229b852d', // prod gold
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
      [ChainId.BSC]: 1716570000, // May 24th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1716571800, // May 24th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1716571800, // May 24th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 3644.19,
    },
    initialRelease: 100,
  },
  {
    index: 14,
    round: '7',
    totalRaiseString: '30K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '0xDe60F960c8030FdE9d8eE212Ed04ffE06b294195', // diamond prod
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
      [ChainId.BSC]: 1721926800, // July 25th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1721928600, // July 25th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1721928600, // July 25th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 63694.46,
    },
    initialRelease: 100,
  },
  {
    index: 15,
    round: '7',
    totalRaiseString: '100K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '0xC43ef242F2a18bD51Aa9F19dc967b5b0ebbf22DB', // legend prod
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
      [ChainId.BSC]: 1721930400, // July 25th 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1721932200, // July 25th 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1721932200, // July 25th 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 63184.83,
    },
    initialRelease: 100,
  },
  {
    index: 16,
    round: '8',
    totalRaiseString: '40K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1722531600, // Aug 1st 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1722533400, // Aug 1st 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1722533400, // Aug 1st 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 17,
    round: '8',
    totalRaiseString: '120K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1722535200, // Aug 1st 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1722537000, // Aug 1st 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1722537000, // Aug 1st 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 18,
    round: '9',
    totalRaiseString: '15K',
    discountString: '1%',
    tierString: 'gold',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1723136400, // Aug 8th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1723138200, // Aug 8th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1723138200, // Aug 8th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 19,
    round: '9',
    totalRaiseString: '30K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1723140000, // Aug 8th 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1723141800, // Aug 8th 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1723141800, // Aug 8th 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 20,
    round: '9',
    totalRaiseString: '100K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1723143600, // Aug 8th 1900 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1723145400, // Aug 8th 1930 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1723145400, // Aug 8th 1930 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 21,
    round: '10',
    totalRaiseString: '30K',
    discountString: '2%',
    tierString: 'diamond',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1723741200, // Aug 15th 1700 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1723743000, // Aug 15th 1730 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1723743000, // Aug 15th 1730 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
  {
    index: 22,
    round: '10',
    totalRaiseString: '100K',
    discountString: '3%',
    tierString: 'legend',
    contractAddress: {
      [ChainId.BSC]: '',
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
      [ChainId.BSC]: 1723744800, // Aug 15th 1800 UTC
    },
    finishTime: {
      [ChainId.BSC]: 1723746600, // Aug 15th 1830 UTC
    },
    startVestingTimestamp: {
      [ChainId.BSC]: 1723746600, // Aug 15th 1830 UTC
    },
    initPrice: {
      [ChainId.BSC]: 0,
    },
    initialRelease: 100,
  },
]

export default flashBonds
