import tokens from './tokens'
import { BillArtCollection, BillsConfig, BillVersion, ChainId } from '../types'

// BNB Largest ID: 1121
// Polygon Largest ID: 172
// Telos Largest ID: 215
// Arbitrum Largest ID: 2019
// ETH Largest ID: 3040
// Linea Largest ID: 6012
// Base Largest ID: 8034
// Lightlink Largest ID: 7003
// IOTA largest ID: 9003
// Migration Bonds ID: 5007
// GraphLinq Largest ID: 10000
// Blast Largest ID: 11000

const bills: BillsConfig[] = [
  /*
    Polygon Bills
  */
  {
    index: 173,
    chainId: ChainId.MATIC,
    contractAddress: {
      [ChainId.MATIC]: '0x2f0c1c24312c354587cf70e17660128063ae1a96',
    },
    billType: 'reserve',
    billVersion: BillVersion.V2,
    lpToken: tokens.abond,
    earnToken: tokens.abond,
    billNnftAddress: {
      [ChainId.MATIC]: '0x8860ABc05FefEF93306c8d65a5eFD421F155d67E',
    },
    inactive: false,
    projectLink: 'https://film.io/',
    twitter: 'https://x.com/Filmio_Official',
    initTime: { [ChainId.MATIC]: 1738686666 },
    soldOut: false,
    billArt: {
      collection: BillArtCollection.ApeBond_Collection1,
    },
    shortDescription:
      'Film.io is a decentralized filmmaking ecosystem that puts Hollywood decision-making into the hands of creators and fans through blockchain technology. Governed by a filmmaking industry DAO, it champions inclusion, diversity, and transparency. With FAN and FILM Tokens, Film.io empowers collaboration to validate, fund, and distribute content, replacing centralized control with creative freedom.',
    fullDescription: `Film.io is the world's most powerful decentralized filmmaking ecosystem, revolutionizing Hollywood by transferring decision-making to creators and fans through blockchain technology. Governed by the first-ever filmmaking industry DAO, Film.io champions inclusion, equality, and diversity in global entertainment. It empowers creators and fans to collaboratively validate, fund, and distribute content in a transparent, inclusive environment, replacing traditional centralized power structures. Utilizing a dual-token model, Film.io offers FAN Tokens for governance and platform participation, while FILM Tokens support crowdfunding, DeFi loans, and NFT campaigns. Together, these tokens fuel collaboration between creators, fans, and investors, liberating the entertainment industry and fostering a new era of creative freedom.`,
    tags: ['Entertainment'],
  },
]

export default bills
