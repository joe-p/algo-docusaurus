---
id: "indexerModels.Transaction"
title: "Class: Transaction"
sidebar_label: "Transaction"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).Transaction

Contains all fields common to all transactions and serves as an envelope to all
transactions type. Represents both regular and inner transactions.
Definition:
data/transactions/signedtxn.go : SignedTxn
data/transactions/transaction.go : Transaction

## Hierarchy

- `default`

  ↳ **`Transaction`**

## Constructors

### constructor

• **new Transaction**(`«destructured»`)

Creates a new `Transaction` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `applicationTransaction?` | [`TransactionApplication`](erModels.TransactionApplication) |
| › `assetConfigTransaction?` | [`TransactionAssetConfig`](erModels.TransactionAssetConfig) |
| › `assetFreezeTransaction?` | [`TransactionAssetFreeze`](erModels.TransactionAssetFreeze) |
| › `assetTransferTransaction?` | [`TransactionAssetTransfer`](erModels.TransactionAssetTransfer) |
| › `authAddr?` | `string` |
| › `closeRewards?` | `number` \| `bigint` |
| › `closingAmount?` | `number` \| `bigint` |
| › `confirmedRound?` | `number` \| `bigint` |
| › `createdApplicationIndex?` | `number` \| `bigint` |
| › `createdAssetIndex?` | `number` \| `bigint` |
| › `fee` | `number` \| `bigint` |
| › `firstValid` | `number` \| `bigint` |
| › `genesisHash?` | `string` \| `Uint8Array` |
| › `genesisId?` | `string` |
| › `globalStateDelta?` | [`EvalDeltaKeyValue`](erModels.EvalDeltaKeyValue)[] |
| › `group?` | `string` \| `Uint8Array` |
| › `id?` | `string` |
| › `innerTxns?` | [`Transaction`](erModels.Transaction)[] |
| › `intraRoundOffset?` | `number` \| `bigint` |
| › `keyregTransaction?` | [`TransactionKeyreg`](erModels.TransactionKeyreg) |
| › `lastValid` | `number` \| `bigint` |
| › `lease?` | `string` \| `Uint8Array` |
| › `localStateDelta?` | [`AccountStateDelta`](erModels.AccountStateDelta)[] |
| › `logs?` | `Uint8Array`[] |
| › `note?` | `string` \| `Uint8Array` |
| › `paymentTransaction?` | [`TransactionPayment`](erModels.TransactionPayment) |
| › `receiverRewards?` | `number` \| `bigint` |
| › `rekeyTo?` | `string` |
| › `roundTime?` | `number` \| `bigint` |
| › `sender` | `string` |
| › `senderRewards?` | `number` \| `bigint` |
| › `signature?` | [`TransactionSignature`](erModels.TransactionSignature) |
| › `stateProofTransaction?` | [`TransactionStateProof`](erModels.TransactionStateProof) |
| › `txType?` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:4263](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4263)

## Properties

### applicationTransaction

• `Optional` **applicationTransaction**: [`TransactionApplication`](erModels.TransactionApplication)

Fields for application transactions.
Definition:
data/transactions/application.go : ApplicationCallTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4003](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4003)

___

### assetConfigTransaction

• `Optional` **assetConfigTransaction**: [`TransactionAssetConfig`](erModels.TransactionAssetConfig)

Fields for asset allocation, re-configuration, and destruction.
A zero value for asset-id indicates asset creation.
A zero value for the params indicates asset destruction.
Definition:
data/transactions/asset.go : AssetConfigTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4012](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4012)

___

### assetFreezeTransaction

• `Optional` **assetFreezeTransaction**: [`TransactionAssetFreeze`](erModels.TransactionAssetFreeze)

Fields for an asset freeze transaction.
Definition:
data/transactions/asset.go : AssetFreezeTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4019](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4019)

___

### assetTransferTransaction

• `Optional` **assetTransferTransaction**: [`TransactionAssetTransfer`](erModels.TransactionAssetTransfer)

Fields for an asset transfer transaction.
Definition:
data/transactions/asset.go : AssetTransferTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4026](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4026)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### authAddr

• `Optional` **authAddr**: `string`

(sgnr) this is included with signed transactions when the signing address does
not equal the sender. The backend can use this to ensure that auth addr is equal
to the accounts auth addr.

#### Defined in

[client/v2/indexer/models/types.ts:4033](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4033)

___

### closeRewards

• `Optional` **closeRewards**: `number` \| `bigint`

(rc) rewards applied to close-remainder-to account.

#### Defined in

[client/v2/indexer/models/types.ts:4038](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4038)

___

### closingAmount

• `Optional` **closingAmount**: `number` \| `bigint`

(ca) closing amount for transaction.

#### Defined in

[client/v2/indexer/models/types.ts:4043](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4043)

___

### confirmedRound

• `Optional` **confirmedRound**: `number` \| `bigint`

Round when the transaction was confirmed.

#### Defined in

[client/v2/indexer/models/types.ts:4048](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4048)

___

### createdApplicationIndex

• `Optional` **createdApplicationIndex**: `number` \| `bigint`

Specifies an application index (ID) if an application was created with this
transaction.

#### Defined in

[client/v2/indexer/models/types.ts:4054](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4054)

___

### createdAssetIndex

• `Optional` **createdAssetIndex**: `number` \| `bigint`

Specifies an asset index (ID) if an asset was created with this transaction.

#### Defined in

[client/v2/indexer/models/types.ts:4059](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4059)

___

### fee

• **fee**: `number` \| `bigint`

(fee) Transaction fee.

#### Defined in

[client/v2/indexer/models/types.ts:3981](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3981)

___

### firstValid

• **firstValid**: `number` \| `bigint`

(fv) First valid round for this transaction.

