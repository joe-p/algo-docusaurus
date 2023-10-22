---
id: "modules"
title: "algosdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [indexerModels](namespaces/erModels)
- [modelsv2](namespaces/modelsv2.md)

## Enumerations

- [ABIReferenceType](enums/ABIReferenceType.md)
- [ABITransactionType](enums/ABITransactionType.md)
- [AtomicTransactionComposerStatus](enums/AtomicTransactionComposerStatus.md)
- [IntDecoding](enums/IntDecoding.md)
- [OnApplicationComplete](enums/OnApplicationComplete.md)
- [TransactionType](enums/TransactionType.md)

## Classes

- [ABIAddressType](classes/ABIAddressType.md)
- [ABIArrayDynamicType](classes/ABIArrayDynamicType.md)
- [ABIArrayStaticType](classes/ABIArrayStaticType.md)
- [ABIBoolType](classes/ABIBoolType.md)
- [ABIByteType](classes/ABIByteType.md)
- [ABIContract](classes/ABIContract.md)
- [ABIInterface](classes/ABIInterface.md)
- [ABIMethod](classes/ABIMethod.md)
- [ABIStringType](classes/ABIStringType.md)
- [ABITupleType](classes/ABITupleType.md)
- [ABIType](classes/ABIType.md)
- [ABIUfixedType](classes/ABIUfixedType.md)
- [ABIUintType](classes/ABIUintType.md)
- [Algodv2](classes/Algodv2.md)
- [AtomicTransactionComposer](classes/AtomicTransactionComposer.md)
- [DryrunResult](classes/DryrunResult.md)
- [Indexer](classes/Indexer.md)
- [Kmd](classes/Kmd.md)
- [LogicSig](classes/LogicSig.md)
- [LogicSigAccount](classes/LogicSigAccount.md)
- [SourceMap](classes/SourceMap.md)
- [Transaction](classes/Transaction.md)

## Interfaces

- [ABIContractNetworkInfo](interfaces/ABIContractNetworkInfo.md)
- [ABIContractNetworks](interfaces/ABIContractNetworks.md)
- [ABIContractParams](interfaces/ABIContractParams.md)
- [ABIInterfaceParams](interfaces/ABIInterfaceParams.md)
- [ABIMethodArgParams](interfaces/ABIMethodArgParams.md)
- [ABIMethodParams](interfaces/ABIMethodParams.md)
- [ABIMethodReturnParams](interfaces/ABIMethodReturnParams.md)
- [ABIResult](interfaces/ABIResult.md)
- [Account](interfaces/Account.md)
- [Address](interfaces/Address.md)
- [AlgodTokenHeader](interfaces/AlgodTokenHeader.md)
- [BaseHTTPClient](interfaces/BaseHTTPClient.md)
- [BaseHTTPClientError](interfaces/BaseHTTPClientError.md)
- [BaseHTTPClientResponse](interfaces/BaseHTTPClientResponse.md)
- [BoxReference](interfaces/BoxReference.md)
- [CustomTokenHeader](interfaces/CustomTokenHeader.md)
- [EncodedAssetParams](interfaces/EncodedAssetParams.md)
- [EncodedBoxReference](interfaces/EncodedBoxReference.md)
- [EncodedGlobalStateSchema](interfaces/EncodedGlobalStateSchema.md)
- [EncodedLocalStateSchema](interfaces/EncodedLocalStateSchema.md)
- [EncodedLogicSig](interfaces/EncodedLogicSig.md)
- [EncodedLogicSigAccount](interfaces/EncodedLogicSigAccount.md)
- [EncodedMultisig](interfaces/EncodedMultisig.md)
- [EncodedSignedTransaction](interfaces/EncodedSignedTransaction.md)
- [EncodedSubsig](interfaces/EncodedSubsig.md)
- [EncodedTransaction](interfaces/EncodedTransaction.md)
- [IndexerTokenHeader](interfaces/IndexerTokenHeader.md)
- [KMDTokenHeader](interfaces/KMDTokenHeader.md)
- [MultisigMetadata](interfaces/MultisigMetadata.md)
- [SignedTransaction](interfaces/SignedTransaction.md)
- [SuggestedParams](interfaces/SuggestedParams.md)
- [TransactionParams](interfaces/TransactionParams.md)
- [TransactionWithSigner](interfaces/TransactionWithSigner.md)

## Type Aliases

### ABIArgument

