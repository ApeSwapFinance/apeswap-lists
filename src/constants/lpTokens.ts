import { ChainId } from '@ape.swap/sdk'
import tokens from './tokens'
import { LpToken, LpType } from './types'

const lpTokens: Record<string, LpToken> = {
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
    decimals: { [ChainId.BSC]: 18 },
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
  daiUad: {
    symbol: 'DAI-uAD',
    token0: tokens.dai,
    token1: tokens.uad,
    address: {
      [ChainId.MATIC]: '0xb044DeF758f101DacB42892ed8FfE618e945DE2F',
    },
    decimals: { [ChainId.MATIC]: 18 },
    active: true,
    lpToken: true,
    lpType: LpType.ARRAKIS,
  },

  // Test LPS
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
}

export default lpTokens
