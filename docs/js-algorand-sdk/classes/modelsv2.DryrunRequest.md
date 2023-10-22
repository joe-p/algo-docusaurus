---
id: "modelsv2.DryrunRequest"
title: "Class: DryrunRequest"
sidebar_label: "DryrunRequest"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).DryrunRequest

Request data type for dryrun endpoint. Given the Transactions and simulated
ledger state upload, run TEAL scripts and return debugging information.

## Hierarchy

- `default`

  ↳ **`DryrunRequest`**

## Constructors

### constructor

• **new DryrunRequest**(`«destructured»`)

Creates a new `DryrunRequest` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | [`Account`](modelsv2.Account.md)[] |
| › `apps` | [`Application`](modelsv2.Application.md)[] |
| › `latestTimestamp` | `number` \| `bigint` |
| › `protocolVersion` | `string` |
| › `round` | `number` \| `bigint` |
| › `sources` | [`DryrunSource`](modelsv2.DryrunSource.md)[] |
| › `txns` | [`EncodedSignedTransaction`](../interfaces/EncodedSignedTransaction.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2377](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2377)

## Properties

### accounts

• **accounts**: [`Account`](modelsv2.Account.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2338](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2338)

___

### apps

• **apps**: [`Application`](modelsv2.Application.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2340](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2340)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### latestTimestamp

• **latestTimestamp**: `number` \| `bigint`

LatestTimestamp is available to some TEAL scripts. Defaults to the latest
confirmed timestamp this algod is attached to.

#### Defined in

[client/v2/algod/models/types.ts:2346](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2346)

___

### protocolVersion

• **protocolVersion**: `string`

ProtocolVersion specifies a specific version string to operate under, otherwise
whatever the current protocol of the network this algod is running in.

#### Defined in

[client/v2/algod/models/types.ts:2352](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2352)

___

### round

• **round**: `number` \| `bigint`

Round is available to some TEAL scripts. Defaults to the current round on the
network this algod is attached to.

#### Defined in

[client/v2/algod/models/types.ts:2358](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2358)

___

### sources

• **sources**: [`DryrunSource`](modelsv2.DryrunSource.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2360](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2360)

___

### txns

• **txns**: [`EncodedSignedTransaction`](../interfaces/EncodedSignedTransaction.md)[]

#### Defined in

[client/v2/algod/models/types.ts:2362](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2362)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`DryrunRequest`](modelsv2.DryrunRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`DryrunRequest`](modelsv2.DryrunRequest.md)

#### Defined in

[client/v2/algod/models/types.ts:2415](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2415)
