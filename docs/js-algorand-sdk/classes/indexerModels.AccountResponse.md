---
id: "indexerModels.AccountResponse"
title: "Class: AccountResponse"
sidebar_label: "AccountResponse"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).AccountResponse

## Hierarchy

- `default`

  ↳ **`AccountResponse`**

## Constructors

### constructor

• **new AccountResponse**(`«destructured»`)

Creates a new `AccountResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | [`Account`](erModels.Account) |
| › `currentRound` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:584](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L584)

## Properties

### account

• **account**: [`Account`](erModels.Account)

Account information at a given round.
Definition:
data/basics/userBalance.go : AccountData

#### Defined in

[client/v2/indexer/models/types.ts:570](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L570)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### currentRound

• **currentRound**: `number` \| `bigint`

Round at which the results were computed.

#### Defined in

[client/v2/indexer/models/types.ts:575](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L575)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AccountResponse`](erModels.AccountResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AccountResponse`](erModels.AccountResponse)

#### Defined in

[client/v2/indexer/models/types.ts:602](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L602)
