import { BillArtCollection, BillVersion, ChainId, PreTGEBond } from '../types'
import tokens from './tokens'

const preTGEBonds: PreTGEBond[] = [
  {
    index: 1,
    chainId: ChainId.MAINNET,
    vestingTimeString: '10 Months',
    tgeString: 'June 2nd',
    shortDescription:
      'AIRAS (Artificial Intelligence Real Assets System) is a comprehensive platform dedicated to leveraging AI and Blockchain for real world asset management, investment, and optimization. It powers autonomous applications across industries, enabling efficient, transparent, and scalable asset management. The AIRAS token fuels the ecosystem through transactions, governance, and incentives.',
    tags: ['AI'],
    contractAddress: { [ChainId.MAINNET]: '0x6402BD234187a695352085518C835131494E5E35' },
    billVersion: BillVersion.TieredSale,
    billType: 'fcfs',
    lpToken: tokens.usdc,
    earnToken: tokens.airas,
    billNnftAddress: {
      [ChainId.MAINNET]: '0x499b654b0A7f9979CC315190C09cA2633809B8dF',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    redeemTime: 1748624400,
    tgePrice: 0.0005,
    twitter: 'https://x.com/AirasNetwork',
    projectLink: 'https://www.airas.com/',
  },
  {
    index: 2,
    chainId: ChainId.MAINNET,
    vestingTimeString: '5 Months',
    tgeString: 'June 2nd',
    shortDescription:
      'AIRAS (Artificial Intelligence Real Assets System) is a comprehensive platform dedicated to leveraging AI and Blockchain for real world asset management, investment, and optimization. It powers autonomous applications across industries, enabling efficient, transparent, and scalable asset management. The AIRAS token fuels the ecosystem through transactions, governance, and incentives.',
    tags: ['AI'],
    contractAddress: { [ChainId.MAINNET]: '0xBFD8eA911959deefC5F369438c14eb304Fe6FD13' },
    billVersion: BillVersion.TieredSale,
    billType: 'fcfs',
    lpToken: tokens.usdc,
    earnToken: tokens.airas,
    billNnftAddress: {
      [ChainId.MAINNET]: '0x499b654b0A7f9979CC315190C09cA2633809B8dF',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    redeemTime: 1748624400,
    tgePrice: 0.0005,
    twitter: 'https://x.com/AirasNetwork',
    projectLink: 'https://www.airas.com/',
  },
  {
    index: 3,
    chainId: ChainId.BSC,
    vestingTimeString: '5 Months',
    tgeString: 'June 2nd',
    shortDescription:
      'AIRAS (Artificial Intelligence Real Assets System) is a comprehensive platform dedicated to leveraging AI and Blockchain for real world asset management, investment, and optimization. It powers autonomous applications across industries, enabling efficient, transparent, and scalable asset management. The AIRAS token fuels the ecosystem through transactions, governance, and incentives.',
    tags: ['test'],
    contractAddress: { [ChainId.BSC]: '0x6102eDD09c8c0a5d87de8a486D9B8BED9939A61a' },
    billVersion: BillVersion.TieredSale,
    billType: 'fcfs',
    lpToken: tokens.usdt,
    earnToken: tokens.abond,
    billNnftAddress: {
      [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    redeemTime: 1750257131,
    tgePrice: 0.0005,
    twitter: 'https://x.com/AirasNetwork',
    projectLink: 'https://www.airas.com/',
  },
]

export default preTGEBonds
