---
id: "indexerModels.AssetHolding"
title: "Class: AssetHolding"
sidebar_label: "AssetHolding"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).AssetHolding

Describes an asset held by an account.
Definition:
data/basics/userBalance.go : AssetHolding

## Hierarchy

- `default`

  ↳ **`AssetHolding`**

## Constructors

### constructor

• **new AssetHolding**(`«destructured»`)

Creates a new `AssetHolding` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `number` \| `bigint` |
| › `assetId` | `number` \| `bigint` |
| › `deleted?` | `boolean` |
| › `isFrozen` | `boolean` |
| › `optedInAtRound?` | `number` \| `bigint` |
| › `optedOutAtRound?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:1625](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1625)

## Properties

### amount

• **amount**: `number` \| `bigint`

(a) number of units held.

#### Defined in

[client/v2/indexer/models/types.ts:1589](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1589)

___

### assetId

• **assetId**: `number` \| `bigint`

Asset ID of the holding.

#### Defined in

[client/v2/indexer/models/types.ts:1594](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1594)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### deleted

• `Optional` **deleted**: `boolean`

Whether or not the asset holding is currently deleted from its account.

#### Defined in

[client/v2/indexer/models/types.ts:1604](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1604)

___

### isFrozen

• **isFrozen**: `boolean`

(f) whether or not the holding is frozen.

#### Defined in

[client/v2/indexer/models/types.ts:1599](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1599)

___

### optedInAtRound

• `Optional` **optedInAtRound**: `number` \| `bigint`

Round during which the account opted into this asset holding.

#### Defined in

[client/v2/indexer/models/types.ts:1609](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1609)

___

### optedOutAtRound

• `Optional` **optedOutAtRound**: `number` \| `bigint`

Round during which the account opted out of this asset holding.

#### Defined in

[client/v2/indexer/models/types.ts:1614](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1614)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AssetHolding`](erModels.AssetHolding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AssetHolding`](erModels.AssetHolding)

#### Defined in

[client/v2/indexer/models/types.ts:1659](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L1659)
