---
id: "modelsv2.SimulateResponse"
title: "Class: SimulateResponse"
sidebar_label: "SimulateResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).SimulateResponse

Result of a transaction group simulation.

## Hierarchy

- `default`

  ↳ **`SimulateResponse`**

## Constructors

### constructor

• **new SimulateResponse**(`«destructured»`)

Creates a new `SimulateResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `evalOverrides?` | [`SimulationEvalOverrides`](modelsv2.SimulationEvalOverrides.md) |
| › `execTraceConfig?` | [`SimulateTraceConfig`](modelsv2.SimulateTraceConfig.md) |
| › `initialStates?` | [`SimulateInitialStates`](modelsv2.SimulateInitialStates.md) |
| › `lastRound` | `number` \| `bigint` |
| › `txnGroups` | [`SimulateTransactionGroupResult`](modelsv2.SimulateTransactionGroupResult.md)[] |
| › `version` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:4188](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4188)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### evalOverrides

• `Optional` **evalOverrides**: [`SimulationEvalOverrides`](modelsv2.SimulationEvalOverrides.md)

The set of parameters and limits override during simulation. If this set of
parameters is present, then evaluation parameters may differ from standard
evaluation in certain ways.

#### Defined in

[client/v2/algod/models/types.ts:4164](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4164)

___

### execTraceConfig

• `Optional` **execTraceConfig**: [`SimulateTraceConfig`](modelsv2.SimulateTraceConfig.md)

An object that configures simulation execution trace.

#### Defined in

[client/v2/algod/models/types.ts:4169](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4169)

___

### initialStates

• `Optional` **initialStates**: [`SimulateInitialStates`](modelsv2.SimulateInitialStates.md)

Initial states of resources that were accessed during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4174](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4174)

___

### lastRound

• **lastRound**: `number` \| `bigint`

The round immediately preceding this simulation. State changes through this
round were used to run this simulation.

#### Defined in

[client/v2/algod/models/types.ts:4147](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4147)

___

### txnGroups

• **txnGroups**: [`SimulateTransactionGroupResult`](modelsv2.SimulateTransactionGroupResult.md)[]

A result object for each transaction group that was simulated.

#### Defined in

[client/v2/algod/models/types.ts:4152](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4152)

___

### version

• **version**: `number` \| `bigint`

The version of this response object.

#### Defined in

[client/v2/algod/models/types.ts:4157](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4157)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`SimulateResponse`](modelsv2.SimulateResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`SimulateResponse`](modelsv2.SimulateResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:4222](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4222)
