---
id: "modelsv2.BoxesResponse"
title: "Class: BoxesResponse"
sidebar_label: "BoxesResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).BoxesResponse

Box names of an application

## Hierarchy

- `default`

  ↳ **`BoxesResponse`**

## Constructors

### constructor

• **new BoxesResponse**(`boxes`)

Creates a new `BoxesResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boxes` | `Object` |
| `boxes.boxes` | [`BoxDescriptor`](modelsv2.BoxDescriptor.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2128](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2128)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### boxes

• **boxes**: [`BoxDescriptor`](modelsv2.BoxDescriptor.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2122](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2122)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`BoxesResponse`](modelsv2.BoxesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`BoxesResponse`](modelsv2.BoxesResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:2138](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2138)
