---
id: "indexerModels.ApplicationsResponse"
title: "Class: ApplicationsResponse"
sidebar_label: "ApplicationsResponse"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).ApplicationsResponse

## Hierarchy

- `default`

  ↳ **`ApplicationsResponse`**

## Constructors

### constructor

• **new ApplicationsResponse**(`«destructured»`)

Creates a new `ApplicationsResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `applications` | [`Application`](erModels.Application)[] |
| › `currentRound` | `number` \| `bigint` |
| › `nextToken?` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:1380](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1380)

## Properties

### applications

• **applications**: [`Application`](erModels.Application)[]

#### Defined in

[client/v2/indexer/models/types.ts:1360](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1360)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### currentRound

• **currentRound**: `number` \| `bigint`

Round at which the results were computed.

#### Defined in

[client/v2/indexer/models/types.ts:1365](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1365)

___

### nextToken

• `Optional` **nextToken**: `string`

Used for pagination, when making another request provide this token with the
next parameter.

#### Defined in

[client/v2/indexer/models/types.ts:1371](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1371)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationsResponse`](erModels.ApplicationsResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationsResponse`](erModels.ApplicationsResponse)

#### Defined in

[client/v2/indexer/models/types.ts:1402](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1402)
