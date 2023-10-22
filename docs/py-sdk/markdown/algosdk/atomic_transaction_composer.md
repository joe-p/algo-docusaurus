# atomic_transaction_composer

### populate_foreign_array(value_to_add: T, foreign_array: List[T], zero_value: T | None = None)

Add a value to an application call’s foreign array. The addition will be as
compact as possible, and this function will return an index used to
reference value_to_add in the foreign_array.

* **Parameters:**
  * **value_to_add** – value to add to the array. If the value is already
    present, it will not be added again. Instead, the existing index
    will be returned.
  * **foreign_array** – the existing foreign array. This input may be modified
    to append value_to_add.
  * **zero_value** – If provided, this value indicates two things: the 0 value is
    reserved for this array so foreign_array must start at index 1;
    additionally, if value_to_add equals zero_value, then
    value_to_add will not be added to the array and the 0 index will
    be returned.

### *class* AtomicTransactionComposerStatus(value, names=None, \*, module=None, qualname=None, type=None, start=1, boundary=None)

Bases: `IntEnum`

#### BUILDING *= 0*

#### BUILT *= 1*

#### SIGNED *= 2*

#### SUBMITTED *= 3*

#### COMMITTED *= 4*

### *class* TransactionSigner

Bases: `ABC`

Represents an object which can sign transactions from an atomic transaction group.

#### *abstract* sign_transactions(txn_group: List[[Transaction](transaction.md#algosdk.transaction.Transaction)], indexes: List[int])

### *class* AccountTransactionSigner(private_key: str)