#### Defined in

[client/v2/indexer/models/types.ts:3986](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3986)

___

### genesisHash

• `Optional` **genesisHash**: `Uint8Array`

(gh) Hash of genesis block.

#### Defined in

[client/v2/indexer/models/types.ts:4064](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4064)

___

### genesisId

• `Optional` **genesisId**: `string`

(gen) genesis block ID.

#### Defined in

[client/v2/indexer/models/types.ts:4069](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4069)

___

### globalStateDelta

• `Optional` **globalStateDelta**: [`EvalDeltaKeyValue`](erModels.EvalDeltaKeyValue)[]

(gd) Global state key/value changes for the application being executed by this
transaction.

#### Defined in

[client/v2/indexer/models/types.ts:4075](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4075)

___

### group

• `Optional` **group**: `Uint8Array`

(grp) Base64 encoded byte array of a sha512/256 digest. When present indicates
that this transaction is part of a transaction group and the value is the
sha512/256 hash of the transactions in that group.

#### Defined in

[client/v2/indexer/models/types.ts:4082](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4082)

___

### id

• `Optional` **id**: `string`

Transaction ID

#### Defined in

[client/v2/indexer/models/types.ts:4087](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4087)

___

### innerTxns

• `Optional` **innerTxns**: [`Transaction`](erModels.Transaction)[]

Inner transactions produced by application execution.

#### Defined in

[client/v2/indexer/models/types.ts:4092](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4092)

___

### intraRoundOffset

• `Optional` **intraRoundOffset**: `number` \| `bigint`

Offset into the round where this transaction was confirmed.

#### Defined in

[client/v2/indexer/models/types.ts:4097](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4097)

___

### keyregTransaction

• `Optional` **keyregTransaction**: [`TransactionKeyreg`](erModels.TransactionKeyreg)

Fields for a keyreg transaction.
Definition:
data/transactions/keyreg.go : KeyregTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4104](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4104)

___

### lastValid

• **lastValid**: `number` \| `bigint`

(lv) Last valid round for this transaction.

#### Defined in

[client/v2/indexer/models/types.ts:3991](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3991)

___

### lease

• `Optional` **lease**: `Uint8Array`

(lx) Base64 encoded 32-byte array. Lease enforces mutual exclusion of
transactions. If this field is nonzero, then once the transaction is confirmed,
it acquires the lease identified by the (Sender, Lease) pair of the transaction
until the LastValid round passes. While this transaction possesses the lease, no
other transaction specifying this lease can be confirmed.

#### Defined in

[client/v2/indexer/models/types.ts:4113](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4113)

___

### localStateDelta

• `Optional` **localStateDelta**: [`AccountStateDelta`](erModels.AccountStateDelta)[]

(ld) Local state key/value changes for the application being executed by this
transaction.

#### Defined in

[client/v2/indexer/models/types.ts:4119](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4119)

___

### logs

• `Optional` **logs**: `Uint8Array`[]

(lg) Logs for the application being executed by this transaction.

#### Defined in

[client/v2/indexer/models/types.ts:4124](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4124)

___

### note

• `Optional` **note**: `Uint8Array`

(note) Free form data.

#### Defined in

[client/v2/indexer/models/types.ts:4129](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4129)

___

### paymentTransaction

• `Optional` **paymentTransaction**: [`TransactionPayment`](erModels.TransactionPayment)

Fields for a payment transaction.
Definition:
data/transactions/payment.go : PaymentTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4136](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4136)

___

### receiverRewards

• `Optional` **receiverRewards**: `number` \| `bigint`

(rr) rewards applied to receiver account.

#### Defined in

[client/v2/indexer/models/types.ts:4141](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4141)

___

### rekeyTo

• `Optional` **rekeyTo**: `string`

(rekey) when included in a valid transaction, the accounts auth addr will be
updated with this value and future signatures must be signed with the key
represented by this address.

#### Defined in

[client/v2/indexer/models/types.ts:4148](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4148)

___

### roundTime

• `Optional` **roundTime**: `number` \| `bigint`

Time when the block this transaction is in was confirmed.

#### Defined in

[client/v2/indexer/models/types.ts:4153](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4153)

___

### sender

• **sender**: `string`

(snd) Sender's address.

#### Defined in

[client/v2/indexer/models/types.ts:3996](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3996)

___

### senderRewards

• `Optional` **senderRewards**: `number` \| `bigint`

(rs) rewards applied to sender account.

#### Defined in

[client/v2/indexer/models/types.ts:4158](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4158)

___

### signature

• `Optional` **signature**: [`TransactionSignature`](erModels.TransactionSignature)

Validation signature associated with some data. Only one of the signatures
should be provided.

#### Defined in

[client/v2/indexer/models/types.ts:4164](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4164)

___

### stateProofTransaction

• `Optional` **stateProofTransaction**: [`TransactionStateProof`](erModels.TransactionStateProof)

Fields for a state proof transaction.
Definition:
data/transactions/stateproof.go : StateProofTxnFields

#### Defined in

[client/v2/indexer/models/types.ts:4171](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4171)

___

### txType

• `Optional` **txType**: `string`

(type) Indicates what type of transaction this is. Different types have
different fields.
Valid types, and where their fields are stored:
* (pay) payment-transaction
* (keyreg) keyreg-transaction
* (acfg) asset-config-transaction
* (axfer) asset-transfer-transaction
* (afrz) asset-freeze-transaction
* (appl) application-transaction
* (stpf) state-proof-transaction

#### Defined in

[client/v2/indexer/models/types.ts:4185](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4185)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`Transaction`](erModels.Transaction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`Transaction`](erModels.Transaction)

#### Defined in

[client/v2/indexer/models/types.ts:4421](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L4421)
