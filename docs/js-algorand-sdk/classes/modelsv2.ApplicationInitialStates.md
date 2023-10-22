---
id: "modelsv2.ApplicationInitialStates"
title: "Class: ApplicationInitialStates"
sidebar_label: "ApplicationInitialStates"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).ApplicationInitialStates

An application's initial global/local/box states that were accessed during
simulation.

## Hierarchy

- `default`

  ↳ **`ApplicationInitialStates`**

## Constructors

### constructor

• **new ApplicationInitialStates**(`«destructured»`)

Creates a new `ApplicationInitialStates` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appBoxes?` | [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md) |
| › `appGlobals?` | [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md) |
| › `appLocals?` | [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md)[] |
| › `id` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:819](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L819)

## Properties

### appBoxes

• `Optional` **appBoxes**: [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md)

An application's global/local/box state.

#### Defined in

[client/v2/algod/models/types.ts:800](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L800)

___

### appGlobals

• `Optional` **appGlobals**: [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md)

An application's global/local/box state.

#### Defined in

[client/v2/algod/models/types.ts:805](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L805)

___

### appLocals

• `Optional` **appLocals**: [`ApplicationKVStorage`](modelsv2.ApplicationKVStorage.md)[]

An application's initial local states tied to different accounts.

#### Defined in

[client/v2/algod/models/types.ts:810](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L810)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### id

• **id**: `number` \| `bigint`

Application index.

#### Defined in

[client/v2/algod/models/types.ts:795](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L795)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ApplicationInitialStates`](modelsv2.ApplicationInitialStates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ApplicationInitialStates`](modelsv2.ApplicationInitialStates.md)

#### Defined in

[client/v2/algod/models/types.ts:845](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L845)
