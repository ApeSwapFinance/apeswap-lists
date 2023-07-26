import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { BillsConfig, BillVersion } from '../types'

const bills: BillsConfig[] = [
  {
    index: 1,
    contractAddress: {
      [ChainId.MATIC]: '0x04fbafba7f9fe75f3a03bdddc048a0882a666cd5',
    },
    billType: 'liquidity',
    billVersion: BillVersion.V2,
    token: tokens.quick,
    quoteToken: tokens.wmatic,
    lpToken: tokens.quickMatic,
    earnToken: tokens.doubloons,
    billNnftAddress: {
      [ChainId.MATIC]: '0xf63e25B5492A856189420724fe6f3573620966f3',
    },
    inactive: false,
    projectLink: 'https://www.quickswap.app/',
    twitter: 'https://twitter.com/',
    audit: 'Add audit link',
    initTime: { [ChainId.MATIC]: 1684274400 },
    initPrice: { [ChainId.MATIC]: 0.00123 },
  },
]

export default bills
