---
id: "modelsv2.AvmValue"
title: "Class: AvmValue"
sidebar_label: "AvmValue"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).AvmValue

Represents an AVM value.

## Hierarchy

- `default`

  ↳ **`AvmValue`**

## Constructors

### constructor

• **new AvmValue**(`«destructured»`)

Creates a new `AvmValue` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bytes?` | `string` \| `Uint8Array` |
| › `type` | `number` \| `bigint` |
| › `uint?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1796](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1796)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### bytes

• `Optional` **bytes**: `Uint8Array`

bytes value.

#### Defined in

[client/v2/algod/models/types.ts:1783](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1783)

___

### type

• **type**: `number` \| `bigint`

value type. Value `1` refers to **bytes**, value `2` refers to **uint64**

#### Defined in

[client/v2/algod/models/types.ts:1778](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1778)

___

### uint

• `Optional` **uint**: `number` \| `bigint`

uint value.

#### Defined in

[client/v2/algod/models/types.ts:1788](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1788)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AvmValue`](modelsv2.AvmValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AvmValue`](modelsv2.AvmValue.md)

#### Defined in

[client/v2/algod/models/types.ts:1821](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1821)
