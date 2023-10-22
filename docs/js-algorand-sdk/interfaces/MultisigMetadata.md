---
id: "MultisigMetadata"
title: "Interface: MultisigMetadata"
sidebar_label: "MultisigMetadata"
sidebar_position: 0
custom_edit_url: null
---

Required options for creating a multisignature

Documentation available at: https://developer.algorand.org/docs/features/transactions/signatures/#multisignatures

## Properties

### addrs

• **addrs**: `string`[]

A list of Algorand addresses representing possible signers for this multisig. Order is important.

#### Defined in

[types/multisig.ts:21](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/multisig.ts#L21)

___

### threshold

• **threshold**: `number`

Multisig threshold value. Authorization requires a subset of signatures,
equal to or greater than the threshold value.

#### Defined in

[types/multisig.ts:16](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/multisig.ts#L16)

___

### version

• **version**: `number`

Multisig version

#### Defined in

[types/multisig.ts:10](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/multisig.ts#L10)
