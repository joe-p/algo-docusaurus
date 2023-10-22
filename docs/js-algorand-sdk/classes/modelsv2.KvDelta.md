---
id: "modelsv2.KvDelta"
title: "Class: KvDelta"
sidebar_label: "KvDelta"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).KvDelta

A single Delta containing the key, the previous value and the current value for
a single round.

## Hierarchy

- `default`

  ↳ **`KvDelta`**

## Constructors

### constructor

• **new KvDelta**(`«destructured»`)

Creates a new `KvDelta` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `key?` | `string` \| `Uint8Array` |
| › `value?` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:3064](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3064)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### key

• `Optional` **key**: `Uint8Array`

The key, base64 encoded.

#### Defined in

[client/v2/algod/models/types.ts:3052](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3052)

___

### value

• `Optional` **value**: `Uint8Array`

The new value of the KV store entry, base64 encoded.

#### Defined in

[client/v2/algod/models/types.ts:3057](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3057)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`KvDelta`](modelsv2.KvDelta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`KvDelta`](modelsv2.KvDelta.md)

#### Defined in

[client/v2/algod/models/types.ts:3088](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3088)
