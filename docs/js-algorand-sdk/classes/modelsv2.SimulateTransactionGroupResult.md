---
id: "modelsv2.SimulateTransactionGroupResult"
title: "Class: SimulateTransactionGroupResult"
sidebar_label: "SimulateTransactionGroupResult"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).SimulateTransactionGroupResult

Simulation result for an atomic transaction group

## Hierarchy

- `default`

  ↳ **`SimulateTransactionGroupResult`**

## Constructors

### constructor

• **new SimulateTransactionGroupResult**(`«destructured»`)

Creates a new `SimulateTransactionGroupResult` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appBudgetAdded?` | `number` \| `bigint` |
| › `appBudgetConsumed?` | `number` \| `bigint` |
| › `failedAt?` | (`number` \| `bigint`)[] |
| › `failureMessage?` | `string` |
| › `txnResults` | [`SimulateTransactionResult`](modelsv2.SimulateTransactionResult.md)[] |
| › `unnamedResourcesAccessed?` | [`SimulateUnnamedResourcesAccessed`](modelsv2.SimulateUnnamedResourcesAccessed.md) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:4401](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4401)

## Properties

### appBudgetAdded

• `Optional` **appBudgetAdded**: `number` \| `bigint`

Total budget added during execution of app calls in the transaction group.

#### Defined in

[client/v2/algod/models/types.ts:4346](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4346)

___

### appBudgetConsumed

• `Optional` **appBudgetConsumed**: `number` \| `bigint`

Total budget consumed during execution of app calls in the transaction group.

#### Defined in

[client/v2/algod/models/types.ts:4351](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4351)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### failedAt

• `Optional` **failedAt**: (`number` \| `bigint`)[]

If present, indicates which transaction in this group caused the failure. This
array represents the path to the failing transaction. Indexes are zero based,
the first element indicates the top-level transaction, and successive elements
indicate deeper inner transactions.

#### Defined in

[client/v2/algod/models/types.ts:4359](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4359)

___

### failureMessage

• `Optional` **failureMessage**: `string`

If present, indicates that the transaction group failed and specifies why that
happened

#### Defined in

[client/v2/algod/models/types.ts:4365](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4365)

___

### txnResults

• **txnResults**: [`SimulateTransactionResult`](modelsv2.SimulateTransactionResult.md)[]

Simulation result for individual transactions

#### Defined in

[client/v2/algod/models/types.ts:4341](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4341)

___

### unnamedResourcesAccessed

• `Optional` **unnamedResourcesAccessed**: [`SimulateUnnamedResourcesAccessed`](modelsv2.SimulateUnnamedResourcesAccessed.md)

These are resources that were accessed by this group that would normally have
caused failure, but were allowed in simulation. Depending on where this object
is in the response, the unnamed resources it contains may or may not qualify for
group resource sharing. If this is a field in SimulateTransactionGroupResult,
the resources do qualify, but if this is a field in SimulateTransactionResult,
they do not qualify. In order to make this group valid for actual submission,
resources that qualify for group sharing can be made available by any
transaction of the group; otherwise, resources must be placed in the same
transaction which accessed them.

#### Defined in

[client/v2/algod/models/types.ts:4378](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4378)

## Methods

### get\_obj\_for\_encoding

▸ **get_obj_for_encoding**(`binary?`): `Record`<`string`, `any`\>

Get an object ready for encoding to either JSON or msgpack.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `binary` | `boolean` | `false` | Use true to indicate that the encoding can handle raw binary objects (Uint8Arrays). Use false to indicate that raw binary objects should be converted to base64 strings. True should be used for objects that will be encoded with msgpack, and false should be used for objects that will be encoded with JSON. |

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

BaseModel.get\_obj\_for\_encoding

#### Defined in

[client/v2/basemodel.ts:65](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L65)

___

### from\_obj\_for\_encoding

▸ `Static` **from_obj_for_encoding**(`data`): [`SimulateTransactionGroupResult`](modelsv2.SimulateTransactionGroupResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`SimulateTransactionGroupResult`](modelsv2.SimulateTransactionGroupResult.md)

#### Defined in

[client/v2/algod/models/types.ts:4435](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4435)
