---
id: "ABIMethod"
title: "Class: ABIMethod"
sidebar_label: "ABIMethod"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ABIMethod**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ABIMethodParams`](../interfaces/ABIMethodParams.md) |

#### Defined in

[abi/method.ts:81](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L81)

## Properties

### args

• `Readonly` **args**: { `description?`: `string` ; `name?`: `string` ; `type`: [`ABIArgumentType`](../modules.md#abiargumenttype)  }[]

#### Defined in

[abi/method.ts:73](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L73)

___

### description

• `Optional` `Readonly` **description**: `string`

#### Defined in

[abi/method.ts:72](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L72)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[abi/method.ts:71](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L71)

___

### returns

• `Readonly` **returns**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `type` | [`ABIReturnType`](../modules.md#abireturntype) |

#### Defined in

[abi/method.ts:79](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L79)

## Methods

### getSelector

▸ **getSelector**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[abi/method.ts:122](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L122)

___

### getSignature

▸ **getSignature**(): `string`

#### Returns

`string`

#### Defined in

[abi/method.ts:116](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L116)

___

### toJSON

▸ **toJSON**(): [`ABIMethodParams`](../interfaces/ABIMethodParams.md)

#### Returns

[`ABIMethodParams`](../interfaces/ABIMethodParams.md)

#### Defined in

[abi/method.ts:137](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L137)

___

### txnCount

▸ **txnCount**(): `number`

#### Returns

`number`

#### Defined in

[abi/method.ts:127](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L127)

___

### fromSignature

▸ `Static` **fromSignature**(`signature`): [`ABIMethod`](ABIMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

[`ABIMethod`](ABIMethod.md)

#### Defined in

[abi/method.ts:153](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/method.ts#L153)
