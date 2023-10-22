---
id: "ABIInterface"
title: "Class: ABIInterface"
sidebar_label: "ABIInterface"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ABIInterface**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ABIInterfaceParams`](../interfaces/ABIInterfaceParams.md) |

#### Defined in

[abi/interface.ts:14](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/interface.ts#L14)

## Properties

### description

• `Optional` `Readonly` **description**: `string`

#### Defined in

[abi/interface.ts:11](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/interface.ts#L11)

___

### methods

• `Readonly` **methods**: [`ABIMethod`](ABIMethod.md)[]

#### Defined in

[abi/interface.ts:12](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/interface.ts#L12)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[abi/interface.ts:10](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/interface.ts#L10)

## Methods

### getMethodByName

▸ **getMethodByName**(`name`): [`ABIMethod`](ABIMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ABIMethod`](ABIMethod.md)

#### Defined in

[abi/interface.ts:32](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/interface.ts#L32)

___

### toJSON

▸ **toJSON**(): [`ABIInterfaceParams`](../interfaces/ABIInterfaceParams.md)

#### Returns

[`ABIInterfaceParams`](../interfaces/ABIInterfaceParams.md)

#### Defined in

[abi/interface.ts:24](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/interface.ts#L24)
