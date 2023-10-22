---
id: "modelsv2.GetBlockTimeStampOffsetResponse"
title: "Class: GetBlockTimeStampOffsetResponse"
sidebar_label: "GetBlockTimeStampOffsetResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).GetBlockTimeStampOffsetResponse

Response containing the timestamp offset in seconds

## Hierarchy

- `default`

  ↳ **`GetBlockTimeStampOffsetResponse`**

## Constructors

### constructor

• **new GetBlockTimeStampOffsetResponse**(`offset`)

Creates a new `GetBlockTimeStampOffsetResponse` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `Object` | Timestamp offset in seconds. |
| `offset.offset` | `number` \| `bigint` | - |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2985](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2985)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### offset

• **offset**: `number` \| `bigint`

Timestamp offset in seconds.

#### Defined in

[client/v2/algod/models/types.ts:2979](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2979)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`GetBlockTimeStampOffsetResponse`](modelsv2.GetBlockTimeStampOffsetResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`GetBlockTimeStampOffsetResponse`](modelsv2.GetBlockTimeStampOffsetResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:2995](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2995)
