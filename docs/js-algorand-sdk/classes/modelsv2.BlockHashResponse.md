---
id: "modelsv2.BlockHashResponse"
title: "Class: BlockHashResponse"
sidebar_label: "BlockHashResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).BlockHashResponse

Hash of a block header.

## Hierarchy

- `default`

  ↳ **`BlockHashResponse`**

## Constructors

### constructor

• **new BlockHashResponse**(`blockhash`)

Creates a new `BlockHashResponse` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockhash` | `Object` | Block header hash. |
| `blockhash.blockhash` | `string` | - |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1847](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1847)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### blockhash

• **blockhash**: `string`

Block header hash.

#### Defined in

[client/v2/algod/models/types.ts:1841](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1841)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`BlockHashResponse`](modelsv2.BlockHashResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`BlockHashResponse`](modelsv2.BlockHashResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:1857](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1857)
