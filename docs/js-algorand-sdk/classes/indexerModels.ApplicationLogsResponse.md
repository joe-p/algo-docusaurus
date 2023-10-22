---
id: "indexerModels.ApplicationLogsResponse"
title: "Class: ApplicationLogsResponse"
sidebar_label: "ApplicationLogsResponse"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).ApplicationLogsResponse

## Hierarchy

- `default`

  ↳ **`ApplicationLogsResponse`**

## Constructors

### constructor

• **new ApplicationLogsResponse**(`«destructured»`)

Creates a new `ApplicationLogsResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `applicationId` | `number` \| `bigint` |
| › `currentRound` | `number` \| `bigint` |
| › `logData?` | [`ApplicationLogData`](erModels.ApplicationLogData)[] |
| › `nextToken?` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:1065](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1065)

## Properties

### applicationId

• **applicationId**: `number` \| `bigint`

(appidx) application index.

#### Defined in

[client/v2/indexer/models/types.ts:1042](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1042)

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

[client/v2/indexer/models/types.ts:1047](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1047)

___

### logData

• `Optional` **logData**: [`ApplicationLogData`](erModels.ApplicationLogData)[]

#### Defined in

[client/v2/indexer/models/types.ts:1049](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1049)

___

### nextToken

• `Optional` **nextToken**: `string`

Used for pagination, when making another request provide this token with the
next parameter.

#### Defined in

[client/v2/indexer/models/types.ts:1055](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1055)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationLogsResponse`](erModels.ApplicationLogsResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationLogsResponse`](erModels.ApplicationLogsResponse)

#### Defined in

[client/v2/indexer/models/types.ts:1091](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1091)
