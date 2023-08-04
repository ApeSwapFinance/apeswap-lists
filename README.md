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

# Config

### Token

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
