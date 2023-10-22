---
id: "modelsv2.AssetHolding"
title: "Class: AssetHolding"
sidebar_label: "AssetHolding"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).AssetHolding

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
| › `isFrozen` | `boolean` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1405](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1405)

## Properties

### amount

• **amount**: `number` \| `bigint`

(a) number of units held.

#### Defined in

[client/v2/algod/models/types.ts:1387](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1387)

___

### assetId

• **assetId**: `number` \| `bigint`

Asset ID of the holding.

#### Defined in

[client/v2/algod/models/types.ts:1392](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1392)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### isFrozen

• **isFrozen**: `boolean`

(f) whether or not the holding is frozen.

#### Defined in

[client/v2/algod/models/types.ts:1397](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1397)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AssetHolding`](modelsv2.AssetHolding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AssetHolding`](modelsv2.AssetHolding.md)

#### Defined in

[client/v2/algod/models/types.ts:1427](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1427)
