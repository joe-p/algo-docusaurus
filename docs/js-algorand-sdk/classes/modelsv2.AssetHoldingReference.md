---
id: "modelsv2.AssetHoldingReference"
title: "Class: AssetHoldingReference"
sidebar_label: "AssetHoldingReference"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).AssetHoldingReference

References an asset held by an account.

## Hierarchy

- `default`

  ↳ **`AssetHoldingReference`**

## Constructors

### constructor

• **new AssetHoldingReference**(`«destructured»`)

Creates a new `AssetHoldingReference` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | `string` |
| › `asset` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1465](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1465)

## Properties

### account

• **account**: `string`

Address of the account holding the asset.

#### Defined in

[client/v2/algod/models/types.ts:1453](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1453)

___

### asset

• **asset**: `number` \| `bigint`

Asset ID of the holding.

#### Defined in

[client/v2/algod/models/types.ts:1458](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1458)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AssetHoldingReference`](modelsv2.AssetHoldingReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AssetHoldingReference`](modelsv2.AssetHoldingReference.md)

#### Defined in

[client/v2/algod/models/types.ts:1477](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1477)
