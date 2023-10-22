---
id: "ABITupleType"
title: "Class: ABITupleType"
sidebar_label: "ABITupleType"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ABIType`](ABIType.md)

  ↳ **`ABITupleType`**

## Constructors

### constructor

• **new ABITupleType**(`argTypes`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `argTypes` | [`ABIType`](ABIType.md)[] |

#### Overrides

[ABIType](ABIType.md).[constructor](ABIType.md#constructor)

#### Defined in

[abi/abi_type.ts:536](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L536)

## Properties

### childTypes

• **childTypes**: [`ABIType`](ABIType.md)[]

#### Defined in

[abi/abi_type.ts:534](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L534)

## Methods

### byteLen

▸ **byteLen**(): `number`

#### Returns

`number`

#### Overrides

[ABIType](ABIType.md).[byteLen](ABIType.md#bytelen)

#### Defined in

[abi/abi_type.ts:569](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L569)

___

### decode

▸ **decode**(`byteString`): [`ABIValue`](../modules.md#abivalue)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteString` | `Uint8Array` |

#### Returns

[`ABIValue`](../modules.md#abivalue)[]

#### Overrides

[ABIType](ABIType.md).[decode](ABIType.md#decode)

#### Defined in

[abi/abi_type.ts:657](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L657)

___

### encode

▸ **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ABIValue`](../modules.md#abivalue) |

#### Returns

`Uint8Array`

#### Overrides

[ABIType](ABIType.md).[encode](ABIType.md#encode)

#### Defined in

[abi/abi_type.ts:585](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L585)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ABIType`](ABIType.md) |

#### Returns

`boolean`

#### Overrides

[ABIType](ABIType.md).[equals](ABIType.md#equals)

#### Defined in

[abi/abi_type.ts:554](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L554)

___

### isDynamic

▸ **isDynamic**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ABIType](ABIType.md).[isDynamic](ABIType.md#isdynamic)

#### Defined in

[abi/abi_type.ts:564](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L564)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[ABIType](ABIType.md).[toString](ABIType.md#tostring)

#### Defined in

[abi/abi_type.ts:546](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L546)

___

### from

▸ `Static` **from**(`str`): [`ABIType`](ABIType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`ABIType`](ABIType.md)

#### Inherited from

[ABIType](ABIType.md).[from](ABIType.md#from)

#### Defined in

[abi/abi_type.ts:57](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L57)

___

### parseTupleContent

▸ `Static` **parseTupleContent**(`str`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`[]

#### Defined in

[abi/abi_type.ts:770](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L770)
