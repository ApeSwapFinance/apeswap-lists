'use strict'
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2
var _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _10,
  _11,
  _12,
  _13,
  _14,
  _15,
  _16,
  _17,
  _18,
  _19,
  _20,
  _21,
  _22,
  _23,
  _24,
  _25,
  _26,
  _27,
  _28,
  _29,
  _30,
  _31,
  _32,
  _33,
  _34,
  _35,
  _36,
  _37,
  _38,
  _39,
  _40,
  _41,
  _42,
  _43,
  _44,
  _45,
  _46,
  _47,
  _48
Object.defineProperty(exports, '__esModule', { value: true })
exports.dexToZapMapping =
  exports.defaultDexFactories =
  exports.dexFactories =
  exports.VaultVersion =
  exports.LaunchBondTiers =
  exports.MigrationVestingTerms =
  exports.defaultBillArtCollection =
  exports.BillArtCollection =
  exports.BillVersion =
  exports.Protocols =
  exports.ZapVersion =
  exports.IchiSupportedDex =
  exports.LiquidityDex =
  exports.ChainId =
  exports.PoolCategory =
  exports.QuoteToken =
    void 0
var QuoteToken
;(function (QuoteToken) {
  QuoteToken['BNB'] = 'BNB'
  QuoteToken['BANANA'] = 'BANANA'
  QuoteToken['BUSD'] = 'BUSD'
  QuoteToken['TWT'] = 'TWT'
  QuoteToken['UST'] = 'UST'
  QuoteToken['ETH'] = 'ETH'
  QuoteToken['USDT'] = 'USDT'
})((QuoteToken = exports.QuoteToken || (exports.QuoteToken = {})))
var PoolCategory
;(function (PoolCategory) {
  PoolCategory['COMMUNITY'] = 'Community'
  PoolCategory['APEZONE'] = 'ApeZone'
  PoolCategory['CORE'] = 'Core'
  PoolCategory['REAL_YIELD'] = 'Real Yield'
  PoolCategory['JUNGLE'] = 'Jungle'
})((PoolCategory = exports.PoolCategory || (exports.PoolCategory = {})))
var ChainId
;(function (ChainId) {
  ChainId[(ChainId['MAINNET'] = 1)] = 'MAINNET'
  ChainId[(ChainId['MATIC'] = 137)] = 'MATIC'
  ChainId[(ChainId['MATIC_TESTNET'] = 80001)] = 'MATIC_TESTNET'
  ChainId[(ChainId['BSC'] = 56)] = 'BSC'
  ChainId[(ChainId['BSC_TESTNET'] = 97)] = 'BSC_TESTNET'
  ChainId[(ChainId['TLOS'] = 40)] = 'TLOS'
  ChainId[(ChainId['ARBITRUM'] = 42161)] = 'ARBITRUM'
  ChainId[(ChainId['INEVM_TESTNET'] = 2424)] = 'INEVM_TESTNET'
  ChainId[(ChainId['INEVM'] = 2525)] = 'INEVM'
  ChainId[(ChainId['SEPOLIA'] = 11155111)] = 'SEPOLIA'
  ChainId[(ChainId['LINEA'] = 59144)] = 'LINEA'
  ChainId[(ChainId['LIGHTLINK'] = 1890)] = 'LIGHTLINK'
  ChainId[(ChainId['IOTA_TESTNET'] = 1075)] = 'IOTA_TESTNET'
  ChainId[(ChainId['IOTA'] = 8822)] = 'IOTA'
  ChainId[(ChainId['BASE'] = 8453)] = 'BASE'
})((ChainId = exports.ChainId || (exports.ChainId = {})))
var LiquidityDex
;(function (LiquidityDex) {
  LiquidityDex['ApeSwapV2'] = 'ApeSwapV2'
  LiquidityDex['ApeSwapV3'] = 'ApeSwapV3'
  LiquidityDex['PancakeSwapV2'] = 'PancakeSwapV2'
  LiquidityDex['PancakeSwapV3'] = 'PancakeSwapV3'
  LiquidityDex['SushiSwapV3'] = 'SushiSwapV3'
  LiquidityDex['UniswapV2'] = 'UniswapV2'
  LiquidityDex['ThenaV1'] = 'ThenaV1'
  /**
   * Initially, LiquidityDex was for the price getter and that checks algebra pricing
   *  (gamma wraps over it so no pricing there).
   * Now we use it for zapVersion as well where Gamma is better.
   */
  LiquidityDex['Algebra'] = 'Algebra'
  LiquidityDex['QuickswapV2'] = 'QuickswapV2'
  LiquidityDex['UniswapV3'] = 'UniswapV3'
  LiquidityDex['External'] = 'External'
  //Linea
  LiquidityDex['Spartadex'] = 'Spartadex'
  LiquidityDex['Nile'] = 'Nile'
  LiquidityDex['XFAI'] = 'XFAI'
  LiquidityDex['Lynex'] = 'Lynex'
  LiquidityDex['Metavault'] = 'Metavault'
  //LightLink
  LiquidityDex['Elektrik'] = 'Elektrik'
  //Base
  LiquidityDex['Synthswap'] = 'Synthswap'
  LiquidityDex['Aerodrome'] = 'Aerodrome'
  LiquidityDex['SmarDex'] = 'SmarDex'
  //IOTA
  LiquidityDex['MagicSea'] = 'MagicSea'
})((LiquidityDex = exports.LiquidityDex || (exports.LiquidityDex = {})))
var IchiSupportedDex
;(function (IchiSupportedDex) {
  IchiSupportedDex['Ascent'] = 'Ascent'
  IchiSupportedDex['Blueprint'] = 'Blueprint'
  IchiSupportedDex['Cleo'] = 'Cleo'
  IchiSupportedDex['Equalizer'] = 'Equalizer'
  IchiSupportedDex['Fenix'] = 'Fenix'
  IchiSupportedDex['Forge'] = 'Forge'
  IchiSupportedDex['Henjin'] = 'Henjin'
  IchiSupportedDex['Kinetix'] = 'Kinetix'
  IchiSupportedDex['Linehub'] = 'Linehub'
  IchiSupportedDex['Lynex'] = 'Lynex'
  IchiSupportedDex['Metavault'] = 'Metavault'
  IchiSupportedDex['Nile'] = 'Nile'
  IchiSupportedDex['Pancakeswap'] = 'PancakeSwap'
  IchiSupportedDex['Quickswap'] = 'QuickSwap'
  IchiSupportedDex['Ramses'] = 'Ramses'
  IchiSupportedDex['Retro'] = 'Retro'
  IchiSupportedDex['SaucerSwap'] = 'SaucerSwap'
  IchiSupportedDex['SpiritSwap'] = 'SpiritSwap'
  IchiSupportedDex['Sushiswap'] = 'SushiSwap'
  IchiSupportedDex['Thena'] = 'Thena'
  IchiSupportedDex['Thirdfy'] = 'Thirdfy'
  IchiSupportedDex['UniswapV3'] = 'Uniswap V3'
  IchiSupportedDex['Velocore'] = 'Velocore'
  IchiSupportedDex['XSwap'] = 'XSwap'
})((IchiSupportedDex = exports.IchiSupportedDex || (exports.IchiSupportedDex = {})))
var ZapVersion
;(function (ZapVersion) {
  ZapVersion['External'] = 'External'
  ZapVersion['ZapV1'] = 'ZapV1'
  ZapVersion['Wido'] = 'Wido'
  ZapVersion['SoulZap'] = 'SoulZap'
  ZapVersion['SoulZapApi'] = 'SoulZapApi'
})((ZapVersion = exports.ZapVersion || (exports.ZapVersion = {})))
var Protocols
;(function (Protocols) {
  Protocols[(Protocols['Both'] = 1)] = 'Both'
  Protocols[(Protocols['V2'] = 2)] = 'V2'
  Protocols[(Protocols['V3'] = 3)] = 'V3'
  Protocols[(Protocols['Algebra'] = 4)] = 'Algebra'
  Protocols[(Protocols['Gamma'] = 5)] = 'Gamma'
  Protocols[(Protocols['Steer'] = 6)] = 'Steer'
  Protocols[(Protocols['Solidly'] = 7)] = 'Solidly'
  Protocols[(Protocols['XFAI'] = 8)] = 'XFAI'
})((Protocols = exports.Protocols || (exports.Protocols = {})))
var BillVersion
;(function (BillVersion) {
  BillVersion['V1'] = 'V1'
  BillVersion['V2'] = 'V2'
  BillVersion['FixedPrice'] = 'FixedPrice'
  BillVersion['V3'] = 'V3'
  BillVersion['TieredSale'] = 'TieredSale'
  BillVersion['FlashTieredSale'] = 'FlashTieredSale'
})((BillVersion = exports.BillVersion || (exports.BillVersion = {})))
/**
 * This enum defines the art collection used to generate the art for a bill (bond).
 *
 * NOTE: Collections start at 1. The collection number provides a method to make new releases around
 * the same theme or project.
 */
