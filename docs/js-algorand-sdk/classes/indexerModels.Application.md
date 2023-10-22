---
id: "indexerModels.Application"
title: "Class: Application"
sidebar_label: "Application"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).Application

Application index and its parameters

## Hierarchy

- `default`

  ↳ **`Application`**

## Constructors

### constructor

• **new Application**(`«destructured»`)

Creates a new `Application` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `createdAtRound?` | `number` \| `bigint` |
| › `deleted?` | `boolean` |
| › `deletedAtRound?` | `number` \| `bigint` |
| › `id` | `number` \| `bigint` |
| › `params` | [`ApplicationParams`](erModels.ApplicationParams) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:770](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L770)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### createdAtRound

• `Optional` **createdAtRound**: `number` \| `bigint`

Round when this application was created.

#### Defined in

[client/v2/indexer/models/types.ts:750](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L750)

___

### deleted

• `Optional` **deleted**: `boolean`

Whether or not this application is currently deleted.

#### Defined in

[client/v2/indexer/models/types.ts:755](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L755)

___

### deletedAtRound

• `Optional` **deletedAtRound**: `number` \| `bigint`

Round when this application was deleted.

#### Defined in

[client/v2/indexer/models/types.ts:760](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L760)

___

### id

• **id**: `number` \| `bigint`

(appidx) application index.

#### Defined in

[client/v2/indexer/models/types.ts:740](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L740)

___

### params

• **params**: [`ApplicationParams`](erModels.ApplicationParams)

(appparams) application parameters.

#### Defined in

[client/v2/indexer/models/types.ts:745](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L745)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`Application`](erModels.Application)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`Application`](erModels.Application)

#### Defined in

[client/v2/indexer/models/types.ts:800](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L800)
