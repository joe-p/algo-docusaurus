---
id: "indexerModels.BoxesResponse"
title: "Class: BoxesResponse"
sidebar_label: "BoxesResponse"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).BoxesResponse

Box names of an application

## Hierarchy

- `default`

  ↳ **`BoxesResponse`**

## Constructors

### constructor

• **new BoxesResponse**(`«destructured»`)

Creates a new `BoxesResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `applicationId` | `number` \| `bigint` |
| › `boxes` | [`BoxDescriptor`](erModels.BoxDescriptor)[] |
| › `nextToken?` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:2765](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2765)

## Properties

### applicationId

• **applicationId**: `number` \| `bigint`

(appidx) application index.

#### Defined in

[client/v2/indexer/models/types.ts:2748](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2748)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### boxes

• **boxes**: [`BoxDescriptor`](erModels.BoxDescriptor)[]

#### Defined in

[client/v2/indexer/models/types.ts:2750](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2750)

___

### nextToken

• `Optional` **nextToken**: `string`

Used for pagination, when making another request provide this token with the
next parameter.

#### Defined in

[client/v2/indexer/models/types.ts:2756](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2756)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`BoxesResponse`](erModels.BoxesResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`BoxesResponse`](erModels.BoxesResponse)

#### Defined in

[client/v2/indexer/models/types.ts:2787](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2787)
