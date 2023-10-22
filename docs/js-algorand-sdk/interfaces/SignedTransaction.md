---
id: "SignedTransaction"
title: "Interface: SignedTransaction"
sidebar_label: "SignedTransaction"
sidebar_position: 0
custom_edit_url: null
---

Object representing a transaction with a signature

## Properties

### lsig

• `Optional` **lsig**: [`EncodedLogicSig`](EncodedLogicSig.md)

Logic signature

#### Defined in

[transaction.ts:1343](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1343)

___

### msig

• `Optional` **msig**: [`EncodedMultisig`](EncodedMultisig.md)

Multisig structure

#### Defined in

[transaction.ts:1338](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1338)

___

### sgnr

• `Optional` **sgnr**: `Buffer`

The signer, if signing with a different key than the Transaction type `from` property indicates

#### Defined in

[transaction.ts:1348](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1348)

___

### sig

• `Optional` **sig**: `Buffer`

Transaction signature

#### Defined in

[transaction.ts:1328](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1328)

___

### txn

• **txn**: [`Transaction`](../classes/Transaction.md)

The transaction that was signed

#### Defined in

[transaction.ts:1333](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1333)
