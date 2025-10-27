import { ChainId, Token } from '../types'

/**
 * Native wrapped tokens for each supported chain
 */
export const WNATIVE: Partial<Record<ChainId, Token>> = {
  [ChainId.MAINNET]: {
    symbol: 'wETH',
    address: {
      [ChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
    decimals: {
      [ChainId.MAINNET]: 18,
    },
    active: true,
  },
  [ChainId.BSC]: {
    symbol: 'wBNB',
    address: {
      [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: true,
  },
  [ChainId.MATIC]: {
    symbol: 'wPOL',
    address: {
      [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    decimals: {
      [ChainId.MATIC]: 18,
    },
    active: true,
  },
  [ChainId.ARBITRUM]: {
    symbol: 'wETH',
    address: {
      [ChainId.ARBITRUM]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    },
    decimals: {
      [ChainId.ARBITRUM]: 18,
    },
    active: true,
  },
  [ChainId.LINEA]: {
    symbol: 'wETH',
    address: {
      [ChainId.LINEA]: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    },
    decimals: {
      [ChainId.LINEA]: 18,
    },
    active: true,
  },
  [ChainId.BASE]: {
    symbol: 'wETH',
    address: {
      [ChainId.BASE]: '0x4200000000000000000000000000000000000006',
    },
    decimals: {
      [ChainId.BASE]: 18,
    },
    active: true,
  },
  [ChainId.IOTA]: {
    symbol: 'wIOTA',
    address: {
      [ChainId.IOTA]: '0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c',
    },
    decimals: {
      [ChainId.IOTA]: 18,
    },
    active: true,
  },
  [ChainId.GRAPHLINQ]: {
    symbol: 'wGLQ',
    address: {
      [ChainId.GRAPHLINQ]: '0xEB567ec41738c2bAb2599A1070FC5B727721b3B6',
    },
    decimals: {
      [ChainId.GRAPHLINQ]: 18,
    },
    active: true,
  },
  [ChainId.BLAST]: {
    symbol: 'wETH',
    address: {
      [ChainId.BLAST]: '0x4300000000000000000000000000000000000004',
    },
    decimals: {
      [ChainId.BLAST]: 18,
    },
    active: true,
  },
  [ChainId.MONAD_TESTNET]: {
    symbol: 'wMONAD',
    address: {
      [ChainId.MONAD_TESTNET]: '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',
    },
    decimals: {
      [ChainId.MONAD_TESTNET]: 18,
    },
    active: true,
  },
  [ChainId.SONIC]: {
    symbol: 'wS',
    address: {
      [ChainId.SONIC]: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
    },
    decimals: {
      [ChainId.SONIC]: 18,
    },
    active: true,
  },
  [ChainId.BERACHAIN]: {
    symbol: 'wBERA',
    address: {
      [ChainId.BERACHAIN]: '0x6969696969696969696969696969696969696969',
    },
    decimals: {
      [ChainId.BERACHAIN]: 18,
    },
    active: true,
  },
  [ChainId.AVAX]: {
    symbol: 'wAVAX',
    address: {
      [ChainId.AVAX]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    decimals: {
      [ChainId.AVAX]: 18,
    },
    active: true,
  },
  [ChainId.SOL]: {
    symbol: 'wSOL',
    address: {
      [ChainId.SOL]: 'So11111111111111111111111111111111111111112',
    },
    decimals: {
      [ChainId.SOL]: 9,
    },
    active: true,
  },
}

export const zapInputTokens: Partial<Record<ChainId, Token[]>> = {
  [ChainId.MAINNET]: [
    {
      symbol: 'wETH',
      address: {
        [ChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
      decimals: {
        [ChainId.MAINNET]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      },
      decimals: {
        [ChainId.MAINNET]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.MAINNET]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      },
      decimals: {
        [ChainId.MAINNET]: 6,
      },
      active: true,
    },
    {
      symbol: 'DAI',
      address: {
        [ChainId.MAINNET]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      },
      decimals: {
        [ChainId.MAINNET]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.MAINNET]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      },
      decimals: {
        [ChainId.MAINNET]: 8,
      },
      active: true,
      // liquidityDex: {
      //   [ChainId.MAINNET]: LiquidityDex.UniswapV3,
      // },
    },
  ],
  [ChainId.BSC]: [
    {
      symbol: 'wBNB',
      address: {
        [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.BSC]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.BSC]: '0x55d398326f99059fF775485246999027B3197955',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'DAI',
      address: {
        [ChainId.BSC]: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'FDUSD',
      address: {
        [ChainId.BSC]: '0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'wETH',
      address: {
        [ChainId.BSC]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.BSC]: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    // WMATIC or WPOL on BNB chain has been commented out up until we have clarity regarding the migration
    // {
    //   symbol: 'wPOL',
    //   address: {
    //     [ChainId.BSC]: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    //   },
    //   decimals: {
    //     [ChainId.BSC]: 18,
    //   },
    //   active: true,
    // },
    {
      symbol: 'AVAX',
      address: {
        [ChainId.BSC]: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
    {
      symbol: 'ADA',
      address: {
        [ChainId.BSC]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      },
      decimals: {
        [ChainId.BSC]: 18,
      },
      active: true,
    },
  ],
  [ChainId.MATIC]: [
    {
      symbol: 'wPOL',
      address: {
        [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      },
      decimals: {
        [ChainId.MATIC]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC.e',
      address: {
        [ChainId.MATIC]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      },
      decimals: {
        [ChainId.MATIC]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.MATIC]: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      },
      decimals: {
        [ChainId.MATIC]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.MATIC]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      },
      decimals: {
        [ChainId.MATIC]: 6,
      },
      active: true,
    },
    {
      symbol: 'DAI',
      address: {
        [ChainId.MATIC]: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      },
      decimals: {
        [ChainId.MATIC]: 18,
      },
      active: true,
    },
    {
      symbol: 'wETH',
      address: {
        [ChainId.MATIC]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      },
      decimals: {
        [ChainId.MATIC]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.MATIC]: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
      },
      decimals: {
        [ChainId.MATIC]: 18,
      },
      active: true,
    },
  ],
  [ChainId.ARBITRUM]: [
    {
      symbol: 'wETH',
      address: {
        [ChainId.ARBITRUM]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      },
      decimals: {
        [ChainId.ARBITRUM]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.ARBITRUM]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // Circle's USDC, not USDC.e
      },
      decimals: {
        [ChainId.ARBITRUM]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.ARBITRUM]: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      },
      decimals: {
        [ChainId.ARBITRUM]: 6,
      },
      active: true,
    },
    {
      symbol: 'DAI',
      address: {
        [ChainId.ARBITRUM]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      },
      decimals: {
        [ChainId.ARBITRUM]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.ARBITRUM]: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      },
      decimals: {
        [ChainId.ARBITRUM]: 8,
      },
      active: true,
    },
    {
      symbol: 'ARB',
      address: {
        [ChainId.ARBITRUM]: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      },
      decimals: {
        [ChainId.ARBITRUM]: 18,
      },
      active: true,
    },
  ],
  [ChainId.LINEA]: [
    {
      symbol: 'wETH',
      address: {
        [ChainId.LINEA]: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
      },
      decimals: {
        [ChainId.LINEA]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC.e',
      address: {
        [ChainId.LINEA]: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
      },
      decimals: {
        [ChainId.LINEA]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.LINEA]: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
      },
      decimals: {
        [ChainId.LINEA]: 6,
      },
      active: true,
    },
    {
      symbol: 'DAI',
      address: {
        [ChainId.LINEA]: '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
      },
      decimals: {
        [ChainId.LINEA]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.LINEA]: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
      },
      decimals: {
        [ChainId.LINEA]: 8,
      },
      active: true,
    },
    // WMATIC or WPOL on Linea chain has been commented out up until we have clarity regarding the migration
    // {
    //   symbol: 'wPOL',
    //   address: {
    //     [ChainId.LINEA]: '0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8',
    //   },
    //   decimals: {
    //     [ChainId.LINEA]: 18,
    //   },
    //   active: true,
    // },
  ],
  [ChainId.BASE]: [
    {
      symbol: 'wETH',
      address: {
        [ChainId.BASE]: '0x4200000000000000000000000000000000000006',
      },
      decimals: {
        [ChainId.BASE]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.BASE]: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
      },
      decimals: {
        [ChainId.BASE]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.BASE]: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2',
      },
      decimals: {
        [ChainId.BASE]: 6,
      },
      active: true,
    },
    {
      symbol: 'DAI',
      address: {
        [ChainId.BASE]: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
      },
      decimals: {
        [ChainId.BASE]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.BASE]: '0x0c41F1FC9022FEB69aF6dc666aBfE73C9FFDA7ce',
      },
      decimals: {
        [ChainId.BASE]: 18,
      },
      active: true,
    },
  ],
  [ChainId.BLAST]: [
    {
      symbol: 'wETH',
      address: {
        [ChainId.BLAST]: '0x4300000000000000000000000000000000000004',
      },
      decimals: {
        [ChainId.BLAST]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.BLAST]: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
      },
      decimals: {
        [ChainId.BLAST]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDe',
      address: {
        [ChainId.BLAST]: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
      },
      decimals: {
        [ChainId.BLAST]: 18,
      },
      active: true,
    },
  ],
  [ChainId.BERACHAIN]: [
    {
      symbol: 'HONEY',
      address: {
        [ChainId.BERACHAIN]: '0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce',
      },
      decimals: {
        [ChainId.BERACHAIN]: 18,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.BERACHAIN]: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
      },
      decimals: {
        [ChainId.BERACHAIN]: 8,
      },
      active: true,
    },
    {
      symbol: 'USDe',
      address: {
        [ChainId.BERACHAIN]: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
      },
      decimals: {
        [ChainId.BERACHAIN]: 18,
      },
      active: true,
    },
    {
      symbol: 'WETH',
      address: {
        [ChainId.BERACHAIN]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
      },
      decimals: {
        [ChainId.BERACHAIN]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC.e',
      address: {
        [ChainId.BERACHAIN]: '0x549943e04f40284185054145c6E4e9568C1D3241',
      },
      decimals: {
        [ChainId.BERACHAIN]: 6,
      },
      active: true,
    },
  ],
  [ChainId.SONIC]: [
    {
      symbol: 'wS',
      address: {
        [ChainId.SONIC]: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
      },
      decimals: {
        [ChainId.SONIC]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.SONIC]: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
      },
      decimals: {
        [ChainId.SONIC]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.SONIC]: '0x6047828dc181963ba44974801FF68e538dA5eaF9',
      },
      decimals: {
        [ChainId.SONIC]: 6,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.SONIC]: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
      },
      decimals: {
        [ChainId.SONIC]: 8,
      },
      active: true,
    },
    {
      symbol: 'wETH',
      address: {
        [ChainId.SONIC]: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
      },
      decimals: {
        [ChainId.SONIC]: 18,
      },
      active: true,
    },
  ],
  [ChainId.AVAX]: [
    {
      symbol: 'wAVAX',
      address: {
        [ChainId.AVAX]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      },
      decimals: {
        [ChainId.AVAX]: 18,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.AVAX]: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      },
      decimals: {
        [ChainId.AVAX]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.AVAX]: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
      },
      decimals: {
        [ChainId.AVAX]: 6,
      },
      active: true,
    },
    {
      symbol: 'BTC',
      address: {
        [ChainId.AVAX]: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
      },
      decimals: {
        [ChainId.AVAX]: 8,
      },
      active: true,
    },
    {
      symbol: 'SUPER',
      address: {
        [ChainId.AVAX]: '0x09fa58228bb791ea355c90da1e4783452b9bd8c3',
      },
      decimals: {
        [ChainId.AVAX]: 18,
      },
      active: true,
    },
  ],
  [ChainId.SOL]: [
    {
      symbol: 'wSOL',
      address: {
        [ChainId.SOL]: 'So11111111111111111111111111111111111111112',
      },
      decimals: {
        [ChainId.SOL]: 9,
      },
      active: true,
    },
    {
      symbol: 'USDC',
      address: {
        [ChainId.SOL]: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      },
      decimals: {
        [ChainId.SOL]: 6,
      },
      active: true,
    },
    {
      symbol: 'USDT',
      address: {
        [ChainId.SOL]: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      },
      decimals: {
        [ChainId.SOL]: 6,
      },
      active: true,
    },
    {
      symbol: 'wETH',
      address: {
        [ChainId.SOL]: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
      },
      decimals: {
        [ChainId.SOL]: 8,
      },
      active: true,
    },
  ],
}
