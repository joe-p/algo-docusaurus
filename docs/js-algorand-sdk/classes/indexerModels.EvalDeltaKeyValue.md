---
id: "indexerModels.EvalDeltaKeyValue"
title: "Class: EvalDeltaKeyValue"
sidebar_label: "EvalDeltaKeyValue"
custom_edit_url: null
---

[indexerModels](../namespaces/erModels).EvalDeltaKeyValue

Key-value pairs for StateDelta.

## Hierarchy

- `default`

  ↳ **`EvalDeltaKeyValue`**

## Constructors

### constructor

• **new EvalDeltaKeyValue**(`«destructured»`)

Creates a new `EvalDeltaKeyValue` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `key` | `string` |
| › `value` | [`EvalDelta`](erModels.EvalDelta) |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/indexer/models/types.ts:2925](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2925)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### key

• **key**: `string`

#### Defined in

[client/v2/indexer/models/types.ts:2913](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2913)

___

### value

• **value**: [`EvalDelta`](erModels.EvalDelta)

Represents a TEAL value delta.

#### Defined in

[client/v2/indexer/models/types.ts:2918](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2918)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`EvalDeltaKeyValue`](erModels.EvalDeltaKeyValue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`EvalDeltaKeyValue`](erModels.EvalDeltaKeyValue)

#### Defined in

[client/v2/indexer/models/types.ts:2937](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/indexer/models/types.ts#L2937)
