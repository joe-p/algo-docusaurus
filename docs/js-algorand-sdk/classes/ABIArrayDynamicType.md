---
id: "ABIArrayDynamicType"
title: "Class: ABIArrayDynamicType"
sidebar_label: "ABIArrayDynamicType"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ABIType`](ABIType.md)

  ↳ **`ABIArrayDynamicType`**

## Constructors

### constructor

• **new ABIArrayDynamicType**(`argType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `argType` | [`ABIType`](ABIType.md) |

#### Overrides

[ABIType](ABIType.md).[constructor](ABIType.md#constructor)

#### Defined in

[abi/abi_type.ts:481](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L481)

## Properties

### childType

• **childType**: [`ABIType`](ABIType.md)

#### Defined in

[abi/abi_type.ts:479](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L479)

## Methods

### byteLen

▸ **byteLen**(): `never`

#### Returns

`never`

#### Overrides

[ABIType](ABIType.md).[byteLen](ABIType.md#bytelen)

#### Defined in

[abi/abi_type.ts:501](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L501)

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

[abi/abi_type.ts:519](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L519)

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

[abi/abi_type.ts:505](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L505)

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

[abi/abi_type.ts:490](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L490)

___

### isDynamic

▸ **isDynamic**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ABIType](ABIType.md).[isDynamic](ABIType.md#isdynamic)

#### Defined in

[abi/abi_type.ts:497](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L497)

___

### toABITupleType

▸ **toABITupleType**(`length`): [`ABITupleType`](ABITupleType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`ABITupleType`](ABITupleType.md)

#### Defined in

[abi/abi_type.ts:528](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L528)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[ABIType](ABIType.md).[toString](ABIType.md#tostring)

#### Defined in

[abi/abi_type.ts:486](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/abi_type.ts#L486)

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
