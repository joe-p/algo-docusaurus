---
id: "modelsv2.Box"
title: "Class: Box"
sidebar_label: "Box"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).Box

Box name and its content.

## Hierarchy

- `default`

  ↳ **`Box`**

## Constructors

### constructor

• **new Box**(`«destructured»`)

Creates a new `Box` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `string` \| `Uint8Array` |
| › `round` | `number` \| `bigint` |
| › `value` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1982](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1982)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### name

• **name**: `Uint8Array`

(name) box name, base64 encoded

#### Defined in

[client/v2/algod/models/types.ts:1964](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1964)

___

### round

• **round**: `number` \| `bigint`

The round for which this information is relevant

#### Defined in

[client/v2/algod/models/types.ts:1969](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1969)

___

### value

• **value**: `Uint8Array`

(value) box value, base64 encoded.

#### Defined in

[client/v2/algod/models/types.ts:1974](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1974)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`Box`](modelsv2.Box.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`Box`](modelsv2.Box.md)

#### Defined in

[client/v2/algod/models/types.ts:2010](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2010)
