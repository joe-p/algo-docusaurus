---
id: "indexerModels.TransactionResponse"
title: "Class: TransactionResponse"
sidebar_label: "TransactionResponse"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).TransactionResponse

## Hierarchy

- `default`

  ↳ **`TransactionResponse`**

## Constructors

### constructor

• **new TransactionResponse**(`«destructured»`)

Creates a new `TransactionResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `currentRound` | `number` \| `bigint` |
| › `transaction` | [`Transaction`](erModels.Transaction) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:5204](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5204)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### currentRound

• **currentRound**: `number` \| `bigint`

Round at which the results were computed.

#### Defined in

[client/v2/indexer/models/types.ts:5184](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5184)

___

### transaction

• **transaction**: [`Transaction`](erModels.Transaction)

Contains all fields common to all transactions and serves as an envelope to all
transactions type. Represents both regular and inner transactions.
Definition:
data/transactions/signedtxn.go : SignedTxn
data/transactions/transaction.go : Transaction

#### Defined in

[client/v2/indexer/models/types.ts:5193](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5193)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionResponse`](erModels.TransactionResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionResponse`](erModels.TransactionResponse)

#### Defined in

[client/v2/indexer/models/types.ts:5222](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5222)
