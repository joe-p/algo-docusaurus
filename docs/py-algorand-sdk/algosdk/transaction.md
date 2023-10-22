# transaction

### *class* SuggestedParams(fee, first, last, gh, gen=None, flat_fee=False, consensus_version=None, min_fee=None)

Bases: `object`

Contains various fields common to all transaction types.

* **Parameters:**
  * **fee** (*int*) – transaction fee (per byte if flat_fee is false). When flat_fee is true,
    fee may fall to zero but a group of N atomic transactions must
    still have a fee of at least N\*min_txn_fee.
  * **first** (*int*) – first round for which the transaction is valid
  * **last** (*int*) – last round for which the transaction is valid
  * **gh** (*str*) – genesis hash
  * **gen** (*str**,* *optional*) – genesis id
  * **flat_fee** (*bool**,* *optional*) – whether the specified fee is a flat fee
  * **consensus_version** (*str**,* *optional*) – the consensus protocol version as of ‘first’
  * **min_fee** (*int**,* *optional*) – the minimum transaction fee (flat)

#### fee

* **Type:**
  int

#### first

* **Type:**
  int

#### last

* **Type:**
  int

#### gen

* **Type:**
  str

#### gh

* **Type:**
  str

#### flat_fee

* **Type:**
  bool

#### consensus_version

* **Type:**
  str

#### min_fee

* **Type:**
  int

### *class* Transaction(sender, sp, note, lease, txn_type, rekey_to)

Bases: `object`

Superclass for various transaction types.

#### *static* as_hash(hash)

Confirm that a value is 32 bytes. If all zeros, or a falsy value, return None

#### *static* as_note(note)

#### *classmethod* as_lease(lease)

#### get_txid()

Get the transaction’s ID.

* **Returns:**
  transaction ID
* **Return type:**
  str

#### sign(private_key)

Sign the transaction with a private key.

* **Parameters:**
  **private_key** (*str*) – the private key of the signing account
* **Returns:**
  signed transaction with the signature
