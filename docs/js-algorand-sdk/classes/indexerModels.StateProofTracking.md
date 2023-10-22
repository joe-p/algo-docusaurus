---
id: "indexerModels.StateProofTracking"
title: "Class: StateProofTracking"
sidebar_label: "StateProofTracking"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofTracking

## Hierarchy

- `default`

  ↳ **`StateProofTracking`**

## Constructors

### constructor

• **new StateProofTracking**(`«destructured»`)

Creates a new `StateProofTracking` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `nextRound?` | `number` \| `bigint` |
| › `onlineTotalWeight?` | `number` \| `bigint` |
| › `type?` | `number` \| `bigint` |
| › `votersCommitment?` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3720](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3720)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### nextRound

• `Optional` **nextRound**: `number` \| `bigint`

(n) Next round for which we will accept a state proof transaction.

#### Defined in

[client/v2/indexer/models/types.ts:3692](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3692)

___

### onlineTotalWeight

• `Optional` **onlineTotalWeight**: `number` \| `bigint`

(t) The total number of microalgos held by the online accounts during the
StateProof round.

#### Defined in

[client/v2/indexer/models/types.ts:3698](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3698)

___

### type

• `Optional` **type**: `number` \| `bigint`

State Proof Type. Note the raw object uses map with this as key.

#### Defined in

[client/v2/indexer/models/types.ts:3703](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3703)

___

### votersCommitment

• `Optional` **votersCommitment**: `Uint8Array`

(v) Root of a vector commitment containing online accounts that will help sign
the proof.

#### Defined in

[client/v2/indexer/models/types.ts:3709](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3709)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofTracking`](erModels.StateProofTracking)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofTracking`](erModels.StateProofTracking)

#### Defined in

[client/v2/indexer/models/types.ts:3749](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3749)
