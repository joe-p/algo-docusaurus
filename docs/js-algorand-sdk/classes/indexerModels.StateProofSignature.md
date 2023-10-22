---
id: "indexerModels.StateProofSignature"
title: "Class: StateProofSignature"
sidebar_label: "StateProofSignature"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofSignature

## Hierarchy

- `default`

  ↳ **`StateProofSignature`**

## Constructors

### constructor

• **new StateProofSignature**(`«destructured»`)

Creates a new `StateProofSignature` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `falconSignature?` | `string` \| `Uint8Array` |
| › `merkleArrayIndex?` | `number` \| `bigint` |
| › `proof?` | [`MerkleArrayProof`](erModels.MerkleArrayProof) |
| › `verifyingKey?` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3641](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3641)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### falconSignature

• `Optional` **falconSignature**: `Uint8Array`

#### Defined in

[client/v2/indexer/models/types.ts:3623](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3623)

___

### merkleArrayIndex

• `Optional` **merkleArrayIndex**: `number` \| `bigint`

#### Defined in

[client/v2/indexer/models/types.ts:3625](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3625)

___

### proof

• `Optional` **proof**: [`MerkleArrayProof`](erModels.MerkleArrayProof)

#### Defined in

[client/v2/indexer/models/types.ts:3627](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3627)

___

### verifyingKey

• `Optional` **verifyingKey**: `Uint8Array`

(vkey)

#### Defined in

[client/v2/indexer/models/types.ts:3632](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3632)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofSignature`](erModels.StateProofSignature)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofSignature`](erModels.StateProofSignature)

#### Defined in

[client/v2/indexer/models/types.ts:3673](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3673)
