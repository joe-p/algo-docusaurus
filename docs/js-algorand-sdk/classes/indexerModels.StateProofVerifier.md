---
id: "indexerModels.StateProofVerifier"
title: "Class: StateProofVerifier"
sidebar_label: "StateProofVerifier"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).StateProofVerifier

## Hierarchy

- `default`

  ↳ **`StateProofVerifier`**

## Constructors

### constructor

• **new StateProofVerifier**(`«destructured»`)

Creates a new `StateProofVerifier` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `commitment?` | `string` \| `Uint8Array` |
| › `keyLifetime?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3777](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3777)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### commitment

• `Optional` **commitment**: `Uint8Array`

(cmt) Represents the root of the vector commitment tree.

#### Defined in

[client/v2/indexer/models/types.ts:3765](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3765)

___

### keyLifetime

• `Optional` **keyLifetime**: `number` \| `bigint`

(lf) Key lifetime.

#### Defined in

[client/v2/indexer/models/types.ts:3770](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3770)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofVerifier`](erModels.StateProofVerifier)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofVerifier`](erModels.StateProofVerifier)

#### Defined in

[client/v2/indexer/models/types.ts:3798](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3798)
