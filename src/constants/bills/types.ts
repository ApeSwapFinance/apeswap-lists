import { ChainId } from '@ape.swap/sdk'
import { Token } from '/types'

export enum BillVersion {
  V1 = 'V1',
  V2 = 'V2',
}

/**
 * This enum defines the art collection used to generate the art for a bill (bond).
 *
 * NOTE: Collections start at 1. The collection number provides a method to make new releases around
 * the same theme or project.
 */
export enum BillArtCollection {
  ApeSwap_Collection1 = 'ApeSwap_Collection1',
  Quickswap_Collection1 = 'Quickswap_Collection1',
}

export const defaultBillArtCollection = BillArtCollection.ApeSwap_Collection1

/**
 * Liquidity Bills/Bonds Config
 */
export interface BillsLiquidityConfig {
  index: number
  contractAddress: Partial<Record<ChainId, string>>
  billVersion: BillVersion
  billType: 'liquidity'
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
  showcaseToken?: Token
}

/**
 * Reserve Bills/Bonds Config
 *
 * NOTE: Extends Liquidity Bills/Bonds
 */
export interface BillsReserveConfig extends Omit<BillsLiquidityConfig, 'billType'> {
  billType: 'reserve'
}

/**
 * Launch Bills/Bonds Config
 *
 * NOTE: Extends Liquidity Bills/Bonds
 */
export interface BillsLaunchConfig extends Omit<BillsLiquidityConfig, 'billType'> {
  billType: 'launch'
  // UTC Time in format: 2023-01-01T12:00:00.000Z'
  launchTimeISOString: string
  projectSummary: string
  projectDescription: string
}

// Using a "discriminated union" to have type safety for the different bill types
// https://github.com/basarat/typescript-book/blob/master/docs/types/discriminated-unions.md#discriminated-union
export type BillsConfig = BillsLiquidityConfig | BillsLaunchConfig | BillsReserveConfig
