---
id: "modelsv2.DryrunState"
title: "Class: DryrunState"
sidebar_label: "DryrunState"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).DryrunState

Stores the TEAL eval step data

## Hierarchy

- `default`

  ↳ **`DryrunState`**

## Constructors

### constructor

• **new DryrunState**(`«destructured»`)

Creates a new `DryrunState` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `error?` | `string` |
| › `line` | `number` \| `bigint` |
| › `pc` | `number` \| `bigint` |
| › `scratch?` | [`TealValue`](modelsv2.TealValue.md)[] |
| › `stack` | [`TealValue`](modelsv2.TealValue.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2628](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2628)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### error

• `Optional` **error**: `string`

Evaluation error if any

#### Defined in

[client/v2/algod/models/types.ts:2616](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2616)

___

### line

• **line**: `number` \| `bigint`

Line number

#### Defined in

[client/v2/algod/models/types.ts:2604](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2604)

___

### pc

• **pc**: `number` \| `bigint`

Program counter

#### Defined in

[client/v2/algod/models/types.ts:2609](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2609)

___

### scratch

• `Optional` **scratch**: [`TealValue`](modelsv2.TealValue.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2618](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2618)

___

### stack

• **stack**: [`TealValue`](modelsv2.TealValue.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2611](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2611)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`DryrunState`](modelsv2.DryrunState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`DryrunState`](modelsv2.DryrunState.md)

#### Defined in

[client/v2/algod/models/types.ts:2658](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2658)
