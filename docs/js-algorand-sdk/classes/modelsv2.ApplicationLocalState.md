---
id: "modelsv2.ApplicationLocalState"
title: "Class: ApplicationLocalState"
sidebar_label: "ApplicationLocalState"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).ApplicationLocalState

Stores local state associated with an application.

## Hierarchy

- `default`

  ↳ **`ApplicationLocalState`**

## Constructors

### constructor

• **new ApplicationLocalState**(`«destructured»`)

Creates a new `ApplicationLocalState` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `number` \| `bigint` |
| › `keyValue?` | [`TealKeyValue`](modelsv2.TealKeyValue.md)[] |
| › `schema` | [`ApplicationStateSchema`](modelsv2.ApplicationStateSchema.md) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:989](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L989)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### id

• **id**: `number` \| `bigint`

The application which this local state is for.

#### Defined in

[client/v2/algod/models/types.ts:971](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L971)

___

### keyValue

• `Optional` **keyValue**: [`TealKeyValue`](modelsv2.TealKeyValue.md)[]

(tkv) storage.

#### Defined in

[client/v2/algod/models/types.ts:981](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L981)

___

### schema

• **schema**: [`ApplicationStateSchema`](modelsv2.ApplicationStateSchema.md)

(hsch) schema.

#### Defined in

[client/v2/algod/models/types.ts:976](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L976)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationLocalState`](modelsv2.ApplicationLocalState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationLocalState`](modelsv2.ApplicationLocalState.md)

#### Defined in

[client/v2/algod/models/types.ts:1011](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1011)
