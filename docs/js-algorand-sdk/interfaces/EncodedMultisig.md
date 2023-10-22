---
id: "EncodedMultisig"
title: "Interface: EncodedMultisig"
sidebar_label: "EncodedMultisig"
sidebar_position: 0
custom_edit_url: null
---

A rough structure for the encoded multi signature transaction object.
Every property is labelled with its associated `MultisigMetadata` type property

## Properties

### subsig

• **subsig**: [`EncodedSubsig`](EncodedSubsig.md)[]

Subset of signatures. A threshold of `thr` signors is required.

#### Defined in

[types/transactions/encoded.ts:365](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L365)

___

### thr

• **thr**: `number`

threshold

#### Defined in

[types/transactions/encoded.ts:360](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L360)

___

### v

• **v**: `number`

version

#### Defined in

[types/transactions/encoded.ts:355](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/encoded.ts#L355)
