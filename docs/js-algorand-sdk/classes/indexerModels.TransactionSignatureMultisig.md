---
id: "indexerModels.TransactionSignatureMultisig"
title: "Class: TransactionSignatureMultisig"
sidebar_label: "TransactionSignatureMultisig"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).TransactionSignatureMultisig

(msig) structure holding multiple subsignatures.
Definition:
crypto/multisig.go : MultisigSig

## Hierarchy

- `default`

  ↳ **`TransactionSignatureMultisig`**

## Constructors

### constructor

• **new TransactionSignatureMultisig**(`«destructured»`)

Creates a new `TransactionSignatureMultisig` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `subsignature?` | [`TransactionSignatureMultisigSubsignature`](erModels.TransactionSignatureMultisigSubsignature)[] |
| › `threshold?` | `number` \| `bigint` |
| › `version?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:5437](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5437)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### subsignature

• `Optional` **subsignature**: [`TransactionSignatureMultisigSubsignature`](erModels.TransactionSignatureMultisigSubsignature)[]

(subsig) holds pairs of public key and signatures.

#### Defined in

[client/v2/indexer/models/types.ts:5419](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5419)

___

### threshold

• `Optional` **threshold**: `number` \| `bigint`

(thr)

#### Defined in

[client/v2/indexer/models/types.ts:5424](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5424)

___

### version

• `Optional` **version**: `number` \| `bigint`

(v)

#### Defined in

[client/v2/indexer/models/types.ts:5429](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5429)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionSignatureMultisig`](erModels.TransactionSignatureMultisig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionSignatureMultisig`](erModels.TransactionSignatureMultisig)

#### Defined in

[client/v2/indexer/models/types.ts:5459](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5459)
