---
id: "indexerModels.ApplicationLocalState"
title: "Class: ApplicationLocalState"
sidebar_label: "ApplicationLocalState"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).ApplicationLocalState

Stores local state associated with an application.

## Hierarchy

- `default`

  ↳ **`ApplicationLocalState`**

## Constructors

### constructor

• **new ApplicationLocalState**(`«destructured»`)

Creates a new `ApplicationLocalState` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `closedOutAtRound?` | `number` \| `bigint` |
| › `deleted?` | `boolean` |
| › `id` | `number` \| `bigint` |
| › `keyValue?` | [`TealKeyValue`](erModels.TealKeyValue)[] |
| › `optedInAtRound?` | `number` \| `bigint` |
| › `schema` | [`ApplicationStateSchema`](erModels.ApplicationStateSchema) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:862](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L862)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### closedOutAtRound

• `Optional` **closedOutAtRound**: `number` \| `bigint`

Round when account closed out of the application.

#### Defined in

[client/v2/indexer/models/types.ts:834](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L834)

___

### deleted

• `Optional` **deleted**: `boolean`

Whether or not the application local state is currently deleted from its
account.

#### Defined in

[client/v2/indexer/models/types.ts:840](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L840)

___

### id

• **id**: `number` \| `bigint`

The application which this local state is for.

#### Defined in

[client/v2/indexer/models/types.ts:824](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L824)

___

### keyValue

• `Optional` **keyValue**: [`TealKeyValue`](erModels.TealKeyValue)[]

(tkv) storage.

#### Defined in

[client/v2/indexer/models/types.ts:845](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L845)

___

### optedInAtRound

• `Optional` **optedInAtRound**: `number` \| `bigint`

Round when the account opted into the application.

#### Defined in

[client/v2/indexer/models/types.ts:850](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L850)

___

### schema

• **schema**: [`ApplicationStateSchema`](erModels.ApplicationStateSchema)

(hsch) schema.

#### Defined in

[client/v2/indexer/models/types.ts:829](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L829)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationLocalState`](erModels.ApplicationLocalState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationLocalState`](erModels.ApplicationLocalState)

#### Defined in

[client/v2/indexer/models/types.ts:896](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L896)
