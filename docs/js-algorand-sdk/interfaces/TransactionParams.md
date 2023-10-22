---
id: "TransactionParams"
title: "Interface: TransactionParams"
sidebar_label: "TransactionParams"
sidebar_position: 0
custom_edit_url: null
---

A full list of all available transaction parameters

The full documentation is available at:
https://developer.algorand.org/docs/reference/transactions/#common-fields-header-and-type

## Properties

### amount

• **amount**: `number` \| `bigint`

Integer amount to send

#### Defined in

[types/transactions/base.ts:180](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L180)

___

### appAccounts

• `Optional` **appAccounts**: `string`[]

Array of Address strings, any additional accounts to supply to the application

#### Defined in

[types/transactions/base.ts:370](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L370)

___

### appApprovalProgram

• **appApprovalProgram**: `Uint8Array`

The compiled TEAL that approves a transaction

#### Defined in

[types/transactions/base.ts:355](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L355)

___

### appArgs

• `Optional` **appArgs**: `Uint8Array`[]

Array of Uint8Array, any additional arguments to the application

#### Defined in

[types/transactions/base.ts:365](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L365)

___

### appClearProgram

• **appClearProgram**: `Uint8Array`

The compiled TEAL program that runs when clearing state

#### Defined in

[types/transactions/base.ts:360](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L360)

___

### appForeignApps

• `Optional` **appForeignApps**: `number`[]

Array of int, any other apps used by the application, identified by index

#### Defined in

[types/transactions/base.ts:375](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L375)

___

### appForeignAssets

• `Optional` **appForeignAssets**: `number`[]

Array of int, any assets used by the application, identified by index

#### Defined in

[types/transactions/base.ts:380](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L380)

___

### appGlobalByteSlices

• **appGlobalByteSlices**: `number`

Restricts number of byte slices in global state

#### Defined in

[types/transactions/base.ts:350](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L350)

___

### appGlobalInts

• **appGlobalInts**: `number`

Restricts number of ints in global state

#### Defined in

[types/transactions/base.ts:345](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L345)

___

### appIndex

• **appIndex**: `number`

A unique application index

#### Defined in

[types/transactions/base.ts:325](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L325)

___

### appLocalByteSlices

• **appLocalByteSlices**: `number`

Restricts number of byte slices in per-user local state

#### Defined in

[types/transactions/base.ts:340](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L340)

___

### appLocalInts

• **appLocalInts**: `number`

Restricts number of ints in per-user local state

#### Defined in

[types/transactions/base.ts:335](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L335)

___

### appOnComplete

• **appOnComplete**: [`OnApplicationComplete`](../enums/OnApplicationComplete.md)

What application should do once the program has been run

#### Defined in

[types/transactions/base.ts:330](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L330)

___

### assetClawback

• `Optional` **assetClawback**: `string`

String representation of Algorand address with power to revoke asset holdings

#### Defined in

[types/transactions/base.ts:285](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L285)

___

### assetDecimals

• **assetDecimals**: `number`

Integer number of decimals for asset unit calcuation

#### Defined in

[types/transactions/base.ts:260](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L260)

___

### assetDefaultFrozen

• **assetDefaultFrozen**: `boolean`

Whether asset accounts should default to being frozen

#### Defined in

[types/transactions/base.ts:265](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L265)

___

### assetFreeze

• `Optional` **assetFreeze**: `string`

String representation of Algorand address with power to freeze/unfreeze asset holdings

#### Defined in

[types/transactions/base.ts:280](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L280)

___

### assetIndex

• **assetIndex**: `number`

Asset index uniquely specifying the asset

#### Defined in

[types/transactions/base.ts:250](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L250)

___

### assetManager

• `Optional` **assetManager**: `string`

String representation of Algorand address in charge of reserve, freeze, clawback, destruction, etc.

#### Defined in

[types/transactions/base.ts:270](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L270)

___

### assetMetadataHash

• `Optional` **assetMetadataHash**: `string` \| `Uint8Array`

Uint8Array or UTF-8 string representation of a hash commitment with respect to the asset. Must be exactly 32 bytes long.

#### Defined in

[types/transactions/base.ts:304](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L304)

___

### assetName

• `Optional` **assetName**: `string`

Name for this asset

#### Defined in

[types/transactions/base.ts:294](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L294)

___

### assetReserve

• `Optional` **assetReserve**: `string`

String representation of Algorand address representing asset reserve

#### Defined in

[types/transactions/base.ts:275](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L275)

___

### assetRevocationTarget

• `Optional` **assetRevocationTarget**: `string`

String representation of Algorand address – if provided, and if "from" is
the asset's revocation manager, then deduct from "revocationTarget" rather than "from"

#### Defined in

[types/transactions/base.ts:320](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L320)

___

### assetTotal

• **assetTotal**: `number` \| `bigint`

Total supply of the asset

#### Defined in

[types/transactions/base.ts:255](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L255)

___

### assetURL

• `Optional` **assetURL**: `string`

URL relating to this asset

#### Defined in

[types/transactions/base.ts:299](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L299)

___

### assetUnitName

• `Optional` **assetUnitName**: `string`

Unit name for this asset

#### Defined in

