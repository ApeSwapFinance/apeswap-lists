'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
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
//# sourceMappingURL=index.js.map
