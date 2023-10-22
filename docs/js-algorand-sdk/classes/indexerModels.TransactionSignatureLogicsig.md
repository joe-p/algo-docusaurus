---
id: "indexerModels.TransactionSignatureLogicsig"
title: "Class: TransactionSignatureLogicsig"
sidebar_label: "TransactionSignatureLogicsig"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).TransactionSignatureLogicsig

(lsig) Programatic transaction signature.
Definition:
data/transactions/logicsig.go

## Hierarchy

- `default`

  ↳ **`TransactionSignatureLogicsig`**

## Constructors

### constructor

• **new TransactionSignatureLogicsig**(`«destructured»`)

Creates a new `TransactionSignatureLogicsig` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `args?` | `Uint8Array`[] |
| › `logic` | `string` \| `Uint8Array` |
| › `multisigSignature?` | [`TransactionSignatureMultisig`](erModels.TransactionSignatureMultisig) |
| › `signature?` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:5357](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5357)

## Properties

### args

• `Optional` **args**: `Uint8Array`[]

(arg) Logic arguments, base64 encoded.

#### Defined in

[client/v2/indexer/models/types.ts:5333](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5333)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### logic

• **logic**: `Uint8Array`

(l) Program signed by a signature or multi signature, or hashed to be the
address of ana ccount. Base64 encoded TEAL program.

#### Defined in

[client/v2/indexer/models/types.ts:5328](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5328)

___

### multisigSignature

• `Optional` **multisigSignature**: [`TransactionSignatureMultisig`](erModels.TransactionSignatureMultisig)

(msig) structure holding multiple subsignatures.
Definition:
crypto/multisig.go : MultisigSig

#### Defined in

[client/v2/indexer/models/types.ts:5340](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5340)

___

### signature

• `Optional` **signature**: `Uint8Array`

(sig) ed25519 signature.

#### Defined in

[client/v2/indexer/models/types.ts:5345](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5345)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionSignatureLogicsig`](erModels.TransactionSignatureLogicsig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionSignatureLogicsig`](erModels.TransactionSignatureLogicsig)

#### Defined in

[client/v2/indexer/models/types.ts:5389](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5389)