Ƭ **ABIArgument**: [`ABIValue`](modules.md#abivalue) \| [`TransactionWithSigner`](interfaces/TransactionWithSigner.md)

#### Defined in

[composer.ts:43](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/composer.ts#L43)

___

### ABIArgumentType

Ƭ **ABIArgumentType**: [`ABIType`](classes/ABIType.md) \| [`ABITransactionType`](enums/ABITransactionType.md) \| [`ABIReferenceType`](enums/ABIReferenceType.md)

#### Defined in

[abi/method.ts:66](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L66)

___

### ABIReturnType

Ƭ **ABIReturnType**: [`ABIType`](classes/ABIType.md) \| ``"void"``

#### Defined in

[abi/method.ts:68](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L68)

___

### ABIValue

Ƭ **ABIValue**: `boolean` \| `number` \| `bigint` \| `string` \| `Uint8Array` \| [`ABIValue`](modules.md#abivalue)[]

#### Defined in

[abi/abi_type.ts:35](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L35)

___

### AppClearStateTxn

Ƭ **AppClearStateTxn**: [`AppDeleteTxn`](modules.md#appdeletetxn)

#### Defined in

[types/transactions/application.ts:104](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L104)

___

### AppCloseOutTxn

Ƭ **AppCloseOutTxn**: [`AppDeleteTxn`](modules.md#appdeletetxn)

#### Defined in

[types/transactions/application.ts:97](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L97)

___

### AppCreateTxn

Ƭ **AppCreateTxn**: `ConstructTransaction`<`SpecificParametersForCreate`, `OverwritesForCreate`\>

#### Defined in

[types/transactions/application.ts:30](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L30)

___

### AppDeleteTxn

Ƭ **AppDeleteTxn**: `ConstructTransaction`<`SpecificParametersForDelete`, `OverwritesForDelete`\>

#### Defined in

[types/transactions/application.ts:80](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L80)

___

### AppNoOpTxn

Ƭ **AppNoOpTxn**: [`AppDeleteTxn`](modules.md#appdeletetxn)

#### Defined in

[types/transactions/application.ts:111](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L111)

___

### AppOptInTxn

Ƭ **AppOptInTxn**: [`AppDeleteTxn`](modules.md#appdeletetxn)

#### Defined in

[types/transactions/application.ts:90](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L90)

___

### AppUpdateTxn

Ƭ **AppUpdateTxn**: `ConstructTransaction`<`SpecificParametersForUpdate`, `OverwritesForUpdate`\>

#### Defined in

[types/transactions/application.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/application.ts#L56)

___

### AssetConfigTxn

Ƭ **AssetConfigTxn**: `ConstructTransaction`<`SpecificParametersForConfig`, `OverwritesForConfig`\>

#### Defined in

[types/transactions/asset.ts:49](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/asset.ts#L49)

___

### AssetCreateTxn

Ƭ **AssetCreateTxn**: `ConstructTransaction`<`SpecificParametersForCreate`, `OverwritesForCreate`\>

#### Defined in

[types/transactions/asset.ts:27](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/asset.ts#L27)

___

### AssetDestroyTxn

Ƭ **AssetDestroyTxn**: `ConstructTransaction`<`SpecificParametersForDestroy`, `OverwritesForDestroy`\>

#### Defined in

[types/transactions/asset.ts:64](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/asset.ts#L64)

___

### AssetFreezeTxn

Ƭ **AssetFreezeTxn**: `ConstructTransaction`<`SpecificParametersForFreeze`, `OverwritesForFreeze`\>

#### Defined in

[types/transactions/asset.ts:82](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/asset.ts#L82)

___

### AssetTransferTxn

Ƭ **AssetTransferTxn**: `ConstructTransaction`<`SpecificParametersForTransfer`, `OverwritesForTransfer`\>

#### Defined in

[types/transactions/asset.ts:105](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/asset.ts#L105)

___

### KeyRegistrationTxn

Ƭ **KeyRegistrationTxn**: `ConstructTransaction`<`SpecificParameters`, `Overwrites`\>

#### Defined in

[types/transactions/keyreg.ts:19](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/keyreg.ts#L19)

___

### MustHaveSuggestedParams

Ƭ **MustHaveSuggestedParams**<`T`\>: `Extract`<`T`, { `suggestedParams`: [`SuggestedParams`](interfaces/SuggestedParams.md)  }\>

Only accept transaction objects that include suggestedParams as an object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ConstructTransaction` |

#### Defined in

[types/transactions/builder.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/builder.ts#L56)

___

### MustHaveSuggestedParamsInline

Ƭ **MustHaveSuggestedParamsInline**<`T`\>: `Extract`<`T`, [`SuggestedParams`](interfaces/SuggestedParams.md)\>

Only accept transaction objects that include suggestedParams inline instead of being
enclosed in its own property

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ConstructTransaction` |

#### Defined in

[types/transactions/builder.ts:65](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/builder.ts#L65)

___

### PaymentTxn

Ƭ **PaymentTxn**: `ConstructTransaction`<`SpecificParameters`, `Overwrites`\>

#### Defined in

[types/transactions/payment.ts:13](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/payment.ts#L13)

___

### StateProofTxn

Ƭ **StateProofTxn**: `ConstructTransaction`<`SpecificParameters`, `Overwrites`\>

#### Defined in

[types/transactions/stateproof.ts:13](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/stateproof.ts#L13)

___

### TokenHeader

Ƭ **TokenHeader**: [`AlgodTokenHeader`](interfaces/AlgodTokenHeader.md) \| [`IndexerTokenHeader`](interfaces/IndexerTokenHeader.md) \| [`KMDTokenHeader`](interfaces/KMDTokenHeader.md) \| [`CustomTokenHeader`](interfaces/CustomTokenHeader.md)

#### Defined in

[client/urlTokenBaseHTTPClient.ts:33](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/urlTokenBaseHTTPClient.ts#L33)

___

### TransactionLike

Ƭ **TransactionLike**: `AnyTransaction` \| [`Transaction`](classes/Transaction.md)

Either a valid transaction object or an instance of the Transaction class

#### Defined in

[transaction.ts:1373](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1373)

___

### TransactionSigner

Ƭ **TransactionSigner**: (`txnGroup`: [`Transaction`](classes/Transaction.md)[], `indexesToSign`: `number`[]) => `Promise`<`Uint8Array`[]\>

#### Type declaration

▸ (`txnGroup`, `indexesToSign`): `Promise`<`Uint8Array`[]\>

This type represents a function which can sign transactions from an atomic transaction group.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txnGroup` | [`Transaction`](classes/Transaction.md)[] | The atomic group containing transactions to be signed |
| `indexesToSign` | `number`[] | An array of indexes in the atomic transaction group that should be signed |

##### Returns

`Promise`<`Uint8Array`[]\>

A promise which resolves an array of encoded signed transactions. The length of the
  array will be the same as the length of indexesToSign, and each index i in the array
  corresponds to the signed transaction from txnGroup[indexesToSign[i]]

#### Defined in

[signer.ts:15](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/signer.ts#L15)

## Variables

### ADDR\_BYTE\_SIZE

• `Const` **ADDR\_BYTE\_SIZE**: ``32``

#### Defined in

[abi/abi_type.ts:22](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L22)

___

### ALGORAND\_MIN\_TX\_FEE

• `Const` **ALGORAND\_MIN\_TX\_FEE**: ``1000``

#### Defined in

[transaction.ts:26](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L26)

___

### ERROR\_INVALID\_MICROALGOS

• `Const` **ERROR\_INVALID\_MICROALGOS**: `Error`

#### Defined in

[main.ts:116](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L116)

___

### ERROR\_MULTISIG\_BAD\_SENDER

• `Const` **ERROR\_MULTISIG\_BAD\_SENDER**: `Error`

#### Defined in

[main.ts:113](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L113)

___

### INVALID\_MICROALGOS\_ERROR\_MSG

• `Const` **INVALID\_MICROALGOS\_ERROR\_MSG**: ``"Microalgos should be positive and less than 2^53 - 1."``

#### Defined in

[convert.ts:2](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/convert.ts#L2)

___

### LENGTH\_ENCODE\_BYTE\_SIZE

• `Const` **LENGTH\_ENCODE\_BYTE\_SIZE**: ``2``

#### Defined in

[abi/abi_type.ts:25](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L25)

___

### MAX\_LEN

• `Const` **MAX\_LEN**: `number`

#### Defined in

[abi/abi_type.ts:21](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L21)

___

### MULTISIG\_BAD\_SENDER\_ERROR\_MSG

• `Const` **MULTISIG\_BAD\_SENDER\_ERROR\_MSG**: ``"The transaction sender address and multisig preimage do not match."``

#### Defined in

[main.ts:13](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L13)

___

### SINGLE\_BOOL\_SIZE

• `Const` **SINGLE\_BOOL\_SIZE**: ``1``

#### Defined in

[abi/abi_type.ts:24](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L24)

___

### SINGLE\_BYTE\_SIZE

• `Const` **SINGLE\_BYTE\_SIZE**: ``1``

#### Defined in

[abi/abi_type.ts:23](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L23)

## Functions

### abiCheckTransactionType

▸ **abiCheckTransactionType**(`type`, `txn`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ABITransactionType`](enums/ABITransactionType.md) |
| `txn` | [`Transaction`](classes/Transaction.md) |

#### Returns

`boolean`

#### Defined in

[abi/transaction.ts:52](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/transaction.ts#L52)

___

### abiTypeIsReference

▸ **abiTypeIsReference**(`type`): type is ABIReferenceType

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

#### Returns

type is ABIReferenceType

#### Defined in

[abi/reference.ts:18](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/reference.ts#L18)

___

### abiTypeIsTransaction

▸ **abiTypeIsTransaction**(`type`): type is ABITransactionType

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

#### Returns

type is ABITransactionType

#### Defined in

[abi/transaction.ts:40](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/transaction.ts#L40)

___

### algosToMicroalgos

▸ **algosToMicroalgos**(`algos`): `number`

algosToMicroalgos converts algos to microalgos

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algos` | `number` | number |

#### Returns

`number`

number

#### Defined in

[convert.ts:22](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/convert.ts#L22)

___

### appendSignMultisigTransaction

▸ **appendSignMultisigTransaction**(`multisigTxnBlob`, `«destructured»`, `sk`): `Object`

appendSignMultisigTransaction takes a multisig transaction blob, and appends our signature to it.
While we could derive public key preimagery from the partially-signed multisig transaction,
we ask the caller to pass it back in, to ensure they know what they are signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multisigTxnBlob` | `Uint8Array` | an encoded multisig txn. Supports non-payment txn types. |
| `«destructured»` | [`MultisigMetadata`](interfaces/MultisigMetadata.md) | - |
| `sk` | `Uint8Array` | Algorand secret key |

#### Returns

`Object`

object containing txID, and blob representing encoded multisig txn

| Name | Type |
| :------ | :------ |
| `blob` | `Uint8Array` |
| `txID` | `string` |

#### Defined in

[multisig.ts:429](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L429)

___

### appendSignRawMultisigSignature

▸ **appendSignRawMultisigSignature**(`multisigTxnBlob`, `«destructured»`, `signerAddr`, `signature`): `Object`

appendMultisigTransactionSignature takes a multisig transaction blob, and appends a given raw signature to it.
This makes it possible to compile a multisig signature using only raw signatures from external methods.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multisigTxnBlob` | `Uint8Array` | an encoded multisig txn. Supports non-payment txn types. |
| `«destructured»` | [`MultisigMetadata`](interfaces/MultisigMetadata.md) | - |
| `signerAddr` | `string` | address of the signer |
| `signature` | `Uint8Array` | raw multisig signature |

#### Returns

`Object`

object containing txID, and blob representing encoded multisig txn

| Name | Type |
| :------ | :------ |
| `blob` | `Uint8Array` |
| `txID` | `string` |

#### Defined in

[multisig.ts:461](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L461)

___

### assignGroupID

▸ **assignGroupID**(`txns`, `from?`): [`Transaction`](classes/Transaction.md)[]

assignGroupID assigns group id to a given list of unsigned transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txns` | [`TransactionLike`](modules.md#transactionlike)[] | array of transactions (every element is a dict or Transaction) |
| `from?` | `string` | optional sender address specifying which transaction return |

#### Returns

[`Transaction`](classes/Transaction.md)[]

possible list of matching transactions

#### Defined in

[group.ts:82](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/group.ts#L82)

___

### bigIntToBytes

▸ **bigIntToBytes**(`bi`, `size`): `Uint8Array`

bigIntToBytes converts a BigInt to a big-endian Uint8Array for encoding.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bi` | `number` \| `bigint` | The bigint to convert. |
| `size` | `number` | The size of the resulting byte array. |

#### Returns

`Uint8Array`

A byte array containing the big-endian encoding of the input bigint

#### Defined in

[encoding/bigint.ts:9](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/bigint.ts#L9)

___

### bytesToBigInt

▸ **bytesToBigInt**(`bytes`): `bigint`

bytesToBigInt produces a bigint from a binary representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | The Uint8Array to convert. |

#### Returns

`bigint`

The bigint that was encoded in the input data.

#### Defined in

[encoding/bigint.ts:28](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/bigint.ts#L28)

___

### computeGroupID

▸ **computeGroupID**(`txns`): `Buffer`

computeGroupID returns group ID for a group of transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txns` | [`TransactionLike`](modules.md#transactionlike)[] | array of transactions (every element is a dict or Transaction) |

#### Returns

`Buffer`

Buffer

#### Defined in

[group.ts:61](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/group.ts#L61)

___

### createDryrun

▸ **createDryrun**(`«destructured»`): `Promise`<[`DryrunRequest`](classes/modelsv2.DryrunRequest.md)\>

createDryrun takes an Algod Client (from algod.AlgodV2Client) and an array of Signed Transactions
from (transaction.SignedTransaction) and creates a DryrunRequest object with relevant balances

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `client` | [`Algodv2`](classes/Algodv2.md) |
| › `latestTimestamp?` | `number` \| `bigint` |
| › `protocolVersion?` | `string` |
| › `round?` | `number` \| `bigint` |
| › `sources?` | [`DryrunSource`](classes/modelsv2.DryrunSource.md)[] |
| › `txns` | [`SignedTransaction`](interfaces/SignedTransaction.md)[] |

#### Returns

`Promise`<[`DryrunRequest`](classes/modelsv2.DryrunRequest.md)\>

the DryrunRequest object constructed from the SignedTransactions passed

#### Defined in

[dryrun.ts:55](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/dryrun.ts#L55)

___

### createMultisigTransaction

▸ **createMultisigTransaction**(`txn`, `«destructured»`): `Uint8Array`

createMultisigTransaction creates a raw, unsigned multisig transaction blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txn` | [`Transaction`](classes/Transaction.md) | the actual transaction. |
| `«destructured»` | [`MultisigMetadata`](interfaces/MultisigMetadata.md) | - |

#### Returns

`Uint8Array`

encoded multisig blob

#### Defined in

[multisig.ts:53](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L53)

___

### decodeAddress

▸ **decodeAddress**(`address`): [`Address`](interfaces/Address.md)

decodeAddress takes an Algorand address in string form and decodes it into a Uint8Array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | an Algorand address with checksum. |

#### Returns

[`Address`](interfaces/Address.md)

the decoded form of the address's public key and checksum

#### Defined in

[encoding/address.ts:47](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/address.ts#L47)

___

### decodeObj

▸ **decodeObj**(`o`): `unknown`

decodeObj takes a Uint8Array and returns its javascript obj

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `ArrayLike`<`number`\> | Uint8Array to decode |

#### Returns

`unknown`

object

#### Defined in

[main.ts:109](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L109)

___

### decodeSignedTransaction

▸ **decodeSignedTransaction**(`transactionBuffer`): [`SignedTransaction`](interfaces/SignedTransaction.md)

decodeSignedTransaction takes a Buffer (from transaction.signTxn) and converts it to an object
containing the Transaction (txn), the signature (sig), and the auth-addr field if applicable (sgnr)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionBuffer` | `Uint8Array` | the Uint8Array containing a transaction |

#### Returns

[`SignedTransaction`](interfaces/SignedTransaction.md)

containing a Transaction, the signature, and possibly an auth-addr field

#### Defined in

[transaction.ts:1357](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1357)

___

### decodeUint64

▸ **decodeUint64**(`data`, `decodingMode`): `number`

decodeUint64 produces an integer from a binary representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | An typed array containing the big-endian encoding of an unsigned integer less than 2^64. This array must be at most 8 bytes long. |
| `decodingMode` | ``"safe"`` | Configure how the integer will be decoded. The options are: * "safe": The integer will be decoded as a Number, but if it is greater than Number.MAX_SAFE_INTEGER an error will be thrown. * "mixed": The integer will be decoded as a Number if it is less than or equal to Number.MAX_SAFE_INTEGER, otherwise it will be decoded as a BigInt. * "bigint": The integer will always be decoded as a BigInt. Defaults to "safe" if not included. |

#### Returns

`number`

The integer that was encoded in the input data. The return type will
  be determined by the parameter decodingMode.

#### Defined in

[encoding/uint64.ts:47](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/uint64.ts#L47)

▸ **decodeUint64**(`data`, `decodingMode`): `number` \| `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `decodingMode` | ``"mixed"`` |

#### Returns

`number` \| `bigint`

#### Defined in

[encoding/uint64.ts:48](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/uint64.ts#L48)

▸ **decodeUint64**(`data`, `decodingMode`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `decodingMode` | ``"bigint"`` |

#### Returns

`bigint`

#### Defined in

[encoding/uint64.ts:52](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/uint64.ts#L52)

___

### decodeUnsignedTransaction

▸ **decodeUnsignedTransaction**(`transactionBuffer`): [`Transaction`](classes/Transaction.md)

decodeUnsignedTransaction takes a Buffer (as if from encodeUnsignedTransaction) and converts it to a txnBuilder.Transaction object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionBuffer` | `ArrayLike`<`number`\> | the Uint8Array containing a transaction |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[transaction.ts:1312](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1312)

___

### encodeAddress

▸ **encodeAddress**(`address`): `string`

encodeAddress takes an Algorand address as a Uint8Array and encodes it into a string with checksum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Uint8Array` | a raw Algorand address |

#### Returns

`string`

the address and checksum encoded as a string.

#### Defined in

[encoding/address.ts:103](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/address.ts#L103)

___

### encodeObj

▸ **encodeObj**(`o`): `Uint8Array`

encodeObj takes a javascript object and returns its msgpack encoding
Note that the encoding sorts the fields alphabetically

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Record`<`string` \| `number` \| `symbol`, `any`\> | js obj |

#### Returns

`Uint8Array`

Uint8Array binary representation

#### Defined in

[main.ts:100](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L100)

___

### encodeUint64

▸ **encodeUint64**(`num`): `Uint8Array`

encodeUint64 converts an integer to its binary representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` \| `bigint` | The number to convert. This must be an unsigned integer less than 2^64. |

#### Returns

`Uint8Array`

An 8-byte typed array containing the big-endian encoding of the input
  integer.

#### Defined in

[encoding/uint64.ts:15](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/uint64.ts#L15)

___

### encodeUnsignedSimulateTransaction

▸ **encodeUnsignedSimulateTransaction**(`transactionObject`): `Uint8Array`

encodeUnsignedSimulateTransaction takes a txnBuilder.Transaction object,
converts it into a SignedTransaction-like object, and converts it to a Buffer.

Note: this function should only be used to simulate unsigned transactions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionObject` | [`Transaction`](classes/Transaction.md) | Transaction object to simulate. |

#### Returns

`Uint8Array`

#### Defined in

[transaction.ts:1289](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1289)

___

### encodeUnsignedTransaction

▸ **encodeUnsignedTransaction**(`transactionObject`): `Uint8Array`

encodeUnsignedTransaction takes a completed txnBuilder.Transaction object, such as from the makeFoo
family of transactions, and converts it to a Buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionObject` | [`Transaction`](classes/Transaction.md) | the completed Transaction object |

#### Returns

`Uint8Array`

#### Defined in

[transaction.ts:1303](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1303)

___

### generateAccount

▸ **generateAccount**(): [`Account`](interfaces/Account.md)

generateAccount returns a new Algorand address and its corresponding secret key

#### Returns

[`Account`](interfaces/Account.md)

#### Defined in

[account.ts:8](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/account.ts#L8)

___

### getApplicationAddress

▸ **getApplicationAddress**(`appID`): `string`

Get the escrow address of an application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `number` \| `bigint` | The ID of the application. |

#### Returns

`string`

The address corresponding to that application's escrow account.

#### Defined in

[encoding/address.ts:188](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/address.ts#L188)

___

### getMethodByName

▸ **getMethodByName**(`methods`, `name`): [`ABIMethod`](classes/ABIMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `methods` | [`ABIMethod`](classes/ABIMethod.md)[] |
| `name` | `string` |

#### Returns

[`ABIMethod`](classes/ABIMethod.md)

#### Defined in

[abi/method.ts:164](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L164)

___

### instantiateTxnIfNeeded

▸ **instantiateTxnIfNeeded**(`transactionLike`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionLike` | [`TransactionLike`](modules.md#transactionlike) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[transaction.ts:1375](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/transaction.ts#L1375)

___

### isTransactionWithSigner

▸ **isTransactionWithSigner**(`value`): value is TransactionWithSigner

Check if a value conforms to the TransactionWithSigner structure.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check. |

#### Returns

value is TransactionWithSigner

True if an only if the value has the structure of a TransactionWithSigner.

#### Defined in

[signer.ts:117](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/signer.ts#L117)

___

### isValidAddress

▸ **isValidAddress**(`address`): `boolean`

isValidAddress checks if a string is a valid Algorand address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | an Algorand address with checksum. |

#### Returns

`boolean`

true if valid, false otherwise

#### Defined in

[encoding/address.ts:88](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/encoding/address.ts#L88)

___

### logicSigFromByte

▸ **logicSigFromByte**(`encoded`): [`LogicSig`](classes/LogicSig.md)

logicSigFromByte accepts encoded logic sig bytes and attempts to call logicsig.fromByte on it,
returning the result

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`LogicSig`](classes/LogicSig.md)

#### Defined in

[logicsig.ts:472](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L472)

___

### makeApplicationCallTxnFromObject

▸ **makeApplicationCallTxnFromObject**(`options`): [`Transaction`](classes/Transaction.md)

Generic function for creating any application call transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.accounts` | `string`[] |
| `options.appArgs` | `Uint8Array`[] |
| `options.appIndex` | `number` |
| `options.approvalProgram` | `Uint8Array` |
| `options.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `options.clearProgram` | `Uint8Array` |
| `options.extraPages` | `number` |
| `options.foreignApps` | `number`[] |
| `options.foreignAssets` | `number`[] |
| `options.from` | `string` |
| `options.lease` | `Uint8Array` |
| `options.note` | `Uint8Array` |
| `options.numGlobalByteSlices` | `number` |
| `options.numGlobalInts` | `number` |
| `options.numLocalByteSlices` | `number` |
| `options.numLocalInts` | `number` |
| `options.onComplete` | [`OnApplicationComplete`](enums/OnApplicationComplete.md) |
| `options.rekeyTo` | `string` |
| `options.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1375](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1375)

___

### makeApplicationClearStateTxn

▸ **makeApplicationClearStateTxn**(`from`, `suggestedParams`, `appIndex`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that clears a user's state in an application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `appIndex` | `number` | the ID of the app to use |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1203](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1203)

___

### makeApplicationClearStateTxnFromObject

▸ **makeApplicationClearStateTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.appIndex` | `number` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1235](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1235)

___

### makeApplicationCloseOutTxn

▸ **makeApplicationCloseOutTxn**(`from`, `suggestedParams`, `appIndex`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that closes out a user's state in an application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `appIndex` | `number` | the ID of the app to use |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1109](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1109)

___

### makeApplicationCloseOutTxnFromObject

▸ **makeApplicationCloseOutTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.appIndex` | `number` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1141](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1141)

___

### makeApplicationCreateTxn

▸ **makeApplicationCreateTxn**(`from`, `suggestedParams`, `onComplete`, `approvalProgram`, `clearProgram`, `numLocalInts`, `numLocalByteSlices`, `numGlobalInts`, `numGlobalByteSlices`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `extraPages?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that will create an application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `onComplete` | [`OnApplicationComplete`](enums/OnApplicationComplete.md) | algosdk.OnApplicationComplete, what application should do once the program is done being run |
| `approvalProgram` | `Uint8Array` | Uint8Array, the compiled TEAL that approves a transaction |
| `clearProgram` | `Uint8Array` | Uint8Array, the compiled TEAL that runs when clearing state |
| `numLocalInts` | `number` | restricts number of ints in per-user local state |
| `numLocalByteSlices` | `number` | restricts number of byte slices in per-user local state |
| `numGlobalInts` | `number` | restricts number of ints in global state |
| `numGlobalByteSlices` | `number` | restricts number of byte slices in global state |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `extraPages?` | `number` | integer extra pages of memory to rent on creation of application |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:686](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L686)

___

### makeApplicationCreateTxnFromObject

▸ **makeApplicationCreateTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.approvalProgram` | `Uint8Array` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.clearProgram` | `Uint8Array` |
| `o.extraPages` | `number` |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.numGlobalByteSlices` | `number` |
| `o.numGlobalInts` | `number` |
| `o.numLocalByteSlices` | `number` |
| `o.numLocalInts` | `number` |
| `o.onComplete` | [`OnApplicationComplete`](enums/OnApplicationComplete.md) |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:732](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L732)

___

### makeApplicationDeleteTxn

▸ **makeApplicationDeleteTxn**(`from`, `suggestedParams`, `appIndex`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that deletes an application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `appIndex` | `number` | the ID of the app to be deleted |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:921](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L921)

___

### makeApplicationDeleteTxnFromObject

▸ **makeApplicationDeleteTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.appIndex` | `number` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:953](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L953)

___

### makeApplicationNoOpTxn

▸ **makeApplicationNoOpTxn**(`from`, `suggestedParams`, `appIndex`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that just calls an application, doing nothing on completion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `appIndex` | `number` | the ID of the app to use |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1297](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1297)

___

### makeApplicationNoOpTxnFromObject

▸ **makeApplicationNoOpTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.appIndex` | `number` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1329](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1329)

___

### makeApplicationOptInTxn

▸ **makeApplicationOptInTxn**(`from`, `suggestedParams`, `appIndex`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that opts in to use an application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `appIndex` | `number` | the ID of the app to join |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1015](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1015)

___

### makeApplicationOptInTxnFromObject

▸ **makeApplicationOptInTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.appIndex` | `number` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:1047](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L1047)

___

### makeApplicationUpdateTxn

▸ **makeApplicationUpdateTxn**(`from`, `suggestedParams`, `appIndex`, `approvalProgram`, `clearProgram`, `appArgs?`, `accounts?`, `foreignApps?`, `foreignAssets?`, `note?`, `lease?`, `rekeyTo?`, `boxes?`): [`Transaction`](classes/Transaction.md)

Make a transaction that changes an application's approval and clear programs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | address of sender |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `appIndex` | `number` | the ID of the app to be updated |
| `approvalProgram` | `Uint8Array` | Uint8Array, the compiled TEAL that approves a transaction |
| `clearProgram` | `Uint8Array` | Uint8Array, the compiled TEAL that runs when clearing state |
| `appArgs?` | `Uint8Array`[] | Array of Uint8Array, any additional arguments to the application |
| `accounts?` | `string`[] | Array of Address strings, any additional accounts to supply to the application |
| `foreignApps?` | `number`[] | Array of int, any other apps used by the application, identified by index |
| `foreignAssets?` | `number`[] | Array of int, any assets used by the application, identified by index |
| `note?` | `Uint8Array` | Arbitrary data for sender to store |
| `lease?` | `Uint8Array` | Lease a transaction |
| `rekeyTo?` | `string` | String representation of the Algorand address that will be used to authorize all future transactions |
| `boxes?` | [`BoxReference`](interfaces/BoxReference.md)[] | Array of BoxReference, app ID and name of box to be accessed |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:817](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L817)

___

### makeApplicationUpdateTxnFromObject

▸ **makeApplicationUpdateTxnFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.accounts` | `string`[] |
| `o.appArgs` | `Uint8Array`[] |
| `o.appIndex` | `number` |
| `o.approvalProgram` | `Uint8Array` |
| `o.boxes` | [`BoxReference`](interfaces/BoxReference.md)[] |
| `o.clearProgram` | `Uint8Array` |
| `o.foreignApps` | `number`[] |
| `o.foreignAssets` | `number`[] |
| `o.from` | `string` |
| `o.lease` | `Uint8Array` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:853](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L853)

___

### makeAssetConfigTxnWithSuggestedParams

▸ **makeAssetConfigTxnWithSuggestedParams**(`from`, `note`, `assetIndex`, `manager`, `reserve`, `freeze`, `clawback`, `suggestedParams`, `strictEmptyAddressChecking?`, `rekeyTo?`): [`Transaction`](classes/Transaction.md)

makeAssetConfigTxnWithSuggestedParams can be issued by the asset manager to change the manager, reserve, freeze, or clawback
you must respecify existing addresses to keep them the same; leaving a field blank is the same as turning
that feature off for this asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `string` | `undefined` | string representation of Algorand address of sender |
| `note` | `Uint8Array` | `undefined` | uint8array of arbitrary data for sender to store |
| `assetIndex` | `number` | `undefined` | int asset index uniquely specifying the asset |
| `manager` | `string` | `undefined` | string representation of new asset manager Algorand address |
| `reserve` | `string` | `undefined` | string representation of new reserve Algorand address |
| `freeze` | `string` | `undefined` | string representation of new freeze manager Algorand address |
| `clawback` | `string` | `undefined` | string representation of new revocation manager Algorand address |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | `undefined` | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `strictEmptyAddressChecking` | `boolean` | `true` | boolean - throw an error if any of manager, reserve, freeze, or clawback are undefined. optional, defaults to true. |
| `rekeyTo?` | `string` | `undefined` | rekeyTo address, optional |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:364](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L364)

___

### makeAssetConfigTxnWithSuggestedParamsFromObject

▸ **makeAssetConfigTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.assetIndex` | `number` |
| `o.clawback` | `string` |
| `o.freeze` | `string` |
| `o.from` | `string` |
| `o.manager` | `string` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.reserve` | `string` |
| `o.strictEmptyAddressChecking` | `boolean` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:403](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L403)

___

### makeAssetCreateTxnWithSuggestedParams

▸ **makeAssetCreateTxnWithSuggestedParams**(`from`, `note`, `total`, `decimals`, `defaultFrozen`, `manager`, `reserve`, `freeze`, `clawback`, `unitName`, `assetName`, `assetURL`, `assetMetadataHash`, `suggestedParams`, `rekeyTo?`): [`Transaction`](classes/Transaction.md)

makeAssetCreateTxnWithSuggestedParams takes asset creation arguments and returns a Transaction object
for creating that asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | string representation of Algorand address of sender |
| `note` | `Uint8Array` | uint8array of arbitrary data for sender to store |
| `total` | `number` \| `bigint` | integer total supply of the asset |
| `decimals` | `number` | integer number of decimals for asset unit calculation |
| `defaultFrozen` | `boolean` | boolean whether asset accounts should default to being frozen |
| `manager` | `string` | string representation of Algorand address in charge of reserve, freeze, clawback, destruction, etc |
| `reserve` | `string` | string representation of Algorand address representing asset reserve |
| `freeze` | `string` | string representation of Algorand address with power to freeze/unfreeze asset holdings |
| `clawback` | `string` | string representation of Algorand address with power to revoke asset holdings |
| `unitName` | `string` | string units name for this asset |
| `assetName` | `string` | string name for this asset |
| `assetURL` | `string` | string URL relating to this asset |
| `assetMetadataHash` | `string` \| `Uint8Array` | Uint8Array or UTF-8 string representation of a hash commitment with respect to the asset. Must be exactly 32 bytes long. |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `rekeyTo?` | `string` | rekeyTo address, optional |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:249](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L249)

___

### makeAssetCreateTxnWithSuggestedParamsFromObject

▸ **makeAssetCreateTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.assetMetadataHash` | `string` \| `Uint8Array` |
| `o.assetName` | `string` |
| `o.assetURL` | `string` |
| `o.clawback` | `string` |
| `o.decimals` | `number` |
| `o.defaultFrozen` | `boolean` |
| `o.freeze` | `string` |
| `o.from` | `string` |
| `o.manager` | `string` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.reserve` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |
| `o.total` | `number` \| `bigint` |
| `o.unitName` | `string` |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:288](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L288)

___

### makeAssetDestroyTxnWithSuggestedParams

▸ **makeAssetDestroyTxnWithSuggestedParams**(`from`, `note`, `assetIndex`, `suggestedParams`, `rekeyTo?`): [`Transaction`](classes/Transaction.md)

makeAssetDestroyTxnWithSuggestedParams will allow the asset's manager to remove this asset from the ledger, so long
as all outstanding assets are held by the creator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | string representation of Algorand address of sender |
| `note` | `Uint8Array` | uint8array of arbitrary data for sender to store |
| `assetIndex` | `number` | int asset index uniquely specifying the asset |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `rekeyTo?` | `string` | rekeyTo address, optional |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:460](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L460)

___

### makeAssetDestroyTxnWithSuggestedParamsFromObject

▸ **makeAssetDestroyTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.assetIndex` | `number` |
| `o.from` | `string` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:479](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L479)

___

### makeAssetFreezeTxnWithSuggestedParams

▸ **makeAssetFreezeTxnWithSuggestedParams**(`from`, `note`, `assetIndex`, `freezeTarget`, `freezeState`, `suggestedParams`, `rekeyTo?`): [`Transaction`](classes/Transaction.md)

makeAssetFreezeTxnWithSuggestedParams will allow the asset's freeze manager to freeze or un-freeze an account,
blocking or allowing asset transfers to and from the targeted account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | string representation of Algorand address of sender |
| `note` | `Uint8Array` | uint8array of arbitrary data for sender to store |
| `assetIndex` | `number` | int asset index uniquely specifying the asset |
| `freezeTarget` | `string` | string representation of Algorand address being frozen or unfrozen |
| `freezeState` | `boolean` | true if freezeTarget should be frozen, false if freezeTarget should be allowed to transact |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `rekeyTo?` | `string` | rekeyTo address, optional |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:518](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L518)

___

### makeAssetFreezeTxnWithSuggestedParamsFromObject

▸ **makeAssetFreezeTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.assetIndex` | `number` |
| `o.freezeState` | `boolean` |
| `o.freezeTarget` | `string` |
| `o.from` | `string` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:541](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L541)

___

### makeAssetTransferTxnWithSuggestedParams

▸ **makeAssetTransferTxnWithSuggestedParams**(`from`, `to`, `closeRemainderTo`, `revocationTarget`, `amount`, `note`, `assetIndex`, `suggestedParams`, `rekeyTo?`): [`Transaction`](classes/Transaction.md)

makeAssetTransferTxnWithSuggestedParams allows for the creation of an asset transfer transaction.
Special case: to begin accepting assets, set amount=0 and from=to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | string representation of Algorand address of sender |
| `to` | `string` | string representation of Algorand address of asset recipient |
| `closeRemainderTo` | `string` | optional - string representation of Algorand address - if provided, send all remaining assets after transfer to the "closeRemainderTo" address and close "from"'s asset holdings |
| `revocationTarget` | `string` | optional - string representation of Algorand address - if provided, and if "from" is the asset's revocation manager, then deduct from "revocationTarget" rather than "from" |
| `amount` | `number` \| `bigint` | integer amount of assets to send |
| `note` | `Uint8Array` | uint8array of arbitrary data for sender to store |
| `assetIndex` | `number` | int asset index uniquely specifying the asset |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE * flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `rekeyTo?` | `string` | rekeyTo address, optional |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:596](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L596)

___

### makeAssetTransferTxnWithSuggestedParamsFromObject

▸ **makeAssetTransferTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.amount` | `number` \| `bigint` |
| `o.assetIndex` | `number` |
| `o.closeRemainderTo` | `string` |
| `o.from` | `string` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.revocationTarget` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |
| `o.to` | `string` |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:623](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L623)

___

### makeBasicAccountTransactionSigner

▸ **makeBasicAccountTransactionSigner**(`account`): [`TransactionSigner`](modules.md#transactionsigner)

Create a TransactionSigner that can sign transactions for the provided basic Account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](interfaces/Account.md) |

#### Returns

[`TransactionSigner`](modules.md#transactionsigner)

#### Defined in

[signer.ts:23](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/signer.ts#L23)

___

### makeEmptyTransactionSigner

▸ **makeEmptyTransactionSigner**(): [`TransactionSigner`](modules.md#transactionsigner)

Create a makeEmptyTransactionSigner that does not specify any signer or
signing capabilities. This should only be used to simulate transactions.

#### Returns

[`TransactionSigner`](modules.md#transactionsigner)

#### Defined in

[signer.ts:91](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/signer.ts#L91)

___

### makeKeyRegistrationTxnWithSuggestedParams

▸ **makeKeyRegistrationTxnWithSuggestedParams**(`from`, `note`, `voteKey`, `selectionKey`, `voteFirst`, `voteLast`, `voteKeyDilution`, `suggestedParams`, `rekeyTo?`, `nonParticipation?`, `stateProofKey?`): [`Transaction`](classes/Transaction.md)

makeKeyRegistrationTxnWithSuggestedParams takes key registration arguments and returns a Transaction object for
that key registration operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | string representation of Algorand address of sender |
| `note` | `Uint8Array` | uint8array of arbitrary data for sender to store |
| `voteKey` | `string` \| `Uint8Array` | voting key. for key deregistration, leave undefined |
| `selectionKey` | `string` \| `Uint8Array` | selection key. for key deregistration, leave undefined |
| `voteFirst` | `number` | first round on which voteKey is valid |
| `voteLast` | `number` | last round on which voteKey is valid |
| `voteKeyDilution` | `number` | integer |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `rekeyTo?` | `string` | rekeyTo address, optional |
| `nonParticipation?` | ``false`` | configure whether the address wants to stop participating. If true, voteKey, selectionKey, voteFirst, voteLast, and voteKeyDilution must be undefined. |
| `stateProofKey?` | `string` \| `Uint8Array` | state proof key. for key deregistration, leave undefined |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:115](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L115)

▸ **makeKeyRegistrationTxnWithSuggestedParams**(`from`, `note`, `voteKey`, `selectionKey`, `voteFirst`, `voteLast`, `voteKeyDilution`, `suggestedParams`, `rekeyTo?`, `nonParticipation?`, `stateProofKey?`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `note` | `Uint8Array` |
| `voteKey` | `undefined` |
| `selectionKey` | `undefined` |
| `voteFirst` | `undefined` |
| `voteLast` | `undefined` |
| `voteKeyDilution` | `undefined` |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |
| `rekeyTo?` | `string` |
| `nonParticipation?` | ``true`` |
| `stateProofKey?` | `undefined` |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:128](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L128)

___

### makeKeyRegistrationTxnWithSuggestedParamsFromObject

▸ **makeKeyRegistrationTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.from` | `string` |
| `o.nonParticipation?` | ``false`` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.selectionKey` | `string` \| `Uint8Array` |
| `o.stateProofKey` | `string` \| `Uint8Array` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |
| `o.voteFirst` | `number` |
| `o.voteKey` | `string` \| `Uint8Array` |
| `o.voteKeyDilution` | `number` |
| `o.voteLast` | `number` |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:172](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L172)

▸ **makeKeyRegistrationTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.from` | `string` |
| `o.nonParticipation` | `boolean` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:195](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L195)

___

### makeLogicSigAccountTransactionSigner

▸ **makeLogicSigAccountTransactionSigner**(`account`): [`TransactionSigner`](modules.md#transactionsigner)

Create a TransactionSigner that can sign transactions for the provided LogicSigAccount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`LogicSigAccount`](classes/LogicSigAccount.md) |

#### Returns

[`TransactionSigner`](modules.md#transactionsigner)

#### Defined in

[signer.ts:40](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/signer.ts#L40)

___

### makeMultiSigAccountTransactionSigner

▸ **makeMultiSigAccountTransactionSigner**(`msig`, `sks`): [`TransactionSigner`](modules.md#transactionsigner)

Create a TransactionSigner that can sign transactions for the provided Multisig account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msig` | [`MultisigMetadata`](interfaces/MultisigMetadata.md) | The Multisig account metadata |
| `sks` | `Uint8Array`[] | An array of private keys belonging to the msig which should sign the transactions. |

#### Returns

[`TransactionSigner`](modules.md#transactionsigner)

#### Defined in

[signer.ts:60](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/signer.ts#L60)

___

### makePaymentTxnWithSuggestedParams

▸ **makePaymentTxnWithSuggestedParams**(`from`, `to`, `amount`, `closeRemainderTo`, `note`, `suggestedParams`, `rekeyTo?`): [`Transaction`](classes/Transaction.md)

makePaymentTxnWithSuggestedParams takes payment arguments and returns a Transaction object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | string representation of Algorand address of sender |
| `to` | `string` | string representation of Algorand address of recipient |
| `amount` | `number` \| `bigint` | integer amount to send, in microAlgos |
| `closeRemainderTo` | `string` | optionally close out remaining account balance to this account, represented as string rep of Algorand address |
| `note` | `Uint8Array` | uint8array of arbitrary data for sender to store |
| `suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) | a dict holding common-to-all-txns args: fee - integer fee per byte, in microAlgos. for a flat fee, set flatFee to true flatFee - bool optionally set this to true to specify fee as microalgos-per-txn If true, txn fee may fall below the ALGORAND_MIN_TX_FEE firstRound - integer first protocol round on which this txn is valid lastRound - integer last protocol round on which this txn is valid genesisHash - string specifies hash genesis block of network in use genesisID - string specifies genesis ID of network in use |
| `rekeyTo?` | `string` | rekeyTo address, optional |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:43](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L43)

___

### makePaymentTxnWithSuggestedParamsFromObject

▸ **makePaymentTxnWithSuggestedParamsFromObject**(`o`): [`Transaction`](classes/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.amount` | `number` \| `bigint` |
| `o.closeRemainderTo` | `string` |
| `o.from` | `string` |
| `o.note` | `Uint8Array` |
| `o.rekeyTo` | `string` |
| `o.suggestedParams` | [`SuggestedParams`](interfaces/SuggestedParams.md) |
| `o.to` | `string` |

#### Returns

[`Transaction`](classes/Transaction.md)

#### Defined in

[makeTxn.ts:66](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/makeTxn.ts#L66)

___

### masterDerivationKeyToMnemonic

▸ **masterDerivationKeyToMnemonic**(`mdk`): `string`

masterDerivationKeyToMnemonic takes a master derivation key and returns the corresponding mnemonic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdk` | `Uint8Array` | Uint8Array |

#### Returns

`string`

string mnemonic

#### Defined in

[mnemonic/mnemonic.ts:179](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/mnemonic/mnemonic.ts#L179)

___

### mergeMultisigTransactions

▸ **mergeMultisigTransactions**(`multisigTxnBlobs`): `Uint8Array`

mergeMultisigTransactions takes a list of multisig transaction blobs, and merges them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multisigTxnBlobs` | `Uint8Array`[] | a list of blobs representing encoded multisig txns |

#### Returns

`Uint8Array`

typed array msg-pack encoded multisig txn

#### Defined in

[multisig.ts:230](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L230)

___

### microalgosToAlgos

▸ **microalgosToAlgos**(`microalgos`): `number`

microalgosToAlgos converts microalgos to algos

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `microalgos` | `number` | number |

#### Returns

`number`

number

#### Defined in

[convert.ts:10](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/convert.ts#L10)

___

### mnemonicFromSeed

▸ **mnemonicFromSeed**(`seed`): `string`

mnemonicFromSeed converts a 32-byte key into a 25 word mnemonic. The generated mnemonic includes a checksum.
Each word in the mnemonic represents 11 bits of data, and the last 11 bits are reserved for the checksum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `Uint8Array` | 32 bytes long seed |

#### Returns

`string`

25 words mnemonic

#### Defined in

[mnemonic/mnemonic.ts:54](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/mnemonic/mnemonic.ts#L54)

___

### mnemonicToMasterDerivationKey

▸ **mnemonicToMasterDerivationKey**(`mn`): `Uint8Array`

mnemonicToMasterDerivationKey takes a mnemonic string and returns the corresponding master derivation key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mn` | `string` | 25 words Algorand mnemonic |

#### Returns

`Uint8Array`

Uint8Array

**`Throws`**

error if fails to decode the mnemonic

#### Defined in

[mnemonic/mnemonic.ts:170](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/mnemonic/mnemonic.ts#L170)

___

### mnemonicToSecretKey

▸ **mnemonicToSecretKey**(`mn`): [`Account`](interfaces/Account.md)

mnemonicToSecretKey takes a mnemonic string and returns the corresponding Algorand address and its secret key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mn` | `string` | 25 words Algorand mnemonic |

#### Returns

[`Account`](interfaces/Account.md)

**`Throws`**

error if fails to decode the mnemonic

#### Defined in

[mnemonic/mnemonic.ts:146](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/mnemonic/mnemonic.ts#L146)

___

### multisigAddress

▸ **multisigAddress**(`«destructured»`): `string`

multisigAddress takes multisig metadata (preimage) and returns the corresponding human readable Algorand address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MultisigMetadata`](interfaces/MultisigMetadata.md) |

#### Returns

`string`

#### Defined in

[multisig.ts:490](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L490)

___

### secretKeyToMnemonic

▸ **secretKeyToMnemonic**(`sk`): `string`

secretKeyToMnemonic takes an Algorand secret key and returns the corresponding mnemonic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sk` | `Uint8Array` | Algorand secret key |

#### Returns

`string`

Secret key's associated mnemonic

#### Defined in

[mnemonic/mnemonic.ts:158](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/mnemonic/mnemonic.ts#L158)

___

### seedFromMnemonic

▸ **seedFromMnemonic**(`mnemonic`): `Uint8Array`

seedFromMnemonic converts a mnemonic generated using this library into the source key used to create it.
It returns an error if the passed mnemonic has an incorrect checksum, if the number of words is unexpected, or if one
of the passed words is not found in the words list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | 25 words mnemonic |

#### Returns

`Uint8Array`

32 bytes long seed

#### Defined in

[mnemonic/mnemonic.ts:100](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/mnemonic/mnemonic.ts#L100)

___

### signBid

▸ **signBid**(`bid`, `sk`): `Uint8Array`

signBid takes an object with the following fields: bidder key, bid amount, max price, bid ID, auctionKey, auction ID,
and a secret key and returns a signed blob to be inserted into a transaction Algorand note field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bid` | `BidOptions` | Algorand Bid |
| `sk` | `Uint8Array` | Algorand secret key |

#### Returns

`Uint8Array`

Uint8Array binary signed bid

#### Defined in

[main.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L56)

___

### signBytes

▸ **signBytes**(`bytes`, `sk`): `Uint8Array`

signBytes takes arbitrary bytes and a secret key, prepends the bytes with "MX" for domain separation, signs the bytes
with the private key, and returns the signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8array |
| `sk` | `Uint8Array` | Algorand secret key |

#### Returns

`Uint8Array`

binary signature

#### Defined in

[main.ts:68](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L68)

___

### signLogicSigTransaction

▸ **signLogicSigTransaction**(`txn`, `lsigObject`): `Object`

signLogicSigTransaction takes a transaction and a LogicSig object and returns
a signed transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txn` | [`TransactionLike`](modules.md#transactionlike) | The transaction to sign. |
| `lsigObject` | [`LogicSig`](classes/LogicSig.md) \| [`LogicSigAccount`](classes/LogicSigAccount.md) | The LogicSig object that will sign the transaction. |

#### Returns

`Object`

Object containing txID and blob representing signed transaction.

| Name | Type |
| :------ | :------ |
| `blob` | `Uint8Array` |
| `txID` | `string` |

**`Throws`**

error on failure

#### Defined in

[logicsig.ts:460](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L460)

___

### signLogicSigTransactionObject

▸ **signLogicSigTransactionObject**(`txn`, `lsigObject`): `Object`

signLogicSigTransactionObject takes a transaction and a LogicSig object and
returns a signed transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txn` | [`Transaction`](classes/Transaction.md) | The transaction to sign. |
| `lsigObject` | [`LogicSig`](classes/LogicSig.md) \| [`LogicSigAccount`](classes/LogicSigAccount.md) | The LogicSig object that will sign the transaction. |

#### Returns

`Object`

Object containing txID and blob representing signed transaction.

| Name | Type |
| :------ | :------ |
| `blob` | `Uint8Array` |
| `txID` | `string` |

#### Defined in

[logicsig.ts:416](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L416)

___

### signMultisigTransaction

▸ **signMultisigTransaction**(`txn`, `«destructured»`, `sk`): `Object`

signMultisigTransaction takes a raw transaction (see signTransaction), a multisig preimage, a secret key, and returns
a multisig transaction, which is a blob representing a transaction and multisignature account preimage. The returned
multisig txn can accumulate additional signatures through mergeMultisigTransactions or appendSignMultisigTransaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txn` | [`TransactionLike`](modules.md#transactionlike) | object with either payment or key registration fields |
| `«destructured»` | [`MultisigMetadata`](interfaces/MultisigMetadata.md) | - |
| `sk` | `Uint8Array` | Algorand secret key. The corresponding pk should be in the pre image. |

#### Returns

`Object`

object containing txID, and blob of partially signed multisig transaction (with multisig preimage information)
If the final calculated fee is lower than the protocol minimum fee, the fee will be increased to match the minimum.

| Name | Type |
| :------ | :------ |
| `blob` | `Uint8Array` |
| `txID` | `string` |

#### Defined in

[multisig.ts:380](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L380)

___

### signTransaction

▸ **signTransaction**(`txn`, `sk`): `Object`

signTransaction takes an object with either payment or key registration fields and
a secret key and returns a signed blob.

Payment transaction fields: from, to, amount, fee, firstRound, lastRound, genesisHash,
note(optional), GenesisID(optional), closeRemainderTo(optional)

Key registration fields: fee, firstRound, lastRound, voteKey, selectionKey, voteFirst,
voteLast, voteKeyDilution, genesisHash, note(optional), GenesisID(optional)

If flatFee is not set and the final calculated fee is lower than the protocol minimum fee, the fee will be increased to match the minimum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txn` | [`TransactionLike`](modules.md#transactionlike) | object with either payment or key registration fields |
| `sk` | `Uint8Array` | Algorand Secret Key |

#### Returns

`Object`

object contains the binary signed transaction and its txID

| Name | Type |
| :------ | :------ |
| `blob` | `Uint8Array` |
| `txID` | `string` |

#### Defined in

[main.ts:31](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L31)

___

### tealSign

▸ **tealSign**(`sk`, `data`, `programHash`): `Uint8Array`

tealSign creates a signature compatible with ed25519verify opcode from program hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sk` | `Uint8Array` | uint8array with secret key |
| `data` | `Uint8Array` \| `Buffer` | buffer with data to sign |
| `programHash` | `string` | string representation of teal program hash (= contract address for LogicSigs) |

#### Returns

`Uint8Array`

#### Defined in

[logicsig.ts:484](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L484)

___

### tealSignFromProgram

▸ **tealSignFromProgram**(`sk`, `data`, `program`): `Uint8Array`

tealSignFromProgram creates a signature compatible with ed25519verify opcode from raw program bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sk` | `Uint8Array` | uint8array with secret key |
| `data` | `Uint8Array` \| `Buffer` | buffer with data to sign |
| `program` | `Uint8Array` | buffer with teal program |

#### Returns

`Uint8Array`

#### Defined in

[logicsig.ts:528](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L528)

___

### verifyBytes

▸ **verifyBytes**(`bytes`, `signature`, `addr`): `boolean`

verifyBytes takes array of bytes, an address, and a signature and verifies if the signature is correct for the public
key and the bytes (the bytes should have been signed with "MX" prepended for domain separation).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8Array |
| `signature` | `Uint8Array` | binary signature |
| `addr` | `string` | string address |

#### Returns

`boolean`

bool

#### Defined in

[main.ts:82](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/main.ts#L82)

___

### verifyMultisig

▸ **verifyMultisig**(`toBeVerified`, `msig`, `publicKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toBeVerified` | `Uint8Array` |
| `msig` | [`EncodedMultisig`](interfaces/EncodedMultisig.md) |
| `publicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[multisig.ts:317](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/multisig.ts#L317)

___

### verifyTealSign

▸ **verifyTealSign**(`data`, `programHash`, `sig`, `pk`): `boolean`

verifyTealSign verifies a signature as would the ed25519verify opcode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` \| `Buffer` | buffer with original signed data |
| `programHash` | `string` | string representation of teal program hash (= contract address for LogicSigs) |
| `sig` | `Uint8Array` | uint8array with the signature to verify (produced by tealSign/tealSignFromProgram) |
| `pk` | `Uint8Array` | uint8array with public key to verify against |

#### Returns

`boolean`

#### Defined in

[logicsig.ts:506](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L506)

___

### waitForConfirmation

▸ **waitForConfirmation**(`client`, `txid`, `waitRounds`): `Promise`<`Record`<`string`, `any`\>\>

Wait until a transaction has been confirmed or rejected by the network, or
until 'waitRounds' number of rounds have passed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Algodv2`](classes/Algodv2.md) | An Algodv2 client |
| `txid` | `string` | The ID of the transaction to wait for. |
| `waitRounds` | `number` | The maximum number of rounds to wait for. |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

A promise that, upon success, will resolve to the output of the
  `pendingTransactionInformation` call for the confirmed transaction.

#### Defined in

[wait.ts:12](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/wait.ts#L12)
