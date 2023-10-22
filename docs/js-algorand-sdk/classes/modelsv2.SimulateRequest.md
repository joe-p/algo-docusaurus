---
id: "modelsv2.SimulateRequest"
title: "Class: SimulateRequest"
sidebar_label: "SimulateRequest"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).SimulateRequest

Request type for simulation endpoint.

## Hierarchy

- `default`

  ↳ **`SimulateRequest`**

## Constructors

### constructor

• **new SimulateRequest**(`«destructured»`)

Creates a new `SimulateRequest` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowEmptySignatures?` | `boolean` |
| › `allowMoreLogging?` | `boolean` |
| › `allowUnnamedResources?` | `boolean` |
| › `execTraceConfig?` | [`SimulateTraceConfig`](modelsv2.SimulateTraceConfig.md) |
| › `extraOpcodeBudget?` | `number` \| `bigint` |
| › `round?` | `number` \| `bigint` |
| › `txnGroups` | [`SimulateRequestTransactionGroup`](modelsv2.SimulateRequestTransactionGroup.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:4039](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4039)

## Properties

### allowEmptySignatures

• `Optional` **allowEmptySignatures**: `boolean`

Allows transactions without signatures to be simulated as if they had correct
signatures.

#### Defined in

[client/v2/algod/models/types.ts:3995](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3995)

___

### allowMoreLogging

• `Optional` **allowMoreLogging**: `boolean`

Lifts limits on log opcode usage during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4000](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4000)

___

### allowUnnamedResources

• `Optional` **allowUnnamedResources**: `boolean`

Allows access to unnamed resources during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4005](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4005)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### execTraceConfig

• `Optional` **execTraceConfig**: [`SimulateTraceConfig`](modelsv2.SimulateTraceConfig.md)

An object that configures simulation execution trace.

#### Defined in

[client/v2/algod/models/types.ts:4010](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4010)

___

### extraOpcodeBudget

• `Optional` **extraOpcodeBudget**: `number` \| `bigint`

Applies extra opcode budget during simulation for each transaction group.

#### Defined in

[client/v2/algod/models/types.ts:4015](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4015)

___

### round

• `Optional` **round**: `number` \| `bigint`

If provided, specifies the round preceding the simulation. State changes through
this round will be used to run this simulation. Usually only the 4 most recent
rounds will be available (controlled by the node config value MaxAcctLookback).
If not specified, defaults to the latest available round.

#### Defined in

[client/v2/algod/models/types.ts:4023](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4023)

___

### txnGroups

• **txnGroups**: [`SimulateRequestTransactionGroup`](modelsv2.SimulateRequestTransactionGroup.md)[]

The transaction groups to simulate.

#### Defined in

[client/v2/algod/models/types.ts:3989](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3989)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`SimulateRequest`](modelsv2.SimulateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`SimulateRequest`](modelsv2.SimulateRequest.md)

#### Defined in

[client/v2/algod/models/types.ts:4077](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4077)
