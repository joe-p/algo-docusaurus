# kmd

### *class* KMDClient(kmd_token, kmd_address)

Bases: `object`

Client class for kmd. Handles all kmd requests.

* **Parameters:**
  * **kmd_token** (*str*) – kmd API token
  * **kmd_address** (*str*) – kmd address

#### kmd_token

* **Type:**
  str

#### kmd_address

* **Type:**
  str

#### kmd_request(method, requrl, params=None, data=None)

Execute a given request.

* **Parameters:**
  * **method** (*str*) – request method
  * **requrl** (*str*) – url for the request
  * **params** (*dict**,* *optional*) – parameters for the request
  * **data** (*dict**,* *optional*) – data in the body of the request
* **Returns:**
  loaded from json response body
* **Return type:**
  dict

#### versions()

Get kmd versions.

* **Returns:**
  list of versions
* **Return type:**
  str[]

#### list_wallets()

List all wallets hosted on node.

* **Returns:**
  list of dictionaries containing wallet information
* **Return type:**
  dict[]

#### create_wallet(name, pswd, driver_name='sqlite', master_deriv_key=None)

Create a new wallet.

* **Parameters:**
  * **name** (*str*) – wallet name
  * **pswd** (*str*) – wallet password
  * **driver_name** (*str**,* *optional*) – name of the driver
  * **master_deriv_key** (*str**,* *optional*) – if recovering a wallet, include
* **Returns:**
  dictionary containing wallet information
* **Return type:**
  dict

#### get_wallet(handle)

Get wallet information.

* **Parameters:**
  **handle** (*str*) – wallet handle token
* **Returns:**
  dictionary containing wallet handle and wallet information
* **Return type:**
  dict

#### init_wallet_handle(id, password)

Initialize a handle for the wallet.

* **Parameters:**
  * **id** (*str*) – wallet ID
  * **password** (*str*) – wallet password
* **Returns:**
  wallet handle token
* **Return type:**
  str

#### release_wallet_handle(handle)

Deactivate the handle for the wallet.

Args:
handle (str): wallet handle token

* **Returns:**
  True if the handle has been deactivated
* **Return type:**
  bool

#### renew_wallet_handle(handle)

Renew the wallet handle.

* **Parameters:**
  **handle** (*str*) – wallet handle token
* **Returns:**
  dictionary containing wallet handle and wallet information
* **Return type:**
  dict

#### rename_wallet(id, password, new_name)

Rename the wallet.

* **Parameters:**
  * **id** (*str*) – wallet ID
  * **password** (*str*) – wallet password
  * **new_name** (*str*) – new name for the wallet
* **Returns:**
  dictionary containing wallet information
* **Return type:**
  dict

#### export_master_derivation_key(handle, password)

Get the wallet’s master derivation key.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **password** (*str*) – wallet password
* **Returns:**
  master derivation key
* **Return type:**
  str

#### import_key(handle, private_key)

Import an account into the wallet.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **private_key** (*str*) – private key of account to be imported
* **Returns:**
  base32 address of the account
* **Return type:**
  str

#### export_key(handle, password, address)

Return an account private key.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **password** (*str*) – wallet password
  * **address** (*str*) – base32 address of the account
* **Returns:**
  private key
* **Return type:**
  str

#### generate_key(handle, display_mnemonic=True)

Generate a key in the wallet.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **display_mnemonic** (*bool**,* *optional*) – whether or not the mnemonic
    should be displayed
* **Returns:**
  base32 address of the generated account
* **Return type:**
  str

#### delete_key(handle, password, address)

Delete a key in the wallet.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **password** (*str*) – wallet password
  * **address** (*str*) – base32 address of account to be deleted
* **Returns:**
  True if the account has been deleted
* **Return type:**
  bool

#### list_keys(handle)

List all keys in the wallet.

* **Parameters:**
  **handle** (*str*) – wallet handle token
* **Returns:**
  list of base32 addresses in the wallet
* **Return type:**
  str[]

#### sign_transaction(handle, password, txn, signing_address=None)

Sign a transaction.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **password** (*str*) – wallet password
  * **txn** ([*Transaction*](transaction.md#algosdk.transaction.Transaction)) – transaction to be signed
  * **signing_address** (*str**,* *optional*) – sign the transaction with SK corresponding to base32
    signing_address, if provided, rather than SK corresponding to sender
* **Returns:**
  signed transaction with signature of sender
* **Return type:**
  [SignedTransaction](transaction.md#algosdk.transaction.SignedTransaction)

#### list_multisig(handle)

List all multisig accounts in the wallet.

* **Parameters:**
  **handle** (*str*) – wallet handle token
* **Returns:**
  list of base32 multisig account addresses
* **Return type:**
  str[]

#### import_multisig(handle, multisig)

Import a multisig account into the wallet.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **multisig** ([*Multisig*](transaction.md#algosdk.transaction.Multisig)) – multisig account to be imported
* **Returns:**
  base32 address of the imported multisig account
* **Return type:**
  str

#### export_multisig(handle, address)

Export a multisig account.

* **Parameters:**
  * **handle** (*str*) – wallet token handle
  * **address** (*str*) – base32 address of the multisig account
* **Returns:**
  multisig object corresponding to the address
* **Return type:**
  [Multisig](transaction.md#algosdk.transaction.Multisig)

#### delete_multisig(handle, password, address)

Delete a multisig account.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **password** (*str*) – wallet password
  * **address** (*str*) – base32 address of the multisig account to delete
* **Returns:**
  True if the multisig account has been deleted
* **Return type:**
  bool

#### sign_multisig_transaction(handle, password, public_key, mtx)

Sign a multisig transaction for the given public key.

* **Parameters:**
  * **handle** (*str*) – wallet handle token
  * **password** (*str*) – wallet password
  * **public_key** (*str*) – base32 address that is signing the transaction
  * **mtx** ([*MultisigTransaction*](transaction.md#algosdk.transaction.MultisigTransaction)) – multisig transaction containing
    unsigned or partially signed multisig
* **Returns:**
  multisig transaction with added signature
* **Return type:**
  [MultisigTransaction](transaction.md#algosdk.transaction.MultisigTransaction)
