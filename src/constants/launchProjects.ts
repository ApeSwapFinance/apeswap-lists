import { BillArtCollection, BillVersion, ChainId, LaunchBondTiers, LaunchProjectConfig } from '../types'
import tokens from './tokens'

const launchProjects: LaunchProjectConfig[] = [
  {
    index: 0,
    projectId: 'sugar-kingdom',
    projectName: 'Sugar Kingdom Odyssey',
    chainId: ChainId.BSC,
    saleStartTime: 'March 29th 17:00 UTC',
    totalAllocation: '791,649 SKO',
    salePriceString: '$0.06',
    vestingTimeString: '120',
    bonds: [
      {
        index: 0,
        chainId: ChainId.BSC,
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
        chainId: ChainId.BSC,
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
        chainId: ChainId.BSC,
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
        chainId: ChainId.BSC,
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
        launchpadSmallImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1710783703/launchpadBigImg_cfbcl5.png',
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
    chainId: ChainId.BSC,
    saleStartTime: 'April 16th 17:00 UTC',
    totalAllocation: '200M CATA',
    salePriceString: '1 BNB = 1M CATA',
    vestingTimeString: 'Instant',
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
        launchpadSmallImg:
          'https://res.cloudinary.com/dswmrqgwy/image/upload/v1713168964/catamoto-launchpad_yw65qy.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1712926384/catamoto-tokenomics_e9yoyz.png',
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
        chainId: ChainId.BSC,
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
        chainId: ChainId.BSC,
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
        chainId: ChainId.BSC,
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
        chainId: ChainId.BSC,
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
  {
    index: 2,
    projectId: 'codyfight',
    projectName: 'Codyfight',
    chainId: ChainId.BSC,
    saleStartTime: 'May 13th 15:00 UTC',
    totalAllocation: '1,875,000 CTOK',
    salePriceString: '$0.16',
    vestingTimeString: 'Cliff: 60 | Vesting: 123',
    projectInfo: {
      shortDescription:
        'Codyfight envisions a world where the line between AI and humans is blurred. Creativity, strategy, competition, and fun are at the forefront. Join a community that embraces a new paradigm in the gaming industry.',
      fullDescription:
        "Codyfight is a super fun game where you're the boss of clever little robots! You can play it anytime, anywhere! It's like playing a super intelligent game of chess, but with cool robots that you guide or teach to win battles. Create, customize, and control your battle-ready robot in a shapeshifting environment! Choose your path - manual or API, and take control of the fight. Operator, Codyfighter, and CKey are your keys to the game, available in the Launchpad and marketplace.<br/><br/>\n" +
        '\n' +
        "Their team tackles industry issues like the lack of creative contributions, the role of AI in modern games, the neglect of programmers in gaming, and how grinding can diminish enjoyment. A game that cares about its players' experience! Codyfight has joined forces with industry giants like MEXC, GATE.IO, DAO Maker, ChainGPT, KIRIN fund, and more. Will you miss out on the hype?<br/><br/>\n" +
        '\n' +
        'The project envisions a world where the line between AI and humans is blurred. Creativity, strategy, competition, and fun are at the forefront. Join a community that embraces a new paradigm in the gaming industry and participate in the $CTOK sale on the ApeBond Launchpad!',
      tags: ['GameFi'],
      socials: {
        twitter: 'https://twitter.com/codyfight',
        teaserVideo: 'https://www.youtube.com/watch?v=lIc2r-6o3RQ&t=3s',
        tokenomicsURL: 'https://codyfight.gitbook.io/white-paper/tokenomics/ctok',
        website: 'https://codyfight.com/',
        whitepaper: 'https://codyfight.gitbook.io/white-paper',
        telegram: 'https://t.me/codyfight',
        discord: 'https://discord.com/invite/codyfight',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715280929/codyfight-launchpadImg_h2sfdx.png',
        launchpadSmallImg:
          'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715282641/codyfight-small-img_g3rbzu.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281027/codyfight-icon_hakych.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281073/codyfight-header_p7jqca.png',
        headerImgMobile:
          'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281183/codyfight-header-mobile_fum2yj.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281243/codyfight-website_vcgu9a.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281301/codyfight-whitepaper_umrns6.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281350/codyfight-partners_v0pe7q.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281397/codyfight-tokenomics_ismlah.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715281443/codyfight-teaservideo_vndnfh.png',
      },
    },
    bonds: [
      {
        index: 8,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0xF89AB9C08a3ceE593eC0f4d2da24D528E43e1a6c', // silver prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.abctok,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1715612400,
        },
        finishTime: {
          [ChainId.BSC]: 1715641200,
        },
        redeemTime: {
          [ChainId.BSC]: 1715641200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1721037600,
        },
        initPrice: {
          [ChainId.BSC]: 0.16,
        },
        initialRelease: 25,
      },
      {
        index: 9,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x806dDA35B4aa00E1A664D20402940fe91fC73bDB', // gold prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.abctok,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1715612400,
        },
        finishTime: {
          [ChainId.BSC]: 1715641200,
        },
        redeemTime: {
          [ChainId.BSC]: 1715641200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1721037600,
        },
        initPrice: {
          [ChainId.BSC]: 0.16,
        },
        initialRelease: 25,
      },
      {
        index: 10,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0xad947DbB997c531aB052A096c3366d5B387870de', // diamond prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.abctok,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1715612400,
        },
        finishTime: {
          [ChainId.BSC]: 1715641200,
        },
        redeemTime: {
          [ChainId.BSC]: 1715641200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1721037600,
        },
        initPrice: {
          [ChainId.BSC]: 0.16,
        },
        initialRelease: 25,
      },
      {
        index: 11,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x0468a087556E60724254ED8dEaA5832368DD05E5', // legend prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'oversubscription',
        token: tokens.usdt,
        earnToken: tokens.abctok,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1715612400,
        },
        finishTime: {
          [ChainId.BSC]: 1715641200,
        },
        redeemTime: {
          [ChainId.BSC]: 1715641200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1721037600,
        },
        initPrice: {
          [ChainId.BSC]: 0.16,
        },
        initialRelease: 25,
      },
      {
        index: 12,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x0ac54e4b558dE824b48E1D36b33e995708Cfff25', // FCFS prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abctok,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1715670000,
        },
        finishTime: {
          [ChainId.BSC]: 1715698800,
        },
        redeemTime: {
          [ChainId.BSC]: 1715698800,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1721037600,
        },
        initPrice: {
          [ChainId.BSC]: 0.16,
        },
        initialRelease: 25,
      },
    ],
  },
  {
    index: 3,
    projectId: 'carv',
    projectName: 'CARV',
    chainId: ChainId.BSC,
    saleStartTime: 'May 21st 15:00 UTC',
    totalAllocation: '138 Nodes',
    salePriceString: '$1,086.96',
    vestingTimeString: 'Instant',
    projectInfo: {
      shortDescription:
        'CARV Protocol is a modular data layer for gaming and AI, revolutionizing how data is used and shared, by ensuring privacy, ownership, and control are firmly in the hands of individuals, pioneering a future where data generates value for all.',
      fullDescription:
        'CARV is building the largest modular data layer for gaming and AI. Their Node launch is essential in order to move towards a truly decentralized, community-driven internet, addressing the critical challenge of monopolization by large stakeholders in the early stages of network deployment.<br/><br/>\n' +
        '\n' +
        'Sufficient participation from node operators is necessary to ensure the decentralization of the network, enabling scalability and security. Therefore, widespread involvement in nodes operation is necessary. In order to empower the community to participate confidently in building the foundation of a sustainable, user-owned internet, CARV is pioneering a mechanism: the ‘Up-to-100% Buyback Program’, where 10,000,000 $CARV will be allocated to ensure a 100% buyback to all active node license holders with a 30-day linear vesting period.<br/><br/>\n' +
        '\n' +
        "<strong>Don't miss out on ApeBond's first Node Sale with CARV!</strong>",
      tags: ['Infrastructure'],
      socials: {
        twitter: 'https://twitter.com/Carv_official',
        teaserVideo: 'https://www.youtube.com/watch?v=P-7mYixdI0k',
        tokenomicsURL: 'https://docs.carv.io/carv-token/distribution-and-vesting',
        website: 'https://carv.io/',
        whitepaper: 'https://docs.carv.io/carv-protocol/verifier-node-explained',
        telegram: 'https://t.me/carv_official_global',
        discord: 'https://discord.gg/carv',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715975892/carv-launchpadImg_abywx1.png',
        launchpadSmallImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715975892/carv-launchpadImg_abywx1.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715976635/carv-launchpadicon_n3uyxh.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715976905/carv-header_tyrkc8.png',
        headerImgMobile: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996352/carv-header-mobile_mbn4fx.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996267/carv-website_puixtp.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996259/carv-whitepaper_nk1lfw.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996259/carv-partners_fmuhu8.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996261/carv-tokenomics_l0zhtd.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996260/carv-video_pipsg1.png',
      },
    },
    bonds: [
      {
        index: 13,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x83B66E76c11602360Fa0b8a6Bb382F408037328D', // FCFS legend prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abcarv,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1716303600,
        },
        finishTime: {
          [ChainId.BSC]: 1716305400,
        },
        redeemTime: {
          [ChainId.BSC]: 1716305400,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1716305400,
        },
        initPrice: {
          [ChainId.BSC]: 1086.96,
        },
        initialRelease: 100,
      },
      {
        index: 14,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x252F73dB386C6FdC31D3a44987Af593bDDc41661', // FCFS diamond prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abcarv,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1716307200,
        },
        finishTime: {
          [ChainId.BSC]: 1716309000,
        },
        redeemTime: {
          [ChainId.BSC]: 1716309000,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1716309000,
        },
        initPrice: {
          [ChainId.BSC]: 1086.96,
        },
        initialRelease: 100,
      },
      {
        index: 15,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x99De402BFc3d6A055Cf56a97c35c4594e8BfF853', // FCFS gold prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abcarv,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1716310800,
        },
        finishTime: {
          [ChainId.BSC]: 1716312600,
        },
        redeemTime: {
          [ChainId.BSC]: 1716312600,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1716312600,
        },
        initPrice: {
          [ChainId.BSC]: 1086.96,
        },
        initialRelease: 100,
      },
      {
        index: 16,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x5cfAdebFB6Ab5fAcd02E0Af31271194D1FDf06cb', // FCFS silver prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abcarv,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1716314400,
        },
        finishTime: {
          [ChainId.BSC]: 1716316200,
        },
        redeemTime: {
          [ChainId.BSC]: 1716316200,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1716316200,
        },
        initPrice: {
          [ChainId.BSC]: 1086.96,
        },
        initialRelease: 100,
      },
      {
        index: 17,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x50945D36A5375DfE96f415D16E08Ac34f84276F4', // FCFS bronze prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abcarv,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1716318000,
        },
        finishTime: {
          [ChainId.BSC]: 1716319800,
        },
        redeemTime: {
          [ChainId.BSC]: 1716319800,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1716319800,
        },
        initPrice: {
          [ChainId.BSC]: 1086.96,
        },
        initialRelease: 100,
      },
      {
        index: 18,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x84dbf0577A945a7eE2DF85Fd9BF8024536FCb737', // FCFS non-tier prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdt,
        earnToken: tokens.abcarv,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1716321600,
        },
        finishTime: {
          [ChainId.BSC]: 1716364800,
        },
        redeemTime: {
          [ChainId.BSC]: 1716364800,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1716364800,
        },
        initPrice: {
          [ChainId.BSC]: 1086.96,
        },
        initialRelease: 100,
      },
    ],
  },
  {
    index: 4,
    projectId: 'oxya-origins',
    projectName: 'Oxya Origins',
    chainId: ChainId.BSC,
    saleStartTime: 'Dec 17th 17:00 UTC',
    totalAllocation: 'A lot of tokens',
    salePriceString: '$0.25',
    vestingTimeString: '20% TGE, 1 Month cliff, 4 Months linear vesting',
    projectInfo: {
      shortDescription: 'This is a really good project ser',
      fullDescription:
        'This is a really good project ser, but let me say that twice because this should be the long description... This is a really good project ser',
      tags: ['We need a tag'],
      socials: {
        twitter: 'https://twitter.com/Carv_official',
        teaserVideo: 'https://www.youtube.com/watch?v=P-7mYixdI0k',
        tokenomicsURL: 'https://docs.carv.io/carv-token/distribution-and-vesting',
        website: 'https://carv.io/',
        whitepaper: 'https://docs.carv.io/carv-protocol/verifier-node-explained',
        telegram: 'https://t.me/carv_official_global',
        discord: 'https://discord.gg/carv',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715975892/carv-launchpadImg_abywx1.png',
        launchpadSmallImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715975892/carv-launchpadImg_abywx1.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715976635/carv-launchpadicon_n3uyxh.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715976905/carv-header_tyrkc8.png',
        headerImgMobile: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996352/carv-header-mobile_mbn4fx.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996267/carv-website_puixtp.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996259/carv-whitepaper_nk1lfw.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996259/carv-partners_fmuhu8.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996261/carv-tokenomics_l0zhtd.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1715996260/carv-video_pipsg1.png',
      },
    },
    bonds: [
      {
        index: 14,
        chainId: ChainId.BSC,
        contractAddress: {
          [ChainId.BSC]: '0x1869F56A7281eEE139F45A28D30EFC8165C7395E', // FCFS legend prod
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdc,
        earnToken: tokens.titm,
        billNnftAddress: {
          [ChainId.BSC]: '0xB75BE16984A27d3023e1cF744E2587e9Aa8750c9',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BSC]: 1733925300,
        },
        finishTime: {
          [ChainId.BSC]: 1734022800,
        },
        redeemTime: {
          [ChainId.BSC]: 1734012000,
        },
        startVestingTimestamp: {
          [ChainId.BSC]: 1734012000,
        },
        initPrice: {
          [ChainId.BSC]: 0.25,
        },
        initialRelease: 20,
        saleSchedule: {
          [LaunchBondTiers.Legend]: { start: 1733924090, end: 1733927690 },
          [LaunchBondTiers.Diamond]: { start: 1733927690, end: 1733931290 },
          [LaunchBondTiers.Gold]: { start: 1733931290, end: 1733934890 },
          [LaunchBondTiers.Silver]: { start: 1733934890, end: 1733938490 },
          [LaunchBondTiers.Bronze]: { start: 1733938490, end: 1733942120 },
          ['noTier']: { start: 1733942120, end: 1734022800 },
        },
        tokensDistributedAtRedeem: false,
      },
    ],
  },
]

export default launchProjects
