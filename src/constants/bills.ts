import tokens from './tokens'
import { BillArtCollection, BillsConfig, BillVersion, ChainId } from '../types'

const bills: BillsConfig[] = [
  {
    index: 1,
    version: '2.1.1',
    chainId: ChainId.SOL,
    contractAddress: {
      [ChainId.SOL]: '8KYLiejUgnVLSiPVgUvvbmiPJzxBjBqQjjp6pvZNHw4L', //aka bond issuance PDA
    },
    billType: 'reserve',
    billVersion: BillVersion.V2,
    lpToken: tokens.gnana,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.SOL]: '7w72f4qNHKUTufxqgk9fSPFYhF6SrNamA6YhbSQakXcG', // aka collection
    },
    inactive: false,
    projectLink: 'https://www.moonbay.space/',
    twitter: 'https://x.com/MoonBaySonic',
    soldOut: false,
    billArt: {
      collection: BillArtCollection.ApeBond_Collection1,
    },
    fullDescription: `I wet my pants thinking in doublo's abs`,
    shortDescription: `I wet my pants thinking in doublo's abs`,
    tags: ['SOL'],
  },
]

export default bills
