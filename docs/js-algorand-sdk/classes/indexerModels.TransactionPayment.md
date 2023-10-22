---
id: "indexerModels.TransactionPayment"
title: "Class: TransactionPayment"
sidebar_label: "TransactionPayment"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).TransactionPayment

Fields for a payment transaction.
Definition:
data/transactions/payment.go : PaymentTxnFields

## Hierarchy

- `default`

  ↳ **`TransactionPayment`**

## Constructors

### constructor

• **new TransactionPayment**(`«destructured»`)

Creates a new `TransactionPayment` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `number` \| `bigint` |
| › `closeAmount?` | `number` \| `bigint` |
| › `closeRemainderTo?` | `string` |
| › `receiver` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:5135](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5135)

## Properties

### amount

• **amount**: `number` \| `bigint`

(amt) number of MicroAlgos intended to be transferred.

#### Defined in

[client/v2/indexer/models/types.ts:5107](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5107)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### closeAmount

• `Optional` **closeAmount**: `number` \| `bigint`

Number of MicroAlgos that were sent to the close-remainder-to address when
closing the sender account.

#### Defined in

[client/v2/indexer/models/types.ts:5118](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5118)

___

### closeRemainderTo

• `Optional` **closeRemainderTo**: `string`

(close) when set, indicates that the sending account should be closed and all
remaining funds be transferred to this address.

#### Defined in

[client/v2/indexer/models/types.ts:5124](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5124)

___

### receiver

• **receiver**: `string`

(rcv) receiver's address.

#### Defined in

[client/v2/indexer/models/types.ts:5112](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5112)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionPayment`](erModels.TransactionPayment)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionPayment`](erModels.TransactionPayment)

#### Defined in

[client/v2/indexer/models/types.ts:5161](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L5161)