var BillArtCollection
;(function (BillArtCollection) {
  BillArtCollection['ApeSwap_Collection1'] = 'ApeSwap_Collection1'
  BillArtCollection['Quickswap_Collection1'] = 'Quickswap_Collection1'
  BillArtCollection['ApeBond_Collection1'] = 'ApeBond_Collection1'
  BillArtCollection['CexFundBond_Collection1'] = 'CexFundBond_Collection1'
  BillArtCollection['PlanetIX_Collection1'] = 'PlanetIX_Collection1'
  BillArtCollection['ETH_Collection1'] = 'ETH_Collection1'
  BillArtCollection['inEVM_Collection1'] = 'inEVM_Collection1'
  BillArtCollection['AITECH_Collection1'] = 'AITECH_Collection1'
})((BillArtCollection = exports.BillArtCollection || (exports.BillArtCollection = {})))
exports.defaultBillArtCollection = BillArtCollection.ApeSwap_Collection1
exports.MigrationVestingTerms = {
  '60d': 5184000,
  '120d': 10368000,
  '180d': 15552000,
  '360d': 31104000,
}
var LaunchBondTiers
;(function (LaunchBondTiers) {
  LaunchBondTiers[(LaunchBondTiers['Bronze'] = 0)] = 'Bronze'
  LaunchBondTiers[(LaunchBondTiers['Silver'] = 1)] = 'Silver'
  LaunchBondTiers[(LaunchBondTiers['Gold'] = 2)] = 'Gold'
  LaunchBondTiers[(LaunchBondTiers['Diamond'] = 3)] = 'Diamond'
  LaunchBondTiers[(LaunchBondTiers['Legend'] = 4)] = 'Legend'
})((LaunchBondTiers = exports.LaunchBondTiers || (exports.LaunchBondTiers = {})))
var VaultVersion
;(function (VaultVersion) {
  VaultVersion['V1'] = 'V1'
  VaultVersion['V2'] = 'V2'
  VaultVersion['V3'] = 'V3'
})((VaultVersion = exports.VaultVersion || (exports.VaultVersion = {})))
exports.dexFactories =
  ((_a = {}),
  (_a[ChainId.MAINNET] =
    ((_b = {}),
    (_b[LiquidityDex.ApeSwapV2] = {
      factory: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
      protocol: Protocols.V2,
    }),
    (_b[LiquidityDex.UniswapV2] = {
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
      protocol: Protocols.V2,
    }),
    (_b[LiquidityDex.UniswapV3] = {
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: Protocols.V3,
    }),
    (_b[LiquidityDex.PancakeSwapV2] = {
      factory: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
      protocol: Protocols.V2,
    }),
    _b)),
  (_a[ChainId.BSC] =
    ((_c = {}),
    (_c[LiquidityDex.ApeSwapV2] = {
      factory: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
      protocol: Protocols.V2,
    }),
    (_c[LiquidityDex.PancakeSwapV2] = {
      factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
      protocol: Protocols.V2,
    }),
    (_c[LiquidityDex.ApeSwapV3] = {
      factory: '0x7Bc382DdC5928964D7af60e7e2f6299A1eA6F48d',
      protocol: Protocols.V3,
    }),
    (_c[LiquidityDex.UniswapV3] = {
      factory: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
      protocol: Protocols.V3,
    }),
    (_c[LiquidityDex.PancakeSwapV3] = {
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: Protocols.V3,
    }),
    (_c[LiquidityDex.Algebra] = {
      factory: '0x306F06C147f064A010530292A1EB6737c3e378e4',
      protocol: Protocols.Algebra,
    }),
    (_c[LiquidityDex.ThenaV1] = {
      factory: '0xAFD89d21BdB66d00817d4153E055830B1c2B3970',
      protocol: Protocols.Solidly,
      router: '0xd4ae6eCA985340Dd434D38F470aCCce4DC78D109',
    }),
    _c)),
  (_a[ChainId.MATIC] =
    ((_d = {}),
    (_d[LiquidityDex.ApeSwapV2] = {
      factory: '0xcf083be4164828f00cae704ec15a36d711491284',
      protocol: Protocols.V2,
    }),
    (_d[LiquidityDex.QuickswapV2] = {
      factory: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
      protocol: Protocols.V2,
    }),
    (_d[LiquidityDex.UniswapV3] = {
      factory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
      protocol: Protocols.V3,
    }),
    (_d[LiquidityDex.Algebra] = {
      factory: '0x411b0facc3489691f28ad58c47006af5e3ab3a28',
      protocol: Protocols.Algebra,
    }),
    (_d[LiquidityDex.SushiSwapV3] = {
      factory: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
      protocol: Protocols.V3,
    }),
    _d)),
  (_a[ChainId.ARBITRUM] =
    ((_e = {}),
    (_e[LiquidityDex.ApeSwapV2] = {
      factory: '0xCf083Be4164828f00cAE704EC15a36D711491284',
      protocol: Protocols.V2,
    }),
    (_e[LiquidityDex.UniswapV3] = {
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: Protocols.V3,
    }),
    (_e[LiquidityDex.Algebra] = {
      factory: '0x9C2ABD632771b433E5E7507BcaA41cA3b25D8544',
      protocol: Protocols.Algebra,
    }),
    _e)),
  (_a[ChainId.LINEA] =
    ((_f = {}),
    (_f[LiquidityDex.Spartadex] = {
      factory: '0x9E4Fc4a5A0769ba74088856C229c4a1Db2Ea5A9e',
      protocol: Protocols.V2,
    }),
    (_f[LiquidityDex.Nile] = {
      factory: '0xAAA16c016BF556fcD620328f0759252E29b1AB57',
      protocol: Protocols.Solidly,
    }),
    (_f[LiquidityDex.Algebra] = {
      factory: '0x622b2c98123D303ae067DB4925CD6282B3A08D0F',
      protocol: Protocols.Algebra,
    }),
    (_f[LiquidityDex.Lynex] = {
      factory: '0xBc7695Fd00E3b32D08124b7a4287493aEE99f9ee',
      protocol: Protocols.Solidly,
    }),
    (_f[LiquidityDex.XFAI] = {
      factory: '0xa5136eAd459F0E61C99Cec70fe8F5C24cF3ecA26',
      protocol: Protocols.XFAI,
    }),
    (_f[LiquidityDex.Metavault] = {
      factory: '0x9367c561915f9D062aFE3b57B18e30dEC62b8488',
      protocol: Protocols.V3,
    }),
    _f)),
  (_a[ChainId.LIGHTLINK] =
    ((_g = {}),
    (_g[LiquidityDex.Elektrik] = {
      factory: '0xEE6099234bbdC793a43676D98Eb6B589ca7112D7',
      protocol: Protocols.V3,
    }),
    _g)),
  (_a[ChainId.BASE] =
    ((_h = {}),
    (_h[LiquidityDex.Synthswap] = {
      factory: '0x4bd16d59A5E1E0DB903F724aa9d721a31d7D720D',
      protocol: Protocols.V2,
    }),
    (_h[LiquidityDex.Algebra] = {
      factory: '0xa37359E63D1aa44C0ACb2a4605D3B45785C97eE3',
      protocol: Protocols.Algebra,
    }),
    (_h[LiquidityDex.UniswapV3] = {
      factory: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
      protocol: Protocols.V3,
    }),
    (_h[LiquidityDex.Aerodrome] = {
      factory: '0x420DD381b31aEf6683db6B902084cB0FFECe40Da',
      router: '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43',
      protocol: Protocols.Solidly,
    }),
    (_h[LiquidityDex.SmarDex] = {
      factory: '0xdd4536dD9636564D891c919416880a3e250f975A',
      protocol: Protocols.V2, //SmarDex is not actually a V2. Way of calculating price is similar though
    }),
    (_h[LiquidityDex.UniswapV2] = {
      factory: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
      router: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
      protocol: Protocols.V2,
    }),
    _h)),
  (_a[ChainId.IOTA] =
    ((_j = {}),
    (_j[LiquidityDex.MagicSea] = {
      factory: '0x349aaAc3a500014981CBA11b64C76c66a6c1e8D0',
      protocol: Protocols.V2,
    }),
    _j)),
  _a)
