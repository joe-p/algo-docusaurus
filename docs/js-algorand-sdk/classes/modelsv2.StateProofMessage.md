---
id: "modelsv2.StateProofMessage"
title: "Class: StateProofMessage"
sidebar_label: "StateProofMessage"
custom_edit_url: null
---

[modelsv2](../namespaces/modelsv2.md).StateProofMessage

Represents the message that the state proofs are attesting to.

## Hierarchy

- `default`

  ↳ **`StateProofMessage`**

## Constructors

### constructor

• **new StateProofMessage**(`«destructured»`)

Creates a new `StateProofMessage` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blockheaderscommitment` | `string` \| `Uint8Array` |
| › `firstattestedround` | `number` \| `bigint` |
| › `lastattestedround` | `number` \| `bigint` |
| › `lnprovenweight` | `number` \| `bigint` |
| › `voterscommitment` | `string` \| `Uint8Array` |

#### Overrides

BaseModel.constructor

#### Defined in

[client/v2/algod/models/types.ts:5142](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5142)

## Properties

### attribute\_map

• **attribute\_map**: `Record`<`string`, `string`\>

#### Inherited from

BaseModel.attribute\_map

#### Defined in

[client/v2/basemodel.ts:56](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/basemodel.ts#L56)

___

### blockheaderscommitment

• **blockheaderscommitment**: `Uint8Array`

The vector commitment root on all light block headers within a state proof
interval.

#### Defined in

[client/v2/algod/models/types.ts:5109](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5109)

___

### firstattestedround

• **firstattestedround**: `number` \| `bigint`

The first round the message attests to.

#### Defined in

[client/v2/algod/models/types.ts:5114](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5114)

___

### lastattestedround

• **lastattestedround**: `number` \| `bigint`

The last round the message attests to.

#### Defined in

[client/v2/algod/models/types.ts:5119](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5119)

___

### lnprovenweight

• **lnprovenweight**: `number` \| `bigint`

An integer value representing the natural log of the proven weight with 16 bits
of precision. This value would be used to verify the next state proof.

#### Defined in

[client/v2/algod/models/types.ts:5125](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5125)

___

### voterscommitment

• **voterscommitment**: `Uint8Array`

The vector commitment root of the top N accounts to sign the next StateProof.

#### Defined in

[client/v2/algod/models/types.ts:5130](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5130)

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

▸ `Static` **from_obj_for_encoding**(`data`): [`StateProofMessage`](modelsv2.StateProofMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

[`StateProofMessage`](modelsv2.StateProofMessage.md)

#### Defined in

[client/v2/algod/models/types.ts:5178](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/client/v2/algod/models/types.ts#L5178)
