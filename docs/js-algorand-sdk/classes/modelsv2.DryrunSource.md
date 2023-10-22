---
id: "modelsv2.DryrunSource"
title: "Class: DryrunSource"
sidebar_label: "DryrunSource"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).DryrunSource

DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into
transactions or application state.

## Hierarchy

- `default`

  ↳ **`DryrunSource`**

## Constructors

### constructor

• **new DryrunSource**(`«destructured»`)

Creates a new `DryrunSource` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appIndex` | `number` \| `bigint` |
| › `fieldName` | `string` |
| › `source` | `string` |
| › `txnIndex` | `number` \| `bigint` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:2545](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2545)

## Properties

### appIndex

• **appIndex**: `number` \| `bigint`

#### Defined in

[client/v2/algod/models/types.ts:2534](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2534)

___

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### fieldName

• **fieldName**: `string`

FieldName is what kind of sources this is. If lsig then it goes into the
transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the
Approval Program or Clear State Program of application[this.AppIndex].

#### Defined in

[client/v2/algod/models/types.ts:2528](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2528)

___

### source

• **source**: `string`

#### Defined in

[client/v2/algod/models/types.ts:2530](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2530)

___

### txnIndex

• **txnIndex**: `number` \| `bigint`

#### Defined in

[client/v2/algod/models/types.ts:2532](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2532)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`DryrunSource`](modelsv2.DryrunSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`DryrunSource`](modelsv2.DryrunSource.md)

#### Defined in

[client/v2/algod/models/types.ts:2571](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L2571)
