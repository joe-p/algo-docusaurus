---
id: "indexerModels.StateProofFields"
title: "Class: StateProofFields"
sidebar_label: "StateProofFields"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofFields

(sp) represents a state proof.
Definition:
crypto/stateproof/structs.go : StateProof

## Hierarchy

- `default`

  ↳ **`StateProofFields`**

## Constructors

### constructor

• **new StateProofFields**(`«destructured»`)

Creates a new `StateProofFields` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `partProofs?` | [`MerkleArrayProof`](erModels.MerkleArrayProof) |
| › `positionsToReveal?` | (`number` \| `bigint`)[] |
| › `reveals?` | [`StateProofReveal`](erModels.StateProofReveal)[] |
| › `saltVersion?` | `number` \| `bigint` |
| › `sigCommit?` | `string` \| `Uint8Array` |
| › `sigProofs?` | [`MerkleArrayProof`](erModels.MerkleArrayProof) |
| › `signedWeight?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3401](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3401)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### partProofs

• `Optional` **partProofs**: [`MerkleArrayProof`](erModels.MerkleArrayProof)

(P)

#### Defined in

[client/v2/indexer/models/types.ts:3357](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3357)

___

### positionsToReveal

• `Optional` **positionsToReveal**: (`number` \| `bigint`)[]

(pr) Sequence of reveal positions.

#### Defined in

[client/v2/indexer/models/types.ts:3362](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3362)

___

### reveals

• `Optional` **reveals**: [`StateProofReveal`](erModels.StateProofReveal)[]

(r) Note that this is actually stored as a map[uint64] - Reveal in the actual
msgp

#### Defined in

[client/v2/indexer/models/types.ts:3368](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3368)

___

### saltVersion

• `Optional` **saltVersion**: `number` \| `bigint`

(v) Salt version of the merkle signature.

#### Defined in

[client/v2/indexer/models/types.ts:3373](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3373)

___

### sigCommit

• `Optional` **sigCommit**: `Uint8Array`

(c)

#### Defined in

[client/v2/indexer/models/types.ts:3378](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3378)

___

### sigProofs

• `Optional` **sigProofs**: [`MerkleArrayProof`](erModels.MerkleArrayProof)

(S)

#### Defined in

[client/v2/indexer/models/types.ts:3383](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3383)

___

### signedWeight

• `Optional` **signedWeight**: `number` \| `bigint`

(w)

#### Defined in

[client/v2/indexer/models/types.ts:3388](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3388)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofFields`](erModels.StateProofFields)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofFields`](erModels.StateProofFields)

#### Defined in

[client/v2/indexer/models/types.ts:3442](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3442)
