---
id: "modelsv2.EvalDelta"
title: "Class: EvalDelta"
sidebar_label: "EvalDelta"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).EvalDelta

Represents a TEAL value delta.

## Hierarchy

- `default`

  ↳ **`EvalDelta`**

## Constructors

### constructor

• **new EvalDelta**(`«destructured»`)

Creates a new `EvalDelta` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `action` | `number` \| `bigint` |
| › `bytes?` | `string` |
| › `uint?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2895](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2895)

## Properties

### action

• **action**: `number` \| `bigint`

(at) delta action.

#### Defined in

[client/v2/algod/models/types.ts:2877](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2877)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### bytes

• `Optional` **bytes**: `string`

(bs) bytes value.

#### Defined in

[client/v2/algod/models/types.ts:2882](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2882)

___

### uint

• `Optional` **uint**: `number` \| `bigint`

(ui) uint value.

#### Defined in

[client/v2/algod/models/types.ts:2887](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2887)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`EvalDelta`](modelsv2.EvalDelta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`EvalDelta`](modelsv2.EvalDelta.md)

#### Defined in

[client/v2/algod/models/types.ts:2917](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2917)
