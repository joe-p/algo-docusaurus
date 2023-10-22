---
id: "indexerModels.IndexerStateProofMessage"
title: "Class: IndexerStateProofMessage"
sidebar_label: "IndexerStateProofMessage"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).IndexerStateProofMessage

## Hierarchy

- `default`

  ↳ **`IndexerStateProofMessage`**

## Constructors

### constructor

• **new IndexerStateProofMessage**(`«destructured»`)

Creates a new `IndexerStateProofMessage` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blockHeadersCommitment?` | `string` \| `Uint8Array` |
| › `firstAttestedRound?` | `number` \| `bigint` |
| › `latestAttestedRound?` | `number` \| `bigint` |
| › `lnProvenWeight?` | `number` \| `bigint` |
| › `votersCommitment?` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3112](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3112)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### blockHeadersCommitment

• `Optional` **blockHeadersCommitment**: `Uint8Array`

(b)

#### Defined in

[client/v2/indexer/models/types.ts:3082](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3082)

___

### firstAttestedRound

• `Optional` **firstAttestedRound**: `number` \| `bigint`

(f)

#### Defined in

[client/v2/indexer/models/types.ts:3087](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3087)

___

### latestAttestedRound

• `Optional` **latestAttestedRound**: `number` \| `bigint`

(l)

#### Defined in

[client/v2/indexer/models/types.ts:3092](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3092)

___

### lnProvenWeight

• `Optional` **lnProvenWeight**: `number` \| `bigint`

(P)

#### Defined in

[client/v2/indexer/models/types.ts:3097](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3097)

___

### votersCommitment

• `Optional` **votersCommitment**: `Uint8Array`

(v)

#### Defined in

[client/v2/indexer/models/types.ts:3102](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3102)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`IndexerStateProofMessage`](erModels.IndexerStateProofMessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`IndexerStateProofMessage`](erModels.IndexerStateProofMessage)

#### Defined in

[client/v2/indexer/models/types.ts:3148](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3148)
