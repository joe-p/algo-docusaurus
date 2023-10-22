---
id: "indexerModels.ParticipationUpdates"
title: "Class: ParticipationUpdates"
sidebar_label: "ParticipationUpdates"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).ParticipationUpdates

Participation account data that needs to be checked/acted on by the network.

## Hierarchy

- `default`

  ↳ **`ParticipationUpdates`**

## Constructors

### constructor

• **new ParticipationUpdates**(`expiredParticipationAccounts`)

Creates a new `ParticipationUpdates` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expiredParticipationAccounts` | `Object` | (partupdrmv) a list of online accounts that needs to be converted to offline since their participation key expired. |
| `expiredParticipationAccounts.expiredParticipationAccounts?` | `string`[] | - |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:3323](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3323)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### expiredParticipationAccounts

• `Optional` **expiredParticipationAccounts**: `string`[]

(partupdrmv) a list of online accounts that needs to be converted to offline
since their participation key expired.

#### Defined in

[client/v2/indexer/models/types.ts:3316](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3316)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`ParticipationUpdates`](erModels.ParticipationUpdates)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`ParticipationUpdates`](erModels.ParticipationUpdates)

#### Defined in

[client/v2/indexer/models/types.ts:3337](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L3337)
