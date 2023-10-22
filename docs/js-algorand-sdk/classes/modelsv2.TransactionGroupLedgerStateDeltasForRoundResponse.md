---
id: "modelsv2.TransactionGroupLedgerStateDeltasForRoundResponse"
title: "Class: TransactionGroupLedgerStateDeltasForRoundResponse"
sidebar_label: "TransactionGroupLedgerStateDeltasForRoundResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).TransactionGroupLedgerStateDeltasForRoundResponse

Response containing all ledger state deltas for transaction groups, with their
associated Ids, in a single round.

## Hierarchy

- `default`

  ↳ **`TransactionGroupLedgerStateDeltasForRoundResponse`**

## Constructors

### constructor

• **new TransactionGroupLedgerStateDeltasForRoundResponse**(`deltas`)

Creates a new `TransactionGroupLedgerStateDeltasForRoundResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltas` | `Object` |
| `deltas.deltas` | [`LedgerStateDeltaForTransactionGroup`](modelsv2.LedgerStateDeltaForTransactionGroup.md)[] |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:5398](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5398)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### deltas

• **deltas**: [`LedgerStateDeltaForTransactionGroup`](modelsv2.LedgerStateDeltaForTransactionGroup.md)[]

#### Defined in

[client/v2/algod/models/types.ts:5392](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5392)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`TransactionGroupLedgerStateDeltasForRoundResponse`](modelsv2.TransactionGroupLedgerStateDeltasForRoundResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`TransactionGroupLedgerStateDeltasForRoundResponse`](modelsv2.TransactionGroupLedgerStateDeltasForRoundResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:5408](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5408)
