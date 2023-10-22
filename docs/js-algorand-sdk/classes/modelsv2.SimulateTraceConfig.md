---
id: "modelsv2.SimulateTraceConfig"
title: "Class: SimulateTraceConfig"
sidebar_label: "SimulateTraceConfig"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).SimulateTraceConfig

An object that configures simulation execution trace.

## Hierarchy

- `default`

  ↳ **`SimulateTraceConfig`**

## Constructors

### constructor

• **new SimulateTraceConfig**(`«destructured»`)

Creates a new `SimulateTraceConfig` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `enable?` | `boolean` |
| › `scratchChange?` | `boolean` |
| › `stackChange?` | `boolean` |
| › `stateChange?` | `boolean` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:4296](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4296)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### enable

• `Optional` **enable**: `boolean`

A boolean option for opting in execution trace features simulation endpoint.

#### Defined in

[client/v2/algod/models/types.ts:4266](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4266)

___

### scratchChange

• `Optional` **scratchChange**: `boolean`

A boolean option enabling returning scratch slot changes together with execution
trace during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4272](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4272)

___

### stackChange

• `Optional` **stackChange**: `boolean`

A boolean option enabling returning stack changes together with execution trace
during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4278](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4278)

___

### stateChange

• `Optional` **stateChange**: `boolean`

A boolean option enabling returning application state changes (global, local,
and box changes) with the execution trace during simulation.

#### Defined in

[client/v2/algod/models/types.ts:4284](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4284)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`SimulateTraceConfig`](modelsv2.SimulateTraceConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`SimulateTraceConfig`](modelsv2.SimulateTraceConfig.md)

#### Defined in

[client/v2/algod/models/types.ts:4322](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4322)
