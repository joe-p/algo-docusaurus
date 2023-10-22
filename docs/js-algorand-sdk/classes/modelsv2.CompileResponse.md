---
id: "modelsv2.CompileResponse"
title: "Class: CompileResponse"
sidebar_label: "CompileResponse"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).CompileResponse

Teal compile Result

## Hierarchy

- `default`

  ↳ **`CompileResponse`**

## Constructors

### constructor

• **new CompileResponse**(`«destructured»`)

Creates a new `CompileResponse` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `hash` | `string` |
| › `result` | `string` |
| › `sourcemap?` | `Record`<`string`, `any`\> |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2262](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2262)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### hash

• **hash**: `string`

base32 SHA512_256 of program bytes (Address style)

#### Defined in

[client/v2/algod/models/types.ts:2244](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2244)

___

### result

• **result**: `string`

base64 encoded program bytes

#### Defined in

[client/v2/algod/models/types.ts:2249](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2249)

___

### sourcemap

• `Optional` **sourcemap**: `Record`<`string`, `any`\>

JSON of the source map

#### Defined in

[client/v2/algod/models/types.ts:2254](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2254)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`CompileResponse`](modelsv2.CompileResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`CompileResponse`](modelsv2.CompileResponse.md)

#### Defined in

[client/v2/algod/models/types.ts:2284](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2284)
