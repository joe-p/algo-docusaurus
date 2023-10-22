---
id: "ABIUintType"
title: "Class: ABIUintType"
sidebar_label: "ABIUintType"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ABIType`](ABIType.md)

  ↳ **`ABIUintType`**

## Constructors

### constructor

• **new ABIUintType**(`size`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Overrides

[ABIType](ABIType.md).[constructor](ABIType.md#constructor)

#### Defined in

[abi/abi_type.ts:131](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L131)

## Properties

### bitSize

• **bitSize**: `number`

#### Defined in

[abi/abi_type.ts:129](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L129)

## Methods

### byteLen

▸ **byteLen**(): `number`

#### Returns

`number`

#### Overrides

[ABIType](ABIType.md).[byteLen](ABIType.md#bytelen)

#### Defined in

[abi/abi_type.ts:151](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L151)

___

### decode

▸ **decode**(`byteString`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteString` | `Uint8Array` |

#### Returns

`bigint`

#### Overrides

[ABIType](ABIType.md).[decode](ABIType.md#decode)

#### Defined in

[abi/abi_type.ts:172](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L172)

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

[abi/abi_type.ts:155](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L155)

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

[abi/abi_type.ts:143](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L143)

___

### isDynamic

▸ **isDynamic**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ABIType](ABIType.md).[isDynamic](ABIType.md#isdynamic)

#### Defined in

[abi/abi_type.ts:147](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L147)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[ABIType](ABIType.md).[toString](ABIType.md#tostring)

#### Defined in

[abi/abi_type.ts:139](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L139)

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
