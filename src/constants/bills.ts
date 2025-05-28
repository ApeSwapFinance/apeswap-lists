import tokens from './tokens'
import { BillArtCollection, BillsConfig, BillVersion, ChainId } from '../types'

const bills: BillsConfig[] = [
  {
    index: 1,
    version: '2.1.1',
    chainId: ChainId.SOL,
    contractAddress: {
      [ChainId.SOL]: '4344tkoBWuo5md6ix1FFS5xNvcyZqs13PHACFCekZFB7', //aka bond issuance PDA
    },
    billType: 'reserve',
    billVersion: BillVersion.V2,
    lpToken: tokens.gnana,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.SOL]: '8NhzoQ1r4f2QevbMFWdHBHDbvPtzdq2dyYNL8sszp8no', // aka collection
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
    feeInPayout: 1,
  },
  {
    index: 2,
    version: '2.1.1',
    chainId: ChainId.SOL,
    contractAddress: {
      [ChainId.SOL]: 'FKV4Zy9AQtKEUr4YKtkU5Y5nKN2Jc69SbAsF7QJ5sMyT', //aka bond issuance PDA
    },
    billType: 'reserve',
    billVersion: BillVersion.V2,
    lpToken: tokens.gnana,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.SOL]: 'FK37bJ6HrDZLgmKecJi3KuJbD1eSA2XCbDf5VT6xkPGe', // aka collection
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
    feeInPayout: 1,
  },
  {
    index: 3,
    version: '2.1.1',
    chainId: ChainId.SOL,
    contractAddress: {
      [ChainId.SOL]: '818DUojMncJ2tPgMgyeXBXSrpS3X6EvdcfFddkHcCW1h', //aka bond issuance PDA
    },
    billType: 'reserve',
    billVersion: BillVersion.V2,
    lpToken: tokens.gnana,
    earnToken: tokens.banana,
    billNnftAddress: {
      [ChainId.SOL]: '9jXD9LMHfY32WyH9cid5YrnXhxbCdg38GZgtaENHFNkq', // aka collection
    },
    inactive: false,
    projectLink: 'https://www.moonbay.space/',
    twitter: 'https://x.com/MoonBaySonic',
    soldOut: false,
    billArt: {
      collection: BillArtCollection.ApeBond_Collection1,
    },
    fullDescription: `This is a test bond with 0% principalFee`,
    shortDescription: `This is a test bond with 0% principalFee`,
    tags: ['SOL'],
    feeInPayout: 1,
  },
]

export default bills
