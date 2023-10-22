---
id: "AtomicTransactionComposerStatus"
title: "Enumeration: AtomicTransactionComposerStatus"
sidebar_label: "AtomicTransactionComposerStatus"
sidebar_position: 0
custom_edit_url: null
---

## Enumeration Members

### BUILDING

• **BUILDING** = ``0``

The atomic group is still under construction.

#### Defined in

[composer.ts:71](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/composer.ts#L71)

___

### BUILT

• **BUILT** = ``1``

The atomic group has been finalized, but not yet signed.

#### Defined in

[composer.ts:74](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/composer.ts#L74)

___

### COMMITTED

• **COMMITTED** = ``4``

The atomic group has been finalized, signed, submitted, and successfully committed to a block.

#### Defined in

[composer.ts:83](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/composer.ts#L83)

___

### SIGNED

• **SIGNED** = ``2``

The atomic group has been finalized and signed, but not yet submitted to the network.

#### Defined in

[composer.ts:77](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/composer.ts#L77)

___

### SUBMITTED

• **SUBMITTED** = ``3``

The atomic group has been finalized, signed, and submitted to the network.

#### Defined in

[composer.ts:80](https://github.com/joe-p/js-algorand-sdk/blob/6a3021f/src/composer.ts#L80)
