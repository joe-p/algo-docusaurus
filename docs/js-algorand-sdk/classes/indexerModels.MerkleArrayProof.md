---
id: "indexerModels.MerkleArrayProof"
title: "Class: MerkleArrayProof"
sidebar_label: "MerkleArrayProof"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).MerkleArrayProof

## Hierarchy

- `default`

  ↳ **`MerkleArrayProof`**

## Constructors

### constructor

• **new MerkleArrayProof**(`«destructured»`)

Creates a new `MerkleArrayProof` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `hashFactory?` | [`HashFactory`](erModels.HashFactory) |
| › `path?` | `Uint8Array`[] |
| › `treeDepth?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3182](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3182)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### hashFactory

• `Optional` **hashFactory**: [`HashFactory`](erModels.HashFactory)

#### Defined in

[client/v2/indexer/models/types.ts:3164](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3164)

___

### path

• `Optional` **path**: `Uint8Array`[]

(pth)

#### Defined in

[client/v2/indexer/models/types.ts:3169](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3169)

___

### treeDepth

• `Optional` **treeDepth**: `number` \| `bigint`

(td)

#### Defined in

[client/v2/indexer/models/types.ts:3174](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3174)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`MerkleArrayProof`](erModels.MerkleArrayProof)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`MerkleArrayProof`](erModels.MerkleArrayProof)

#### Defined in

[client/v2/indexer/models/types.ts:3204](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3204)
