---
id: "modelsv2.TransactionProofResponse"
title: "Class: TransactionProofResponse"
sidebar_label: "TransactionProofResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).TransactionProofResponse

Proof of transaction in a block.

## Hierarchy

- `default`

  ↳ **`TransactionProofResponse`**

## Constructors

### constructor

• **new TransactionProofResponse**(`«destructured»`)

Creates a new `TransactionProofResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `hashtype?` | `string` |
| › `idx` | `number` \| `bigint` |
| › `proof` | `string` \| `Uint8Array` |
| › `stibhash` | `string` \| `Uint8Array` |
| › `treedepth` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:5595](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5595)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### hashtype

• `Optional` **hashtype**: `string`

The type of hash function used to create the proof, must be one of:
* sha512_256
* sha256

#### Defined in

[client/v2/algod/models/types.ts:5582](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5582)

___

### idx

• **idx**: `number` \| `bigint`

Index of the transaction in the block's payset.

#### Defined in

[client/v2/algod/models/types.ts:5559](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5559)

___

### proof

• **proof**: `Uint8Array`

Proof of transaction membership.

#### Defined in

[client/v2/algod/models/types.ts:5564](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5564)

___

### stibhash

• **stibhash**: `Uint8Array`

Hash of SignedTxnInBlock for verifying proof.

#### Defined in

[client/v2/algod/models/types.ts:5569](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5569)

___

### treedepth

• **treedepth**: `number` \| `bigint`

Represents the depth of the tree that is being proven, i.e. the number of edges
from a leaf to the root.

#### Defined in

[client/v2/algod/models/types.ts:5575](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5575)

## Methods

### get\_obj\_for\_encoding

▸ **get_obj_for_encoding**(`binary?`): `Record`<`string`, `any`\>

Get an object ready for encoding to either JSON or msgpack.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `binary` | `boolean` | `false` | Use true to indicate that the encoding can handle raw binary objects (Uint8Arrays). Use false to indicate that raw binary objects should be converted to base64 strings. True should be used for objects that will be encoded with msgpack, and false should be used for objects that will be encoded with JSON. |

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

BaseModel.get\_obj\_for\_encoding

#### Defined in

[client/v2/basemodel.ts:65](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L65)

___

### from\_obj\_for\_encoding

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionProofResponse`](modelsv2.TransactionProofResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionProofResponse`](modelsv2.TransactionProofResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:5631](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5631)
