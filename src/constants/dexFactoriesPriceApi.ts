import { ChainId, LiquidityDex, PriceApiProtocols } from '../types/index'

const dexFactoriesPriceApi: Partial<
  Record<
    ChainId,
    {
      name: LiquidityDex
      factory: string
      protocol: PriceApiProtocols
    }[]
  >
> = {
  [ChainId.MAINNET]: [
    {
      name: LiquidityDex.ApeSwapV2,
      factory: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.UniswapV2,
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.PancakeSwapV2,
      factory: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.PancakeSwapV3,
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.BSC]: [
    {
      name: LiquidityDex.ApeSwapV2,
      factory: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.PancakeSwapV2,
      factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.ApeSwapV3,
      factory: '0x7Bc382DdC5928964D7af60e7e2f6299A1eA6F48d',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.PancakeSwapV3,
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.Algebra, //Thena
      factory: '0x306F06C147f064A010530292A1EB6737c3e378e4',
      protocol: PriceApiProtocols.Algebra,
    },
    {
      name: LiquidityDex.ThenaV1,
      factory: '0xAFD89d21BdB66d00817d4153E055830B1c2B3970',
      protocol: PriceApiProtocols.Solidly,
    },
  ],
  [ChainId.MATIC]: [
    {
      name: LiquidityDex.ApeSwapV2,
      factory: '0xcf083be4164828f00cae704ec15a36d711491284',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.QuickswapV2,
      factory: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.Algebra, //Quickswap
      factory: '0x411b0facc3489691f28ad58c47006af5e3ab3a28',
      protocol: PriceApiProtocols.Algebra,
    },
    {
      name: LiquidityDex.SushiSwapV3,
      factory: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.ARBITRUM]: [
    {
      name: LiquidityDex.ApeSwapV2,
      factory: '0xCf083Be4164828f00cAE704EC15a36D711491284',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.Algebra, //Zyberswap
      factory: '0x9C2ABD632771b433E5E7507BcaA41cA3b25D8544',
      protocol: PriceApiProtocols.Algebra,
    },
    {
      name: LiquidityDex.CamelotV2,
      factory: '0x6EcCab422D763aC031210895C81787E87B43A652',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.Curve,
      factory: '0x98EE851a00abeE0d95D08cF4CA2BdCE32aeaAF7F',
      protocol: PriceApiProtocols.Curve,
    },
    {
      name: LiquidityDex.PancakeSwapV3,
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.PancakeSwapV2,
      factory: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
      protocol: PriceApiProtocols.UniV2,
    },
  ],
  [ChainId.LINEA]: [
    {
      name: LiquidityDex.Spartadex,
      factory: '0x9E4Fc4a5A0769ba74088856C229c4a1Db2Ea5A9e',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.Nile,
      factory: '0xAAA16c016BF556fcD620328f0759252E29b1AB57',
      protocol: PriceApiProtocols.Solidly,
    },
    {
      name: LiquidityDex.Algebra, //Lynex
      factory: '0x622b2c98123D303ae067DB4925CD6282B3A08D0F',
      protocol: PriceApiProtocols.Algebra,
    },
    {
      name: LiquidityDex.Lynex,
      factory: '0xBc7695Fd00E3b32D08124b7a4287493aEE99f9ee',
      protocol: PriceApiProtocols.Solidly,
    },
    {
      name: LiquidityDex.Metavault,
      factory: '0x9367c561915f9D062aFE3b57B18e30dEC62b8488',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.PancakeSwapV3,
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.PancakeSwapV2,
      factory: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
      protocol: PriceApiProtocols.UniV2,
    },
  ],
  [ChainId.LIGHTLINK]: [
    {
      name: LiquidityDex.Elektrik,
      factory: '0xEE6099234bbdC793a43676D98Eb6B589ca7112D7',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.BASE]: [
    {
      name: LiquidityDex.Synthswap,
      factory: '0x4bd16d59A5E1E0DB903F724aa9d721a31d7D720D',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.Algebra, //Synthswap
      factory: '0xa37359E63D1aa44C0ACb2a4605D3B45785C97eE3',
      protocol: PriceApiProtocols.Algebra,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.Aerodrome,
      factory: '0x420DD381b31aEf6683db6B902084cB0FFECe40Da',
      protocol: PriceApiProtocols.Solidly,
    },
    {
      name: LiquidityDex.SmarDex,
      factory: '0xdd4536dD9636564D891c919416880a3e250f975A',
      protocol: PriceApiProtocols.UniV2, //SmarDex is not actually a V2. Way of calculating price is similar though
    },
    {
      name: LiquidityDex.UniswapV2,
      factory: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.PancakeSwapV3,
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.PancakeSwapV2,
      factory: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.TrebleSwapV2,
      factory: '0x6Ae1d7EfA0640b6A2FA393d1EFf21fC38a08cd8f',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.TrebleAlgebraIntegral,
      factory: '0xAC900f12fB25d514e3ccFE8572B153A9991cA4e7',
      protocol: PriceApiProtocols.AlgebraIntegral,
    },
  ],
  [ChainId.IOTA]: [
    {
      name: LiquidityDex.MagicSea,
      factory: '0x349aaAc3a500014981CBA11b64C76c66a6c1e8D0',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.Wagmi,
      factory: '0x01Bd510B2eA106917e711f9a05a42fC162bee2Ac',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.AVAX]: [
    {
      name: LiquidityDex.LFJ,
      factory: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.Pharaoh,
      factory: '0xAAA32926fcE6bE95ea2c51cB4Fcb60836D320C42',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
      protocol: PriceApiProtocols.UniV3,
    },
    {
      name: LiquidityDex.Pangolin,
      factory: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
      protocol: PriceApiProtocols.UniV2,
    },
  ],
  [ChainId.BLAST]: [
    {
      name: LiquidityDex.ThrusterV2_03,
      factory: '0xb4A7D971D0ADea1c73198C97d7ab3f9CE4aaFA13',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.ThrusterV2_1,
      factory: '0x37836821a2c03c171fB1a595767f4a16e2b93Fc4',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.ThrusterV3,
      factory: '0x71b08f13B3c3aF35aAdEb3949AFEb1ded1016127',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.GRAPHLINQ]: [],
  [ChainId.CROSSFI]: [
    {
      name: LiquidityDex.XSwap,
      factory: '0x3ca837175312070f4E4fF64972a199122Ee03805',
      protocol: PriceApiProtocols.UniV2,
    },
  ],
  [ChainId.SONIC]: [
    {
      name: LiquidityDex.ShadowExchange,
      factory: '0x2dA25E7446A70D7be65fd4c053948BEcAA6374c8',
      protocol: PriceApiProtocols.Solidly,
    },
    {
      name: LiquidityDex.SwapX,
      factory: '0x05c1be79d3aC21Cc4B727eeD58C9B2fF757F5663',
      protocol: PriceApiProtocols.Solidly,
    },
    {
      name: LiquidityDex.SwapXAlgebraIntegral,
      factory: '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6',
      protocol: PriceApiProtocols.AlgebraIntegral,
    },
    {
      name: LiquidityDex.Wagmi,
      factory: '0x56CFC796bC88C9c7e1b38C2b0aF9B7120B079aef',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.KATANA]: [
    {
      name: LiquidityDex.SushiSwapV2,
      factory: '0x72D111b4d6f31B38919ae39779f570b747d6Acd9',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.SushiSwapV3,
      factory: '0x203e8740894c8955cB8950759876d7E7E45E04c1',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.UNICHAIN]: [
    {
      name: LiquidityDex.UniswapV2,
      factory: '0x1f98400000000000000000000000000000000002',
      protocol: PriceApiProtocols.UniV2,
    },
    {
      name: LiquidityDex.UniswapV3,
      factory: '0x1f98400000000000000000000000000000000003',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  //TESTNETS
  [ChainId.BSC_TESTNET]: [
    {
      name: LiquidityDex.PancakeSwapV3,
      factory: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
      protocol: PriceApiProtocols.UniV3,
    },
  ],
  [ChainId.MONAD_TESTNET]: [
    {
      name: LiquidityDex.PancakeSwapV2,
      factory: '0x82438CE666d9403e488bA720c7424434e8Aa47CD',
      protocol: PriceApiProtocols.UniV2,
    },
  ],
}

export default dexFactoriesPriceApi
