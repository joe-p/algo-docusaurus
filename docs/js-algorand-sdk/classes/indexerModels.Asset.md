---
id: "indexerModels.Asset"
title: "Class: Asset"
sidebar_label: "Asset"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).Asset

Specifies both the unique identifier and the parameters for an asset

## Hierarchy

- `default`

  ↳ **`Asset`**

## Constructors

### constructor

• **new Asset**(`«destructured»`)

Creates a new `Asset` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `createdAtRound?` | `number` \| `bigint` |
| › `deleted?` | `boolean` |
| › `destroyedAtRound?` | `number` \| `bigint` |
| › `index` | `number` \| `bigint` |
| › `params` | [`AssetParams`](erModels.AssetParams) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:1466](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1466)

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

Round during which this asset was created.

#### Defined in

[client/v2/indexer/models/types.ts:1443](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1443)

___

### deleted

• `Optional` **deleted**: `boolean`

Whether or not this asset is currently deleted.

#### Defined in

[client/v2/indexer/models/types.ts:1448](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1448)

___

### destroyedAtRound

• `Optional` **destroyedAtRound**: `number` \| `bigint`

Round during which this asset was destroyed.

#### Defined in

[client/v2/indexer/models/types.ts:1453](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1453)

___

### index

• **index**: `number` \| `bigint`

unique asset identifier

#### Defined in

[client/v2/indexer/models/types.ts:1430](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1430)

___

### params

• **params**: [`AssetParams`](erModels.AssetParams)

AssetParams specifies the parameters for an asset.
(apar) when part of an AssetConfig transaction.
Definition:
data/transactions/asset.go : AssetParams

#### Defined in

[client/v2/indexer/models/types.ts:1438](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1438)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`Asset`](erModels.Asset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`Asset`](erModels.Asset)

#### Defined in

[client/v2/indexer/models/types.ts:1496](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1496)
