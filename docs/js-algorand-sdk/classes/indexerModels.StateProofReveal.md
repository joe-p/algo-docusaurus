---
id: "indexerModels.StateProofReveal"
title: "Class: StateProofReveal"
sidebar_label: "StateProofReveal"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofReveal

## Hierarchy

- `default`

  ↳ **`StateProofReveal`**

## Constructors

### constructor

• **new StateProofReveal**(`«destructured»`)

Creates a new `StateProofReveal` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `participant?` | [`StateProofParticipant`](erModels.StateProofParticipant) |
| › `position?` | `number` \| `bigint` |
| › `sigSlot?` | [`StateProofSigSlot`](erModels.StateProofSigSlot) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3539](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3539)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### participant

• `Optional` **participant**: [`StateProofParticipant`](erModels.StateProofParticipant)

(p)

#### Defined in

[client/v2/indexer/models/types.ts:3519](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3519)

___

### position

• `Optional` **position**: `number` \| `bigint`

The position in the signature and participants arrays corresponding to this
entry.

#### Defined in

[client/v2/indexer/models/types.ts:3525](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3525)

___

### sigSlot

• `Optional` **sigSlot**: [`StateProofSigSlot`](erModels.StateProofSigSlot)

(s)

#### Defined in

[client/v2/indexer/models/types.ts:3530](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3530)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofReveal`](erModels.StateProofReveal)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofReveal`](erModels.StateProofReveal)

#### Defined in

[client/v2/indexer/models/types.ts:3561](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3561)
