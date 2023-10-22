---
id: "SourceMap"
title: "Class: SourceMap"
sidebar_label: "SourceMap"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new SourceMap**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `mappings` | `string` |
| › `names` | `string`[] |
| › `sources` | `string`[] |
| › `version` | `number` |

#### Defined in

[logic/sourcemap.ts:12](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L12)

## Properties

### lineToPc

• **lineToPc**: `Object`

#### Index signature

▪ [key: `number`]: `number`[]

#### Defined in

[logic/sourcemap.ts:10](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L10)

___

### mappings

• **mappings**: `string`

#### Defined in

[logic/sourcemap.ts:7](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L7)

___

### names

• **names**: `string`[]

#### Defined in

[logic/sourcemap.ts:6](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L6)

___

### pcToLine

• **pcToLine**: `Object`

#### Index signature

▪ [key: `number`]: `number`

#### Defined in

[logic/sourcemap.ts:9](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L9)

___

### sources

• **sources**: `string`[]

#### Defined in

[logic/sourcemap.ts:5](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L5)

___

### version

• **version**: `number`

#### Defined in

[logic/sourcemap.ts:4](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L4)

## Methods

### getLineForPc

▸ **getLineForPc**(`pc`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pc` | `number` |

#### Returns

`number`

#### Defined in

[logic/sourcemap.ts:60](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L60)

___

### getPcsForLine

▸ **getPcsForLine**(`line`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `number` |

#### Returns

`number`[]

#### Defined in

[logic/sourcemap.ts:64](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/logic/sourcemap.ts#L64)
