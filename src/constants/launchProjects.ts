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
    refundable: false,
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
    refundable: false,
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
    refundable: false,
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
    refundable: false,
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
    projectId: 'oxya-origin',
    projectName: 'Oxya Origin',
    chainId: ChainId.MAINNET,
    saleStartTime: 'Dec 17th 17:00 UTC',
    totalAllocation: '4,000,000 OXYZ',
    salePriceString: '$0.025',
    vestingTimeString: '4 Months',
    refundable: false,
    vestingTimeTooltip:
      '20% of the tokens will be released at TGE. The remaining tokens will vest linearly over 4 months, with a 1-month cliff.',
    projectInfo: {
      marketingSubtitle: `We’re back with another launch! Oxya Origin is building a powerful Web3 gaming ecosystem. <a href="https://www.oxyaorigin.com/" target="_blank" rel="noopener noreferrer" style="color: #6560C5">Learn More \u003e</a>`,
      shortDescription:
        'Oxya Origin is building a powerful gaming ecosystem with a focus on engaging gameplay, immersive graphics and a sustainable, player-owned economy with the ambition to take Web3 gaming to the mainstream.',
      fullDescription: `We're thrilled to announce that our Launchpad is back with an incredible new partner, OxyaOrigin, launching their $OXYA token on the Ethereum Chain!
  <br/>
  <br/>
  Oxya Origin is the ecosystem that redefines traditional & Web3 gaming, with immersive gameplay and player-driven economy. They’re building a powerful gaming ecosystem with astounding gameplay, immersive graphics, and a sustainable economy, with the ambition to take Web3 gaming to the mainstream.
  <br/>
  <br/>
  📅 Launch Date: December 17th (schedule below).<br/>
  📅 TGE Date: December 19th.<br/>
  💵 IDO & TGE Price: $0.025.<br/>
  💵 Purchases can be made with $USDC.<br/>
  📜 Vesting Terms: 20% released at TGE, 4 months linear vesting (1-month cliff).<br/>
  <br/>
  <br/>
  🕔 Sale Schedule:<br/>
  Dec 17th 17:00 - 21:00 UTC: Legend Tier<br/>
  Dec 17th 21:00 - 01:00 UTC: Diamond (and above)<br/>
  Dec 18th 01:00 - 05:00 UTC: Gold (and above)<br/>
  Dec 18th 05:00 - 09:00 UTC: Silver (and above)<br/>
  Dec 18th 09:00 - 13:00 UTC: Bronze (and above)<br/>
  Dec 18th 13:00 - 17:00 UTC: FCFS, no tier required!`,
      tags: ['GameFi'],
      socials: {
        twitter: 'https://x.com/OxyaOrigin',
        teaserVideo: 'https://x.com/ApeBond/status/1867686738107195477',
        tokenomicsURL: 'https://oxya-origin.gitbook.io/oxya-origin/asset-ecosystem/economy',
        website: 'https://www.oxyaorigin.com/',
        whitepaper: 'https://oxya-origin.gitbook.io/oxya-origin',
        telegram: 'https://t.me/oxyaoriginofficial',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734350817/home_eag9po.png',
        launchpadSmallImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734350817/home_eag9po.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734370651/smallimg_u9y8kt.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351145/headerimg_ljvood.png',
        headerImgMobile: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351145/headerimg_ljvood.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351489/website_h8t8aw.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351569/whitepaper_eqzfcp.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351696/partnersimg_l3xu4f.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351788/tokenomics_rkr8w8.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1734351829/teaser_cbl1zl.png',
      },
    },
    bonds: [
      {
        index: 19,
        chainId: ChainId.MAINNET,
        contractAddress: {
          [ChainId.MAINNET]: '0x48d45312fF88B277eB285eA1f05ddDC6B9238611',
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdc,
        earnToken: tokens.oxyz,
        billNnftAddress: {
          [ChainId.MAINNET]: '0x499b654b0A7f9979CC315190C09cA2633809B8dF',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.MAINNET]: 1734454800,
        },
        finishTime: {
          [ChainId.MAINNET]: 1734541200,
        },
        redeemTime: {
          [ChainId.MAINNET]: 1734541200,
        },
        startVestingTimestamp: {
          [ChainId.MAINNET]: 1737219600,
        },
        initPrice: {
          [ChainId.MAINNET]: 0.025,
        },
        initialRelease: 20,
        saleSchedule: {
          [LaunchBondTiers.Legend]: { start: 1734454800, end: 1734469200 },
          [LaunchBondTiers.Diamond]: { start: 1734469200, end: 1734483600 },
          [LaunchBondTiers.Gold]: { start: 1734483600, end: 1734498000 },
          [LaunchBondTiers.Silver]: { start: 1734498000, end: 1734512400 },
          [LaunchBondTiers.Bronze]: { start: 1734512400, end: 1734526800 },
          ['noTier']: { start: 1734526800, end: 1734541200 },
        },
        tokensDistributedAtRedeem: true,
        // distributionTimestamp: 1734203341,
      },
    ],
  },
  {
    index: 5,
    projectId: 'chirppad',
    projectName: 'ChirpPad',
    chainId: ChainId.BASE,
    hideProjectPage: false,
    refundable: false,
    saleStartTime: 'Feb 18th 14:00 UTC',
    totalAllocation: '19,166,667 CHPD',
    salePriceString: '$0.006',
    vestingTimeString: '2 Months',
    vestingTimeTooltip:
      '40% of the tokens will be released at TGE (Feb 26th). The remaining tokens will vest linearly over 2 months.',
    projectInfo: {
      marketingSubtitle: `Stay tuned for our new launch with ChirpPad, powered by <a href="https://x.com/chirpley" target="_blank" rel="noopener noreferrer" style="color: #6560C5">Chirpley</a>`,
      shortDescription:
        'ChirpPad is the #1 SocialFi launchpad with a deflationary token model. Earn allocation through wallet scans or social tasks on TikTok, Instagram, and X, driving funding and viral growth pre- and post-TGE.',
      fullDescription: `We’re kicking off 2025 with a game-changing launchpad event! ApeBond is proud to introduce ChirpPad, the #1 SocialFi launchpad powered by Chirpley, as our first launch partner of the year.
  <br/>
  <br/>
  ChirpPad is revolutionizing how projects connect with their communities by combining funding, AI-driven marketing, and social engagement into a single, powerful platform. With a deflationary token model and seamless Chirpley.ai integration, it enables projects to tap into 50,000+ influencers, driving viral growth and sustained adoption.
  <br/>
  <br/>
  <span style="
    font-size: 16px;
    font-weight: 700;
">Sale Details</span><br/>
  - Date: February 18th (schedule below)<br/>
  - TGE Date: February 26th<br/>
  - Sale Price: $0.006 per CHPD<br/>
  - Total Allocation: $115,000k / $0.006 = 19,166,667 tokens<br/>
  - Purchases in: USDC<br/>
  - Vesting Terms: 40% Released at TGE (Feb 26th), then linear release over 2 months<br/>
  - Network: Base
  <br/>
  <br/>
  <span style="
    font-size: 16px;
    font-weight: 700;
">🕔 Schedule</span>
  <br/>
  Feb 18th 14:00 - 14:30 UTC: Legend Tier<br/>
  Feb 18th 14:30 - 15:00 UTC: Diamond (and above)<br/>
  Feb 18th 15:00 - 15:30 UTC: Gold (and above)<br/>
  Feb 18th 15:30 - 16:00 UTC: Silver (and above)<br/>
  Feb 18th 16:00 - 16:30 UTC: Bronze (and above)<br/>
  Feb 18th 16:30 - 17:00 UTC: FCFS, no tier required!
  <br/>
  <br/>
  <span style="
    font-size: 16px;
    font-weight: 700;
">🔴 Airdrop Details 🔴</span><br/>
  - Allocation: $100,000 in CHPD<br/>
  - Vesting Terms: Linear release over 5 months<br/>
  - Claim: Airdrop claim link to be provided by ChripPad. <br/>
  You can learn more about this Sale and the Airdrop in our medium article <a href="https://apebond.medium.com/chirppad-launch-fueling-the-future-of-socialfi-0b237f55c11a" target="_blank" style="color: #6560C5">here</a>.
  <br/>
  <br/>
  Start the year by securing your spot in ApeBond’s first launch of 2025—a launchpad designed for real engagement, real rewards, and real impact. Be part of the future of SocialFi with ChirpPad! 🚀
`,
      tags: ['LaunchPad'],
      socials: {
        twitter: 'https://x.com/chirppad',
        teaserVideo: 'https://x.com/chirppad/status/1886777469358805018',
        tokenomicsURL: 'https://pitch.com/v/pitch-deck-a-imxa5g/0cad2800-b388-4af4-aee3-c7b43b2731c2',
        website: 'https://chirppad.ai/',
        whitepaper: 'https://pitch.com/v/pitch-deck-a-imxa5g',
        telegram: 'https://t.me/chirppad',
      },
      images: {
        launchpadImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1738772216/chirppad_de0msn.png',
        launchpadSmallImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1738772216/chirppad_de0msn.png',
        launchpadIcon: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1738777739/icon_um8him.png',
        headerImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1739388592/headerChirplay_jq89zb.png',
        headerImgMobile: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1739388592/headerChirplay_jq89zb.png',
        websiteImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1738963257/websiteImg_ekc7mb.png',
        whitepaperImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1739383111/whitepaperChirpley_ikyly5.png',
        partnersImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1738963338/partners_mf8fgw.png',
        tokenomicsImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1738963370/tokenomics_ekjewm.png',
        teaserImg: 'https://res.cloudinary.com/dswmrqgwy/image/upload/v1739388735/video_ah8dtd.png',
      },
    },
    bonds: [
      {
        index: 20,
        chainId: ChainId.BASE,
        contractAddress: {
          [ChainId.BASE]: '',
        },
        billVersion: BillVersion.TieredSale,
        billType: 'fcfs',
        token: tokens.usdc,
        earnToken: tokens.chpd,
        billNnftAddress: {
          [ChainId.BASE]: '0x499b654b0A7f9979CC315190C09cA2633809B8dF',
        },
        soldOut: false,
        billArt: { collection: BillArtCollection.ApeBond_Collection1 },
        initTime: {
          [ChainId.BASE]: 1739887200,
        },
        finishTime: {
          [ChainId.BASE]: 1739898000,
        },
        redeemTime: {
          [ChainId.BASE]: 1740571200,
        },
        startVestingTimestamp: {
          [ChainId.BASE]: 1740571200,
        },
        initPrice: {
          [ChainId.BASE]: 0.006,
        },
        initialRelease: 40,
        saleSchedule: {
          [LaunchBondTiers.Legend]: { start: 1739887200, end: 1739889000 },
          [LaunchBondTiers.Diamond]: { start: 1739889000, end: 1739890800 },
          [LaunchBondTiers.Gold]: { start: 1739890800, end: 1739892600 },
          [LaunchBondTiers.Silver]: { start: 1739892600, end: 1739894400 },
          [LaunchBondTiers.Bronze]: { start: 1739894400, end: 1739896200 },
          ['noTier']: { start: 1739896200, end: 1739898000 },
        },
        tokensDistributedAtRedeem: true,
      },
    ],
  },
]

export default launchProjects
