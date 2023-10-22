---
id: "modelsv2.AccountStateDelta"
title: "Class: AccountStateDelta"
sidebar_label: "AccountStateDelta"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).AccountStateDelta

Application state delta.

## Hierarchy

- `default`

  ↳ **`AccountStateDelta`**

## Constructors

### constructor

• **new AccountStateDelta**(`«destructured»`)

Creates a new `AccountStateDelta` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `delta` | [`EvalDeltaKeyValue`](modelsv2.EvalDeltaKeyValue.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:702](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L702)

## Properties

### address

• **address**: `string`

#### Defined in

[client/v2/algod/models/types.ts:690](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L690)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### delta

• **delta**: [`EvalDeltaKeyValue`](modelsv2.EvalDeltaKeyValue.md)[]

Application state delta.

#### Defined in

[client/v2/algod/models/types.ts:695](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L695)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AccountStateDelta`](modelsv2.AccountStateDelta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AccountStateDelta`](modelsv2.AccountStateDelta.md)

#### Defined in

[client/v2/algod/models/types.ts:720](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L720)
