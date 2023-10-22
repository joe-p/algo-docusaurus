---
id: "modelsv2.BuildVersion"
title: "Class: BuildVersion"
sidebar_label: "BuildVersion"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).BuildVersion

## Hierarchy

- `default`

  ↳ **`BuildVersion`**

## Constructors

### constructor

• **new BuildVersion**(`«destructured»`)

Creates a new `BuildVersion` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `branch` | `string` |
| › `buildNumber` | `number` \| `bigint` |
| › `channel` | `string` |
| › `commitHash` | `string` |
| › `major` | `number` \| `bigint` |
| › `minor` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2173](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2173)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### branch

• **branch**: `string`

#### Defined in

[client/v2/algod/models/types.ts:2152](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2152)

___

### buildNumber

• **buildNumber**: `number` \| `bigint`

#### Defined in

[client/v2/algod/models/types.ts:2154](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2154)

___

### channel

• **channel**: `string`

#### Defined in

[client/v2/algod/models/types.ts:2156](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2156)

___

### commitHash

• **commitHash**: `string`

#### Defined in

[client/v2/algod/models/types.ts:2158](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2158)

___

### major

• **major**: `number` \| `bigint`

#### Defined in

[client/v2/algod/models/types.ts:2160](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2160)

___

### minor

• **minor**: `number` \| `bigint`

#### Defined in

[client/v2/algod/models/types.ts:2162](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2162)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`BuildVersion`](modelsv2.BuildVersion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`BuildVersion`](modelsv2.BuildVersion.md)

#### Defined in

[client/v2/algod/models/types.ts:2207](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2207)
