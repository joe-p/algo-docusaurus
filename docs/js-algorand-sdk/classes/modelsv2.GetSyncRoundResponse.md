---
id: "modelsv2.GetSyncRoundResponse"
title: "Class: GetSyncRoundResponse"
sidebar_label: "GetSyncRoundResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).GetSyncRoundResponse

Response containing the ledger's minimum sync round

## Hierarchy

- `default`

  ↳ **`GetSyncRoundResponse`**

## Constructors

### constructor

• **new GetSyncRoundResponse**(`round`)

Creates a new `GetSyncRoundResponse` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `round` | `Object` | The minimum sync round for the ledger. |
| `round.round` | `number` \| `bigint` | - |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:3021](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3021)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### round

• **round**: `number` \| `bigint`

The minimum sync round for the ledger.

#### Defined in

[client/v2/algod/models/types.ts:3015](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3015)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`GetSyncRoundResponse`](modelsv2.GetSyncRoundResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`GetSyncRoundResponse`](modelsv2.GetSyncRoundResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:3031](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3031)
