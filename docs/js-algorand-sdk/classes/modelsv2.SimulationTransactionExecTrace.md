---
id: "modelsv2.SimulationTransactionExecTrace"
title: "Class: SimulationTransactionExecTrace"
sidebar_label: "SimulationTransactionExecTrace"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).SimulationTransactionExecTrace

The execution trace of calling an app or a logic sig, containing the inner app
call trace in a recursive way.

## Hierarchy

- `default`

  ↳ **`SimulationTransactionExecTrace`**

## Constructors

### constructor

• **new SimulationTransactionExecTrace**(`«destructured»`)

Creates a new `SimulationTransactionExecTrace` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approvalProgramHash?` | `string` \| `Uint8Array` |
| › `approvalProgramTrace?` | [`SimulationOpcodeTraceUnit`](modelsv2.SimulationOpcodeTraceUnit.md)[] |
| › `clearStateProgramHash?` | `string` \| `Uint8Array` |
| › `clearStateProgramTrace?` | [`SimulationOpcodeTraceUnit`](modelsv2.SimulationOpcodeTraceUnit.md)[] |
| › `innerTrace?` | [`SimulationTransactionExecTrace`](modelsv2.SimulationTransactionExecTrace.md)[] |
| › `logicSigHash?` | `string` \| `Uint8Array` |
| › `logicSigTrace?` | [`SimulationOpcodeTraceUnit`](modelsv2.SimulationOpcodeTraceUnit.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:4961](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4961)

## Properties

### approvalProgramHash

• `Optional` **approvalProgramHash**: `Uint8Array`

SHA512_256 hash digest of the approval program executed in transaction.

#### Defined in

[client/v2/algod/models/types.ts:4917](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4917)

___

### approvalProgramTrace

• `Optional` **approvalProgramTrace**: [`SimulationOpcodeTraceUnit`](modelsv2.SimulationOpcodeTraceUnit.md)[]

Program trace that contains a trace of opcode effects in an approval program.

#### Defined in

[client/v2/algod/models/types.ts:4922](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4922)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### clearStateProgramHash

• `Optional` **clearStateProgramHash**: `Uint8Array`

SHA512_256 hash digest of the clear state program executed in transaction.

#### Defined in

[client/v2/algod/models/types.ts:4927](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4927)

___

### clearStateProgramTrace

• `Optional` **clearStateProgramTrace**: [`SimulationOpcodeTraceUnit`](modelsv2.SimulationOpcodeTraceUnit.md)[]

Program trace that contains a trace of opcode effects in a clear state program.

#### Defined in

[client/v2/algod/models/types.ts:4932](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4932)

___

### innerTrace

• `Optional` **innerTrace**: [`SimulationTransactionExecTrace`](modelsv2.SimulationTransactionExecTrace.md)[]

An array of SimulationTransactionExecTrace representing the execution trace of
any inner transactions executed.

#### Defined in

[client/v2/algod/models/types.ts:4938](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4938)

___

### logicSigHash

• `Optional` **logicSigHash**: `Uint8Array`

SHA512_256 hash digest of the logic sig executed in transaction.

#### Defined in

[client/v2/algod/models/types.ts:4943](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4943)

___

### logicSigTrace

• `Optional` **logicSigTrace**: [`SimulationOpcodeTraceUnit`](modelsv2.SimulationOpcodeTraceUnit.md)[]

Program trace that contains a trace of opcode effects in a logic sig.

#### Defined in

[client/v2/algod/models/types.ts:4948](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L4948)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`SimulationTransactionExecTrace`](modelsv2.SimulationTransactionExecTrace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`SimulationTransactionExecTrace`](modelsv2.SimulationTransactionExecTrace.md)

#### Defined in

[client/v2/algod/models/types.ts:5008](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5008)
