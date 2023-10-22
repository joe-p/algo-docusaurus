---
id: "modelsv2.DryrunTxnResult"
title: "Class: DryrunTxnResult"
sidebar_label: "DryrunTxnResult"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).DryrunTxnResult

DryrunTxnResult contains any LogicSig or ApplicationCall program debug
information and state updates from a dryrun.

## Hierarchy

- `default`

  ↳ **`DryrunTxnResult`**

## Constructors

### constructor

• **new DryrunTxnResult**(`«destructured»`)

Creates a new `DryrunTxnResult` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appCallMessages?` | `string`[] |
| › `appCallTrace?` | [`DryrunState`](modelsv2.DryrunState.md)[] |
| › `budgetAdded?` | `number` \| `bigint` |
| › `budgetConsumed?` | `number` \| `bigint` |
| › `disassembly` | `string`[] |
| › `globalDelta?` | [`EvalDeltaKeyValue`](modelsv2.EvalDeltaKeyValue.md)[] |
| › `localDeltas?` | [`AccountStateDelta`](modelsv2.AccountStateDelta.md)[] |
| › `logicSigDisassembly?` | `string`[] |
| › `logicSigMessages?` | `string`[] |
| › `logicSigTrace?` | [`DryrunState`](modelsv2.DryrunState.md)[] |
| › `logs?` | `Uint8Array`[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2738](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2738)

## Properties

### appCallMessages

• `Optional` **appCallMessages**: `string`[]

#### Defined in

[client/v2/algod/models/types.ts:2692](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2692)

___

### appCallTrace

• `Optional` **appCallTrace**: [`DryrunState`](modelsv2.DryrunState.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2694](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2694)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### budgetAdded

• `Optional` **budgetAdded**: `number` \| `bigint`

Budget added during execution of app call transaction.

#### Defined in

[client/v2/algod/models/types.ts:2699](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2699)

___

### budgetConsumed

• `Optional` **budgetConsumed**: `number` \| `bigint`

Budget consumed during execution of app call transaction.

#### Defined in

[client/v2/algod/models/types.ts:2704](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2704)

___

### disassembly

• **disassembly**: `string`[]

Disassembled program line by line.

#### Defined in

[client/v2/algod/models/types.ts:2690](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2690)

___

### globalDelta

• `Optional` **globalDelta**: [`EvalDeltaKeyValue`](modelsv2.EvalDeltaKeyValue.md)[]

Application state delta.

#### Defined in

[client/v2/algod/models/types.ts:2709](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2709)

___

### localDeltas

• `Optional` **localDeltas**: [`AccountStateDelta`](modelsv2.AccountStateDelta.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2711](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2711)

___

### logicSigDisassembly

• `Optional` **logicSigDisassembly**: `string`[]

Disassembled lsig program line by line.

#### Defined in

[client/v2/algod/models/types.ts:2716](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2716)

___

### logicSigMessages

• `Optional` **logicSigMessages**: `string`[]

#### Defined in

[client/v2/algod/models/types.ts:2718](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2718)

___

### logicSigTrace

• `Optional` **logicSigTrace**: [`DryrunState`](modelsv2.DryrunState.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2720](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2720)

___

### logs

• `Optional` **logs**: `Uint8Array`[]

#### Defined in

[client/v2/algod/models/types.ts:2722](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2722)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`DryrunTxnResult`](modelsv2.DryrunTxnResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`DryrunTxnResult`](modelsv2.DryrunTxnResult.md)

#### Defined in

[client/v2/algod/models/types.ts:2792](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2792)
