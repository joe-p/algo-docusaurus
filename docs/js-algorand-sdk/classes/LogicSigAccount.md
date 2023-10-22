---
id: "LogicSigAccount"
title: "Class: LogicSigAccount"
sidebar_label: "LogicSigAccount"
sidebar_position: 0
custom_edit_url: null
---

Represents an account that can sign with a LogicSig program.

## Constructors

### constructor

• **new LogicSigAccount**(`program`, `args?`)

Create a new LogicSigAccount. By default this will create an escrow
LogicSig account. Call `sign` or `signMultisig` on the newly created
LogicSigAccount to make it a delegated account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Uint8Array` | The compiled TEAL program which contains the logic for this LogicSig. |
| `args?` | (`Uint8Array` \| `Buffer`)[] | An optional array of arguments for the program. |

#### Defined in

[logicsig.ts:246](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L246)

## Properties

### lsig

• **lsig**: [`LogicSig`](LogicSig.md)

#### Defined in

[logicsig.ts:234](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L234)

___

### sigkey

• `Optional` **sigkey**: `Uint8Array`

#### Defined in

[logicsig.ts:235](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L235)

## Methods

### address

▸ **address**(): `string`

Get the address of this LogicSigAccount.

If the LogicSig is delegated to another account, this will return the
address of that account.

If the LogicSig is not delegated to another account, this will return an
 escrow address that is the hash of the LogicSig's program code.

#### Returns

`string`

#### Defined in

[logicsig.ts:315](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L315)

___

### appendToMultisig

▸ **appendToMultisig**(`secretKey`): `void`

Adds an additional signature from a member of the delegating multisig
account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secretKey` | `Uint8Array` | The secret key of one of the members of the delegating multisig account. |

#### Returns

`void`

#### Defined in

[logicsig.ts:363](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L363)

___

### get\_obj\_for\_encoding

▸ **get_obj_for_encoding**(): [`EncodedLogicSigAccount`](../interfaces/EncodedLogicSigAccount.md)

#### Returns

[`EncodedLogicSigAccount`](../interfaces/EncodedLogicSigAccount.md)

#### Defined in

[logicsig.ts:252](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L252)

___

### isDelegated

▸ **isDelegated**(): `boolean`

Check if this LogicSigAccount has been delegated to another account with a
signature.

Note this function only checks for the presence of a delegation signature.
To verify the delegation signature, use `verify`.

#### Returns

`boolean`

#### Defined in

[logicsig.ts:293](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L293)

___

### sign

▸ **sign**(`secretKey`): `void`

Turns this LogicSigAccount into a delegated LogicSig. This type of LogicSig
has the authority to sign transactions on behalf of another account, called
the delegating account. If the delegating account is a multisig account,
use `signMultisig` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secretKey` | `Uint8Array` | The secret key of the delegating account. |

#### Returns

`void`

#### Defined in

[logicsig.ts:375](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L375)

___

### signMultisig

▸ **signMultisig**(`msig`, `secretKey`): `void`

Turns this LogicSigAccount into a delegated LogicSig. This type of LogicSig
has the authority to sign transactions on behalf of another account, called
the delegating account. Use this function if the delegating account is a
multisig account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msig` | [`MultisigMetadata`](../interfaces/MultisigMetadata.md) | The multisig delegating account |
| `secretKey` | `Uint8Array` | The secret key of one of the members of the delegating multisig account. Use `appendToMultisig` to add additional signatures from other members. |

#### Returns

`void`

#### Defined in

[logicsig.ts:352](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L352)

___

### toByte

▸ **toByte**(): `Uint8Array`

Encode this object into msgpack.

#### Returns

`Uint8Array`

#### Defined in

[logicsig.ts:273](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L273)

___

### verify

▸ **verify**(): `boolean`

Verifies this LogicSig's program and signatures.

#### Returns

`boolean`

true if and only if the LogicSig program and signatures are valid.

#### Defined in

[logicsig.ts:301](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L301)

___

### fromByte

▸ `Static` **fromByte**(`encoded`): [`LogicSigAccount`](LogicSigAccount.md)

Decode a msgpack object into a LogicSigAccount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoded` | `ArrayLike`<`any`\> | The encoded LogicSigAccount. |

#### Returns

[`LogicSigAccount`](LogicSigAccount.md)

#### Defined in

[logicsig.ts:281](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L281)

___

### from\_obj\_for\_encoding

▸ `Static` **from_obj_for_encoding**(`encoded`): [`LogicSigAccount`](LogicSigAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`EncodedLogicSigAccount`](../interfaces/EncodedLogicSigAccount.md) |

#### Returns

[`LogicSigAccount`](LogicSigAccount.md)

#### Defined in

[logicsig.ts:263](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logicsig.ts#L263)