[types/transactions/base.ts:290](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L290)

___

### boxes

• `Optional` **boxes**: [`BoxReference`](BoxReference.md)[]

A grouping of the app ID and name of the box in an Uint8Array

#### Defined in

[types/transactions/base.ts:419](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L419)

___

### closeRemainderTo

• `Optional` **closeRemainderTo**: `string`

Close out remaining account balance to this account

#### Defined in

[types/transactions/base.ts:215](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L215)

___

### extraPages

• `Optional` **extraPages**: `number`

Int representing extra pages of memory to rent during an application create transaction.

#### Defined in

[types/transactions/base.ts:414](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L414)

___

### fee

• **fee**: `number`

Integer fee per byte, in microAlgos. For a flat fee, set flatFee to true

#### Defined in

[types/transactions/base.ts:175](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L175)

___

### firstRound

• **firstRound**: `number`

Integer first protocol round on which this txn is valid

#### Defined in

[types/transactions/base.ts:185](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L185)

___

### flatFee

• `Optional` **flatFee**: `boolean`

Set this to true to specify fee as microalgos-per-txn.

If the final calculated fee is lower than the protocol minimum fee, the fee will be increased to match the minimum

#### Defined in

[types/transactions/base.ts:392](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L392)

___

### freezeAccount

• **freezeAccount**: `string`

String representation of Algorand address being frozen or unfrozen

#### Defined in

[types/transactions/base.ts:309](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L309)

___

### freezeState

• **freezeState**: `boolean`

true if freezeTarget should be frozen, false if freezeTarget should be allowed to transact

#### Defined in

[types/transactions/base.ts:314](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L314)

___

### from

• **from**: `string`

String representation of Algorand address of sender

#### Defined in

[types/transactions/base.ts:165](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L165)

___

### genesisHash

• **genesisHash**: `string`

Specifies hash genesis block of network in use

#### Defined in

[types/transactions/base.ts:205](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L205)

___

### genesisID

• **genesisID**: `string`

Specifies genesis ID of network in use

#### Defined in

[types/transactions/base.ts:200](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L200)

___

### lastRound

• **lastRound**: `number`

Integer last protocol round on which this txn is valid

#### Defined in

[types/transactions/base.ts:190](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L190)

___

### lease

• `Optional` **lease**: `Uint8Array`

Lease a transaction. The sender cannot send another txn with that same lease until the last round of original txn has passed

#### Defined in

[types/transactions/base.ts:210](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L210)

___

### nonParticipation

• `Optional` **nonParticipation**: `boolean`

Set this value to true to mark this account as nonparticipating.

All new Algorand accounts are participating by default. This means they earn rewards.

#### Defined in

[types/transactions/base.ts:409](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L409)

___

### note

• `Optional` **note**: `Uint8Array`

Arbitrary data for sender to store

#### Defined in

[types/transactions/base.ts:195](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L195)

___

### reKeyTo

• `Optional` **reKeyTo**: `string`

String representation of the Algorand address that will be used to authorize all future transactions

#### Defined in

[types/transactions/base.ts:402](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L402)

___

### selectionKey

• **selectionKey**: `string` \| `Uint8Array`

Selection key bytes. For key deregistration, leave undefined

#### Defined in

[types/transactions/base.ts:225](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L225)

___

### stateProof

• `Optional` **stateProof**: `Uint8Array`

Byte array containing the state proof.

#### Defined in

[types/transactions/base.ts:429](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L429)

___

### stateProofKey

• **stateProofKey**: `string` \| `Uint8Array`

State proof key bytes. For key deregistration, leave undefined

#### Defined in

[types/transactions/base.ts:230](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L230)

___

### stateProofMessage

• `Optional` **stateProofMessage**: `Uint8Array`

Byte array containing the state proof message.

#### Defined in

[types/transactions/base.ts:434](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L434)

___

### stateProofType

• `Optional` **stateProofType**: `number` \| `bigint`

#### Defined in

[types/transactions/base.ts:424](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L424)

___

### suggestedParams

• **suggestedParams**: [`SuggestedParams`](SuggestedParams.md)

A dict holding common-to-all-txns arguments

#### Defined in

[types/transactions/base.ts:397](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L397)

___

### to

• **to**: `string`

String representation of Algorand address of recipient

#### Defined in

[types/transactions/base.ts:170](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L170)

___

### type

• `Optional` **type**: [`TransactionType`](../enums/TransactionType.md)

Transaction type

#### Defined in

[types/transactions/base.ts:385](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L385)

___

### voteFirst

• **voteFirst**: `number`

First round on which voteKey is valid

#### Defined in

[types/transactions/base.ts:235](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L235)

___

### voteKey

• **voteKey**: `string` \| `Uint8Array`

Voting key bytes. For key deregistration, leave undefined

#### Defined in

[types/transactions/base.ts:220](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L220)

___

### voteKeyDilution

• **voteKeyDilution**: `number`

The dilution fo the 2-level participation key

#### Defined in

[types/transactions/base.ts:245](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L245)

___

### voteLast

• **voteLast**: `number`

Last round on which voteKey is valid

#### Defined in

[types/transactions/base.ts:240](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/types/transactions/base.ts#L240)
