import tokens from './tokens'
import { BillArtCollection, BillsConfig, BillVersion, ChainId } from '../types'

// BNB Largest ID: 1196
// Polygon Largest ID: 188
// Telos Largest ID: 215
// Arbitrum Largest ID: 2034
// ETH Largest ID: 3070
// Linea Largest ID: 6020
// Base Largest ID: 8067
// Lightlink Largest ID: 7003
// IOTA largest ID: 9003
// Migration Bonds ID: 5007
// GraphLinq Largest ID: 10000
// Blast Largest ID: 11000
// Singularity Testnet Largest ID: 12000
// Crossfi Largest ID: 13000
// Monad Testnet Largest ID: 14011
// Sonic Largest ID: 15007
// Berachain Largest ID: 16005
// Katana Largest ID: 17000
// SOL Largest ID: 18019
// UNICHAIN Largest ID: 19001
// AVAX Largest ID: 20001

const bills: BillsConfig[] = [
  {
    index: 3070,
    // cmcId: 0, // TODO: add cmcId when live
    version: '2.1.0',
    chainId: ChainId.MAINNET,
    contractAddress: {
      [ChainId.MAINNET]: '0x3A14d0536A7e3AC545DB5130B2dE0FD840204339',
    },
    billType: 'reserve',
    billVersion: BillVersion.V4,
    lpToken: tokens.usdc,
    earnToken: tokens.pmusd,
    billNnftAddress: {
      [ChainId.MAINNET]: '0x499b654b0a7f9979cc315190c09ca2633809b8df',
    },
    projectLink: 'https://raac.io',
    twitter: 'https://x.com/Raacfi',
    initTime: { [ChainId.MAINNET]: 1766067045 },
    soldOut: false,
    hide: false,
    billArt: {
      collection: BillArtCollection.ETH_Collection1,
    },
    tags: ['RWA'],
    shortDescription:
      'RAAC is a decentralized DeFi lending and borrowing protocol powered by tokenized Real World Assets. It enables on-chain borrowing using collateral such as commodities, real estate, and capital market assets, while offering RWA vaults and stability mechanisms. RAAC bridges traditional value with DeFi, with pmUSD acting as its RWA-backed stablecoin.',
    fullDescription:
      'RAAC is a decentralized DeFi lending and borrowing ecosystem powered by tokenized Real World Assets, designed to bridge on-chain finance with tangible economic value. The protocol enables users to borrow and lend using RWAs such as commodities, real estate, and capital market instruments as collateral, while also supporting the creation of stablecoins backed by real-world assets. RAAC offers a comprehensive suite of products, including an on-chain lending and borrowing system, RWA vaults, and stability mechanisms that enhance capital efficiency and risk management. Its modular architecture allows seamless integration for external DeFi applications and provides transparent insight into how the protocol is built, governed, and parameterized. By combining decentralized infrastructure with real-world backing, RAAC aims to unlock scalable and sustainable DeFi use cases, with pmUSD serving as its core RWA-backed stablecoin within the ecosystem.',
    clickUpId: '86adwj35g',
    vestingCliff: 5184000,
  },
]

export default bills
