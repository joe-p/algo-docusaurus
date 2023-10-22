---
id: "indexerModels.Account"
title: "Class: Account"
sidebar_label: "Account"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).Account

Account information at a given round.
Definition:
data/basics/userBalance.go : AccountData

## Hierarchy

- `default`

  ↳ **`Account`**

## Constructors

### constructor

• **new Account**(`«destructured»`)

Creates a new `Account` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `amount` | `number` \| `bigint` |
| › `amountWithoutPendingRewards` | `number` \| `bigint` |
| › `appsLocalState?` | [`ApplicationLocalState`](erModels.ApplicationLocalState)[] |
| › `appsTotalExtraPages?` | `number` \| `bigint` |
| › `appsTotalSchema?` | [`ApplicationStateSchema`](erModels.ApplicationStateSchema) |
| › `assets?` | [`AssetHolding`](erModels.AssetHolding)[] |
| › `authAddr?` | `string` |
| › `closedAtRound?` | `number` \| `bigint` |
| › `createdApps?` | [`Application`](erModels.Application)[] |
| › `createdAssets?` | [`Asset`](erModels.Asset)[] |
| › `createdAtRound?` | `number` \| `bigint` |
| › `deleted?` | `boolean` |
| › `participation?` | [`AccountParticipation`](erModels.AccountParticipation) |
| › `pendingRewards` | `number` \| `bigint` |
| › `rewardBase?` | `number` \| `bigint` |
| › `rewards` | `number` \| `bigint` |
| › `round` | `number` \| `bigint` |
| › `sigType?` | `string` |
| › `status` | `string` |
| › `totalAppsOptedIn` | `number` \| `bigint` |
| › `totalAssetsOptedIn` | `number` \| `bigint` |
| › `totalBoxBytes` | `number` \| `bigint` |
| › `totalBoxes` | `number` \| `bigint` |
| › `totalCreatedApps` | `number` \| `bigint` |
| › `totalCreatedAssets` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:224](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L224)

## Properties

### address

• **address**: `string`

the account public key

#### Defined in

[client/v2/indexer/models/types.ts:18](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L18)

___

### amount

• **amount**: `number` \| `bigint`

(algo) total number of MicroAlgos in the account

#### Defined in

[client/v2/indexer/models/types.ts:23](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L23)

___

### amountWithoutPendingRewards

• **amountWithoutPendingRewards**: `number` \| `bigint`

specifies the amount of MicroAlgos in the account, without the pending rewards.

#### Defined in

[client/v2/indexer/models/types.ts:28](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L28)

___

### appsLocalState

• `Optional` **appsLocalState**: [`ApplicationLocalState`](erModels.ApplicationLocalState)[]

(appl) applications local data stored in this account.
Note the raw object uses `map[int] -> AppLocalState` for this type.

#### Defined in

[client/v2/indexer/models/types.ts:94](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L94)

___

### appsTotalExtraPages

• `Optional` **appsTotalExtraPages**: `number` \| `bigint`

(teap) the sum of all extra application program pages for this account.

#### Defined in

[client/v2/indexer/models/types.ts:99](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L99)

___

### appsTotalSchema

• `Optional` **appsTotalSchema**: [`ApplicationStateSchema`](erModels.ApplicationStateSchema)

(tsch) stores the sum of all of the local schemas and global schemas in this
account.
Note: the raw account uses `StateSchema` for this type.

#### Defined in

[client/v2/indexer/models/types.ts:106](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L106)

___

### assets

• `Optional` **assets**: [`AssetHolding`](erModels.AssetHolding)[]

(asset) assets held by this account.
Note the raw object uses `map[int] -> AssetHolding` for this type.

#### Defined in

[client/v2/indexer/models/types.ts:112](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L112)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### authAddr

• `Optional` **authAddr**: `string`

(spend) the address against which signing should be checked. If empty, the
address of the current account is used. This field can be updated in any
transaction by setting the RekeyTo field.

#### Defined in

[client/v2/indexer/models/types.ts:119](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L119)

___

### closedAtRound

• `Optional` **closedAtRound**: `number` \| `bigint`

Round during which this account was most recently closed.

#### Defined in

[client/v2/indexer/models/types.ts:124](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L124)

___

### createdApps

