import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { BillsConfig, BillVersion } from '../types'

const bills: BillsConfig[] = [
  {
    index: 1,
    contractAddress: {
      [ChainId.MATIC]: '0xaFfa2F9b3CF2Cc213cbd2BEb21adf5fdE35ece15',
    },
    billType: 'liquidity',
    billVersion: BillVersion.V2,
    token: tokens.usdc,
    quoteToken: tokens.eth,
    lpToken: tokens.usdcEth,
    earnToken: tokens.qat,
    billNnftAddress: {
      [ChainId.MATIC]: '0x8f182b07e11119afca541aa62c9c2608cf5968dd',
    },
    inactive: false,
    projectLink: 'https://apeswap.finance/',
    twitter: 'https://twitter.com/',
    audit: 'Add audit link',
    initTime: { [ChainId.MATIC]: 1690294667 },
    initPrice: { [ChainId.MATIC]: 0.00123 },
  },
]

export default bills
