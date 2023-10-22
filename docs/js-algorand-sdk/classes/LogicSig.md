---
id: "LogicSig"
title: "Class: LogicSig"
sidebar_label: "LogicSig"
sidebar_position: 0
custom_edit_url: null
---

LogicSig implementation

LogicSig cannot sign transactions in all cases.  Instead, use LogicSigAccount as a safe, general purpose signing mechanism.  Since LogicSig does not track the provided signature's public key, LogicSig cannot sign transactions when delegated to a non-multisig account _and_ the sender is not the delegating account.

## Implements

- `LogicSigStorageStructure`

## Constructors

### constructor

• **new LogicSig**(`program`, `programArgs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Uint8Array` |
| `programArgs?` | (`Uint8Array` \| `Buffer`)[] |

#### Defined in

[logicsig.ts:69](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L69)

## Properties

### args

• **args**: `Uint8Array`[]

#### Implementation of

LogicSigStorageStructure.args

#### Defined in

[logicsig.ts:65](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L65)

___

### logic

• **logic**: `Uint8Array`

#### Implementation of

LogicSigStorageStructure.logic

#### Defined in

[logicsig.ts:64](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L64)

___

### msig

• `Optional` **msig**: [`EncodedMultisig`](../interfaces/EncodedMultisig.md)

#### Implementation of

LogicSigStorageStructure.msig

#### Defined in

[logicsig.ts:67](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L67)

___

### sig

• `Optional` **sig**: `Uint8Array`

#### Implementation of

LogicSigStorageStructure.sig

#### Defined in

[logicsig.ts:66](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L66)

___

### tag

• **tag**: `Buffer`

#### Defined in

[logicsig.ts:62](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L62)

## Methods

### address

▸ **address**(): `string`

Compute hash of the logic sig program (that is the same as escrow account address) as string address

#### Returns

`string`

String representation of the address

#### Defined in

[logicsig.ts:152](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L152)

___

### appendToMultisig

▸ **appendToMultisig**(`secretKey`): `void`

Appends a signature to multi signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secretKey` | `Uint8Array` | Secret key to sign with |

#### Returns

`void`

#### Defined in

[logicsig.ts:186](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L186)

___

### get\_obj\_for\_encoding

▸ **get_obj_for_encoding**(): [`EncodedLogicSig`](../interfaces/EncodedLogicSig.md)

#### Returns

[`EncodedLogicSig`](../interfaces/EncodedLogicSig.md)

#### Defined in

[logicsig.ts:96](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L96)

___

### sign

▸ **sign**(`secretKey`, `msig?`): `void`

Creates signature (if no msig provided) or multi signature otherwise

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secretKey` | `Uint8Array` | Secret key to sign with |
| `msig?` | [`MultisigMetadata`](../interfaces/MultisigMetadata.md) | Multisig account as {version, threshold, addrs} |

#### Returns

`void`

#### Defined in

[logicsig.ts:163](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L163)

___

### signProgram

▸ **signProgram**(`secretKey`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[logicsig.ts:194](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L194)

___

### singleSignMultisig

▸ **singleSignMultisig**(`secretKey`, `msig`): [sig: Uint8Array, index: number]

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretKey` | `Uint8Array` |
| `msig` | [`EncodedMultisig`](../interfaces/EncodedMultisig.md) |

#### Returns

[sig: Uint8Array, index: number]

#### Defined in

[logicsig.ts:200](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L200)

___

### toByte

▸ **toByte**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[logicsig.ts:220](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L220)

___

### verify

▸ **verify**(`publicKey`): `boolean`

Performs signature verification

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `Uint8Array` | Verification key (derived from sender address or escrow address) |

#### Returns

`boolean`

#### Defined in

[logicsig.ts:123](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L123)

___

### fromByte

▸ `Static` **fromByte**(`encoded`): [`LogicSig`](LogicSig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `ArrayLike`<`any`\> |

#### Returns

[`LogicSig`](LogicSig.md)

#### Defined in

[logicsig.ts:224](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L224)

___

### from\_obj\_for\_encoding

▸ `Static` **from_obj_for_encoding**(`encoded`): [`LogicSig`](LogicSig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`EncodedLogicSig`](../interfaces/EncodedLogicSig.md) |

#### Returns

[`LogicSig`](LogicSig.md)

#### Defined in

[logicsig.ts:112](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L112)
