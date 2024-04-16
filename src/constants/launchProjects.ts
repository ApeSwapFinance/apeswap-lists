import { BillArtCollection, BillVersion, LaunchProjectConfig } from '../types'
import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'

const launchProjects: LaunchProjectConfig[] = [
  {
    index: 0,
    projectId: 'sugar-kingdom',
    projectName: 'Sugar Kingdom Odyssey',
    saleStartTime: 'March 29th 17:00 UTC',
    totalAllocation: '791,649 SKO',
    bonds: [
      {
        index: 0,
        contractAddress: {
          [ChainId.BSC]: '0x072Cd32fcE946493b21a297733F03Df1f36F65A6', // fcfs
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.sko,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1711731600,
        },
        finishTime: {
          [ChainId.BSC]: 1711789200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1712067300,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
        initialRelease: 16,
      },
      {
        index: 1,
        contractAddress: {
          [ChainId.BSC]: '0x87A2cf342A80C9900f5D798F91bc4cC6b0D13e3E', // silver
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.sko,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1711731600,
        },
        finishTime: {
          [ChainId.BSC]: 1711746000,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1712067300,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
        initialRelease: 16,
      },
      {
        index: 2,
        contractAddress: {
          [ChainId.BSC]: '0x905635db4888A8258f0E9aFDf72d1D9ED3ddbD3c', // gold
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.sko,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1711731600,
        },
        finishTime: {
          [ChainId.BSC]: 1711746000,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1712067300,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
        initialRelease: 16,
      },
      {
        index: 3,
        contractAddress: {
          [ChainId.BSC]: '0xDA51b551E4BE4eEbED44E70C22db29CE0d307981', //diamond
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.sko,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1711731600,
        },
        finishTime: {
          [ChainId.BSC]: 1711746000,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1712067300,
        },
        initPrice: {
          [ChainId.BSC]: 0.06,
        },
        initialRelease: 16,
      },
    ],
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
        tokenomicsURL: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1711723872/tokenomics_zleldx.png',
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
  {
    index: 1,
    projectId: 'catamoto',
    projectName: 'Catamoto',
    saleStartTime: 'April 16th 17:00 UTC',
    totalAllocation: '200M CATA',
    projectInfo: {
      shortDescription:
        'Catamoto is not just another memecoin; it’s a stride towards redefining the genre. With $CATA, Catamoto employs superior cat math to establish the most sophisticated smart contract to date. This initiative is backed by the Illu-meow-nati, a secretive group of cats with ambitions of discreetly guiding global events.',
      fullDescription:
        'Catamoto is not just another memecoin; it’s a stride towards redefining the genre. With $CATA, Catamoto employs superior cat math to establish the most sophisticated smart contract to date. This initiative is backed by the Illu-meow-nati, a secretive group of cats with ambitions of discreetly guiding global events.<br/><br/>\n' +
        '\n' +
        'We are excited to embark on this journey with Catamoto, confident that $CATA will not only capture the imagination of the crypto community but also bring fresh innovation and spirited engagement. The ApeBond Launchpad continues to be a platform for launching high-quality projects, and the partnership with Catamoto reaffirms our commitment to excellence and community-driven success.<br/><br/>\n' +
        '\n' +
        '$CATA will be listing on PancakeSwap on April 19th at 11:00 UTC.',
      tags: ['Memecoin'],
      socials: {
        twitter: 'https://twitter.com/4catamoto',
        teaserVideo: 'https://vimeo.com/934963773',
        tokenomicsURL: 'https://www.catamoto.cat/',
        website: 'https://www.catamoto.cat/',
        whitepaper: 'https://www.catamoto.cat/ ',
        telegram: 'https://t.me/Catamoto',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1713168964/catamoto-launchpad_yw65qy.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710785149/iconimg_onrbvl.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712925244/catamoto-header_disbvc.png',
        headerImgMobile: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712925244/catamoto-header_disbvc.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712925690/catamoto-website_os3vsk.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1713239754/catamoto-whitepaper_wqo2ru.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712925683/catamoto-partners_l6pwss.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712926384/catamoto-tokenomics_e9yoyz.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712925882/catamoto-teaser_hnhjuq.png',
      },
    },
    bonds: [
      {
        index: 4,
        contractAddress: {
          [ChainId.BSC]: '0x6347AE19F673141D9C322EeB6AB72c30f860d40A', // oversubscription silver
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.wbnb,
        earnToken: tokens.cata,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1713286800,
        },
        finishTime: {
          [ChainId.BSC]: 1713315600,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1713524400,
        },
        initPrice: {
          [ChainId.BSC]: 0.0005531,
        },
        initialRelease: 100,
      },
      {
        index: 5,
        contractAddress: {
          [ChainId.BSC]: '0x8acEE1D1d8646FC3F3039D6732D0ec4AAB28231F', // oversubscription gold
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.wbnb,
        earnToken: tokens.cata,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1713286800,
        },
        finishTime: {
          [ChainId.BSC]: 1713315600,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1713524400,
        },
        initPrice: {
          [ChainId.BSC]: 0.0005531,
        },
        initialRelease: 100,
      },
      {
        index: 6,
        contractAddress: {
          [ChainId.BSC]: '0x1346993A60D56E996D263086dAf8d4063752BC96', // oversubscription diamond
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.wbnb,
        earnToken: tokens.cata,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1713286800,
        },
        finishTime: {
          [ChainId.BSC]: 1713315600,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1713524400,
        },
        initPrice: {
          [ChainId.BSC]: 0.0005531,
        },
        initialRelease: 100,
      },
      {
        index: 7,
        contractAddress: {
          [ChainId.BSC]: '0xC6eac1f8bcF983AdcD1Dca1b8E5bbcAa305F2833', // fcfs
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.wbnb,
        earnToken: tokens.cata,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1713344400,
        },
        finishTime: {
          [ChainId.BSC]: 1713373200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1713524400,
        },
        initPrice: {
          [ChainId.BSC]: 0.0005531,
        },
        initialRelease: 100,
      },
    ],
  },
]

export default launchProjects
