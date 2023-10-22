---
id: "modelsv2.SimulationEvalOverrides"
title: "Class: SimulationEvalOverrides"
sidebar_label: "SimulationEvalOverrides"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).SimulationEvalOverrides

The set of parameters and limits override during simulation. If this set of
parameters is present, then evaluation parameters may differ from standard
evaluation in certain ways.

## Hierarchy

- `default`

  ↳ **`SimulationEvalOverrides`**

## Constructors

### constructor

• **new SimulationEvalOverrides**(`«destructured»`)

Creates a new `SimulationEvalOverrides` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowEmptySignatures?` | `boolean` |
| › `allowUnnamedResources?` | `boolean` |
| › `extraOpcodeBudget?` | `number` \| `bigint` |
| › `maxLogCalls?` | `number` \| `bigint` |
| › `maxLogSize?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:4758](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4758)

## Properties

### allowEmptySignatures

• `Optional` **allowEmptySignatures**: `boolean`

If true, transactions without signatures are allowed and simulated as if they
were properly signed.

#### Defined in

[client/v2/algod/models/types.ts:4727](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4727)

___

### allowUnnamedResources

• `Optional` **allowUnnamedResources**: `boolean`

If true, allows access to unnamed resources during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4732](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4732)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### extraOpcodeBudget

• `Optional` **extraOpcodeBudget**: `number` \| `bigint`

The extra opcode budget added to each transaction group during simulation

#### Defined in

[client/v2/algod/models/types.ts:4737](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4737)

___

### maxLogCalls

• `Optional` **maxLogCalls**: `number` \| `bigint`

The maximum log calls one can make during simulation

#### Defined in

[client/v2/algod/models/types.ts:4742](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4742)

___

### maxLogSize

• `Optional` **maxLogSize**: `number` \| `bigint`

The maximum byte number to log during simulation

#### Defined in

[client/v2/algod/models/types.ts:4747](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4747)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`SimulationEvalOverrides`](modelsv2.SimulationEvalOverrides.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`SimulationEvalOverrides`](modelsv2.SimulationEvalOverrides.md)

#### Defined in

[client/v2/algod/models/types.ts:4788](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4788)
