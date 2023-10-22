---
id: "modelsv2.BlockTxidsResponse"
title: "Class: BlockTxidsResponse"
sidebar_label: "BlockTxidsResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).BlockTxidsResponse

Top level transaction IDs in a block.

## Hierarchy

- `default`

  ↳ **`BlockTxidsResponse`**

## Constructors

### constructor

• **new BlockTxidsResponse**(`blocktxids`)

Creates a new `BlockTxidsResponse` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blocktxids` | `Object` | Block transaction IDs. |
| `blocktxids.blocktxids` | `string`[] | - |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:1934](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1934)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### blocktxids

• **blocktxids**: `string`[]

Block transaction IDs.

#### Defined in

[client/v2/algod/models/types.ts:1928](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1928)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`BlockTxidsResponse`](modelsv2.BlockTxidsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`BlockTxidsResponse`](modelsv2.BlockTxidsResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:1944](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L1944)
