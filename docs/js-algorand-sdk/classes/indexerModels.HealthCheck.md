---
id: "indexerModels.HealthCheck"
title: "Class: HealthCheck"
sidebar_label: "HealthCheck"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).HealthCheck

A health check response.

## Hierarchy

- `default`

  ↳ **`HealthCheck`**

## Constructors

### constructor

• **new HealthCheck**(`«destructured»`)

Creates a new `HealthCheck` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data?` | `Record`<`string`, `any`\> |
| › `dbAvailable` | `boolean` |
| › `errors?` | `string`[] |
| › `isMigrating` | `boolean` |
| › `message` | `string` |
| › `round` | `number` \| `bigint` |
| › `version` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3011](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3011)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### data

• `Optional` **data**: `Record`<`string`, `any`\>

#### Defined in

[client/v2/indexer/models/types.ts:2997](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2997)

___

### dbAvailable

• **dbAvailable**: `boolean`

#### Defined in

[client/v2/indexer/models/types.ts:2984](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2984)

___

### errors

• `Optional` **errors**: `string`[]

#### Defined in

[client/v2/indexer/models/types.ts:2999](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2999)

___

### isMigrating

• **isMigrating**: `boolean`

#### Defined in

[client/v2/indexer/models/types.ts:2986](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2986)

___

### message

• **message**: `string`

#### Defined in

[client/v2/indexer/models/types.ts:2988](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2988)

___

### round

• **round**: `number` \| `bigint`

#### Defined in

[client/v2/indexer/models/types.ts:2990](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2990)

___

### version

• **version**: `string`

Current version.

#### Defined in

[client/v2/indexer/models/types.ts:2995](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2995)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`HealthCheck`](erModels.HealthCheck)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`HealthCheck`](erModels.HealthCheck)

#### Defined in

[client/v2/indexer/models/types.ts:3049](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3049)
