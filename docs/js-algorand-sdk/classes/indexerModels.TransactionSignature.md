---
id: "indexerModels.TransactionSignature"
title: "Class: TransactionSignature"
sidebar_label: "TransactionSignature"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).TransactionSignature

Validation signature associated with some data. Only one of the signatures
should be provided.

## Hierarchy

- `default`

  ↳ **`TransactionSignature`**

## Constructors

### constructor

• **new TransactionSignature**(`«destructured»`)

Creates a new `TransactionSignature` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `logicsig?` | [`TransactionSignatureLogicsig`](erModels.TransactionSignatureLogicsig) |
| › `multisig?` | [`TransactionSignatureMultisig`](erModels.TransactionSignatureMultisig) |
| › `sig?` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:5274](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5274)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### logicsig

• `Optional` **logicsig**: [`TransactionSignatureLogicsig`](erModels.TransactionSignatureLogicsig)

(lsig) Programatic transaction signature.
Definition:
data/transactions/logicsig.go

#### Defined in

[client/v2/indexer/models/types.ts:5250](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5250)

___

### multisig

• `Optional` **multisig**: [`TransactionSignatureMultisig`](erModels.TransactionSignatureMultisig)

(msig) structure holding multiple subsignatures.
Definition:
crypto/multisig.go : MultisigSig

#### Defined in

[client/v2/indexer/models/types.ts:5257](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5257)

___

### sig

• `Optional` **sig**: `Uint8Array`

(sig) Standard ed25519 signature.

#### Defined in

[client/v2/indexer/models/types.ts:5262](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5262)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionSignature`](erModels.TransactionSignature)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionSignature`](erModels.TransactionSignature)

#### Defined in

[client/v2/indexer/models/types.ts:5299](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5299)
