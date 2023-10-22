---
id: "indexerModels.StateProofParticipant"
title: "Class: StateProofParticipant"
sidebar_label: "StateProofParticipant"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofParticipant

## Hierarchy

- `default`

  ↳ **`StateProofParticipant`**

## Constructors

### constructor

• **new StateProofParticipant**(`«destructured»`)

Creates a new `StateProofParticipant` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `verifier?` | [`StateProofVerifier`](erModels.StateProofVerifier) |
| › `weight?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3482](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3482)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### verifier

• `Optional` **verifier**: [`StateProofVerifier`](erModels.StateProofVerifier)

(p)

#### Defined in

[client/v2/indexer/models/types.ts:3470](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3470)

___

### weight

• `Optional` **weight**: `number` \| `bigint`

(w)

#### Defined in

[client/v2/indexer/models/types.ts:3475](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3475)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofParticipant`](erModels.StateProofParticipant)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofParticipant`](erModels.StateProofParticipant)

#### Defined in

[client/v2/indexer/models/types.ts:3500](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3500)
