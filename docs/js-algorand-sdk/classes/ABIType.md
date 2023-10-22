---
id: "ABIType"
title: "Class: ABIType"
sidebar_label: "ABIType"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`ABIType`**

  ↳ [`ABIUintType`](ABIUintType.md)

  ↳ [`ABIUfixedType`](ABIUfixedType.md)

  ↳ [`ABIAddressType`](ABIAddressType.md)

  ↳ [`ABIBoolType`](ABIBoolType.md)

  ↳ [`ABIByteType`](ABIByteType.md)

  ↳ [`ABIStringType`](ABIStringType.md)

  ↳ [`ABIArrayStaticType`](ABIArrayStaticType.md)

  ↳ [`ABIArrayDynamicType`](ABIArrayDynamicType.md)

  ↳ [`ABITupleType`](ABITupleType.md)

## Constructors

### constructor

• **new ABIType**()

## Methods

### byteLen

▸ `Abstract` **byteLen**(): `number`

#### Returns

`number`

#### Defined in

[abi/abi_type.ts:51](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L51)

___

### decode

▸ `Abstract` **decode**(`byteString`): [`ABIValue`](../modules.md#abivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteString` | `Uint8Array` |

#### Returns

[`ABIValue`](../modules.md#abivalue)

#### Defined in

[abi/abi_type.ts:55](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L55)

___

### encode

▸ `Abstract` **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ABIValue`](../modules.md#abivalue) |

#### Returns

`Uint8Array`

#### Defined in

[abi/abi_type.ts:53](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L53)

___

### equals

▸ `Abstract` **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ABIType`](ABIType.md) |

#### Returns

`boolean`

#### Defined in

[abi/abi_type.ts:47](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L47)

___

### isDynamic

▸ `Abstract` **isDynamic**(): `boolean`

#### Returns

`boolean`

#### Defined in

[abi/abi_type.ts:49](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L49)

___

### toString

▸ `Abstract` **toString**(): `string`

#### Returns

`string`

#### Defined in

[abi/abi_type.ts:45](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L45)

___

### from

▸ `Static` **from**(`str`): [`ABIType`](ABIType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`ABIType`](ABIType.md)

#### Defined in

[abi/abi_type.ts:57](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L57)
