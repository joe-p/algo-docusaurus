---
id: "indexerModels.HashFactory"
title: "Class: HashFactory"
sidebar_label: "HashFactory"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).HashFactory

## Hierarchy

- `default`

  ↳ **`HashFactory`**

## Constructors

### constructor

• **new HashFactory**(`hashType`)

Creates a new `HashFactory` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashType` | `Object` | (t) |
| `hashType.hashType?` | `number` \| `bigint` | - |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:2961](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2961)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### hashType

• `Optional` **hashType**: `number` \| `bigint`

(t)

#### Defined in

[client/v2/indexer/models/types.ts:2955](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2955)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`HashFactory`](erModels.HashFactory)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`HashFactory`](erModels.HashFactory)

#### Defined in

[client/v2/indexer/models/types.ts:2971](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2971)
