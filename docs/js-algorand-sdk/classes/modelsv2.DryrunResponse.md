---
id: "modelsv2.DryrunResponse"
title: "Class: DryrunResponse"
sidebar_label: "DryrunResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).DryrunResponse

DryrunResponse contains per-txn debug information from a dryrun.

## Hierarchy

- `default`

  ↳ **`DryrunResponse`**

## Constructors

### constructor

• **new DryrunResponse**(`«destructured»`)

Creates a new `DryrunResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `error` | `string` |
| › `protocolVersion` | `string` |
| › `txns` | [`DryrunTxnResult`](modelsv2.DryrunTxnResult.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2475](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2475)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### error

• **error**: `string`

#### Defined in

[client/v2/algod/models/types.ts:2460](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2460)

___

### protocolVersion

• **protocolVersion**: `string`

Protocol version is the protocol version Dryrun was operated under.

#### Defined in

[client/v2/algod/models/types.ts:2465](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2465)

___

### txns

• **txns**: [`DryrunTxnResult`](modelsv2.DryrunTxnResult.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2467](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2467)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`DryrunResponse`](modelsv2.DryrunResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`DryrunResponse`](modelsv2.DryrunResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:2497](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2497)
