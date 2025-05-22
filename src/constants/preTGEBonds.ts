import { BillArtCollection, BillVersion, ChainId, PreTGEBond } from '../types'
import tokens from './tokens'

const preTGEBonds: PreTGEBond[] = [
  {
    index: 1,
    chainId: ChainId.MAINNET,
    refundable: false,
    saleStartTime: 'May 14th 17:00 UTC ',
    totalAllocation: '150,000,000 AIRAS',
    salePriceString: '$0.0002',
    vestingTimeString: '10 Months',
    vestingTimeTooltip:
      '25% of the tokens will be released at TGE (May 25th). The remaining tokens will vest linearly over 10 months.',
    shortDescription:
      'AIRAS (Artificial Intelligence Real Assets System) is a comprehensive platform dedicated to leveraging AI and Blockchain for real world asset management, investment, and optimization. It powers autonomous applications across industries, enabling efficient, transparent, and scalable asset management. The AIRAS token fuels the ecosystem through transactions, governance, and incentives.',
    fullDescription: `AIRAS (Artificial Intelligence Real Assets System) is a decentralized framework that bridges traditional and tokenized markets by transforming physical assets and commodities into tradable digital tokens using AI and blockchain. Designed for real-world adoption, AIRAS powers autonomous applications across sectors like supply chains, real estate, and energy, driving efficiency, transparency, and scalability. By integrating advanced AI with a dedicated blockchain, AIRAS enables seamless interaction between digital and physical assets, setting a new standard for asset management. The AIRAS token plays a central role in powering the ecosystem, facilitating transactions, governance, and incentivizing network participation.`,
    tags: ['AI'],
    contractAddress: '0x6402BD234187a695352085518C835131494E5E35',
    billVersion: BillVersion.TieredSale,
    billType: 'fcfs',
    token: tokens.usdc,
    earnToken: tokens.airas,
    billNnftAddress: {
      [ChainId.MAINNET]: '0x499b654b0A7f9979CC315190C09cA2633809B8dF',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: 1747242000,
    finishTime: 1748624400,
    redeemTime: 1748170800,
    startVestingTimestamp: 1748170800,
    initPrice: 0.0002,
    tgePrice: 0.0005,
    initialRelease: 25,
    tokensDistributedAtRedeem: true,
    twitter: 'https://x.com/AirasNetwork',
    projectLink: 'https://www.airas.com/',
  },
  {
    index: 2,
    chainId: ChainId.MAINNET,
    refundable: false,
    saleStartTime: 'May 14th 17:00 UTC ',
    totalAllocation: '60,000,000 AIRAS',
    salePriceString: '$0.0003333',
    vestingTimeString: '5 Months',
    vestingTimeTooltip:
      '25% of the tokens will be released at TGE (May 25th). The remaining tokens will vest linearly over 5 months.',
    shortDescription:
      'AIRAS (Artificial Intelligence Real Assets System) is a comprehensive platform dedicated to leveraging AI and Blockchain for real world asset management, investment, and optimization. It powers autonomous applications across industries, enabling efficient, transparent, and scalable asset management. The AIRAS token fuels the ecosystem through transactions, governance, and incentives.',
    fullDescription: `AIRAS (Artificial Intelligence Real Assets System) is a decentralized framework that bridges traditional and tokenized markets by transforming physical assets and commodities into tradable digital tokens using AI and blockchain. Designed for real-world adoption, AIRAS powers autonomous applications across sectors like supply chains, real estate, and energy, driving efficiency, transparency, and scalability. By integrating advanced AI with a dedicated blockchain, AIRAS enables seamless interaction between digital and physical assets, setting a new standard for asset management. The AIRAS token plays a central role in powering the ecosystem, facilitating transactions, governance, and incentivizing network participation.`,
    tags: ['AI'],
    contractAddress: '0xBFD8eA911959deefC5F369438c14eb304Fe6FD13',
    billVersion: BillVersion.TieredSale,
    billType: 'fcfs',
    token: tokens.usdc,
    earnToken: tokens.airas,
    billNnftAddress: {
      [ChainId.MAINNET]: '0x499b654b0A7f9979CC315190C09cA2633809B8dF',
    },
    soldOut: false,
    billArt: { collection: BillArtCollection.ApeBond_Collection1 },
    initTime: 1747237200,
    finishTime: 1748624400,
    redeemTime: 1748170800,
    startVestingTimestamp: 1748170800,
    initPrice: 0.0003333,
    tgePrice: 0.0005,
    initialRelease: 25,
    tokensDistributedAtRedeem: true,
    twitter: 'https://x.com/AirasNetwork',
    projectLink: 'https://www.airas.com/',
  },
]

export default preTGEBonds
