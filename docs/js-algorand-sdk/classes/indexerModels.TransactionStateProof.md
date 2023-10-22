---
id: "indexerModels.TransactionStateProof"
title: "Class: TransactionStateProof"
sidebar_label: "TransactionStateProof"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).TransactionStateProof

Fields for a state proof transaction.
Definition:
data/transactions/stateproof.go : StateProofTxnFields

## Hierarchy

- `default`

  ↳ **`TransactionStateProof`**

## Constructors

### constructor

• **new TransactionStateProof**(`«destructured»`)

Creates a new `TransactionStateProof` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `message?` | [`IndexerStateProofMessage`](erModels.IndexerStateProofMessage) |
| › `stateProof?` | [`StateProofFields`](erModels.StateProofFields) |
| › `stateProofType?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:5562](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5562)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### message

• `Optional` **message**: [`IndexerStateProofMessage`](erModels.IndexerStateProofMessage)

(spmsg)

#### Defined in

[client/v2/indexer/models/types.ts:5538](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5538)

___

### stateProof

• `Optional` **stateProof**: [`StateProofFields`](erModels.StateProofFields)

(sp) represents a state proof.
Definition:
crypto/stateproof/structs.go : StateProof

#### Defined in

[client/v2/indexer/models/types.ts:5545](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5545)

___

### stateProofType

• `Optional` **stateProofType**: `number` \| `bigint`

(sptype) Type of the state proof. Integer representing an entry defined in
protocol/stateproof.go

#### Defined in

[client/v2/indexer/models/types.ts:5551](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5551)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionStateProof`](erModels.TransactionStateProof)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionStateProof`](erModels.TransactionStateProof)

#### Defined in

[client/v2/indexer/models/types.ts:5584](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5584)
