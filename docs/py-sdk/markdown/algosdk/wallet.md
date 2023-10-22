# wallet

### *class* Wallet(wallet_name, wallet_pswd, kmd_client, driver_name='sqlite', mdk=None)

Bases: `object`

Represents a wallet.

* **Parameters:**
  * **wallet_name** (*str*) – wallet name
  * **wallet_pswd** (*str*) – wallet password
  * **kmd_client** ([*KMDClient*](kmd.md#algosdk.kmd.KMDClient)) – a KMDClient to handle wallet requests
  * **mdk** (*str**,* *optional*) – master derivation key if recovering wallet

#### NOTE
When initializing, if the wallet doesn’t already exist, it will be
created.

#### name

* **Type:**
  str

#### pswd

* **Type:**
  str

#### kcl

* **Type:**
  [KMDClient](kmd.md#algosdk.kmd.KMDClient)

#### id

* **Type:**
  str

#### handle

* **Type:**
  str

#### info()

Get wallet information.

* **Returns:**
  dictionary containing wallet handle and wallet information
* **Return type:**
  dict

#### list_keys()

List all keys in the wallet.

* **Returns:**
  list of base32 addresses in the wallet
* **Return type:**
  str[]

#### rename(new_name)

Rename the wallet.

* **Parameters:**
  **new_name** (*str*) – new name for the wallet
* **Returns:**
  dictionary containing wallet information
* **Return type:**
  dict

#### get_mnemonic()

Get recovery phrase mnemonic for the wallet.

* **Returns:**
  mnemonic converted from the wallet’s master derivation key
* **Return type:**
  str

#### export_master_derivation_key()

Get the wallet’s master derivation key.

* **Returns:**
  master derivation key
* **Return type:**
  str

#### import_key(private_key)

Import an account into a wallet.

* **Parameters:**
  **private_key** (*str*) – private key of account to be imported
* **Returns:**
  base32 address of the account
* **Return type:**
  str

#### export_key(address)

Return an account private key.

* **Parameters:**
  **address** (*str*) – base32 address of the account
* **Returns:**
  private key
* **Return type:**
  str

#### generate_key(display_mnemonic=True)

Generate a key in the wallet.

* **Parameters:**
  **display_mnemonic** (*bool**,* *optional*) – whether or not the mnemonic
  should be displayed
* **Returns:**
  base32 address of the generated account
* **Return type:**
  str

#### delete_key(address)

Delete a key in the wallet.

* **Parameters:**
  **address** (*str*) – base32 address of account to be deleted
* **Returns:**
  True if the account has been deleted
* **Return type:**
  bool

#### sign_transaction(txn)

Sign a transaction.

* **Parameters:**
  **txn** ([*Transaction*](transaction.md#algosdk.transaction.Transaction)) – transaction to be signed
* **Returns:**
  signed transaction with signature of sender
* **Return type:**
  [SignedTransaction](transaction.md#algosdk.transaction.SignedTransaction)

#### list_multisig()

List all multisig accounts in the wallet.

* **Returns:**
  list of base32 multisig account addresses
* **Return type:**
  str[]

#### import_multisig(multisig)

Import a multisig account into the wallet.

* **Parameters:**
  **multisig** ([*Multisig*](transaction.md#algosdk.transaction.Multisig)) – multisig account to be imported
* **Returns:**
  base32 address of the imported multisig account
* **Return type:**
  str

#### export_multisig(address)

Export a multisig account.

* **Parameters:**
  **address** (*str*) – base32 address of the multisig account
* **Returns:**
  multisig object corresponding to the address
* **Return type:**
  [Multisig](transaction.md#algosdk.transaction.Multisig)

#### delete_multisig(address)

Delete a multisig account.

* **Parameters:**
  **address** (*str*) – base32 address of the multisig account to delete
* **Returns:**
  True if the multisig account has been deleted
* **Return type:**
  bool

#### sign_multisig_transaction(public_key, mtx)

Sign a multisig transaction for the given public key.

* **Parameters:**
  * **public_key** (*str*) – base32 address that is signing the transaction
  * **mtx** ([*MultisigTransaction*](transaction.md#algosdk.transaction.MultisigTransaction)) – object containing unsigned or
    partially signed multisig
* **Returns:**
  multisig transaction with added signature
* **Return type:**
  [MultisigTransaction](transaction.md#algosdk.transaction.MultisigTransaction)

#### automate_handle()

Get a new handle or renews the current one.

* **Returns:**
  True if a handle is active
* **Return type:**
  bool

#### init_handle()

Get a new handle.

* **Returns:**
  True if a handle is active
* **Return type:**
  bool

#### renew_handle()

Renew the current handle.

* **Returns:**
  dictionary containing wallet handle and wallet information
* **Return type:**
  dict

#### release_handle()

Deactivate the current handle.

* **Returns:**
  True if the handle has been deactivated
* **Return type:**
  bool
