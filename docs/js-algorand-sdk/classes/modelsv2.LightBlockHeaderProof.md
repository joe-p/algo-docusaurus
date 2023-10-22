---
id: "modelsv2.LightBlockHeaderProof"
title: "Class: LightBlockHeaderProof"
sidebar_label: "LightBlockHeaderProof"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).LightBlockHeaderProof

Proof of membership and position of a light block header.

## Hierarchy

- `default`

  ↳ **`LightBlockHeaderProof`**

## Constructors

### constructor

• **new LightBlockHeaderProof**(`«destructured»`)

Creates a new `LightBlockHeaderProof` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `index` | `number` \| `bigint` |
| › `proof` | `string` \| `Uint8Array` |
| › `treedepth` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:3171](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3171)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### index

• **index**: `number` \| `bigint`

The index of the light block header in the vector commitment tree

#### Defined in

[client/v2/algod/models/types.ts:3151](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3151)

___

### proof

• **proof**: `Uint8Array`

The encoded proof.

#### Defined in

[client/v2/algod/models/types.ts:3156](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3156)

___

### treedepth

• **treedepth**: `number` \| `bigint`

Represents the depth of the tree that is being proven, i.e. the number of edges
from a leaf to the root.

#### Defined in

[client/v2/algod/models/types.ts:3162](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3162)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`LightBlockHeaderProof`](modelsv2.LightBlockHeaderProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`LightBlockHeaderProof`](modelsv2.LightBlockHeaderProof.md)

#### Defined in

[client/v2/algod/models/types.ts:3196](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3196)