exports.defaultDexFactories =
  ((_k = {}),
  (_k[ChainId.MAINNET] =
    ((_l = {}),
    (_l[Protocols.V2] =
      (_4 = (_3 = exports.dexFactories[ChainId.MAINNET]) === null || _3 === void 0 ? void 0 : _3.ApeSwapV2) === null ||
      _4 === void 0
        ? void 0
        : _4.factory),
    (_l[Protocols.V3] =
      (_6 = (_5 = exports.dexFactories[ChainId.MAINNET]) === null || _5 === void 0 ? void 0 : _5.UniswapV3) === null ||
      _6 === void 0
        ? void 0
        : _6.factory),
    _l)),
  (_k[ChainId.BSC] =
    ((_m = {}),
    (_m[Protocols.V2] =
      (_8 = (_7 = exports.dexFactories[ChainId.BSC]) === null || _7 === void 0 ? void 0 : _7.ApeSwapV2) === null ||
      _8 === void 0
        ? void 0
        : _8.factory),
    (_m[Protocols.V3] =
      (_10 = (_9 = exports.dexFactories[ChainId.BSC]) === null || _9 === void 0 ? void 0 : _9.UniswapV3) === null ||
      _10 === void 0
        ? void 0
        : _10.factory),
    (_m[Protocols.Algebra] =
      (_12 = (_11 = exports.dexFactories[ChainId.BSC]) === null || _11 === void 0 ? void 0 : _11.Algebra) === null ||
      _12 === void 0
        ? void 0
        : _12.factory),
    (_m[Protocols.Solidly] =
      (_14 = (_13 = exports.dexFactories[ChainId.BSC]) === null || _13 === void 0 ? void 0 : _13.ThenaV1) === null ||
      _14 === void 0
        ? void 0
        : _14.factory),
    _m)),
  (_k[ChainId.MATIC] =
    ((_o = {}),
    (_o[Protocols.V2] =
      (_16 = (_15 = exports.dexFactories[ChainId.MATIC]) === null || _15 === void 0 ? void 0 : _15.ApeSwapV2) ===
        null || _16 === void 0
        ? void 0
        : _16.factory),
    (_o[Protocols.V3] =
      (_18 = (_17 = exports.dexFactories[ChainId.MATIC]) === null || _17 === void 0 ? void 0 : _17.UniswapV3) ===
        null || _18 === void 0
        ? void 0
        : _18.factory),
    (_o[Protocols.Algebra] =
      (_20 = (_19 = exports.dexFactories[ChainId.MATIC]) === null || _19 === void 0 ? void 0 : _19.Algebra) === null ||
      _20 === void 0
        ? void 0
        : _20.factory),
    _o)),
  (_k[ChainId.ARBITRUM] =
    ((_p = {}),
    (_p[Protocols.V2] =
      (_22 = (_21 = exports.dexFactories[ChainId.ARBITRUM]) === null || _21 === void 0 ? void 0 : _21.ApeSwapV2) ===
        null || _22 === void 0
        ? void 0
        : _22.factory),
    (_p[Protocols.V3] =
      (_24 = (_23 = exports.dexFactories[ChainId.ARBITRUM]) === null || _23 === void 0 ? void 0 : _23.UniswapV3) ===
        null || _24 === void 0
        ? void 0
        : _24.factory),
    (_p[Protocols.Algebra] =
      (_26 = (_25 = exports.dexFactories[ChainId.ARBITRUM]) === null || _25 === void 0 ? void 0 : _25.Algebra) ===
        null || _26 === void 0
        ? void 0
        : _26.factory),
    _p)),
  (_k[ChainId.LINEA] =
    ((_q = {}),
    (_q[Protocols.V2] =
      (_28 = (_27 = exports.dexFactories[ChainId.LINEA]) === null || _27 === void 0 ? void 0 : _27.Spartadex) ===
        null || _28 === void 0
        ? void 0
        : _28.factory),
    (_q[Protocols.V3] =
      (_30 = (_29 = exports.dexFactories[ChainId.LINEA]) === null || _29 === void 0 ? void 0 : _29.Nile) === null ||
      _30 === void 0
        ? void 0
        : _30.factory),
    (_q[Protocols.Algebra] =
      (_32 = (_31 = exports.dexFactories[ChainId.LINEA]) === null || _31 === void 0 ? void 0 : _31.Algebra) === null ||
      _32 === void 0
        ? void 0
        : _32.factory),
    (_q[Protocols.Solidly] =
      (_34 = (_33 = exports.dexFactories[ChainId.LINEA]) === null || _33 === void 0 ? void 0 : _33.Lynex) === null ||
      _34 === void 0
        ? void 0
        : _34.factory),
    (_q[Protocols.XFAI] =
      (_36 = (_35 = exports.dexFactories[ChainId.LINEA]) === null || _35 === void 0 ? void 0 : _35.XFAI) === null ||
      _36 === void 0
        ? void 0
        : _36.factory),
    _q)),
  (_k[ChainId.LIGHTLINK] =
    ((_r = {}),
    (_r[Protocols.V3] =
      (_38 = (_37 = exports.dexFactories[ChainId.LIGHTLINK]) === null || _37 === void 0 ? void 0 : _37.Elektrik) ===
        null || _38 === void 0
        ? void 0
        : _38.factory),
    _r)),
  (_k[ChainId.BASE] =
    ((_s = {}),
    (_s[Protocols.V2] =
      (_40 = (_39 = exports.dexFactories[ChainId.BASE]) === null || _39 === void 0 ? void 0 : _39.SmarDex) === null ||
      _40 === void 0
        ? void 0
        : _40.factory),
    (_s[Protocols.V3] =
      (_42 = (_41 = exports.dexFactories[ChainId.BASE]) === null || _41 === void 0 ? void 0 : _41.UniswapV3) === null ||
      _42 === void 0
        ? void 0
        : _42.factory),
    (_s[Protocols.Algebra] =
      (_44 = (_43 = exports.dexFactories[ChainId.BASE]) === null || _43 === void 0 ? void 0 : _43.Algebra) === null ||
      _44 === void 0
        ? void 0
        : _44.factory),
    (_s[Protocols.Solidly] =
      (_46 = (_45 = exports.dexFactories[ChainId.BASE]) === null || _45 === void 0 ? void 0 : _45.Aerodrome) === null ||
      _46 === void 0
        ? void 0
        : _46.factory),
    _s)),
  (_k[ChainId.IOTA] =
    ((_t = {}),
    (_t[Protocols.V2] =
      (_48 = (_47 = exports.dexFactories[ChainId.IOTA]) === null || _47 === void 0 ? void 0 : _47.MagicSea) === null ||
      _48 === void 0
        ? void 0
        : _48.factory),
    _t)),
  _k)
