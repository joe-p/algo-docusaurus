---
id: "modelsv2.ApplicationKVStorage"
title: "Class: ApplicationKVStorage"
sidebar_label: "ApplicationKVStorage"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).ApplicationKVStorage

An application's global/local/box state.

## Hierarchy

- `default`

  ↳ **`ApplicationKVStorage`**

## Constructors

### constructor

• **new ApplicationKVStorage**(`«destructured»`)

Creates a new `ApplicationKVStorage` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account?` | `string` |
| › `kvs` | [`AvmKeyValue`](modelsv2.AvmKeyValue.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:889](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L889)

## Properties

### account

• `Optional` **account**: `string`

The address of the account associated with the local state.

#### Defined in

[client/v2/algod/models/types.ts:882](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L882)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### kvs

• **kvs**: [`AvmKeyValue`](modelsv2.AvmKeyValue.md)[]

Key-Value pairs representing application states.

#### Defined in

[client/v2/algod/models/types.ts:877](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L877)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md)

#### Defined in

[client/v2/algod/models/types.ts:901](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L901)
