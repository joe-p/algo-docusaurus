---
id: "ABIUfixedType"
title: "Class: ABIUfixedType"
sidebar_label: "ABIUfixedType"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ABIType`](ABIType.md)

  ↳ **`ABIUfixedType`**

## Constructors

### constructor

• **new ABIUfixedType**(`size`, `denominator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `denominator` | `number` |

#### Overrides

[ABIType](ABIType.md).[constructor](ABIType.md#constructor)

#### Defined in

[abi/abi_type.ts:184](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L184)

## Properties

### bitSize

• **bitSize**: `number`

#### Defined in

[abi/abi_type.ts:181](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L181)

___

### precision

• **precision**: `number`

#### Defined in

[abi/abi_type.ts:182](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L182)

## Methods

### byteLen

▸ **byteLen**(): `number`

#### Returns

`number`

#### Overrides

[ABIType](ABIType.md).[byteLen](ABIType.md#bytelen)

#### Defined in

[abi/abi_type.ts:212](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L212)

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

[abi/abi_type.ts:233](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L233)

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

[abi/abi_type.ts:216](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L216)

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

[abi/abi_type.ts:200](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L200)

___

### isDynamic

▸ **isDynamic**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ABIType](ABIType.md).[isDynamic](ABIType.md#isdynamic)

#### Defined in

[abi/abi_type.ts:208](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L208)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[ABIType](ABIType.md).[toString](ABIType.md#tostring)

#### Defined in

[abi/abi_type.ts:196](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L196)

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
