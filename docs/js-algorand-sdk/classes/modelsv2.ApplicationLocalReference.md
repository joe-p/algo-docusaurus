---
id: "modelsv2.ApplicationLocalReference"
title: "Class: ApplicationLocalReference"
sidebar_label: "ApplicationLocalReference"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).ApplicationLocalReference

References an account's local state for an application.

## Hierarchy

- `default`

  ↳ **`ApplicationLocalReference`**

## Constructors

### constructor

• **new ApplicationLocalReference**(`«destructured»`)

Creates a new `ApplicationLocalReference` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | `string` |
| › `app` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:936](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L936)

## Properties

### account

• **account**: `string`

Address of the account with the local state.

#### Defined in

[client/v2/algod/models/types.ts:924](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L924)

___

### app

• **app**: `number` \| `bigint`

Application ID of the local state application.

#### Defined in

[client/v2/algod/models/types.ts:929](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L929)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationLocalReference`](modelsv2.ApplicationLocalReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationLocalReference`](modelsv2.ApplicationLocalReference.md)

#### Defined in

[client/v2/algod/models/types.ts:948](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L948)
