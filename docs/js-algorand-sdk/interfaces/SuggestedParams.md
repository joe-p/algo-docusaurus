---
id: "SuggestedParams"
title: "Interface: SuggestedParams"
sidebar_label: "SuggestedParams"
sidebar_position: 0
custom_edit_url: null
---

A dict holding common-to-all-txns arguments

## Properties

### fee

• **fee**: `number`

Integer fee per byte, in microAlgos. For a flat fee, set flatFee to true

#### Defined in

[types/transactions/base.ts:110](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L110)

___

### firstRound

• **firstRound**: `number`

First protocol round on which this txn is valid

#### Defined in

[types/transactions/base.ts:115](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L115)

___

### flatFee

• `Optional` **flatFee**: `boolean`

Set this to true to specify fee as microalgos-per-txn
  If the final calculated fee is lower than the protocol minimum fee, the fee will be increased to match the minimum

#### Defined in

[types/transactions/base.ts:105](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L105)

___

### genesisHash

• **genesisHash**: `string`

Specifies hash genesis block of network in use

#### Defined in

[types/transactions/base.ts:130](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L130)

___

### genesisID

• **genesisID**: `string`

Specifies genesis ID of network in use

#### Defined in

[types/transactions/base.ts:125](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L125)

___

### lastRound

• **lastRound**: `number`

Last protocol round on which this txn is valid

#### Defined in

[types/transactions/base.ts:120](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L120)
