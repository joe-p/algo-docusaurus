---
id: "modelsv2.AccountParticipation"
title: "Class: AccountParticipation"
sidebar_label: "AccountParticipation"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).AccountParticipation

AccountParticipation describes the parameters used by this account in consensus
protocol.

## Hierarchy

- `default`

  ↳ **`AccountParticipation`**

## Constructors

### constructor

• **new AccountParticipation**(`«destructured»`)

Creates a new `AccountParticipation` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `selectionParticipationKey` | `string` \| `Uint8Array` |
| › `stateProofKey?` | `string` \| `Uint8Array` |
| › `voteFirstValid` | `number` \| `bigint` |
| › `voteKeyDilution` | `number` \| `bigint` |
| › `voteLastValid` | `number` \| `bigint` |
| › `voteParticipationKey` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:607](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L607)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### selectionParticipationKey

• **selectionParticipationKey**: `Uint8Array`

(sel) Selection public key (if any) currently registered for this round.

#### Defined in

[client/v2/algod/models/types.ts:569](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L569)

___

### stateProofKey

• `Optional` **stateProofKey**: `Uint8Array`

(stprf) Root of the state proof key (if any)

#### Defined in

[client/v2/algod/models/types.ts:595](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L595)

___

### voteFirstValid

• **voteFirstValid**: `number` \| `bigint`

(voteFst) First round for which this participation is valid.

#### Defined in

[client/v2/algod/models/types.ts:574](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L574)

___

### voteKeyDilution

• **voteKeyDilution**: `number` \| `bigint`

(voteKD) Number of subkeys in each batch of participation keys.

#### Defined in

[client/v2/algod/models/types.ts:579](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L579)

___

### voteLastValid

• **voteLastValid**: `number` \| `bigint`

(voteLst) Last round for which this participation is valid.

#### Defined in

[client/v2/algod/models/types.ts:584](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L584)

___

### voteParticipationKey

• **voteParticipationKey**: `Uint8Array`

(vote) root participation public key (if any) currently registered for this
round.

#### Defined in

[client/v2/algod/models/types.ts:590](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L590)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`AccountParticipation`](modelsv2.AccountParticipation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`AccountParticipation`](modelsv2.AccountParticipation.md)

#### Defined in

[client/v2/algod/models/types.ts:650](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L650)
