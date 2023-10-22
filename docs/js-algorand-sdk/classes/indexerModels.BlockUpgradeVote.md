---
id: "indexerModels.BlockUpgradeVote"
title: "Class: BlockUpgradeVote"
sidebar_label: "BlockUpgradeVote"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).BlockUpgradeVote

Fields relating to voting for a protocol upgrade.

## Hierarchy

- `default`

  ↳ **`BlockUpgradeVote`**

## Constructors

### constructor

• **new BlockUpgradeVote**(`«destructured»`)

Creates a new `BlockUpgradeVote` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `upgradeApprove?` | `boolean` |
| › `upgradeDelay?` | `number` \| `bigint` |
| › `upgradePropose?` | `string` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:2614](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2614)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### upgradeApprove

• `Optional` **upgradeApprove**: `boolean`

(upgradeyes) Indicates a yes vote for the current proposal.

#### Defined in

[client/v2/indexer/models/types.ts:2596](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2596)

___

### upgradeDelay

• `Optional` **upgradeDelay**: `number` \| `bigint`

(upgradedelay) Indicates the time between acceptance and execution.

#### Defined in

[client/v2/indexer/models/types.ts:2601](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2601)

___

### upgradePropose

• `Optional` **upgradePropose**: `string`

(upgradeprop) Indicates a proposed upgrade.

#### Defined in

[client/v2/indexer/models/types.ts:2606](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2606)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`BlockUpgradeVote`](erModels.BlockUpgradeVote)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`BlockUpgradeVote`](erModels.BlockUpgradeVote)

#### Defined in

[client/v2/indexer/models/types.ts:2636](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2636)
