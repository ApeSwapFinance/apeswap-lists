import { ChainId } from '@ape.swap/sdk'
import { Token } from './types'

const tokens: Record<string, Token> = {
  // BANANA should always be first token for GNANA calculation
  banana: {
    symbol: 'BANANA',
    address: {
      [ChainId.BSC]: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
      [ChainId.MATIC]: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
      [ChainId.MAINNET]: '0x92df60c51c710a1b1c20e42d85e221f3a1bfc7f2',
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.TLOS]: '0x667fd83e24ca1d935d36717d305d54fa0cac991c',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
      [ChainId.MAINNET]: 18,
      [ChainId.BSC_TESTNET]: 18,
      [ChainId.TLOS]: 18,
    },
    active: true,
  },
  MockERC20: {
    symbol: 'MockERC20',
    address: {
      [ChainId.BSC]: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
      [ChainId.BSC_TESTNET]: '0x68D24FA18c00B5Df32e91C1dDDfa6419083606F9',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  gnana: {
    symbol: 'GNANA',
    address: {
      [ChainId.BSC]: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      [ChainId.BSC_TESTNET]: '0xf693bDA9D3C56D5F9165c8633d9098e3C4Ae495A',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  wbnb: {
    symbol: 'BNB',
    address: {
      [ChainId.BSC]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      [ChainId.MATIC]: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      [ChainId.BSC_TESTNET]: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  wmatic: {
    symbol: 'MATIC',
    address: {
      [ChainId.BSC]: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
      [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  busd: {
    symbol: 'BUSD',
    address: {
      [ChainId.BSC]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      [ChainId.BSC_TESTNET]: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  eth: {
    symbol: 'ETH',
    address: {
      [ChainId.BSC]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      [ChainId.MATIC]: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      [ChainId.BSC_TESTNET]: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378',
      [ChainId.TLOS]: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
      [ChainId.MATIC]: 18,
      [ChainId.TLOS]: 18,
    },
    active: true,
  },
  btc: {
    symbol: 'BTC',
    address: {
      [ChainId.BSC]: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      [ChainId.MATIC]: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      [ChainId.BSC_TESTNET]: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8',
      [ChainId.TLOS]: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
      [ChainId.MATIC]: 18,
      [ChainId.TLOS]: 8,
    },
    active: true,
  },
  cake: {
    symbol: 'CAKE',
    address: {
      [ChainId.BSC]: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bake: {
    symbol: 'BAKE',
    address: {
      [ChainId.BSC]: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  usdc: {
    symbol: 'USDC',
    address: {
      [ChainId.BSC]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      [ChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      [ChainId.TLOS]: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 6,
      [ChainId.TLOS]: 6,
    },
    active: true,
  },
  bifi: {
    symbol: 'BIFI',
    address: {
      [ChainId.BSC]: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  naut: {
    symbol: 'NAUT',
    address: {
      [ChainId.BSC]: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  jdi: {
    symbol: 'JDI',
    address: {
      [ChainId.BSC]: '0x0491648c910ad2c1afaab733faf71d30313df7fc',
      [ChainId.MATIC]: '0x340fe1d898eccaad394e2ba0fc1f93d27c7b717a',
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  ont: {
    symbol: 'ONT',
    address: {
      [ChainId.BSC]: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  gen: {
    symbol: 'GEN',
    address: {
      [ChainId.BSC]: '0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  watch: {
    symbol: 'WATCH',
    address: {
      [ChainId.BSC]: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
      [ChainId.MATIC]: '0x09211dc67f9fe98fb7bbb91be0ef05f4a12fa2b2',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  bison: {
    symbol: 'BISON',
    address: {
      [ChainId.BSC]: '0x19a6da6e382b85f827088092a3dbe864d9ccba73',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  cyt: {
    symbol: 'CYT',
    address: {
      [ChainId.BSC]: '0xd9025e25bb6cf39f8c926a704039d2dd51088063',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  hotcross: {
    symbol: 'HOTCROSS',
    address: {
      [ChainId.BSC]: '0x4fa7163e153419e0e1064e418dd7a99314ed27b6',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lmt: {
    symbol: 'LMT',
    address: {
      [ChainId.BSC]: '0x9617857e191354dbea0b714d78bc59e57c411087',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  revv: {
    symbol: 'REVV',
    address: {
      [ChainId.BSC]: '0x833f307ac507d47309fd8cdd1f835bef8d702a93',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  zig: {
    symbol: 'ZIG',
    address: {
      [ChainId.BSC]: '0x8C907e0a72C3d55627E853f4ec6a96b0C8771145',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  nvt: {
    symbol: 'NVT',
    address: {
      [ChainId.BSC]: '0xf0e406c49c63abf358030a299c0e00118c4c6ba5',
    },
    decimals: {
      [ChainId.BSC]: 8,
    },
    active: true,
  },
  polar: {
    symbol: 'POLAR',
    address: {
      [ChainId.BSC]: '0xc64c9b30c981fc2ee4e13d0ca3f08258e725fd24',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  gro: {
    symbol: 'GRO',
    address: {
      [ChainId.BSC]: '0x336ed56d8615271b38ecee6f4786b55d0ee91b96',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ceek: {
    symbol: 'CEEK',
    address: {
      [ChainId.BSC]: '0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  stars: {
    symbol: 'STARS',
    address: {
      [ChainId.BSC]: '0xbd83010eb60f12112908774998f65761cf9f6f9a',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lory: {
    symbol: 'LORY',
    address: {
      [ChainId.BSC]: '0xcd5d75dbe75449a9021b6c570a41959eb571c751',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sista: {
    symbol: 'SISTA',
    address: {
      [ChainId.BSC]: '0xca6d25c10dad43ae8be0bc2af4d3cd1114583c08',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  guard: {
    symbol: 'GUARD',
    address: {
      [ChainId.BSC]: '0xf606bd19b1e61574ed625d9ea96c841d4e247a32',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  land: {
    symbol: 'LAND',
    address: {
      [ChainId.BSC]: '0x9d986a3f147212327dd658f712d5264a73a1fdb0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bhc: {
    symbol: 'BHC',
    address: {
      [ChainId.BSC]: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  crush: {
    symbol: 'CRUSH',
    address: {
      [ChainId.BSC]: '0x0Ef0626736c2d484A792508e99949736D0AF807e',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  obie: {
    symbol: 'OBIE',
    address: {
      [ChainId.BSC]: '0xa18509d20fd01b4990734fd04ba53bad02922787',
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  ong: {
    symbol: 'ONG',
    address: {
      [ChainId.BSC]: '0x308bfaeAaC8BDab6e9Fc5Ead8EdCb5f95b0599d9',
    },
    decimals: {
      [ChainId.BSC]: 9,
    },
    active: true,
  },
  ydr: {
    symbol: 'YDR',
    address: {
      [ChainId.BSC]: '0x3757232B55E60da4A8793183aC030CfCE4c3865d',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  dep: {
    symbol: 'DEP',
    address: {
      [ChainId.BSC]: '0xcaF5191fc480F43e4DF80106c7695ECA56E48B18',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  rsun: {
    symbol: 'RSUN',
    address: {
      [ChainId.BSC]: '0x917841c010b3d86ed886f36f2c9807e07a2e3093',
    },
    decimals: {
      [ChainId.BSC]: 9,
    },
    active: true,
  },
  txl: {
    symbol: 'TXL',
    address: {
      [ChainId.BSC]: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sfund: {
    symbol: 'SFUND',
    address: {
      [ChainId.BSC]: '0x477bc8d23c634c154061869478bce96be6045d12',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  pots: {
    symbol: 'POTS',
    address: {
      [ChainId.BSC]: '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  frmx: {
    symbol: 'FRMx',
    address: {
      [ChainId.BSC]: '0x8523518001ad5d24b2a04e8729743c0643a316c0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sx: {
    symbol: 'SX',
    address: {
      [ChainId.BSC]: '0x6f26e8a40c8daae8c4358ce557c10226527cebce',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  rocks: {
    symbol: 'ROCKS',
    address: {
      [ChainId.BSC]: '0xA01000C52b234a92563BA61e5649b7C76E1ba0f3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  gummy: {
    symbol: 'GUMMY',
    address: {
      [ChainId.BSC]: '0x10d3e0c38c286a04aee44d9b01cac916b56ee05a',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  dcb: {
    symbol: 'DCB',
    address: {
      [ChainId.BSC]: '0xEAc9873291dDAcA754EA5642114151f3035c67A2',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  nfty: {
    symbol: 'NFTY',
    address: {
      [ChainId.BSC]: '0x5774b2fc3e91af89f89141eacf76545e74265982',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  aur: {
    symbol: 'AUR',
    address: {
      [ChainId.BSC]: '0x1dEb45C74E0192D9272ADF54e9a7519C48C2bd81',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sefi: {
    symbol: 'SEFI',
    address: {
      [ChainId.BSC]: '0xcd95350c69F229E72e57A44e8C05C436E65E4bEb',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  kala: {
    symbol: 'KALA',
    address: {
      [ChainId.BSC]: '0x32299c93960bB583A43c2220Dc89152391A610c5',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ihc: {
    symbol: 'IHC',
    address: {
      [ChainId.BSC]: '0x86a53fcd199212FEa44FA7e16EB1f28812be911D',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  airt: {
    symbol: 'AIRT',
    address: {
      [ChainId.BSC]: '0x016CF83732f1468150D87dCC5BdF67730B3934D3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  pros: {
    symbol: 'PROS',
    address: {
      [ChainId.BSC]: '0xed8c8aa8299c10f067496bb66f8cc7fb338a3405',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  thg: {
    symbol: 'THG',
    address: {
      [ChainId.BSC]: '0x9fD87aEfe02441B123c3c32466cD9dB4c578618f',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  crystl: {
    symbol: 'CRYSTL',
    address: {
      [ChainId.MATIC]: '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  dai: {
    symbol: 'DAI',
    address: {
      [ChainId.BSC]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      [ChainId.MATIC]: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  usdt: {
    symbol: 'USDT',
    address: {
      [ChainId.BSC]: '0x55d398326f99059ff775485246999027b3197955',
      [ChainId.MATIC]: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      [ChainId.TLOS]: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 6,
      [ChainId.TLOS]: 6,
    },
    active: true,
  },
  wsg: {
    symbol: 'WSG',
    address: {
      [ChainId.BSC]: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  otaku: {
    symbol: 'OTAKU',
    address: {
      [ChainId.BSC]: '0x484215873a674f9af73367a8f94c2c591e997521',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  tnns: {
    symbol: 'TNNS',
    address: {
      [ChainId.BSC]: '0x6C7C87D9868b1dB5a0F62d867bAa90e0AdFA7Cfd',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  king: {
    symbol: 'KING',
    address: {
      [ChainId.BSC]: '0x0cCD575bf9378c06f6DCa82f8122F570769F00C2',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  tako: {
    symbol: 'TAKO',
    address: {
      [ChainId.BSC]: '0x2F3391AeBE27393aBa0a790aa5E1577fEA0361c2',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sing: {
    symbol: 'SING',
    address: {
      [ChainId.BSC]: '0x23894c0ce2d79b79ea33a4d02e67ae843ef6e563',
      [ChainId.MATIC]: '0xcb898b0efb084df14dd8e018da37b4d0f06ab26d',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  tower: {
    symbol: 'TOWER',
    address: {
      [ChainId.BSC]: '0xe7c9C6bc87B86f9E5b57072F907EE6460B593924',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  oasis: {
    symbol: 'OASIS',
    address: {
      [ChainId.BSC]: '0xb19289b436b2F7A92891ac391D8f52580d3087e4',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  toon: {
    symbol: 'TOON',
    address: {
      [ChainId.BSC]: '0xaeE433ADeBe0FBB88dAa47eF0C1A513CaA52EF02',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  abr: {
    symbol: 'ABR',
    address: {
      [ChainId.MATIC]: '0x04429fbb948bbd09327763214b45e505a5293346',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  wing: {
    symbol: 'WING',
    address: {
      [ChainId.BSC]: '0x3cb7378565718c64ab86970802140cc48ef1f969',
    },
    decimals: {
      [ChainId.BSC]: 9,
    },
    active: true,
  },
  gan: {
    symbol: 'GAN',
    address: {
      [ChainId.BSC]: '0x8F1408171EAe06AEC4549fD0a5808A42cee6DD84',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bcpay: {
    symbol: 'BCPAY',
    address: {
      [ChainId.BSC]: '0x21f1ce0FCf1E9E39F8e79B7762801E8096d9f6CD',
    },
    decimals: {
      [ChainId.BSC]: 8,
    },
    active: true,
  },
  ibfr: {
    symbol: 'iBFR',
    address: {
      [ChainId.BSC]: '0xa296aD1C47FE6bDC133f39555C1D1177BD51fBc5',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sata: {
    symbol: 'SATA',
    address: {
      [ChainId.BSC]: '0x6b1C8765C7EFf0b60706b0ae489EB9bb9667465A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lico: {
    symbol: 'LICO',
    address: {
      [ChainId.BSC]: '0x4F3266a56589357B4f8082918b14B923693e57f0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lime: {
    symbol: 'LIME',
    address: {
      [ChainId.BSC]: '0x7bC75e291E656E8658D66Be1cc8154A3769A35Dd',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  fxs: {
    symbol: 'FXS',
    address: {
      [ChainId.BSC]: '0xe48A3d7d0Bc88d552f730B62c006bC925eadB9eE',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  relay: {
    symbol: 'RELAY',
    address: {
      [ChainId.BSC]: '0xE338D4250A4d959F88Ff8789EaaE8c32700BD175',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  quidd: {
    symbol: 'QUIDD',
    address: {
      [ChainId.BSC]: '0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  moni: {
    symbol: 'MONI',
    address: {
      [ChainId.BSC]: '0x9573c88ae3e37508f87649f87c4dd5373c9f31e0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  info: {
    symbol: 'INFO',
    address: {
      [ChainId.BSC]: '0xdF727040d3997b5D95deE8c661fA96E3c13eE0C9',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  shill: {
    symbol: 'SHILL',
    address: {
      [ChainId.BSC]: '0xfb9C339b4BacE4Fe63ccc1dd9a3c3C531441D5fE',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lmn: {
    symbol: 'LMN',
    address: {
      [ChainId.BSC]: '0x7251C7A2155d8FEDb42a1DC4333aDe589e4d6919',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  hera: {
    symbol: 'HERA',
    address: {
      [ChainId.BSC]: '0x49C7295ff86EaBf5bf58C6eBC858DB4805738c01',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  gmee: {
    symbol: 'GMEE',
    address: {
      [ChainId.BSC]: '0x84e9a6F9D240FdD33801f7135908BfA16866939A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  arv: {
    symbol: 'ARV',
    address: {
      [ChainId.BSC]: '0x6679eB24F59dFe111864AEc72B443d1Da666B360',
    },
    decimals: {
      [ChainId.BSC]: 8,
    },
    active: true,
  },
  rasko: {
    symbol: 'rASKO',
    address: {
      [ChainId.BSC]: '0xd118f42eDbc839F7e1E85d5269A25288792c141B',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  skill: {
    symbol: 'SKILL',
    address: {
      [ChainId.BSC]: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  pel: {
    symbol: 'PEL',
    address: {
      [ChainId.BSC]: '0xA75E7928d3de682e3F44dA60C26F33117c4E6C5c',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  stz: {
    symbol: 'STZ',
    address: {
      [ChainId.BSC]: '0x7FE378c5e0B5C32AF2ecc8829beDF02245A0E4eF',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  qa: {
    symbol: 'QA',
    address: {
      [ChainId.BSC]: '0x4ef29F3B804C316bA8bA464A765C601Fc092a2e9',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  loa: {
    symbol: 'LOA',
    address: {
      [ChainId.BSC]: '0x94b69263FCA20119Ae817b6f783Fc0F13B02ad50',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ads: {
    symbol: 'ADS',
    address: {
      [ChainId.BSC]: '0xcfcEcFe2bD2FED07A9145222E8a7ad9Cf1Ccd22A',
    },
    decimals: {
      [ChainId.BSC]: 11,
    },
    active: true,
  },
  kai: {
    symbol: 'KAI',
    address: {
      [ChainId.BSC]: '0x39Ae8EEFB05138f418Bb27659c21632Dc1DDAb10',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  dose: {
    symbol: 'DOSE',
    address: {
      [ChainId.BSC]: '0x7837fd820bA38f95c54D6dAC4ca3751b81511357',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ore: {
    symbol: 'ORE',
    address: {
      [ChainId.BSC]: '0x91F006ee672F8f39C6E63cA75B1cA14067b3c366',
    },
    decimals: {
      [ChainId.BSC]: 8,
    },
    active: true,
  },
  myra: {
    symbol: 'MYRA',
    address: {
      [ChainId.BSC]: '0x6ef238E9E8CD2A96740897761C18894Fc086B9d0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  godz: {
    symbol: 'GODZ',
    address: {
      [ChainId.BSC]: '0xF0A8EcBCE8caADB7A07d1FcD0f87Ae1Bd688dF43',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  mnft: {
    symbol: 'MNFT',
    address: {
      [ChainId.BSC]: '0x36953b5ec00a13edceceb3af258d034913d2a79d',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  gmr: {
    symbol: 'GMR',
    address: {
      [ChainId.BSC]: '0xADCa52302e0a6c2d5D68EDCdB4Ac75DeB5466884',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ftm: {
    symbol: 'FTM',
    address: {
      [ChainId.BSC]: '0xAD29AbB318791D579433D831ed122aFeAf29dcfe',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  moonlight: {
    symbol: 'MOONLIGHT',
    address: {
      [ChainId.BSC]: '0xB1CeD2e320E3f4C8e3511B1DC59203303493F382',
    },
    decimals: {
      [ChainId.BSC]: 9,
    },
    active: true,
  },
  space: {
    symbol: 'SPACE',
    address: {
      [ChainId.BSC]: '0xe486a69E432Fdc29622bF00315f6b34C99b45e80',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bcmc: {
    symbol: 'BCMC',
    address: {
      [ChainId.BSC]: '0xc10358f062663448a3489fC258139944534592ac',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ari: {
    symbol: 'ARI',
    address: {
      [ChainId.BSC]: '0xc80A0A55CAF6a7bfB4Ee22f9380C4077312c4a35',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  nfty2: {
    symbol: 'NFTY ',
    address: {
      [ChainId.BSC]: '0x8623e66Bea0DCe41B6d47f9C44e806A115baBae0',
      [ChainId.MATIC]: '0x8623e66bea0dce41b6d47f9c44e806a115babae0',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  kom: {
    symbol: 'KOM',
    address: {
      [ChainId.MATIC]: '0xC004e2318722EA2b15499D6375905d75Ee5390B8',
    },
    decimals: {
      [ChainId.MATIC]: 8,
    },
    active: true,
  },
  lunr: {
    symbol: 'LUNR',
    address: {
      [ChainId.BSC]: '0x37807D4fbEB84124347B8899Dd99616090D3e304',
    },
    decimals: {
      [ChainId.BSC]: 4,
    },
    active: true,
  },
  trustnft: {
    symbol: 'TRUSTNFT',
    address: {
      [ChainId.BSC]: '0x08F725D2809FdA409Bc23493F3615a4c85a22d7d',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  wgict: {
    symbol: 'WGICT',
    address: {
      [ChainId.BSC]: '0x27B2D695eF01d10EE96582a23db201B0Aa338639',
    },
    decimals: {
      [ChainId.BSC]: 8,
    },
    active: true,
  },
  buzz: {
    symbol: 'BUZZ',
    address: {
      [ChainId.BSC]: '0xa73C15620bfA79646E9A11d0D638d66588456462',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ranker: {
    symbol: 'RANKER',
    address: {
      [ChainId.BSC]: '0xdE4512Db1a7a7519818dA38DB86eC1363d70A711',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  nft11: {
    symbol: 'NFT11',
    address: {
      [ChainId.BSC]: '0x73F67AE7f934FF15beaBf55A28C2Da1eEb9B56Ec',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  front: {
    symbol: 'FRONT',
    address: {
      [ChainId.BSC]: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ruby: {
    symbol: 'RUBY',
    address: {
      [ChainId.BSC]: '0xf7722aa0714096f1fb5ef83e6041cebb4d58a08e',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  anml: {
    symbol: 'ANML',
    address: {
      [ChainId.BSC]: '0x06fda0758c17416726f77cb11305eac94c074ec0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  drf: {
    symbol: 'DRF',
    address: {
      [ChainId.BSC]: '0x89C1Af791d7B4cf046Dca8Fa10a41Dd2298A6a3F',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bountie: {
    symbol: 'BOUNTIE',
    address: {
      [ChainId.BSC]: '0x00f80a8f39bb4D04a3038C497E3642bf1B0A304e',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ankr: {
    symbol: 'ANKR',
    address: {
      [ChainId.BSC]: '0xf307910A4c7bbc79691fD374889b36d8531B08e3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  kte: {
    symbol: 'KTE',
    address: {
      [ChainId.BSC]: '0x61fA01129aC0bB124D1C60Dc9f735C6C579A858B',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  gq: {
    symbol: 'GQ',
    address: {
      [ChainId.BSC]: '0xF700D4c708C2be1463E355F337603183D20E0808',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  aspo: {
    symbol: 'ASPO',
    address: {
      [ChainId.BSC]: '0x1a9b49E9f075c37Fe5f86C916bac9DEb33556D7E',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bico: {
    symbol: 'BICO',
    address: {
      [ChainId.BSC]: '0x06250a4962558F0F3E69FC07F4c67BB9c9eAc739',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  cpo: {
    symbol: 'CPO',
    address: {
      [ChainId.BSC]: '0xea395DFaFEd39924988b475f2Ca7f4C72655203A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  coc: {
    symbol: 'COC',
    address: {
      [ChainId.BSC]: '0xbDC3b3639f7AA19e623A4d603A3Fb7Ab20115A91',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  froyo: {
    symbol: 'FROYO',
    address: {
      [ChainId.BSC]: '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  primate: {
    symbol: 'PRIMATE',
    address: {
      [ChainId.BSC]: '0xA19863E302FD1B41276fCe5A48D9C511DBeEf34c',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lc: {
    symbol: 'LC',
    address: {
      [ChainId.BSC]: '0x6012C3a742f92103d238F1c8306cF8fbcDEca8B3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  grvs: {
    symbol: 'GRVS',
    address: {
      [ChainId.BSC]: '0x190CEC0657a02E9eAB1C1DF5d59f9139131cf539',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  lgx: {
    symbol: 'LGX',
    address: {
      [ChainId.BSC]: '0x9096B4309224d751FCB43d7eB178dcFFc122aD15',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  roobee: {
    symbol: 'ROOBEE',
    address: {
      [ChainId.BSC]: '0xF77351D8f4eE853135961A936BB8d2e4fFa75f9D',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  vtg: {
    symbol: 'VTG',
    address: {
      [ChainId.BSC]: '0x8de5aA37a7C40A53062EAD382b8EEAD3B08a7A46',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  tlos: {
    symbol: 'TLOS',
    address: {
      [ChainId.BSC]: '0xb6C53431608E626AC81a9776ac3e999c5556717c',
      [ChainId.TLOS]: '0xd102ce6a4db07d247fcc28f366a623df0938ca9e',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.TLOS]: 18,
    },
    active: true,
  },
  stlos: {
    symbol: 'STLOS',
    address: {
      [ChainId.TLOS]: '0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905',
    },
    decimals: {
      [ChainId.TLOS]: 18,
    },
    active: true,
  },
  bones: {
    symbol: 'BONES',
    address: {
      [ChainId.BSC]: '0x08426874d46f90e5E527604fA5E3e30486770Eb3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  genv3: {
    symbol: 'GENv3',
    address: {
      [ChainId.BSC]: '0x98a61CA1504b92Ae768eF20b85aa97030b7a1Edf',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  hec: {
    symbol: 'HEC',
    address: {
      [ChainId.BSC]: '0x638EEBe886B0e9e7C6929E69490064a6C94d204d',
    },
    decimals: {
      [ChainId.BSC]: 9,
    },
    active: true,
  },
  tor: {
    symbol: 'TOR',
    address: {
      [ChainId.BSC]: '0x1d6Cbdc6b29C6afBae65444a1f65bA9252b8CA83',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },

  ever: {
    symbol: 'EVER',
    address: {
      [ChainId.BSC_TESTNET]: '0x78eA04b5B63ae22c697c7e629b7E7bfB876D4b6f',
    },
    decimals: {
      [ChainId.BSC_TESTNET]: 18,
    },
    active: false,
  },
  for: {
    symbol: 'FOR',
    address: {
      [ChainId.BSC_TESTNET]: '0x9Fee03D36b184881A198201B925A00338b1e3Cc5',
    },
    decimals: {
      [ChainId.BSC_TESTNET]: 18,
    },
    active: false,
  },
  hor: {
    symbol: 'HOR',
    address: {
      [ChainId.BSC_TESTNET]: '0xaB10D6f91add497b919c9FA584036408F8163b4C',
    },
    decimals: {
      [ChainId.BSC_TESTNET]: 18,
    },
    active: false,
  },
  ney: {
    symbol: 'NEY',
    address: {
      [ChainId.BSC_TESTNET]: '0x93762B86736caa0658016fe55AD23e2f77EB7Cd5',
    },
    decimals: {
      [ChainId.BSC_TESTNET]: 18,
    },
    active: false,
  },
  ape: {
    symbol: 'APE',
    address: {
      [ChainId.BSC]: '0x0b079b33b6e72311c6be245f9f660cc385029fc3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  avax: {
    symbol: 'AVAX',
    address: {
      [ChainId.BSC]: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  dot: {
    symbol: 'DOT',
    address: {
      [ChainId.BSC]: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  comp: {
    symbol: 'COMP',
    address: {
      [ChainId.BSC]: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  fil: {
    symbol: 'FIL',
    address: {
      [ChainId.BSC]: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  ada: {
    symbol: 'ADA',
    address: {
      [ChainId.BSC]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  link: {
    symbol: 'LINK',
    address: {
      [ChainId.BSC]: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  aave: {
    symbol: 'AAVE',
    address: {
      [ChainId.BSC]: '0xfb6115445bff7b52feb98650c87f44907e58f802',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  radar: {
    symbol: 'RADAR',
    address: {
      [ChainId.BSC]: '0x489580eB70a50515296eF31E8179fF3e77E24965',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  h2on: {
    symbol: 'H2ON',
    address: {
      [ChainId.BSC]: '0xE0E81c29A68bFDd7c48072fD94e7c58F1f0146C1',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  pxp: {
    symbol: 'PXP',
    address: {
      [ChainId.BSC]: '0x93c27727e72EC7510a06ea450366C1418c4Ce547',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  mhunt: {
    symbol: 'MHUNT',
    address: {
      [ChainId.BSC]: '0x2C717059b366714d267039aF8F59125CAdce6D8c',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  blid: {
    symbol: 'BLID',
    address: {
      [ChainId.BSC]: '0x766AFcf83Fd5eaf884B3d529b432CA27A6d84617',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  floki: {
    symbol: 'FLOKI',
    address: {
      [ChainId.BSC]: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e',
    },
    decimals: {
      [ChainId.BSC]: 9,
    },
    active: true,
  },
  bape: {
    symbol: 'BAPE',
    address: {
      [ChainId.BSC]: '0x70e48Eb0881a8c56BAAD37EB4491eA85Eb47b4b2',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  sd: {
    symbol: 'SD',
    address: {
      [ChainId.BSC]: '0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  bnbx: {
    symbol: 'BNBx',
    address: {
      [ChainId.BSC]: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  pstn: {
    symbol: 'PSTN',
    address: {
      [ChainId.BSC]: '0xBfACD29427fF376FF3BC22dfFB29866277cA5Fb4',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  traxx: {
    symbol: 'TRAXX',
    address: {
      [ChainId.MATIC]: '0xD43Be54C1aedf7Ee4099104f2DaE4eA88B18A249',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  brz: {
    symbol: 'BRZ',
    address: {
      [ChainId.BSC]: '0x71be881e9C5d4465B3FfF61e89c6f3651E69B5bb',
    },
    decimals: {
      [ChainId.BSC]: 4,
    },
    active: true,
  },
  chrp: {
    symbol: 'CHRP',
    address: {
      [ChainId.BSC]: '0xeD00Fc7D48B57B81FE65D1cE71c0985e4CF442CB',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  swt: {
    symbol: 'SWT',
    address: {
      [ChainId.BSC]: '0xE8EbCf4Fd1faa9B77c0ec0B26e7Cc32a251Cd799',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
  },
  xwin: {
    symbol: 'XWIN',
    address: {
      [ChainId.BSC]: '0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
  },
  threeair: {
    symbol: '3AIR',
    address: {
      [ChainId.BSC]: '0x596834746B5b78F31A089EE7853fa595682824B7',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
  },
  xcur: {
    symbol: 'XCUR',
    address: {
      [ChainId.BSC]: '0xd52669712f253CD6b2Fe8A8638F66ed726cb770C',
    },
    decimals: { [ChainId.BSC]: 8 },
    active: true,
  },
  liq: {
    symbol: 'LIQ',
    address: {
      [ChainId.BSC]: '0xc7981767f644C7F8e483DAbDc413e8a371b83079',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
  },
  axn: {
    symbol: 'AXN',
    address: {
      [ChainId.MATIC]: '0x839F1a22A59eAAf26c85958712aB32F80FEA23d9',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  dogira: {
    symbol: 'DOGIRA',
    address: {
      [ChainId.MATIC]: '0xdda40cdfe4a0090f42ff49f264a831402adb801a',
    },
    decimals: {
      [ChainId.MATIC]: 9,
    },
    active: true,
  },
  farmAway: {
    symbol: 'FARMAWAY',
    address: {
      [ChainId.BSC]: '0x19349A79905eCdbcC421568337Ab2abaB6e45832',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
      [ChainId.MATIC]: '',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
  },

  // Test LPs

  horNey: {
    symbol: 'HOR-NEY',
    address: {
      [ChainId.BSC_TESTNET]: '0x30e74cefd298990880758e20223f03129f52e699',
    },
    decimals: {
      [ChainId.BSC_TESTNET]: 18,
    },
    active: false,
    lpToken: true,
  },
  forEver: {
    symbol: 'FOR-EVER',
    address: {
      [ChainId.BSC_TESTNET]: '0x4419D815c9c9329f9679782e76ec15bCe1B14a6D',
    },
    decimals: {
      [ChainId.BSC_TESTNET]: 18,
    },
    active: false,
    lpToken: true,
  },

  // LP Tokens
  bananaBnb: {
    symbol: 'BANANA-BNB',
    address: {
      [ChainId.BSC]: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
      [ChainId.BSC_TESTNET]: '0x90Fc86A7570063a9eA971ec74f01F89569Ad6237',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
    lpToken: true,
  },
  bananaBusd: {
    symbol: 'BANANA-BUSD',
    address: {
      [ChainId.BSC]: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbBusd: {
    symbol: 'BUSD-BNB',
    address: {
      [ChainId.BSC]: '0x51e6D27FA57373d8d4C256231241053a70Cb1d93',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbEth: {
    symbol: 'ETH-BNB',
    address: {
      [ChainId.BSC]: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbMatic: {
    symbol: 'MATIC-BNB',
    address: {
      [ChainId.BSC]: '0x29A4A3D77c010CE100A45831BF7e798f0f0B325D',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbBtc: {
    symbol: 'BTC-BNB',
    address: {
      [ChainId.BSC]: '0x1E1aFE9D9c5f290d8F6996dDB190bd111908A43D',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbFtm: {
    symbol: 'FTM-BNB',
    address: {
      [ChainId.BSC]: '0x47A0B7bA18Bb80E4888ca2576c2d34BE290772a6',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbCeek: {
    symbol: 'CEEK-BNB',
    address: {
      [ChainId.BSC]: '0x119D6Ebe840966c9Cf4fF6603E76208d30BA2179',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  usdcBusd: {
    symbol: 'BUSD-USDC',
    address: {
      [ChainId.BSC]: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  wgictUsdt: {
    symbol: 'WGICT-USDT',
    address: {
      [ChainId.BSC]: '0x4c64c44a6ed5f1fdce5263d9b512c2465ffe8256',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  blidUsdt: {
    symbol: 'BLID-USDT',
    address: {
      [ChainId.BSC]: '0xc403a4b51d824eeb3f076bcaf4416dbbfde2016b',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  nft11Busd: {
    symbol: 'NFT11-BUSD',
    address: {
      [ChainId.BSC]: '0xEf0A90fb728195F63C911f52ab4bde331089319f',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbjdi: {
    symbol: 'BNB-JDI',
    address: {
      [ChainId.BSC]: '0xfb6063f29af6dcd1fc03a8e221c6d91deabbe764',
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
    },
    decimals: {
      [ChainId.BSC]: 18,
      [ChainId.BSC_TESTNET]: 18,
    },
    active: true,
  },
  rubyBnb: {
    symbol: 'RUBY-BNB',
    address: {
      [ChainId.BSC]: '0xec9f5a5e4690fa14025971f0d2dd91f5600e24c7',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  threeairBnb: {
    symbol: '3AIR-BNB',
    address: {
      [ChainId.BSC]: '0xfdf84a54b35e06e4c3852ae35f10b7f38488204a',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  nftyBnb: {
    symbol: 'NFTY-BNB',
    address: {
      [ChainId.BSC]: '0x884BE30e2c95b9cFed614aD2B5Edf40AF2A144ad',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  nftyBusd: {
    symbol: 'NFTY-BUSD',
    address: {
      [ChainId.BSC]: '0x3e2459cb96497d1f8f725aadde081f1e643c27d8',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  xcurBusd: {
    symbol: 'XCUR-BUSD',
    address: {
      [ChainId.BSC]: '0xe55Da30A0BBb8d26Cc0a3AECE1F7a2d432276f84',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  drfBusd: {
    symbol: 'DRF-BUSD',
    address: {
      [ChainId.BSC]: '0x5FFc5b392Fcc33357c6a8240bda1C9374A55E6B8',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  pstnBusd: {
    symbol: 'PSTN-BUSD',
    address: {
      [ChainId.BSC]: '0x57fa15d373cbbd3141a13f8bab10c380ac2b14d5',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
    lpToken: true,
  },
  cocBnb: {
    symbol: 'COC-BNB',
    address: {
      [ChainId.BSC]: '0x5467dD00ca4d91010Ab2A3aEF8a0162DC218801A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  lcBnb: {
    symbol: 'LC-BNB',
    address: {
      [ChainId.BSC]: '0xc5a69133432eF17CD15C501CAa5f9cF28C22aA00',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  lgxBusd: {
    symbol: 'LGX-BUSD',
    address: {
      [ChainId.BSC]: '0x004F72D474eE262701205E3637B4367594eFb11D',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bonesBnb: {
    symbol: 'BONES-BNB',
    address: {
      [ChainId.BSC]: '0xe0900Db57d81DE4E6a13e90eb836Fa91Be50515A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  genv3Bnb: {
    symbol: 'GENv3-BNB',
    address: {
      [ChainId.BSC]: '0xCfa1d8afFA4da8e6CaBE6fde66DDf4eDA89f0e42',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  ceekBnb: {
    symbol: 'CEEK-BNB',
    address: {
      [ChainId.BSC]: '0x119d6ebe840966c9cf4ff6603e76208d30ba2179',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  tlosBusd: {
    symbol: 'TLOS-BUSD',
    address: {
      [ChainId.BSC]: '0x4d90ddc0a30968c4c6b1ed0535b0264e75a3c5f3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  starsBnb: {
    symbol: 'STARS-BNB',
    address: {
      [ChainId.BSC]: '0xbc8a4cad743d87e8754fd5f704c62e378802cbff',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  hotcrossBusd: {
    symbol: 'HOTCROSS-BUSD',
    address: {
      [ChainId.BSC]: '0x3b9aa711d1d90a4f8639f66c227881729a3317f2',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  gqBusd: {
    symbol: 'GQ-BUSD',
    address: {
      [ChainId.BSC]: '0xcC3A3Bc1d76Df321f94716E88224638C439267aa',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  ethBnb: {
    symbol: 'ETH-BNB',
    address: {
      [ChainId.BSC]: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  apeBNB: {
    symbol: 'APE-BNB',
    address: {
      [ChainId.BSC]: '0x8B3EBE3422aabEA9920ca820fE43679e3e2E78D3',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  avaxBnb: {
    symbol: 'AVAX-BNB',
    address: {
      [ChainId.BSC]: '0x40aFc7CBd0Dc2bE5860F0035b717d20Afb4827b2',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  dotBnb: {
    symbol: 'DOT-BNB',
    address: {
      [ChainId.BSC]: '0x21CBb561c5d7D70e9E6Cc42136CB22F07552aEef',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  primateBnb: {
    symbol: 'PRIMATE-BNB',
    address: {
      [ChainId.BSC]: '0x6acabA892562719085C8418EbA49b8B3475D995a',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  compBnb: {
    symbol: 'COMP-BNB',
    address: {
      [ChainId.BSC]: '0xb4c0c621B2eDfE6C22585ebAC56b0e634907B8A7',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  filBnb: {
    symbol: 'FIL-BNB',
    address: {
      [ChainId.BSC]: '0xcAEC8648dbaC41b6504A8E408892931796D67d87',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  adaBnb: {
    symbol: 'ADA-BNB',
    address: {
      [ChainId.BSC]: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  adaEth: {
    symbol: 'ADA-ETH',
    address: {
      [ChainId.BSC]: '0x61FE209E404166a53Cc627d0ae30A65606315dA7',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  linkBnb: {
    symbol: 'LINK-BNB',
    address: {
      [ChainId.BSC]: '0x092ADA3818DB7FBb8e0A2124Ff218C5125C1CcE6',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  aaveBnb: {
    symbol: 'AAVE-BNB',
    address: {
      [ChainId.BSC]: '0xf13e007e181A8F57eD3a4D4CcE0A9ff9E7241CEf',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  froyoBnb: {
    symbol: 'FROYO-BNB',
    address: {
      [ChainId.BSC]: '0x58ceF3eeDB9A4adc6B5a2Ee5c85Aea07D72787f0',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  anmlBnb: {
    symbol: 'ANML-BNB',
    address: {
      [ChainId.BSC]: '0x0aB82Ec81c80F75B02A117fbA9B414c17379ae8C',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  radarBnb: {
    symbol: 'RADAR-BNB',
    address: {
      [ChainId.BSC]: '0xe6fF591f818664865eCab584B1fe679DbB4904dB',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  ihcBnb: {
    symbol: 'IHC-BNB',
    address: {
      [ChainId.BSC]: '0x83CcbE832e5a3B620a435fe0eDb89e171C14eCcB',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  liqBusd: {
    symbol: 'LIQ-BUSD',
    address: {
      [ChainId.BSC]: '0x759584fe196fb2e3f5bf2eff8c2747741d5ecf59',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  flokiBnb: {
    symbol: 'FLOKI-BNB',
    address: {
      [ChainId.BSC]: '0xacc22e0ff64e788e6ad569a57d130b9d957494dc',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  pxpBnb: {
    symbol: 'PXP-BNB',
    address: {
      [ChainId.BSC]: '0xF4a7480948F11A0205D616258DCf43E9DaAE0586',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  hecBnb: {
    symbol: 'HEC-BNB',
    address: {
      [ChainId.BSC]: '0xc0687a3cf463f3be0b021d6f41551584d124d9c5',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  bnbxBnb: {
    symbol: 'BNBx-BNB',
    address: {
      [ChainId.BSC]: '0xB88F211EC9ecfc2931Ae1DE53ea28Da76B9Ed37A',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  gmrBnb: {
    symbol: 'GMR-BNB',
    address: {
      [ChainId.BSC]: '0x5ff97410ff9bdb715b7b283828796dd0ad7a884a',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  brzBusd: {
    symbol: 'BRZ-BUSD',
    address: {
      [ChainId.BSC]: '0xfbD7e3575F709212A9f61aC6C63964A8FDa34CAC',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
    lpToken: true,
  },
  xwinBnb: {
    symbol: 'XWIN-BNB',
    address: {
      [ChainId.BSC]: '0x9f1762b15e740704f40a3606b31dccfbe5318d8b',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
    lpToken: true,
  },
  stlosTlos: {
    symbol: 'STLOS-TLOS',
    address: {
      [ChainId.TLOS]: '0xa4dfe1fdca0c341c1ba26550ec5128c89964f0db',
    },
    decimals: { [ChainId.TLOS]: 18 },
    active: true,
    lpToken: true,
  },
  stlosUsdc: {
    symbol: 'STLOS-USDC',
    address: {
      [ChainId.TLOS]: '0x3f830d537fe636057c8d7f9e8f264c7a7ff48a6f',
    },
    decimals: {
      [ChainId.TLOS]: 18,
    },
    active: true,
    lpToken: true,
  },
  usdtUsdc: {
    symbol: 'USDT-USDC',
    address: {
      [ChainId.TLOS]: '0x10aadd094677f286e5b9c969806122b5bb31906d',
    },
    decimals: {
      [ChainId.TLOS]: 18,
    },
    active: true,
    lpToken: true,
  },
  usdcTlos: {
    symbol: 'USDC-TLOS',
    address: {
      [ChainId.TLOS]: '0x2a4e6ef568e4a696555a5491c0fe7cbcf998c1bb',
    },
    decimals: { [ChainId.TLOS]: 18 },
    active: true,
    lpToken: true,
  },
  ethTlos: {
    symbol: 'ETH-TLOS',
    address: {
      [ChainId.TLOS]: '0xCfd8505E3c79D777AF2CA3B5507B64480645f516',
    },
    decimals: { [ChainId.TLOS]: 18 },
    active: true,
    lpToken: true,
  },
  usdtTlos: {
    symbol: 'USDT-TLOS',
    address: {
      [ChainId.TLOS]: '0xAE46B3A778999567133c6c1F5C5feA953EE64995',
    },
    decimals: { [ChainId.TLOS]: 18 },
    active: true,
    lpToken: true,
  },
  btcTlos: {
    symbol: 'BTC-TLOS',
    address: {
      [ChainId.TLOS]: '0x48731c532bbccf5179F9E2549624e0A73C7B39bC',
    },
    decimals: { [ChainId.TLOS]: 18 },
    active: true,
    lpToken: true,
  },
  bananaTlos: {
    symbol: 'BANANA-TLOS',
    address: {
      [ChainId.TLOS]: '0xf780e62D54BB6C55e396dd937BacEF0BBD7Aff51',
    },
    decimals: { [ChainId.TLOS]: 18 },
    active: true,
    lpToken: true,
  },
  swtBnb: {
    symbol: 'SWT-BNB',
    address: {
      [ChainId.BSC]: '0xD2280ae010CE3e519a09a459E200bACD303eA330',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
    lpToken: true,
  },
  ethMatic: {
    symbol: 'ETH-MATIC',
    address: {
      [ChainId.MATIC]: '0x6cf8654e85ab489ca7e70189046d507eba233613',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
    lpToken: true,
  },
  dogiraMatic: {
    symbol: 'DOGIRA-MATIC',
    address: {
      [ChainId.MATIC]: '0x103062f71b7106a8df6fd2a4dd9368358c44a9d0',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
    lpToken: true,
  },
  axnUsdc: {
    symbol: 'AXN-USDC',
    address: {
      [ChainId.MATIC]: '0x81A3F6a138F0B12eCBDCE4583972A6CA57514dBd',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
    lpToken: true,
  },
  traxxMatic: {
    symbol: 'TRAXX-MATIC',
    address: {
      [ChainId.MATIC]: '0x545cb3055e62c86f54ba479c7cafc7e1e2eeec54',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
    lpToken: true,
  },
  chrpBnb: {
    symbol: 'CHRP-BNB',
    address: {
      [ChainId.BSC]: '0xcD10d0173651d1B3bd027DEcDBA007998bb03eaf',
    },
    decimals: { [ChainId.BSC]: 18 },
    active: true,
    lpToken: true,
  },
}

export default tokens
