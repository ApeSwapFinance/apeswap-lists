import { BillArtCollection, BillVersion, ChainId, PreTGEBond } from '../types'
import tokens from './tokens'

const preTGEBonds: PreTGEBond[] = [
  {
    index: 1,
    chainId: ChainId.BASE,
    refundable: false,
    saleStartTime: 'Feb 18th 14:00 UTC',
    totalAllocation: '19,166,667 CHPD',
    salePriceString: '$0.006',
    vestingTimeString: '2 Months',
    vestingTimeTooltip:
      '40% of the tokens will be released at TGE (Feb 26th). The remaining tokens will vest linearly over 2 months.',
    shortDescription: 'shortDescription',
    fullDescription: `fullDescription`,
    tags: ['LaunchPad'],
    contractAddress: '0xAF8CABc5d4F8294B79a3e278b55Dc2dA67523498',
    billVersion: BillVersion.TieredSale,
    billType: 'fcfs',
    token: tokens.usdt,
    earnToken: tokens.chpd,
    billNnftAddress: {
      [ChainId.BASE]: '0xD8C7fe06E24A2862d78D0F1BF040bA79463d9351',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: 1739887200,
    finishTime: 1740434400,
    redeemTime: 1740575100,
    startVestingTimestamp: 1740575100,
    initPrice: 0.006,
    initialRelease: 40,
    tokensDistributedAtRedeem: true,
  },
]

export default preTGEBonds
