---
id: "modelsv2.AvmKeyValue"
title: "Class: AvmKeyValue"
sidebar_label: "AvmKeyValue"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).AvmKeyValue

Represents an AVM key-value pair in an application store.

## Hierarchy

- `default`

  ↳ **`AvmKeyValue`**

## Constructors

### constructor

• **new AvmKeyValue**(`«destructured»`)

Creates a new `AvmKeyValue` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `key` | `string` \| `Uint8Array` |
| › `value` | [`AvmValue`](modelsv2.AvmValue.md) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1742](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1742)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### key

• **key**: `Uint8Array`

#### Defined in

[client/v2/algod/models/types.ts:1730](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1730)

___

### value

• **value**: [`AvmValue`](modelsv2.AvmValue.md)

Represents an AVM value.

#### Defined in

[client/v2/algod/models/types.ts:1735](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1735)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AvmKeyValue`](modelsv2.AvmKeyValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AvmKeyValue`](modelsv2.AvmKeyValue.md)

#### Defined in

[client/v2/algod/models/types.ts:1757](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1757)
