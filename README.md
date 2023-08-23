# apeswap-lists

## How to Manage this Repo

When you would like to make an edit to one of the lists in this repo, please only edit the `.ts` files. This is for better type control and to reduce the chance of errors. To apply the changes run `yarn build` & `yarn legacy-build` in the console.

For example, to edit a farm:

1. Open the `constants/farms.ts` file
2. Make the edits & save
3. Run `yarn build` and `yarn legacy-build` to apply these changes to the corresponding JSON files
4. Run `yarn test` to make sure the JSON files are valid
5. Commit to the Github repo

Humans interact with the TypeScript files & our services pull in the JSON files! ❤️

## Testing Locally

### [yalc](https://www.npmjs.com/package/yalc)

1. `yalc publish` (in package)
2. `yalc add <package-name>` (in package consumer repo)
   - `yalc link` is another option
3. `yalc remove <package-name>`
   - `yalc remove --all` another option

#### `yalc` installation

Using NPM:  
`npm i yalc -g`  
Using Yarn:  
`yarn global add yalc`

### `npm link`

1. `yarn` (Install latest deps)
2. _Update lists as needed_
3. `yarn build && yarn legacy-build`
4. `npm link`
5. Go to frontend repo locally `npm link @ape.swap/apeswap-lists`

### Updating while linked

1. _Update lists as needed_
2. `yarn build && yarn legacy-build`
3. The changes should then be reflected on the local linked repo.

### Unlink

1. Go to frontend repo locally `npm unlink @ape.swap/apeswap-lists`
2. Still on local frontend: `yarn install` (Reinstall package)
3. `npm unlink`

## Publishing Test Packages

Sometimes a package needs to be deployed with test tokens. We suggest using a `--tag=testX` tag scheme
to denote this packages have test tokens included in them

```bash
yarn build
npm publish --access=public --tag=test0
```

# Config

## Token

This is the current interface of Token

```js
export interface Token {
  symbol: string
  address: Partial<Record<ChainId, string>>
  active: boolean
  decimals?: Partial<Record<ChainId, number | null>>
  dontFetch?: boolean
  lpToken?: boolean
  price?: number
  liquidityDex?: Partial<Record<ChainId, LiquidityDex>>
  getLpUrl?: Partial<Record<ChainId, string>>
}
```

With more recently added properties `liquidityDex` and `getLpUrl`

### `LiquidityDex`

This property was added because of us introducing different non ApeLP bonds. For example QS (Algebra) and PCS.
This is a way of telling FE that the bond is a non ApeLP and the pricing of the LP should be retrieved differently.
Besides that we also have different zapping strategies so this also makes sure the right zap strategy is used.

```js
liquidityDex: {
      [ChainId.BSC]: LiquidityDex.PancakeSwapV2,
      [ChainId.Polygon]: LiquidityDex.Algebra,
    },
```

### `getLpUrl`

For some non ApeLP bonds we don't have a working zap strategy and we should send users to an external url to get the right LPs. This is the url the users will be send to.

Only used and a must when zap version for liquidityDex is `ZapVersion.External`.
Check [dexToZapMapping.ts](./src/constants/dexToZapMapping.ts) for what strategy is used for what LiquidityDex.

```js
getLpUrl: {
      [ChainId.BSC]: "https://www.{url}.com",
      [ChainId.Polygon]: "https://www.{url}.com",
    },
```

### Example config

```js
  pcsBnbUsdt: {
    symbol: 'BNB-USDT',
    address: {
      [ChainId.BSC]: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    decimals: {
      [ChainId.BSC]: 18,
    },
    active: false,
    lpToken: true,
    liquidityDex: {
      [ChainId.BSC]: LiquidityDex.PancakeSwapV2,
    },
    getLpUrl: {
      [ChainId.BSC]: 'https://pancakeswap.finance/v2/add/0x55d398326f99059fF775485246999027B3197955/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
  },
```

## Bills/Bonds

More information about bills can be found in [README-bills.md](./src/constants/bills/README-bills.md).

This is the current interface for Bills

```js
export interface BillsConfig {
  index: number
  contractAddress: Partial<Record<ChainId, string>>
  billVersion: BillVersion
  billType: 'liquidity' | 'reserve' | 'launch'
  token: Token
  quoteToken: Token
  lpToken: Token
  earnToken: Token
  billNnftAddress: Partial<Record<ChainId, string>>
  inactive?: boolean
  projectLink?: string
  twitter?: string
  initTime?: Partial<Record<ChainId, number>>
  initPrice?: Partial<Record<ChainId, number>>
  audit?: string
  soldOut?: boolean
  billArt?: {
    collection: BillArtCollection // i.e. BillArtCollection.ApeSwap_Collection1
  }
}
```

With more recently added property `billArt`

### `billArt`

This property was added to be able to support multiple bond arts. Currently the supported bill arts are ApeSwap and Quickswap with default ApeSwap if nothing is specified.

```
export enum BillArtCollection {
  ApeSwap_Collection1 = 'ApeSwap_Collection1',
  Quickswap_Collection1 = 'Quickswap_Collection1',
}
```

```
billArt: { collection: BillArtCollection.Quickswap_Collection1 }
```

# Example

```
  {
    index: 16543,
    contractAddress: {
      [ChainId.MATIC]: '0xa54d14007bdc29d1d2ff0607efac0bae9ecaf9b9',
    },
    billType: 'liquidity',
    billVersion: BillVersion.V2,
    token: tokens.quick,
    quoteToken: tokens.wmatic,
    lpToken: tokens.quickMatic,
    earnToken: tokens.TTT,
    billNnftAddress: {
      [ChainId.MATIC]: '0xa1c78af783fb9ea7be790cbbd01abff63beae769',
    },
    inactive: false,
    projectLink: 'https://www.quickswap.app/',
    twitter: 'https://twitter.com/',
    audit: 'Add audit link',
    initTime: { [ChainId.MATIC]: 1690287710 },
    initPrice: { [ChainId.MATIC]: 0.00123 },
    billArt: { collection: BillArtCollection.Quickswap_Collection1 },
  },
```
