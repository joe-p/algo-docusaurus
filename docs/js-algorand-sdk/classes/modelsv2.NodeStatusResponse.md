---
id: "modelsv2.NodeStatusResponse"
title: "Class: NodeStatusResponse"
sidebar_label: "NodeStatusResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).NodeStatusResponse

## Hierarchy

- `default`

  ↳ **`NodeStatusResponse`**

## Constructors

### constructor

• **new NodeStatusResponse**(`«destructured»`)

Creates a new `NodeStatusResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `catchpoint?` | `string` |
| › `catchpointAcquiredBlocks?` | `number` \| `bigint` |
| › `catchpointProcessedAccounts?` | `number` \| `bigint` |
| › `catchpointProcessedKvs?` | `number` \| `bigint` |
| › `catchpointTotalAccounts?` | `number` \| `bigint` |
| › `catchpointTotalBlocks?` | `number` \| `bigint` |
| › `catchpointTotalKvs?` | `number` \| `bigint` |
| › `catchpointVerifiedAccounts?` | `number` \| `bigint` |
| › `catchpointVerifiedKvs?` | `number` \| `bigint` |
| › `catchupTime` | `number` \| `bigint` |
| › `lastCatchpoint?` | `string` |
| › `lastRound` | `number` \| `bigint` |
| › `lastVersion` | `string` |
| › `nextVersion` | `string` |
| › `nextVersionRound` | `number` \| `bigint` |
| › `nextVersionSupported` | `boolean` |
| › `stoppedAtUnsupportedRound` | `boolean` |
| › `timeSinceLastRound` | `number` \| `bigint` |
| › `upgradeDelay?` | `number` \| `bigint` |
| › `upgradeNextProtocolVoteBefore?` | `number` \| `bigint` |
| › `upgradeNoVotes?` | `number` \| `bigint` |
| › `upgradeNodeVote?` | `boolean` |
| › `upgradeVoteRounds?` | `number` \| `bigint` |
| › `upgradeVotes?` | `number` \| `bigint` |
| › `upgradeVotesRequired?` | `number` \| `bigint` |
| › `upgradeYesVotes?` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:3396](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3396)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### catchpoint

• `Optional` **catchpoint**: `string`

The current catchpoint that is being caught up to

#### Defined in

[client/v2/algod/models/types.ts:3266](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3266)

___

### catchpointAcquiredBlocks

• `Optional` **catchpointAcquiredBlocks**: `number` \| `bigint`

The number of blocks that have already been obtained by the node as part of the
catchup

#### Defined in

[client/v2/algod/models/types.ts:3272](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3272)

___

### catchpointProcessedAccounts

• `Optional` **catchpointProcessedAccounts**: `number` \| `bigint`

The number of accounts from the current catchpoint that have been processed so
far as part of the catchup

#### Defined in

[client/v2/algod/models/types.ts:3278](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3278)

___

### catchpointProcessedKvs

• `Optional` **catchpointProcessedKvs**: `number` \| `bigint`

The number of key-values (KVs) from the current catchpoint that have been
processed so far as part of the catchup

#### Defined in

[client/v2/algod/models/types.ts:3284](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3284)

___

### catchpointTotalAccounts

• `Optional` **catchpointTotalAccounts**: `number` \| `bigint`

The total number of accounts included in the current catchpoint

#### Defined in

[client/v2/algod/models/types.ts:3289](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3289)

___

### catchpointTotalBlocks

• `Optional` **catchpointTotalBlocks**: `number` \| `bigint`

The total number of blocks that are required to complete the current catchpoint
catchup

#### Defined in

[client/v2/algod/models/types.ts:3295](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3295)

___

### catchpointTotalKvs

• `Optional` **catchpointTotalKvs**: `number` \| `bigint`

The total number of key-values (KVs) included in the current catchpoint

#### Defined in

[client/v2/algod/models/types.ts:3300](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3300)

___

### catchpointVerifiedAccounts

• `Optional` **catchpointVerifiedAccounts**: `number` \| `bigint`

The number of accounts from the current catchpoint that have been verified so
far as part of the catchup

#### Defined in

[client/v2/algod/models/types.ts:3306](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3306)

___

### catchpointVerifiedKvs

• `Optional` **catchpointVerifiedKvs**: `number` \| `bigint`

The number of key-values (KVs) from the current catchpoint that have been
verified so far as part of the catchup

#### Defined in

[client/v2/algod/models/types.ts:3312](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3312)

___

### catchupTime

• **catchupTime**: `number` \| `bigint`

CatchupTime in nanoseconds

#### Defined in

[client/v2/algod/models/types.ts:3224](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3224)

___

### lastCatchpoint

• `Optional` **lastCatchpoint**: `string`

The last catchpoint seen by the node

#### Defined in

[client/v2/algod/models/types.ts:3317](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3317)

___

### lastRound

• **lastRound**: `number` \| `bigint`

LastRound indicates the last round seen

#### Defined in

[client/v2/algod/models/types.ts:3229](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3229)

___

### lastVersion

• **lastVersion**: `string`

LastVersion indicates the last consensus version supported

#### Defined in

[client/v2/algod/models/types.ts:3234](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3234)

___

### nextVersion

• **nextVersion**: `string`

NextVersion of consensus protocol to use

#### Defined in

[client/v2/algod/models/types.ts:3239](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3239)

___

### nextVersionRound

• **nextVersionRound**: `number` \| `bigint`

NextVersionRound is the round at which the next consensus version will apply

#### Defined in

[client/v2/algod/models/types.ts:3244](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3244)

___

### nextVersionSupported

• **nextVersionSupported**: `boolean`

NextVersionSupported indicates whether the next consensus version is supported
by this node

#### Defined in

[client/v2/algod/models/types.ts:3250](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3250)

___

### stoppedAtUnsupportedRound

• **stoppedAtUnsupportedRound**: `boolean`

StoppedAtUnsupportedRound indicates that the node does not support the new
rounds and has stopped making progress

#### Defined in

[client/v2/algod/models/types.ts:3256](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3256)

___

### timeSinceLastRound

• **timeSinceLastRound**: `number` \| `bigint`

TimeSinceLastRound in nanoseconds

#### Defined in

[client/v2/algod/models/types.ts:3261](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3261)

___

### upgradeDelay

• `Optional` **upgradeDelay**: `number` \| `bigint`

Upgrade delay

#### Defined in

[client/v2/algod/models/types.ts:3322](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3322)

___

### upgradeNextProtocolVoteBefore

• `Optional` **upgradeNextProtocolVoteBefore**: `number` \| `bigint`

Next protocol round

#### Defined in

[client/v2/algod/models/types.ts:3327](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3327)

___

### upgradeNoVotes

• `Optional` **upgradeNoVotes**: `number` \| `bigint`

No votes cast for consensus upgrade

#### Defined in

[client/v2/algod/models/types.ts:3332](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3332)

___

### upgradeNodeVote

• `Optional` **upgradeNodeVote**: `boolean`

This node's upgrade vote

#### Defined in

[client/v2/algod/models/types.ts:3337](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3337)

___

### upgradeVoteRounds

• `Optional` **upgradeVoteRounds**: `number` \| `bigint`

Total voting rounds for current upgrade

#### Defined in

[client/v2/algod/models/types.ts:3342](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3342)

___

### upgradeVotes

• `Optional` **upgradeVotes**: `number` \| `bigint`

Total votes cast for consensus upgrade

#### Defined in

[client/v2/algod/models/types.ts:3347](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3347)

___

### upgradeVotesRequired

• `Optional` **upgradeVotesRequired**: `number` \| `bigint`

Yes votes required for consensus upgrade

#### Defined in

[client/v2/algod/models/types.ts:3352](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3352)

___

### upgradeYesVotes

• `Optional` **upgradeYesVotes**: `number` \| `bigint`

Yes votes cast for consensus upgrade

#### Defined in

[client/v2/algod/models/types.ts:3357](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3357)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`NodeStatusResponse`](modelsv2.NodeStatusResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`NodeStatusResponse`](modelsv2.NodeStatusResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:3510](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L3510)
