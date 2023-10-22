---
id: "indexerModels.ApplicationLogData"
title: "Class: ApplicationLogData"
sidebar_label: "ApplicationLogData"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).ApplicationLogData

Stores the global information associated with an application.

## Hierarchy

- `default`

  ↳ **`ApplicationLogData`**

## Constructors

### constructor

• **new ApplicationLogData**(`«destructured»`)

Creates a new `ApplicationLogData` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `logs` | `Uint8Array`[] |
| › `txid` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:1007](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1007)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### logs

• **logs**: `Uint8Array`[]

(lg) Logs for the application being executed by the transaction.

#### Defined in

[client/v2/indexer/models/types.ts:995](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L995)

___

### txid

• **txid**: `string`

Transaction ID

#### Defined in

[client/v2/indexer/models/types.ts:1000](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1000)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationLogData`](erModels.ApplicationLogData)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationLogData`](erModels.ApplicationLogData)

#### Defined in

[client/v2/indexer/models/types.ts:1019](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1019)
