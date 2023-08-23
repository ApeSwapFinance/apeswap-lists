# Bills/Bonds Configuration

## Types

In [./types.ts](./types.ts) you can find the types for the bills configuration. There are three different configuration interfaces which can be used to enforce configuration differences for each type based on the `billType` flag.

Currently there are three types of bills/bonds:

1. `liquidity`
2. `reserve`
3. `launch`

```ts
// Using a "discriminated union" to have type safety for the different bill types
// https://github.com/basarat/typescript-book/blob/master/docs/types/discriminated-unions.md#discriminated-union
export type BillsConfig = BillsLiquidityConfig | BillsLaunchConfig | BillsReserveConfig
```

## Config

The config for bills can be found in [./config.ts](./config.ts). It is an array of `BillsConfig` objects. The types will be enforced based on the `billType` flag.

### `BillArtCollection`

The `BillArtCollection` is a flag which depicts which art collection is used for the bill. This art collection and flag will need to be added to the backend api or else it will default to `ApeSwap_Collection1`.
