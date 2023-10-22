---
id: "modelsv2.TealKeyValue"
title: "Class: TealKeyValue"
sidebar_label: "TealKeyValue"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).TealKeyValue

Represents a key-value pair in an application store.

## Hierarchy

- `default`

  ↳ **`TealKeyValue`**

## Constructors

### constructor

• **new TealKeyValue**(`«destructured»`)

Creates a new `TealKeyValue` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `key` | `string` |
| › `value` | [`TealValue`](modelsv2.TealValue.md) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:5297](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5297)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### key

• **key**: `string`

#### Defined in

[client/v2/algod/models/types.ts:5285](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5285)

___

### value

• **value**: [`TealValue`](modelsv2.TealValue.md)

Represents a TEAL value.

#### Defined in

[client/v2/algod/models/types.ts:5290](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5290)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TealKeyValue`](modelsv2.TealKeyValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TealKeyValue`](modelsv2.TealKeyValue.md)

#### Defined in

[client/v2/algod/models/types.ts:5309](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5309)