Bases: [`TransactionSigner`](#algosdk.atomic_transaction_composer.TransactionSigner)

Represents a Transaction Signer for an account that can sign transactions from an
atomic transaction group.

* **Parameters:**
  **private_key** (*str*) – private key of signing account

#### sign_transactions(txn_group: List[[Transaction](transaction.md#algosdk.transaction.Transaction)], indexes: List[int])

Sign transactions in a transaction group given the indexes.

Returns an array of encoded signed transactions. The length of the
array will be the same as the length of indexesToSign, and each index i in the array
corresponds to the signed transaction from txnGroup[indexesToSign[i]].

* **Parameters:**
  * **txn_group** (*list**[*[*Transaction*](transaction.md#algosdk.transaction.Transaction)*]*) – atomic group of transactions
  * **indexes** (*list**[**int**]*) – array of indexes in the atomic transaction group that should be signed

### *class* LogicSigTransactionSigner(lsig: [LogicSigAccount](transaction.md#algosdk.transaction.LogicSigAccount))

Bases: [`TransactionSigner`](#algosdk.atomic_transaction_composer.TransactionSigner)

Represents a Transaction Signer for a LogicSig that can sign transactions from an
atomic transaction group.

* **Parameters:**
  **lsig** ([*LogicSigAccount*](transaction.md#algosdk.transaction.LogicSigAccount)) – LogicSig account

#### sign_transactions(txn_group: List[[Transaction](transaction.md#algosdk.transaction.Transaction)], indexes: List[int])

Sign transactions in a transaction group given the indexes.

Returns an array of encoded signed transactions. The length of the
array will be the same as the length of indexesToSign, and each index i in the array
corresponds to the signed transaction from txnGroup[indexesToSign[i]].

* **Parameters:**
  * **txn_group** (*list**[*[*Transaction*](transaction.md#algosdk.transaction.Transaction)*]*) – atomic group of transactions
  * **indexes** (*list**[**int**]*) – array of indexes in the atomic transaction group that should be signed

### *class* MultisigTransactionSigner(msig: [Multisig](transaction.md#algosdk.transaction.Multisig), sks: List[str])

Bases: [`TransactionSigner`](#algosdk.atomic_transaction_composer.TransactionSigner)

Represents a Transaction Signer for a Multisig that can sign transactions from an
atomic transaction group.

* **Parameters:**
  * **msig** ([*Multisig*](transaction.md#algosdk.transaction.Multisig)) – Multisig account
  * **sks** (*str*) – private keys of multisig

#### sign_transactions(txn_group: List[[Transaction](transaction.md#algosdk.transaction.Transaction)], indexes: List[int])

Sign transactions in a transaction group given the indexes.

Returns an array of encoded signed transactions. The length of the
array will be the same as the length of indexesToSign, and each index i in the array
corresponds to the signed transaction from txnGroup[indexesToSign[i]].

* **Parameters:**
  * **txn_group** (*list**[*[*Transaction*](transaction.md#algosdk.transaction.Transaction)*]*) – atomic group of transactions
  * **indexes** (*list**[**int**]*) – array of indexes in the atomic transaction group that should be signed

### *class* EmptySigner

Bases: [`TransactionSigner`](#algosdk.atomic_transaction_composer.TransactionSigner)

#### sign_transactions(txn_group: List[[Transaction](transaction.md#algosdk.transaction.Transaction)], indexes: List[int])

### *class* TransactionWithSigner(txn: [Transaction](transaction.md#algosdk.transaction.Transaction), signer: [TransactionSigner](#algosdk.atomic_transaction_composer.TransactionSigner))

Bases: `object`

### *class* ABIResult(tx_id: str, raw_value: bytes, return_value: Any, decode_error: Exception | None, tx_info: dict, method: [Method](abi/method.md#algosdk.abi.method.Method))

Bases: `object`

### *class* AtomicTransactionResponse(confirmed_round: int, tx_ids: List[str], results: List[[ABIResult](#algosdk.atomic_transaction_composer.ABIResult)])

Bases: `object`

### *class* SimulateABIResult(tx_id: str, raw_value: bytes, return_value: Any, decode_error: Exception | None, tx_info: dict, method: [Method](abi/method.md#algosdk.abi.method.Method))

Bases: [`ABIResult`](#algosdk.atomic_transaction_composer.ABIResult)

### *class* SimulateEvalOverrides(\*, max_log_calls: int | None = None, max_log_size: int | None = None, allow_empty_signatures: bool | None = None, extra_opcode_budget: int | None = None)

Bases: `object`

#### *static* from_simulation_result(simulation_result: Dict[str, Any])

### *class* SimulateAtomicTransactionResponse(version: int, failure_message: str, failed_at: List[int] | None, simulate_response: Dict[str, Any], tx_ids: List[str], results: List[[SimulateABIResult](#algosdk.atomic_transaction_composer.SimulateABIResult)], eval_overrides: [SimulateEvalOverrides](#algosdk.atomic_transaction_composer.SimulateEvalOverrides) | None = None, exec_trace_config: SimulateTraceConfig | None = None)

Bases: `object`

### *class* AtomicTransactionComposer

Bases: `object`

Constructs an atomic transaction group which may contain a combination of
Transactions and ABI Method calls.

* **Parameters:**
  * **status** ([*AtomicTransactionComposerStatus*](#algosdk.atomic_transaction_composer.AtomicTransactionComposerStatus)) – IntEnum representing the current state of the composer
  * **method_dict** (*dict*) – dictionary of an index in the transaction list to a Method object
  * **txn_list** (*list**[*[*TransactionWithSigner*](#algosdk.atomic_transaction_composer.TransactionWithSigner)*]*) – list of transactions with signers
  * **signed_txns** (*list**[**GenericSignedTransaction**]*) – list of signed transactions
  * **tx_ids** (*list**[**str**]*) – list of individual transaction IDs in this atomic group

#### MAX_GROUP_SIZE *= 16*

#### MAX_APP_ARG_LIMIT *= 16*

#### get_status()

Returns the status of this composer’s transaction group.

#### get_tx_count()

Returns the number of transactions currently in this atomic group.

#### clone()

Creates a new composer with the same underlying transactions.
The new composer’s status will be BUILDING, so additional transactions
may be added to it.

#### add_transaction(txn_and_signer: [TransactionWithSigner](#algosdk.atomic_transaction_composer.TransactionWithSigner))

Adds a transaction to this atomic group.

An error will be thrown if the composer’s status is not BUILDING,
or if adding this transaction causes the current group to exceed
MAX_GROUP_SIZE.

* **Parameters:**
  **txn_and_signer** ([*TransactionWithSigner*](#algosdk.atomic_transaction_composer.TransactionWithSigner)) – 

#### add_method_call(app_id: int, method: [Method](abi/method.md#algosdk.abi.method.Method), sender: str, sp: [SuggestedParams](transaction.md#algosdk.transaction.SuggestedParams), signer: [TransactionSigner](#algosdk.atomic_transaction_composer.TransactionSigner), method_args: List[Any | [TransactionWithSigner](#algosdk.atomic_transaction_composer.TransactionWithSigner)] | None = None, on_complete: [OnComplete](transaction.md#algosdk.transaction.OnComplete) = OnComplete.NoOpOC, local_schema: [StateSchema](transaction.md#algosdk.transaction.StateSchema) | None = None, global_schema: [StateSchema](transaction.md#algosdk.transaction.StateSchema) | None = None, approval_program: bytes | None = None, clear_program: bytes | None = None, extra_pages: int = 0, accounts: List[str] | None = None, foreign_apps: List[int] | None = None, foreign_assets: List[int] | None = None, note: bytes | None = None, lease: bytes | None = None, rekey_to: str | None = None, boxes: List[Tuple[int, bytes]] | None = None)

Add a smart contract method call to this atomic group.

An error will be thrown if the composer’s status is not BUILDING,
if adding this transaction causes the current group to exceed
MAX_GROUP_SIZE, or if the provided arguments are invalid for
the given method.

* **Parameters:**
  * **app_id** (*int*) – application id of app that the method is being invoked on
  * **method** ([*Method*](abi/method.md#algosdk.abi.method.Method)) – ABI method object with initialized arguments and return types
  * **sender** (*str*) – address of the sender
  * **sp** ([*SuggestedParams*](transaction.md#algosdk.transaction.SuggestedParams)) – suggested params from algod
  * **signer** ([*TransactionSigner*](#algosdk.atomic_transaction_composer.TransactionSigner)) – signer that will sign the transactions
  * **method_args** (*list**[**ABIValue* *|* [*TransactionWithSigner*](#algosdk.atomic_transaction_composer.TransactionWithSigner)*]**,* *optional*) – list of arguments to be encoded
    or transactions that immediate precede this method call
  * **on_complete** ([*OnComplete*](transaction.md#algosdk.transaction.OnComplete)*,* *optional*) – intEnum representing what app should do on completion
    and if blank, it will default to a NoOp call
  * **local_schema** ([*StateSchema*](transaction.md#algosdk.transaction.StateSchema)*,* *optional*) – restricts what can be stored by created application;
    must be omitted if not creating an application
  * **global_schema** ([*StateSchema*](transaction.md#algosdk.transaction.StateSchema)*,* *optional*) – restricts what can be stored by created application;
    must be omitted if not creating an application
  * **approval_program** (*bytes**,* *optional*) – the program to run on transaction approval;
    must be omitted if not creating or updating an application
  * **clear_program** (*bytes**,* *optional*) – the program to run when state is being cleared;
    must be omitted if not creating or updating an application
  * **extra_pages** (*int**,* *optional*) – additional program space for supporting larger programs.
    A page is 1024 bytes.
  * **accounts** (*list**[**string**]**,* *optional*) – list of additional accounts involved in call
  * **foreign_apps** (*list**[**int**]**,* *optional*) – list of other applications (identified by index) involved in call
  * **foreign_assets** (*list**[**int**]**,* *optional*) – list of assets involved in call
  * **note** (*bytes**,* *optional*) – arbitrary optional bytes
  * **lease** (*byte**[**32**]**,* *optional*) – specifies a lease, and no other transaction
    with the same sender and lease can be confirmed in this
    transaction’s valid rounds
  * **rekey_to** (*str**,* *optional*) – additionally rekey the sender to this address
  * **boxes** (*list**[**(**int**,* *bytes**)**]**,* *optional*) – list of tuples specifying app id and key for boxes the app may access

#### build_group()

Finalize the transaction group and returns the finalized transactions with signers.
The composer’s status will be at least BUILT after executing this method.

* **Returns:**
  list of transactions with signers
* **Return type:**
  list[[TransactionWithSigner](#algosdk.atomic_transaction_composer.TransactionWithSigner)]

#### gather_signatures()

Obtain signatures for each transaction in this group. If signatures have already been obtained,
this method will return cached versions of the signatures.
The composer’s status will be at least SIGNED after executing this method.
An error will be thrown if signing any of the transactions fails.

* **Returns:**
  list of signed transactions
* **Return type:**
  List[GenericSignedTransaction]

#### submit(client: [AlgodClient](v2client/algod.md#algosdk.v2client.algod.AlgodClient))

Send the transaction group to the network, but don’t wait for it to be
committed to a block. An error will be thrown if submission fails.
The composer’s status must be SUBMITTED or lower before calling this method.
If submission is successful, this composer’s status will update to SUBMITTED.

Note: a group can only be submitted again if it fails.

* **Parameters:**
  **client** ([*AlgodClient*](v2client/algod.md#algosdk.v2client.algod.AlgodClient)) – Algod V2 client
* **Returns:**
  list of submitted transaction IDs
* **Return type:**
  List[str]

#### simulate(client: [AlgodClient](v2client/algod.md#algosdk.v2client.algod.AlgodClient), request: SimulateRequest | None = None)

Send the transaction group to the simulate endpoint and wait for results.
An error will be thrown if submission or execution fails.
The composer’s status must be SUBMITTED or lower before calling this method,
since execution is only allowed once.

* **Parameters:**
  * **client** ([*AlgodClient*](v2client/algod.md#algosdk.v2client.algod.AlgodClient)) – Algod V2 client
  * **request** (*models.SimulateRequest*) – SimulateRequest with options in simulation.
    The request’s transaction group will be overrwritten by the composer’s group, only simulation related options will be used.
* **Returns:**
  Object with simulation results for this
  : transaction group, a list of txIDs of the simulated transactions,
    an array of results for each method call transaction in this group.
    If a method has no return value (void), then the method results array
    will contain None for that method’s return value.
* **Return type:**
  [SimulateAtomicTransactionResponse](#algosdk.atomic_transaction_composer.SimulateAtomicTransactionResponse)

#### execute(client: [AlgodClient](v2client/algod.md#algosdk.v2client.algod.AlgodClient), wait_rounds: int)

Send the transaction group to the network and wait until it’s committed
to a block. An error will be thrown if submission or execution fails.
The composer’s status must be SUBMITTED or lower before calling this method,
since execution is only allowed once. If submission is successful,
this composer’s status will update to SUBMITTED.
If the execution is also successful, this composer’s status will update to COMMITTED.

Note: a group can only be submitted again if it fails.

* **Parameters:**
  * **client** ([*AlgodClient*](v2client/algod.md#algosdk.v2client.algod.AlgodClient)) – Algod V2 client
  * **wait_rounds** (*int*) – maximum number of rounds to wait for transaction confirmation
* **Returns:**
  Object with confirmed round for this transaction,
  : a list of txIDs of the submitted transactions, and an array of
    results for each method call transaction in this group. If a
    method has no return value (void), then the method results array
    will contain None for that method’s return value.
* **Return type:**
  [AtomicTransactionResponse](#algosdk.atomic_transaction_composer.AtomicTransactionResponse)

#### parse_result(method: [Method](abi/method.md#algosdk.abi.method.Method), txid: str, txn: Dict[str, Any])
