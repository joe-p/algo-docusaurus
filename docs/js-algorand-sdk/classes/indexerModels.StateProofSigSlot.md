---
id: "indexerModels.StateProofSigSlot"
title: "Class: StateProofSigSlot"
sidebar_label: "StateProofSigSlot"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofSigSlot

## Hierarchy

- `default`

  ↳ **`StateProofSigSlot`**

## Constructors

### constructor

• **new StateProofSigSlot**(`«destructured»`)

Creates a new `StateProofSigSlot` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `lowerSigWeight?` | `number` \| `bigint` |
| › `signature?` | [`StateProofSignature`](erModels.StateProofSignature) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3591](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3591)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### lowerSigWeight

• `Optional` **lowerSigWeight**: `number` \| `bigint`

(l) The total weight of signatures in the lower-numbered slots.

#### Defined in

[client/v2/indexer/models/types.ts:3582](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3582)

___

### signature

• `Optional` **signature**: [`StateProofSignature`](erModels.StateProofSignature)

#### Defined in

[client/v2/indexer/models/types.ts:3584](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3584)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofSigSlot`](erModels.StateProofSigSlot)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofSigSlot`](erModels.StateProofSigSlot)

#### Defined in

[client/v2/indexer/models/types.ts:3609](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3609)
