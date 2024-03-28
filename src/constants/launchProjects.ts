import { BillArtCollection, BillVersion, LaunchProjectConfig } from '../types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const launchProjects: LaunchProjectConfig[] = [
  {
    index: 0,
    projectId: 'sugar-kingdom',
    projectName: 'Sugar Kingdom Odyssey',
    saleStartTime: 'March 29th',
    bonds: [
      {
        index: 0,
        contractAddress: {
          [ChainId.BSC]: '0xa076A4137C451d751b4B6053246B22C334e47E90',
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.MockERC20,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1710794091,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
      },
      {
        index: 1,
        contractAddress: {
          [ChainId.BSC]: '0x2E7De2ff0FFA6a0C4D49A6BC95e1897Af696baE0',
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.MockERC20,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1710794091,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
      },
      {
        index: 2,
        contractAddress: {
          [ChainId.BSC]: '0xA9EDE884be3931080a50E7b41d5387930A84906a',
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.MockERC20,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1710794091,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
      },
      {
        index: 3,
        contractAddress: {
          [ChainId.BSC]: '0x9aCB68A3983aC138bee40AF1BBdb59C8455c022c',
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.MockERC20,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1710794091,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
      },
    ],
    totalAllocation: '69696969',
    projectInfo: {
      shortDescription:
        'Sugar Kingdom Odyssey revolutionizes gaming with a utility tool for BRC20 tokens and altcoins, developed by Apes Int Group, the brains behind projects like Decentraland and The Sandbox. This platform supports high-quality projects, enhancing them with a dynamic gaming ecosystem. Highlighting a significant milestone, the platform anticipates a token sale with an IMC of $400,000 and a TGE slated for the end of March, setting the stage for a promising future.',
      fullDescription:
        'Sugar Kingdom Odyssey is a utility tool for BRC20 tokens and altcoins that enable high-quality projects to use their tokens within a gaming platform. Crafted with the expertise of Apes Int Group, known for their work on Decentraland, The Sandbox, and Gearbox Entertainment, their platform breathes life into high-quality projects, allowing them to flourish within a dynamic gaming ecosystem. Supported by industry-leading advisors from Friend3, GT Protocol, LandVault, and Genesis Capital, they pride themselves on a vibrant community and network with over 40 esteemed partners including DeChat, Patex, and many more joining their quest.<br/><br/>\n' +
        '\n' +
        'Strategic investments from notable entities such as Peech Capital and Mario Nawfal have bolstered their journey, with more significant milestones on the horizon. These include a token sale with an Initial Market Cap (IMC) of $400,000 and their Token Generation Event (TGE) anticipated by the end of March, setting the stage for a promising future.<br/><br/>\n' +
        '\n' +
        'Mark your calendars, and make sure you don’t miss their $SKO sale on the ApeBond Launchpad!',
      tags: ['GameFi'],
      socials: {
        discord: 'https://discord.gg/sugar-kingdom ',
        twitter: 'https://twitter.com/SugarKingdomNFT',
        teaserVideo: '',
        tokenomicsURL: '',
        website: 'https://sugarkingdom.io/',
        whitepaper: 'https://docs.sugarkingdom.io/ ',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710783703/launchpadBigImg_cfbcl5.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710785149/iconimg_onrbvl.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710781826/sugar_header_img.png',
        headerImgMobile: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710793424/headerImgMobile_bkq6ly.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710784075/websiteImg_tphyqj.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1711176294/whitepaper_jxhqpa.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1711176291/partners_wabbyh.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1711082095/tokenomics_wc4axv.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1711176293/teaser_zqh6gj.png',
      },
    },
  },
]

export default launchProjects
