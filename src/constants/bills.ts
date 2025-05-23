import tokens from './tokens'
import { BillArtCollection, BillsConfig, BillVersion, ChainId } from '../types'

const bills: BillsConfig[] = [
  {
    index: 1,
    version: '2.1.1',
    chainId: ChainId.SOL,
    contractAddress: {
      [ChainId.SOL]: 'ErXg311BPJLbdv42wL3nJXkFwZTrY5DHUpxZdT7qc6Dq', //aka bond issuance PDA
    },
    billType: 'reserve',
    billVersion: BillVersion.V2,
    lpToken: tokens.gnana,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.SOL]: '29PsGxbXiwZ4Lft6Exun4pjGPeXSryDajKr6RkXAFi4k', // aka collection
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
    feeInPayout: 5,
  },
]

export default bills