• `Optional` **createdApps**: [`Application`](erModels.Application)[]

(appp) parameters of applications created by this account including app global
data.
Note: the raw account uses `map[int] -> AppParams` for this type.

#### Defined in

[client/v2/indexer/models/types.ts:131](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L131)

___

### createdAssets

• `Optional` **createdAssets**: [`Asset`](erModels.Asset)[]

(apar) parameters of assets created by this account.
Note: the raw account uses `map[int] -> Asset` for this type.

#### Defined in

[client/v2/indexer/models/types.ts:137](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L137)

___

### createdAtRound

• `Optional` **createdAtRound**: `number` \| `bigint`

Round during which this account first appeared in a transaction.

#### Defined in

[client/v2/indexer/models/types.ts:142](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L142)

___

### deleted

• `Optional` **deleted**: `boolean`

Whether or not this account is currently closed.

#### Defined in

[client/v2/indexer/models/types.ts:147](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L147)

___

### participation

• `Optional` **participation**: [`AccountParticipation`](erModels.AccountParticipation)

AccountParticipation describes the parameters used by this account in consensus
protocol.

#### Defined in

[client/v2/indexer/models/types.ts:153](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L153)

___

### pendingRewards

• **pendingRewards**: `number` \| `bigint`

amount of MicroAlgos of pending rewards in this account.

#### Defined in

[client/v2/indexer/models/types.ts:33](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L33)

___

### rewardBase

• `Optional` **rewardBase**: `number` \| `bigint`

(ebase) used as part of the rewards computation. Only applicable to accounts
which are participating.

#### Defined in

[client/v2/indexer/models/types.ts:159](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L159)

___

### rewards

• **rewards**: `number` \| `bigint`

(ern) total rewards of MicroAlgos the account has received, including pending
rewards.

#### Defined in

[client/v2/indexer/models/types.ts:39](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L39)

___

### round

• **round**: `number` \| `bigint`

The round for which this information is relevant.

#### Defined in

[client/v2/indexer/models/types.ts:44](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L44)

___

### sigType

• `Optional` **sigType**: `string`

Indicates what type of signature is used by this account, must be one of:
* sig
* msig
* lsig
* or null if unknown

#### Defined in

[client/v2/indexer/models/types.ts:168](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L168)

___

### status

• **status**: `string`

(onl) delegation status of the account's MicroAlgos
* Offline - indicates that the associated account is delegated.
* Online - indicates that the associated account used as part of the delegation
pool.
* NotParticipating - indicates that the associated account is neither a
delegator nor a delegate.

#### Defined in

[client/v2/indexer/models/types.ts:54](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L54)

___

### totalAppsOptedIn

• **totalAppsOptedIn**: `number` \| `bigint`

The count of all applications that have been opted in, equivalent to the count
of application local data (AppLocalState objects) stored in this account.

#### Defined in

[client/v2/indexer/models/types.ts:60](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L60)

___

### totalAssetsOptedIn

• **totalAssetsOptedIn**: `number` \| `bigint`

The count of all assets that have been opted in, equivalent to the count of
AssetHolding objects held by this account.

#### Defined in

[client/v2/indexer/models/types.ts:66](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L66)

___

### totalBoxBytes

• **totalBoxBytes**: `number` \| `bigint`

For app-accounts only. The total number of bytes allocated for the keys and
values of boxes which belong to the associated application.

#### Defined in

[client/v2/indexer/models/types.ts:72](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L72)

___

### totalBoxes

• **totalBoxes**: `number` \| `bigint`

For app-accounts only. The total number of boxes which belong to the associated
application.

#### Defined in

[client/v2/indexer/models/types.ts:78](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L78)

___

### totalCreatedApps

• **totalCreatedApps**: `number` \| `bigint`

The count of all apps (AppParams objects) created by this account.

#### Defined in

[client/v2/indexer/models/types.ts:83](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L83)

___

### totalCreatedAssets

• **totalCreatedAssets**: `number` \| `bigint`

The count of all assets (AssetParams objects) created by this account.

#### Defined in

[client/v2/indexer/models/types.ts:88](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L88)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`Account`](erModels.Account)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`Account`](erModels.Account)

#### Defined in

[client/v2/indexer/models/types.ts:338](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L338)