* **Return type:**
  [SignedTransaction](#algosdk.transaction.SignedTransaction)

#### raw_sign(private_key)

Sign the transaction.

* **Parameters:**
  **private_key** (*str*) – the private key of the signing account
* **Returns:**
  signature
* **Return type:**
  bytes

#### estimate_size()

#### dictify()

#### *static* undictify(d)

#### *static* required(arg)

#### *static* creatable_index(index, required=False)

Coerce an index for apps or assets to an integer.

By using this in all constructors, we allow callers to use
strings as indexes, check our convenience Txn types to ensure
index is set, and ensure that 0 is always used internally for
an unset id, not None, so \_\_eq_\_ works properly.

### *class* PaymentTxn(sender, sp, receiver, amt, close_remainder_to=None, note=None, lease=None, rekey_to=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a payment transaction.

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **receiver** (*str*) – address of the receiver
  * **amt** (*int*) – amount in microAlgos to be sent
  * **close_remainder_to** (*str**,* *optional*) – if nonempty, account will be closed
    and remaining algos will be sent to this address
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### genesis_hash

* **Type:**
  str

#### group

* **Type:**
  bytes

#### receiver

* **Type:**
  str

#### amt

* **Type:**
  int

#### close_remainder_to

* **Type:**
  str

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

#### dictify()

### *class* KeyregTxn(sender, sp, votekey, selkey, votefst, votelst, votekd, note=None, lease=None, rekey_to=None, nonpart=None, sprfkey=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a key registration transaction.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **votekey** (*str*) – participation public key in base64
  * **selkey** (*str*) – VRF public key in base64
  * **votefst** (*int*) – first round to vote
  * **votelst** (*int*) – last round to vote
  * **votekd** (*int*) – vote key dilution
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address
  * **nonpart** (*bool**,* *optional*) – mark the account non-participating if true
  * **StateProofPK** – state proof

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### genesis_hash

* **Type:**
  str

#### group

* **Type:**
  bytes

#### votepk

* **Type:**
  str

#### selkey

* **Type:**
  str

#### votefst

* **Type:**
  int

#### votelst

* **Type:**
  int

#### votekd

* **Type:**
  int

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

#### nonpart

* **Type:**
  bool

#### sprfkey

* **Type:**
  str

#### dictify()

### *class* KeyregOnlineTxn(sender, sp, votekey, selkey, votefst, votelst, votekd, note=None, lease=None, rekey_to=None, sprfkey=None)

Bases: [`KeyregTxn`](#algosdk.transaction.KeyregTxn)

Represents an online key registration transaction.
nonpart is implicitly False for this transaction.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **votekey** (*str*) – participation public key in base64
  * **selkey** (*str*) – VRF public key in base64
  * **votefst** (*int*) – first round to vote
  * **votelst** (*int*) – last round to vote
  * **votekd** (*int*) – vote key dilution
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address
  * **sprfkey** (*str**,* *optional*) – state proof ID

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### genesis_hash

* **Type:**
  str

#### group

* **Type:**
  bytes

#### votepk

* **Type:**
  str

#### selkey

* **Type:**
  str

#### votefst

* **Type:**
  int

#### votelst

* **Type:**
  int

#### votekd

* **Type:**
  int

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

#### sprfkey

* **Type:**
  str

### *class* KeyregOfflineTxn(sender, sp, note=None, lease=None, rekey_to=None)

Bases: [`KeyregTxn`](#algosdk.transaction.KeyregTxn)

Represents an offline key registration transaction.
nonpart is implicitly False for this transaction.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### genesis_hash

* **Type:**
  str

#### group

* **Type:**
  bytes

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

### *class* KeyregNonparticipatingTxn(sender, sp, note=None, lease=None, rekey_to=None)

Bases: [`KeyregTxn`](#algosdk.transaction.KeyregTxn)

Represents a nonparticipating key registration transaction.
nonpart is implicitly True for this transaction.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### genesis_hash

* **Type:**
  str

#### group

* **Type:**
  bytes

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

### *class* AssetConfigTxn(sender, sp, index=None, total=None, default_frozen=None, unit_name=None, asset_name=None, manager=None, reserve=None, freeze=None, clawback=None, url=None, metadata_hash=None, note=None, lease=None, strict_empty_address_check=True, decimals=0, rekey_to=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a transaction for asset creation, reconfiguration, or
destruction.

To create an asset, include the following:
: total, default_frozen, unit_name, asset_name,
  manager, reserve, freeze, clawback, url, metadata,
  decimals

To destroy an asset, include the following:
: index, strict_empty_address_check (set to False)

To update asset configuration, include the following:
: index, manager, reserve, freeze, clawback,
  strict_empty_address_check (optional)

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **index** (*int**,* *optional*) – index of the asset
  * **total** (*int**,* *optional*) – total number of base units of this asset created
  * **default_frozen** (*bool**,* *optional*) – whether slots for this asset in user
    accounts are frozen by default
  * **unit_name** (*str**,* *optional*) – hint for the name of a unit of this asset
  * **asset_name** (*str**,* *optional*) – hint for the name of the asset
  * **manager** (*str**,* *optional*) – address allowed to change nonzero addresses
    for this asset
  * **reserve** (*str**,* *optional*) – account whose holdings of this asset should
    be reported as “not minted”
  * **freeze** (*str**,* *optional*) – account allowed to change frozen state of
    holdings of this asset
  * **clawback** (*str**,* *optional*) – account allowed take units of this asset
    from any account
  * **url** (*str**,* *optional*) – a URL where more information about the asset
    can be retrieved
  * **metadata_hash** (*byte**[**32**]**,* *optional*) – a commitment to some unspecified
    asset metadata (32 byte hash)
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **strict_empty_address_check** (*bool**,* *optional*) – set this to False if you
    want to specify empty addresses. Otherwise, if this is left as
    True (the default), having empty addresses will raise an error,
    which will prevent accidentally removing admin access to assets or
    deleting the asset.
  * **decimals** (*int**,* *optional*) – number of digits to use for display after
    decimal. If set to 0, the asset is not divisible. If set to 1, the
    base unit of the asset is in tenths. Must be between 0 and 19,
    inclusive. Defaults to 0.
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### genesis_hash

* **Type:**
  str

#### index

* **Type:**
  int

#### total

* **Type:**
  int

#### default_frozen

* **Type:**
  bool

#### unit_name

* **Type:**
  str

#### asset_name

* **Type:**
  str

#### manager

* **Type:**
  str

#### reserve

* **Type:**
  str

#### freeze

* **Type:**
  str

#### clawback

* **Type:**
  str

#### url

* **Type:**
  str

#### metadata_hash

* **Type:**
  byte[32]

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### decimals

* **Type:**
  int

#### rekey

* **Type:**
  str

#### dictify()

#### *classmethod* as_metadata(md)

### *class* AssetCreateTxn(sender, sp, total, decimals, default_frozen, \*, manager=None, reserve=None, freeze=None, clawback=None, unit_name='', asset_name='', url='', metadata_hash=None, note=None, lease=None, rekey_to=None)

Bases: [`AssetConfigTxn`](#algosdk.transaction.AssetConfigTxn)

Represents a transaction for asset creation.

Keyword arguments are required, starting with the special
addresses, to prevent errors, as type checks can’t prevent simple
confusion of similar typed arguments. Since the special addresses
are required, strict_empty_address_check is turned off.

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **total** (*int*) – total number of base units of this asset created
  * **decimals** (*int**,* *optional*) – number of digits to use for display after
    decimal. If set to 0, the asset is not divisible. If set to 1, the
    base unit of the asset is in tenths. Must be between 0 and 19,
    inclusive. Defaults to 0.
  * **default_frozen** (*bool*) – whether slots for this asset in user
    accounts are frozen by default
  * **manager** (*str*) – address allowed to change nonzero addresses
    for this asset
  * **reserve** (*str*) – account whose holdings of this asset should
    be reported as “not minted”
  * **freeze** (*str*) – account allowed to change frozen state of
    holdings of this asset
  * **clawback** (*str*) – account allowed take units of this asset
    from any account
  * **unit_name** (*str*) – hint for the name of a unit of this asset
  * **asset_name** (*str*) – hint for the name of the asset
  * **url** (*str*) – a URL where more information about the asset
    can be retrieved
  * **metadata_hash** (*byte**[**32**]**,* *optional*) – a commitment to some unspecified
    asset metadata (32 byte hash)
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

### *class* AssetDestroyTxn(sender, sp, index, note=None, lease=None, rekey_to=None)

Bases: [`AssetConfigTxn`](#algosdk.transaction.AssetConfigTxn)

Represents a transaction for asset destruction.

An asset destruction transaction can only be sent by the manager
address, and only when the manager possseses all units of the
asset.

### *class* AssetUpdateTxn(sender, sp, index, \*, manager, reserve, freeze, clawback, note=None, lease=None, rekey_to=None)

Bases: [`AssetConfigTxn`](#algosdk.transaction.AssetConfigTxn)

Represents a transaction for asset modification.

To update asset configuration, include the following:
: index, manager, reserve, freeze, clawback.

Keyword arguments are required, starting with the special
addresses, to prevent argument reordinering errors. Since the
special addresses are required, strict_empty_address_check is
turned off.

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **index** (*int*) – index of the asset to reconfigure
  * **manager** (*str*) – address allowed to change nonzero addresses
    for this asset
  * **reserve** (*str*) – account whose holdings of this asset should
    be reported as “not minted”
  * **freeze** (*str*) – account allowed to change frozen state of
    holdings of this asset
  * **clawback** (*str*) – account allowed take units of this asset
    from any account
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

### *class* AssetFreezeTxn(sender, sp, index, target, new_freeze_state, note=None, lease=None, rekey_to=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a transaction for freezing or unfreezing an account’s asset
holdings. Must be issued by the asset’s freeze manager.

* **Parameters:**
  * **sender** (*str*) – address of the sender, who must be the asset’s freeze
    manager
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **index** (*int*) – index of the asset
  * **target** (*str*) – address having its assets frozen or unfrozen
  * **new_freeze_state** (*bool*) – true if the assets should be frozen, false if
    they should be transferrable
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### genesis_hash

* **Type:**
  str

#### index

* **Type:**
  int

#### target

* **Type:**
  str

#### new_freeze_state

* **Type:**
  bool

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

#### dictify()

### *class* AssetTransferTxn(sender, sp, receiver, amt, index, close_assets_to=None, revocation_target=None, note=None, lease=None, rekey_to=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a transaction for asset transfer.

To begin accepting an asset, supply the same address as both sender and
receiver, and set amount to 0 (or use AssetOptInTxn)

To revoke an asset, set revocation_target, and issue the transaction from
the asset’s revocation manager account.

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **receiver** (*str*) – address of the receiver
  * **amt** (*int*) – amount of asset base units to send
  * **index** (*int*) – index of the asset
  * **close_assets_to** (*string**,* *optional*) – send all of sender’s remaining
    assets, after paying amt to receiver, to this address
  * **revocation_target** (*string**,* *optional*) – send assets from this address,
    rather than the sender’s address (can only be used by an asset’s
    revocation manager, also known as clawback)
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### genesis_hash

* **Type:**
  str

#### index

* **Type:**
  int

#### amount

* **Type:**
  int

#### receiver

* **Type:**
  string

#### close_assets_to

* **Type:**
  string

#### revocation_target

* **Type:**
  string

#### note

* **Type:**
  bytes

#### genesis_id

* **Type:**
  str

#### type

* **Type:**
  str

#### lease

* **Type:**
  byte[32]

#### rekey_to

* **Type:**
  str

#### dictify()

### *class* AssetOptInTxn(sender, sp, index, note=None, lease=None, rekey_to=None)

Bases: [`AssetTransferTxn`](#algosdk.transaction.AssetTransferTxn)

Make a transaction that will opt in to an ASA

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the ASA to opt into
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction

### See AssetTransferTxn

### *class* AssetCloseOutTxn(sender, sp, receiver, index, note=None, lease=None, rekey_to=None)

Bases: [`AssetTransferTxn`](#algosdk.transaction.AssetTransferTxn)

Make a transaction that will send all of an ASA away, and opt out of it.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **receiver** (*str*) – address of the receiver
  * **index** (*int*) – the ASA to opt into
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction

### See AssetTransferTxn

### *class* StateSchema(num_uints=None, num_byte_slices=None)

Bases: `object`

Restricts state for an application call.

* **Parameters:**
  * **num_uints** (*int**,* *optional*) – number of uints to store
  * **num_byte_slices** (*int**,* *optional*) – number of byte slices to store

#### num_uints

* **Type:**
  int

#### num_byte_slices

* **Type:**
  int

#### dictify()

#### *static* undictify(d)

### *class* OnComplete(value, names=None, \*, module=None, qualname=None, type=None, start=1, boundary=None)

Bases: `IntEnum`

#### NoOpOC *= 0*

#### OptInOC *= 1*

#### CloseOutOC *= 2*

#### ClearStateOC *= 3*

#### UpdateApplicationOC *= 4*

#### DeleteApplicationOC *= 5*

### *class* ApplicationCallTxn(sender, sp, index, on_complete, local_schema=None, global_schema=None, approval_program=None, clear_program=None, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, extra_pages=0, boxes=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a transaction that interacts with the application system.

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **index** (*int*) – index of the application to call; 0 if creating a new application
  * **on_complete** ([*OnComplete*](#algosdk.transaction.OnComplete)) – intEnum representing what app should do on completion
  * **local_schema** ([*StateSchema*](#algosdk.transaction.StateSchema)*,* *optional*) – restricts what can be stored by created application;
    must be omitted if not creating an application
  * **global_schema** ([*StateSchema*](#algosdk.transaction.StateSchema)*,* *optional*) – restricts what can be stored by created application;
    must be omitted if not creating an application
  * **approval_program** (*bytes**,* *optional*) – the program to run on transaction approval;
    must be omitted if not creating or updating an application
  * **clear_program** (*bytes**,* *optional*) – the program to run when state is being cleared;
    must be omitted if not creating or updating an application
  * **app_args** (*list**[**bytes**]**,* *optional*) – list of arguments to the application, each argument itself a buf
  * **accounts** (*list**[**string**]**,* *optional*) – list of additional accounts involved in call
  * **foreign_apps** (*list**[**int**]**,* *optional*) – list of other applications (identified by index) involved in call
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **extra_pages** (*int**,* *optional*) – additional program space for supporting larger programs.  A page is 1024 bytes.
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

#### sender

* **Type:**
  str

#### fee

* **Type:**
  int

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### genesis_hash

* **Type:**
  str

#### index

* **Type:**
  int

#### on_complete

* **Type:**
  int

#### local_schema

* **Type:**
  [StateSchema](#algosdk.transaction.StateSchema)

#### global_schema

* **Type:**
  [StateSchema](#algosdk.transaction.StateSchema)

#### approval_program

* **Type:**
  bytes

#### clear_program

* **Type:**
  bytes

#### app_args

* **Type:**
  list[bytes]

#### accounts

* **Type:**
  list[str]

#### foreign_apps

* **Type:**
  list[int]

#### foreign_assets

* **Type:**
  list[int]

#### extra_pages

* **Type:**
  int

#### boxes

* **Type:**
  list[(int, bytes)]

#### *static* state_schema(schema)

Confirm the argument is a StateSchema, or false which is coerced to None

#### *static* teal_bytes(teal)

Confirm the argument is bytes-like, or false which is coerced to None

#### *static* bytes_list(lst)

Confirm or coerce list elements to bytes. Return None for empty/false lst.

#### *static* int_list(lst)

Confirm or coerce list elements to int. Return None for empty/false lst.

#### dictify()

### *class* ApplicationCreateTxn(sender, sp, on_complete, approval_program, clear_program, global_schema, local_schema, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, extra_pages=0, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will create an application.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **on_complete** ([*OnComplete*](#algosdk.transaction.OnComplete)) – what application should so once the program is done being run
  * **approval_program** (*bytes*) – the compiled TEAL that approves a transaction
  * **clear_program** (*bytes*) – the compiled TEAL that runs when clearing state
  * **global_schema** ([*StateSchema*](#algosdk.transaction.StateSchema)) – restricts the number of ints and byte slices in the global state
  * **local_schema** ([*StateSchema*](#algosdk.transaction.StateSchema)) – restricts the number of ints and byte slices in the per-user local state
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **extra_pages** (*int**,* *optional*) – provides extra program size
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* ApplicationUpdateTxn(sender, sp, index, approval_program, clear_program, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will change an application’s approval and clear programs.

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the application to update
  * **approval_program** (*bytes*) – the new compiled TEAL that approves a transaction
  * **clear_program** (*bytes*) – the new compiled TEAL that runs when clearing state
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* ApplicationDeleteTxn(sender, sp, index, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will delete an application

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the application to update
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* ApplicationOptInTxn(sender, sp, index, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will opt in to an application

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the application to update
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* ApplicationCloseOutTxn(sender, sp, index, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will close out a user’s state in an application

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the application to update
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* ApplicationClearStateTxn(sender, sp, index, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will clear a user’s state for an application

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the application to update
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* ApplicationNoOpTxn(sender, sp, index, app_args=None, accounts=None, foreign_apps=None, foreign_assets=None, note=None, lease=None, rekey_to=None, boxes=None)

Bases: [`ApplicationCallTxn`](#algosdk.transaction.ApplicationCallTxn)

Make a transaction that will do nothing on application completion
: In other words, just call the application

* **Parameters:**
  * **sender** (*str*) – address of sender
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – contains information such as fee and genesis hash
  * **index** (*int*) – the application to update
  * **app_args** (*list**[**bytes**]**,* *optional*) – any additional arguments to the application
  * **accounts** (*list**[**str**]**,* *optional*) – any additional accounts to supply to the application
  * **foreign_apps** (*list**[**int**]**,* *optional*) – any other apps used by the application, identified by app index
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – transaction note field
  * **lease** (*bytes**,* *optional*) – transaction lease field
  * **rekey_to** (*str**,* *optional*) – rekey-to field, see Transaction
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

### See ApplicationCallTxn

### *class* SignedTransaction(transaction: [Transaction](#algosdk.transaction.Transaction), signature, authorizing_address=None)

Bases: `object`

Represents a signed transaction.

* **Parameters:**
  * **transaction** ([*Transaction*](#algosdk.transaction.Transaction)) – transaction that was signed
  * **signature** (*str*) – signature of a single address
  * **authorizing_address** (*str**,* *optional*) – the address authorizing the signed transaction, if different from sender

#### transaction

* **Type:**
  [Transaction](#algosdk.transaction.Transaction)

#### signature

* **Type:**
  str

#### authorizing_address

* **Type:**
  str

#### get_txid()

Get the transaction’s ID.

* **Returns:**
  transaction ID
* **Return type:**
  str

#### dictify()

#### *static* undictify(d)

### *class* MultisigTransaction(transaction: [Transaction](#algosdk.transaction.Transaction), multisig: [Multisig](#algosdk.transaction.Multisig))

Bases: `object`

Represents a signed transaction.

* **Parameters:**
  * **transaction** ([*Transaction*](#algosdk.transaction.Transaction)) – transaction that was signed
  * **multisig** ([*Multisig*](#algosdk.transaction.Multisig)) – multisig account and signatures

#### transaction

* **Type:**
  [Transaction](#algosdk.transaction.Transaction)

#### multisig

* **Type:**
  [Multisig](#algosdk.transaction.Multisig)

#### auth_addr

* **Type:**
  str, optional

#### sign(private_key)

Sign the multisig transaction.

* **Parameters:**
  **private_key** (*str*) – private key of signing account

#### NOTE
A new signature will replace the old if there is already a
signature for the address. To sign another transaction, you can
either overwrite the signatures in the current Multisig, or you
can use Multisig.get_multisig_account() to get a new multisig
object with the same addresses.

#### get_txid()

Get the transaction’s ID.

* **Returns:**
  transaction ID
* **Return type:**
  str

#### dictify()

#### *static* undictify(d)

#### *static* merge(part_stxs: List[[MultisigTransaction](#algosdk.transaction.MultisigTransaction)])

Merge partially signed multisig transactions.

* **Parameters:**
  **part_stxs** ([*MultisigTransaction*](#algosdk.transaction.MultisigTransaction)*[**]*) – list of partially signed
  multisig transactions
* **Returns:**
  multisig transaction containing signatures
* **Return type:**
  [MultisigTransaction](#algosdk.transaction.MultisigTransaction)

#### NOTE
Only use this if you are given two partially signed multisig
transactions. To append a signature to a multisig transaction, just
use MultisigTransaction.sign()

### *class* Multisig(version, threshold, addresses)

Bases: `object`

Represents a multisig account and signatures.

* **Parameters:**
  * **version** (*int*) – currently, the version is 1
  * **threshold** (*int*) – how many signatures are necessary
  * **addresses** (*str**[**]*) – addresses in the multisig account

#### version

* **Type:**
  int

#### threshold

* **Type:**
  int

#### subsigs

* **Type:**
  [MultisigSubsig](#algosdk.transaction.MultisigSubsig)[]

#### validate()

Check if the multisig account is valid.

#### address()

Return the multisig account address.

#### verify(message)

Verify that the multisig is valid for the message.

#### dictify()

#### json_dictify()

#### *static* undictify(d)

#### get_multisig_account()

Return a Multisig object without signatures.

#### get_public_keys()

Return the base32 encoded addresses for the multisig account.

### *class* MultisigSubsig(public_key, signature=None)

Bases: `object`

#### public_key

* **Type:**
  bytes

#### signature

* **Type:**
  bytes

#### dictify()

#### json_dictify()

#### *static* undictify(d)

### *class* LogicSig(program, args=None)

Bases: `object`

Represents a logic signature

NOTE: LogicSig cannot sign transactions in all cases.  Instead, use LogicSigAccount as a safe, general purpose signing mechanism.  Since LogicSig does not track the provided signature’s public key, LogicSig cannot sign transactions when delegated to a non-multisig account \_and_ the sender is not the delegating account.

* **Parameters:**
  * **logic** (*bytes*) – compiled program
  * **args** (*list**[**bytes**]*) – args are not signed, but are checked by logic

#### logic

* **Type:**
  bytes

#### sig

* **Type:**
  bytes

#### msig

* **Type:**
  [Multisig](#algosdk.transaction.Multisig)

#### args

* **Type:**
  list[bytes]

#### dictify()

#### *static* undictify(d)

#### verify(public_key)

Verifies LogicSig against the transaction’s sender address

* **Parameters:**
  **public_key** (*bytes*) – sender address
* **Returns:**
  true if the signature is valid (the sender address matches                the logic hash or the signature is valid against the sender                address), false otherwise
* **Return type:**
  bool

#### address()

Compute hash of the logic sig program (that is the same as escrow
account address) as string address

* **Returns:**
  program address
* **Return type:**
  str

#### *static* sign_program(program, private_key)

#### *static* single_sig_multisig(program, private_key, multisig)

#### sign(private_key, multisig=None)

Creates signature (if no pk provided) or multi signature

* **Parameters:**
  * **private_key** (*str*) – private key of signing account
  * **multisig** ([*Multisig*](#algosdk.transaction.Multisig)) – optional multisig account without signatures
    to sign with
* **Raises:**
  * [**InvalidSecretKeyError**](error.md#algosdk.error.InvalidSecretKeyError) – if no matching private key in multisig                object
  * [**LogicSigOverspecifiedSignature**](error.md#algosdk.error.LogicSigOverspecifiedSignature) – if the opposite signature type has
        already been provided

#### append_to_multisig(private_key)

Appends a signature to multi signature

* **Parameters:**
  **private_key** (*str*) – private key of signing account
* **Raises:**
  [**InvalidSecretKeyError**](error.md#algosdk.error.InvalidSecretKeyError) – if no matching private key in multisig                object

### *class* LogicSigAccount(program: bytes, args: List[bytes] | None = None)

Bases: `object`

Represents an account that can sign with a LogicSig program.

#### dictify()

#### *static* undictify(d)

#### is_delegated()

Check if this LogicSigAccount has been delegated to another account with
a signature.

* **Returns:**
  True if and only if this is a delegated LogicSigAccount.
* **Return type:**
  bool

#### verify()

Verifies the LogicSig’s program and signatures.

* **Returns:**
  True if and only if the LogicSig program and signatures are
  : valid.
* **Return type:**
  bool

#### address()

Get the address of this LogicSigAccount.

If the LogicSig is delegated to another account, this will return the
address of that account.

If the LogicSig is not delegated to another account, this will return an
escrow address that is the hash of the LogicSig’s program code.

#### sign_multisig(multisig: [Multisig](#algosdk.transaction.Multisig), private_key: str)

Turns this LogicSigAccount into a delegated LogicSig.

This type of LogicSig has the authority to sign transactions on behalf
of another account, called the delegating account. Use this function if
the delegating account is a multisig account.

* **Parameters:**
  * **multisig** ([*Multisig*](#algosdk.transaction.Multisig)) – The multisig delegating account
  * **private_key** (*str*) – The private key of one of the members of the
    delegating multisig account. Use append_to_multisig to add
    additional signatures from other members.
* **Raises:**
  * [**InvalidSecretKeyError**](error.md#algosdk.error.InvalidSecretKeyError) – if no matching private key in multisig
        object
  * [**LogicSigOverspecifiedSignature**](error.md#algosdk.error.LogicSigOverspecifiedSignature) – if this LogicSigAccount has already
        been signed with a single private key.

#### append_to_multisig(private_key: str)

Adds an additional signature from a member of the delegating multisig
account.

* **Parameters:**
  **private_key** (*str*) – The private key of one of the members of the
  delegating multisig account.
* **Raises:**
  [**InvalidSecretKeyError**](error.md#algosdk.error.InvalidSecretKeyError) – if no matching private key in multisig
      object

#### sign(private_key: str)

Turns this LogicSigAccount into a delegated LogicSig.

This type of LogicSig has the authority to sign transactions on behalf
of another account, called the delegating account. If the delegating
account is a multisig account, use sign_multisig instead.

* **Parameters:**
  **private_key** (*str*) – The private key of the delegating account.
* **Raises:**
  [**LogicSigOverspecifiedSignature**](error.md#algosdk.error.LogicSigOverspecifiedSignature) – if this LogicSigAccount has already
      been signed by a multisig account.

### *class* LogicSigTransaction(transaction: [Transaction](#algosdk.transaction.Transaction), lsig: [LogicSig](#algosdk.transaction.LogicSig) | [LogicSigAccount](#algosdk.transaction.LogicSigAccount))

Bases: `object`

Represents a logic signed transaction

* **Parameters:**
  * **transaction** ([*Transaction*](#algosdk.transaction.Transaction)) – 
  * **lsig** ([*LogicSig*](#algosdk.transaction.LogicSig) *or* [*LogicSigAccount*](#algosdk.transaction.LogicSigAccount)) – 

#### transaction

* **Type:**
  [Transaction](#algosdk.transaction.Transaction)

#### lsig

* **Type:**
  [LogicSig](#algosdk.transaction.LogicSig)

#### auth_addr

* **Type:**
  str, optional

#### verify()

Verify the LogicSig used to sign the transaction

* **Returns:**
  true if the signature is valid, false otherwise
* **Return type:**
  bool

#### get_txid()

Get the transaction’s ID.

* **Returns:**
  transaction ID
* **Return type:**
  str

#### dictify()

#### *static* undictify(d)

### *class* StateProofTxn(sender, sp, state_proof=None, state_proof_message=None, state_proof_type=None)

Bases: [`Transaction`](#algosdk.transaction.Transaction)

Represents a state proof transaction

* **Parameters:**
  * **sender** (*str*) – address of the sender
  * **state_proof** (*dict**(**)**,* *optional*) – 
  * **state_proof_message** (*dict**(**)**,* *optional*) – 
  * **state_proof_type** (*str**,* *optional*) – state proof type
  * **sp** ([*SuggestedParams*](#algosdk.transaction.SuggestedParams)) – suggested params from algod

#### sender

* **Type:**
  str

#### sprf

* **Type:**
  dict()

#### sprfmsg

* **Type:**
  dict()

#### sprf_type

* **Type:**
  str

#### first_valid_round

* **Type:**
  int

#### last_valid_round

* **Type:**
  int

#### genesis_id

* **Type:**
  str

#### genesis_hash

* **Type:**
  str

#### type

* **Type:**
  str

#### dictify()

### write_to_file(txns, path, overwrite=True)

Write signed or unsigned transactions to a file.

* **Parameters:**
  * **txns** ([*Transaction*](#algosdk.transaction.Transaction)*[**]**,* [*SignedTransaction*](#algosdk.transaction.SignedTransaction)*[**]**, or* [*MultisigTransaction*](#algosdk.transaction.MultisigTransaction)*[**]*) – can be a mix of the three
  * **path** (*str*) – file to write to
  * **overwrite** (*bool*) – whether or not to overwrite what’s already in the
    file; if False, transactions will be appended to the file
* **Returns:**
  true if the transactions have been written to the file
* **Return type:**
  bool

### retrieve_from_file(path)

Retrieve signed or unsigned transactions from a file.

* **Parameters:**
  **path** (*str*) – file to read from
* **Returns:**
  can be a mix of the three
* **Return type:**
  [Transaction](#algosdk.transaction.Transaction)[], [SignedTransaction](#algosdk.transaction.SignedTransaction)[], or [MultisigTransaction](#algosdk.transaction.MultisigTransaction)[]

### *class* TxGroup(txns)

Bases: `object`

#### dictify()

#### *static* undictify(d)

### calculate_group_id(txns)

Calculate group id for a given list of unsigned transactions

* **Parameters:**
  **txns** (*list*) – list of unsigned transactions
* **Returns:**
  checksum value representing the group id
* **Return type:**
  bytes

### assign_group_id(txns, address=None)

Assign group id to a given list of unsigned transactions

* **Parameters:**
  * **txns** (*list*) – list of unsigned transactions
  * **address** (*str*) – optional sender address specifying which transaction
    return
* **Returns:**
  list of unsigned transactions with group property set
* **Return type:**
  txns (list)

### wait_for_confirmation(algod_client: [AlgodClient](v2client/algod.md#algosdk.v2client.algod.AlgodClient), txid: str, wait_rounds: int = 0, \*\*kwargs)

Block until a pending transaction is confirmed by the network.

* **Parameters:**
  * **algod_client** ([*algod.AlgodClient*](v2client/algod.md#algosdk.v2client.algod.AlgodClient)) – Instance of the algod client
  * **txid** (*str*) – transaction ID
  * **wait_rounds** (*int**,* *optional*) – The number of rounds to block for before
    exiting with an Exception. If not supplied, this will be 1000.

### create_dryrun(client: [AlgodClient](v2client/algod.md#algosdk.v2client.algod.AlgodClient), txns: List[[SignedTransaction](#algosdk.transaction.SignedTransaction) | [LogicSigTransaction](#algosdk.transaction.LogicSigTransaction) | [MultisigTransaction](#algosdk.transaction.MultisigTransaction)], protocol_version=None, latest_timestamp=None, round=None)

Create DryrunRequest object from a client and list of signed transactions

* **Parameters:**
  * **algod_client** ([*algod.AlgodClient*](v2client/algod.md#algosdk.v2client.algod.AlgodClient)) – Instance of the algod client
  * **txns** (*List**[*[*SignedTransaction*](#algosdk.transaction.SignedTransaction)*]*) – transaction ID
  * **protocol_version** (*string**,* *optional*) – The protocol version to evaluate against
  * **latest_timestamp** (*int**,* *optional*) – The latest timestamp to evaluate against
  * **round** (*int**,* *optional*) – The round to evaluate against

### decode_programs(app)
