---
id: "modelsv2.TransactionParametersResponse"
title: "Class: TransactionParametersResponse"
sidebar_label: "TransactionParametersResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).TransactionParametersResponse

TransactionParams contains the parameters that help a client construct a new
transaction.

## Hierarchy

- `default`

  ↳ **`TransactionParametersResponse`**

## Constructors

### constructor

• **new TransactionParametersResponse**(`«destructured»`)

Creates a new `TransactionParametersResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `consensusVersion` | `string` |
| › `fee` | `number` \| `bigint` |
| › `genesisHash` | `string` \| `Uint8Array` |
| › `genesisId` | `string` |
| › `lastRound` | `number` \| `bigint` |
| › `minFee` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:5479](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5479)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### consensusVersion

• **consensusVersion**: `string`

ConsensusVersion indicates the consensus protocol version
as of LastRound.

#### Defined in

[client/v2/algod/models/types.ts:5434](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5434)

___

### fee

• **fee**: `number` \| `bigint`

Fee is the suggested transaction fee
Fee is in units of micro-Algos per byte.
Fee may fall to zero but transactions must still have a fee of
at least MinTxnFee for the current network protocol.

#### Defined in

[client/v2/algod/models/types.ts:5442](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5442)

___

### genesisHash

• **genesisHash**: `Uint8Array`

GenesisHash is the hash of the genesis block.

#### Defined in

[client/v2/algod/models/types.ts:5447](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5447)

___

### genesisId

• **genesisId**: `string`

GenesisID is an ID listed in the genesis block.

#### Defined in

[client/v2/algod/models/types.ts:5452](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5452)

___

### lastRound

• **lastRound**: `number` \| `bigint`

LastRound indicates the last round seen

#### Defined in

[client/v2/algod/models/types.ts:5457](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5457)

___

### minFee

• **minFee**: `number` \| `bigint`

The minimum transaction fee (not per byte) required for the
txn to validate for the current network protocol.

#### Defined in

[client/v2/algod/models/types.ts:5463](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5463)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionParametersResponse`](modelsv2.TransactionParametersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionParametersResponse`](modelsv2.TransactionParametersResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:5516](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5516)