exports.dexToZapMapping =
  ((_u = {}),
  (_u[LiquidityDex.ApeSwapV2] =
    ((_v = {}),
    (_v[ChainId.BSC] = ZapVersion.SoulZap),
    (_v[ChainId.BSC_TESTNET] = ZapVersion.ZapV1),
    (_v[ChainId.MATIC] = ZapVersion.ZapV1),
    (_v[ChainId.MATIC_TESTNET] = ZapVersion.ZapV1),
    (_v[ChainId.MAINNET] = ZapVersion.ZapV1),
    (_v[ChainId.ARBITRUM] = ZapVersion.External),
    (_v[ChainId.TLOS] = ZapVersion.ZapV1),
    _v)),
  (_u[LiquidityDex.Algebra] =
    ((_w = {}),
    (_w[ChainId.BSC] = ZapVersion.SoulZapApi),
    (_w[ChainId.MATIC] = ZapVersion.SoulZapApi),
    (_w[ChainId.LINEA] = ZapVersion.SoulZapApi),
    _w)),
  (_u[LiquidityDex.PancakeSwapV2] =
    ((_x = {}), (_x[ChainId.BSC] = ZapVersion.SoulZap), (_x[ChainId.MAINNET] = ZapVersion.External), _x)),
  (_u[LiquidityDex.QuickswapV2] = ((_y = {}), (_y[ChainId.MATIC] = ZapVersion.SoulZap), _y)),
  (_u[LiquidityDex.ApeSwapV3] = {}),
  (_u[LiquidityDex.UniswapV3] = {}),
  (_u[LiquidityDex.ThenaV1] = ((_z = {}), (_z[ChainId.BSC] = ZapVersion.SoulZapApi), _z)),
  (_u[LiquidityDex.UniswapV2] = ((_0 = {}), (_0[ChainId.BASE] = ZapVersion.SoulZapApi), _0)),
  (_u[LiquidityDex.PancakeSwapV3] = {}),
  (_u[LiquidityDex.External] = {}),
  (_u[LiquidityDex.Spartadex] = {}),
  (_u[LiquidityDex.Nile] = {}),
  (_u[LiquidityDex.XFAI] = {}),
  (_u[LiquidityDex.Lynex] = {}),
  (_u[LiquidityDex.Metavault] = {}),
  (_u[LiquidityDex.Elektrik] = {}),
  (_u[LiquidityDex.SushiSwapV3] = {}),
  (_u[LiquidityDex.Synthswap] = {}),
  (_u[LiquidityDex.Aerodrome] = ((_1 = {}), (_1[ChainId.BASE] = ZapVersion.SoulZapApi), _1)),
  (_u[LiquidityDex.SmarDex] = {}),
  (_u[LiquidityDex.MagicSea] = ((_2 = {}), (_2[ChainId.IOTA] = ZapVersion.External), _2)),
  _u)
//# sourceMappingURL=index.js.map
