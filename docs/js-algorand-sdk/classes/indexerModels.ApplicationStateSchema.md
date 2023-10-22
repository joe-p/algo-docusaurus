---
id: "indexerModels.ApplicationStateSchema"
title: "Class: ApplicationStateSchema"
sidebar_label: "ApplicationStateSchema"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).ApplicationStateSchema

Specifies maximums on the number of each type that may be stored.

## Hierarchy

- `default`

  ↳ **`ApplicationStateSchema`**

## Constructors

### constructor

• **new ApplicationStateSchema**(`«destructured»`)

Creates a new `ApplicationStateSchema` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `numByteSlice` | `number` \| `bigint` |
| › `numUint` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:1320](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1320)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### numByteSlice

• **numByteSlice**: `number` \| `bigint`

(nbs) num of byte slices.

#### Defined in

[client/v2/indexer/models/types.ts:1308](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1308)

___

### numUint

• **numUint**: `number` \| `bigint`

(nui) num of uints.

#### Defined in

[client/v2/indexer/models/types.ts:1313](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1313)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationStateSchema`](erModels.ApplicationStateSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationStateSchema`](erModels.ApplicationStateSchema)

#### Defined in

[client/v2/indexer/models/types.ts:1338](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1338)
