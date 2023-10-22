---
id: "ABIContract"
title: "Class: ABIContract"
sidebar_label: "ABIContract"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ABIContract**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ABIContractParams`](../interfaces/ABIContractParams.md) |

#### Defined in

[abi/contract.ts:24](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L24)

## Properties

### description

• `Optional` `Readonly` **description**: `string`

#### Defined in

[abi/contract.ts:20](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L20)

___

### methods

• `Readonly` **methods**: [`ABIMethod`](ABIMethod.md)[]

#### Defined in

[abi/contract.ts:22](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L22)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[abi/contract.ts:19](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L19)

___

### networks

• `Readonly` **networks**: [`ABIContractNetworks`](../interfaces/ABIContractNetworks.md)

#### Defined in

[abi/contract.ts:21](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L21)

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

[abi/contract.ts:48](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L48)

___

### toJSON

▸ **toJSON**(): [`ABIContractParams`](../interfaces/ABIContractParams.md)

#### Returns

[`ABIContractParams`](../interfaces/ABIContractParams.md)

#### Defined in

[abi/contract.ts:39](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/abi/contract.ts#L39)
