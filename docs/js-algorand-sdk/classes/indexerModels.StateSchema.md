---
id: "indexerModels.StateSchema"
title: "Class: StateSchema"
sidebar_label: "StateSchema"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateSchema

Represents a (apls) local-state or (apgs) global-state schema. These schemas
determine how much storage may be used in a local-state or global-state for an
application. The more space used, the larger minimum balance must be maintained
in the account holding the data.

## Hierarchy

- `default`

  ↳ **`StateSchema`**

## Constructors

### constructor

• **new StateSchema**(`«destructured»`)

Creates a new `StateSchema` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `numByteSlice` | `number` \| `bigint` |
| › `numUint` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3830](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3830)

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

Maximum number of TEAL byte slices that may be stored in the key/value store.

#### Defined in

[client/v2/indexer/models/types.ts:3818](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3818)

___

### numUint

• **numUint**: `number` \| `bigint`

Maximum number of TEAL uints that may be stored in the key/value store.

#### Defined in

[client/v2/indexer/models/types.ts:3823](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3823)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateSchema`](erModels.StateSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateSchema`](erModels.StateSchema)

#### Defined in

[client/v2/indexer/models/types.ts:3848](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3848)
