---
id: "modelsv2.PendingTransactionResponse"
title: "Class: PendingTransactionResponse"
sidebar_label: "PendingTransactionResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).PendingTransactionResponse

Details about a pending transaction. If the transaction was recently confirmed,
includes confirmation details like the round and reward details.

## Hierarchy

- `default`

  ↳ **`PendingTransactionResponse`**

## Constructors

### constructor

• **new PendingTransactionResponse**(`«destructured»`)

Creates a new `PendingTransactionResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `applicationIndex?` | `number` \| `bigint` |
| › `assetClosingAmount?` | `number` \| `bigint` |
| › `assetIndex?` | `number` \| `bigint` |
| › `closeRewards?` | `number` \| `bigint` |
| › `closingAmount?` | `number` \| `bigint` |
| › `confirmedRound?` | `number` \| `bigint` |
| › `globalStateDelta?` | [`EvalDeltaKeyValue`](modelsv2.EvalDeltaKeyValue.md)[] |
| › `innerTxns?` | [`PendingTransactionResponse`](modelsv2.PendingTransactionResponse.md)[] |
| › `localStateDelta?` | [`AccountStateDelta`](modelsv2.AccountStateDelta.md)[] |
| › `logs?` | `Uint8Array`[] |
| › `poolError` | `string` |
| › `receiverRewards?` | `number` \| `bigint` |
| › `senderRewards?` | `number` \| `bigint` |
| › `txn` | [`EncodedSignedTransaction`](../interfaces/EncodedSignedTransaction.md) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:3678](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3678)

## Properties

### applicationIndex

• `Optional` **applicationIndex**: `number` \| `bigint`

The application index if the transaction was found and it created an
application.

#### Defined in

[client/v2/algod/models/types.ts:3597](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3597)

___

### assetClosingAmount

• `Optional` **assetClosingAmount**: `number` \| `bigint`

The number of the asset's unit that were transferred to the close-to address.

#### Defined in

[client/v2/algod/models/types.ts:3602](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3602)

___

### assetIndex

• `Optional` **assetIndex**: `number` \| `bigint`

The asset index if the transaction was found and it created an asset.

#### Defined in

[client/v2/algod/models/types.ts:3607](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3607)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### closeRewards

• `Optional` **closeRewards**: `number` \| `bigint`

Rewards in microalgos applied to the close remainder to account.

#### Defined in

[client/v2/algod/models/types.ts:3612](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3612)

___

### closingAmount

• `Optional` **closingAmount**: `number` \| `bigint`

Closing amount for the transaction.

#### Defined in

[client/v2/algod/models/types.ts:3617](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3617)

___

### confirmedRound

• `Optional` **confirmedRound**: `number` \| `bigint`

The round where this transaction was confirmed, if present.

#### Defined in

[client/v2/algod/models/types.ts:3622](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3622)

___

### globalStateDelta

• `Optional` **globalStateDelta**: [`EvalDeltaKeyValue`](modelsv2.EvalDeltaKeyValue.md)[]

Global state key/value changes for the application being executed by this
transaction.

#### Defined in

[client/v2/algod/models/types.ts:3628](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3628)

___

### innerTxns

• `Optional` **innerTxns**: [`PendingTransactionResponse`](modelsv2.PendingTransactionResponse.md)[]

Inner transactions produced by application execution.

#### Defined in

[client/v2/algod/models/types.ts:3633](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3633)

___

### localStateDelta

• `Optional` **localStateDelta**: [`AccountStateDelta`](modelsv2.AccountStateDelta.md)[]

Local state key/value changes for the application being executed by this
transaction.

#### Defined in

[client/v2/algod/models/types.ts:3639](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3639)

___

### logs

• `Optional` **logs**: `Uint8Array`[]

Logs for the application being executed by this transaction.

#### Defined in

[client/v2/algod/models/types.ts:3644](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3644)

___

### poolError

• **poolError**: `string`

Indicates that the transaction was kicked out of this node's transaction pool
(and specifies why that happened). An empty string indicates the transaction
wasn't kicked out of this node's txpool due to an error.

#### Defined in

[client/v2/algod/models/types.ts:3586](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3586)

___

### receiverRewards

• `Optional` **receiverRewards**: `number` \| `bigint`

Rewards in microalgos applied to the receiver account.

#### Defined in

[client/v2/algod/models/types.ts:3649](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3649)

___

### senderRewards

• `Optional` **senderRewards**: `number` \| `bigint`

Rewards in microalgos applied to the sender account.

#### Defined in

[client/v2/algod/models/types.ts:3654](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3654)

___

### txn

• **txn**: [`EncodedSignedTransaction`](../interfaces/EncodedSignedTransaction.md)

The raw signed transaction.

#### Defined in

[client/v2/algod/models/types.ts:3591](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3591)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`PendingTransactionResponse`](modelsv2.PendingTransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`PendingTransactionResponse`](modelsv2.PendingTransactionResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:3744](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3744)
