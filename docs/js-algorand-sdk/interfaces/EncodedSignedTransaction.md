---
id: "EncodedSignedTransaction"
title: "Interface: EncodedSignedTransaction"
sidebar_label: "EncodedSignedTransaction"
sidebar_position: 0
custom_edit_url: null
---

A structure for an encoded signed transaction object

## Properties

### lsig

• `Optional` **lsig**: [`EncodedLogicSig`](EncodedLogicSig.md)

Logic signature

#### Defined in

[types/transactions/encoded.ts:402](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L402)

___

### msig

• `Optional` **msig**: [`EncodedMultisig`](EncodedMultisig.md)

Multisig structure

#### Defined in

[types/transactions/encoded.ts:397](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L397)

___

### sgnr

• `Optional` **sgnr**: `Buffer`

The signer, if signing with a different key than the Transaction type `from` property indicates

#### Defined in

[types/transactions/encoded.ts:407](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L407)

___

### sig

• `Optional` **sig**: `Buffer`

Transaction signature

#### Defined in

[types/transactions/encoded.ts:387](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L387)

___

### txn

• **txn**: [`EncodedTransaction`](EncodedTransaction.md)

The transaction that was signed

#### Defined in

[types/transactions/encoded.ts:392](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L392)
