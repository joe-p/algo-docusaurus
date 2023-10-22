# v2client.algod

### *class* AlgodClient(algod_token: str, algod_address: str, headers: Dict[str, str] | None = None)

Bases: `object`

Client class for algod. Handles all algod requests.

* **Parameters:**
  * **algod_token** (*str*) – algod API token
  * **algod_address** (*str*) – algod address
  * **headers** (*dict**,* *optional*) – extra header name/value for all requests

#### algod_token

* **Type:**
  str

#### algod_address

* **Type:**
  str

#### headers

* **Type:**
  dict

#### algod_request(method: str, requrl: str, params: Mapping[str, Any] | Sequence[Tuple[str, Any]] | None = None, data: bytes | None = None, headers: Dict[str, str] | None = None, response_format: str | None = 'json')

Execute a given request.

* **Parameters:**
  * **method** (*str*) – request method
  * **requrl** (*str*) – url for the request
  * **params** (*ParamsType**,* *optional*) – parameters for the request
  * **data** (*bytes**,* *optional*) – data in the body of the request
  * **headers** (*dict**,* *optional*) – additional header for request
  * **response_format** (*str**,* *optional*) – format of the response
* **Returns:**
  dict loaded from json response body when response_format == “json”
  otherwise returns the response body as bytes

#### account_info(address: str, exclude: str | None = None, \*\*kwargs: Any)

Return account information.

* **Parameters:**
  **address** (*str*) – account public key

#### asset_info(asset_id: int, \*\*kwargs: Any)

Return information about a specific asset.

* **Parameters:**
  **asset_id** (*int*) – The ID of the asset to look up.

#### application_info(application_id: int, \*\*kwargs: Any)

Return information about a specific application.

* **Parameters:**
  **application_id** (*int*) – The ID of the application to look up.

#### application_box_by_name(application_id: int, box_name: bytes, \*\*kwargs: Any)

Return the value of an application’s box.

NOTE: box values are returned as base64-encoded strings.

* **Parameters:**
  * **application_id** (*int*) – The ID of the application to look up.
  * **box_name** (*bytes*) – The name or key of the box.

#### application_boxes(application_id: int, limit: int = 0, \*\*kwargs: Any)

Given an application ID, return all Box names. No particular ordering is guaranteed. Request fails when client or server-side configured limits prevent returning all Box names.

NOTE: box names are returned as base64-encoded strings.

* **Parameters:**
  * **application_id** (*int*) – The ID of the application to look up.
  * **limit** (*int**,* *optional*) – Max number of box names to return.
    If max is not set, or max == 0, returns all box-names up to the maximum configured by the algod server being queried.

#### account_asset_info(address: str, asset_id: int, \*\*kwargs: Any)

Return asset information for a specific account.

* **Parameters:**
  * **address** (*str*) – account public key
  * **asset_id** (*int*) – The ID of the asset to look up.

#### account_application_info(address: str, application_id: int, \*\*kwargs: Any)

Return application information for a specific account.

* **Parameters:**
  * **address** (*str*) – account public key
  * **application_id** (*int*) – The ID of the application to look up.

#### pending_transactions_by_address(address: str, limit: int = 0, response_format: str = 'json', \*\*kwargs: Any)

Get the list of pending transactions by address, sorted by priority,
in decreasing order, truncated at the end at MAX. If MAX = 0, returns
all pending transactions.

* **Parameters:**
  * **address** (*str*) – account public key
  * **limit** (*int**,* *optional*) – maximum number of transactions to return
  * **response_format** (*str*) – the format in which the response is returned: either
    “json” or “msgpack”

#### block_info(block: int | None = None, response_format: str = 'json', round_num: int | None = None, \*\*kwargs: Any)

Get the block for the given round.

* **Parameters:**
  * **block** (*int*) – block number
  * **response_format** (*str*) – the format in which the response is
    returned: either “json” or “msgpack”
  * **round_num** (*int**,* *optional*) – alias for block; specify one of these

#### ledger_supply(\*\*kwargs: Any)

Return supply details for node’s ledger.

#### status(\*\*kwargs: Any)

Return node status.

#### status_after_block(block_num: int | None = None, round_num: int | None = None, \*\*kwargs: Any)

Return node status immediately after blockNum.

* **Parameters:**
  * **block_num** – block number
  * **round_num** (*int**,* *optional*) – alias for block_num; specify one of
    these

#### send_transaction(txn: [SignedTransaction](../transaction.md#algosdk.transaction.SignedTransaction) | [LogicSigTransaction](../transaction.md#algosdk.transaction.LogicSigTransaction) | [MultisigTransaction](../transaction.md#algosdk.transaction.MultisigTransaction), \*\*kwargs: Any)

Broadcast a signed transaction object to the network.

* **Parameters:**
  * **txn** ([*SignedTransaction*](../transaction.md#algosdk.transaction.SignedTransaction)*,* [*LogicSigTransaction*](../transaction.md#algosdk.transaction.LogicSigTransaction)*, or* [*MultisigTransaction*](../transaction.md#algosdk.transaction.MultisigTransaction)) – transaction to send
  * **request_header** (*dict**,* *optional*) – additional header for request
* **Returns:**
  transaction ID
* **Return type:**
  str

#### send_raw_transaction(txn: bytes | str, \*\*kwargs: Any)

Broadcast a signed transaction to the network.

* **Parameters:**
  * **txn** (*str*) – transaction to send, encoded in base64
  * **request_header** (*dict**,* *optional*) – additional header for request
* **Returns:**
  transaction ID
* **Return type:**
  str

#### pending_transactions(max_txns: int = 0, response_format: str = 'json', \*\*kwargs: Any)

Return pending transactions.

* **Parameters:**
  * **max_txns** (*int*) – maximum number of transactions to return;
    if max_txns is 0, return all pending transactions
  * **response_format** (*str*) – the format in which the response is returned: either
    “json” or “msgpack”

#### pending_transaction_info(transaction_id: str, response_format: str = 'json', \*\*kwargs: Any)

Return transaction information for a pending transaction.

* **Parameters:**
  * **transaction_id** (*str*) – transaction ID
  * **response_format** (*str*) – the format in which the response is returned: either
    “json” or “msgpack”

#### health(\*\*kwargs: Any)

Return null if the node is running.

#### versions(\*\*kwargs: Any)

Return algod versions.

#### send_transactions(txns: Iterable[[SignedTransaction](../transaction.md#algosdk.transaction.SignedTransaction) | [LogicSigTransaction](../transaction.md#algosdk.transaction.LogicSigTransaction) | [MultisigTransaction](../transaction.md#algosdk.transaction.MultisigTransaction)], \*\*kwargs: Any)

Broadcast list of a signed transaction objects to the network.

* **Parameters:**
  * **txns** ([*SignedTransaction*](../transaction.md#algosdk.transaction.SignedTransaction)*[**] or* [*MultisigTransaction*](../transaction.md#algosdk.transaction.MultisigTransaction)*[**]*) – transactions to send
  * **request_header** (*dict**,* *optional*) – additional header for request
* **Returns:**
  first transaction ID
* **Return type:**
  str

#### suggested_params(\*\*kwargs: Any)

Return suggested transaction parameters.

#### compile(source: str, source_map: bool = False, \*\*kwargs: Any)

Compile TEAL source with remote algod.

* **Parameters:**
  * **source** (*str*) – source to be compiled
  * **request_header** (*dict**,* *optional*) – additional header for request
* **Returns:**
  loaded from json response body. “result” property contains compiled bytes, “hash” - program hash (escrow address)
* **Return type:**
  dict

#### disassemble(program_bytes: bytes, \*\*kwargs: Any)

Disassable TEAL program bytes with remote algod.
:param program: bytecode to be disassembled
:type program: bytes
:param request_header: additional header for request
:type request_header: dict, optional

* **Returns:**
  response dictionary containing disassembled TEAL source code
  in plain text as the value of the unique “result” key.
* **Return type:**
  dict

#### dryrun(drr: Dict[str, Any], \*\*kwargs: Any)

Dryrun with remote algod.

* **Parameters:**
  * **drr** (*obj*) – dryrun request object
  * **request_header** (*dict**,* *optional*) – additional header for request
* **Returns:**
  loaded from json response body
* **Return type:**
  dict

#### genesis(\*\*kwargs: Any)

Returns the entire genesis file.

#### transaction_proof(round_num: int, txid: str, hashtype: str = '', response_format: str = 'json', \*\*kwargs: Any)

Get a proof for a transaction in a block.

* **Parameters:**
  * **round_num** (*int*) – The round in which the transaction appears.
  * **txid** (*str*) – The transaction ID for which to generate a proof.
  * **hashtype** (*str*) – The type of hash function used to create the proof, must be either sha512_256 or sha256.

#### lightblockheader_proof(round_num: int, \*\*kwargs: Any)

Gets a proof for a given light block header inside a state proof commitment.

* **Parameters:**
  **round_num** (*int*) – The round to which the light block header belongs.

#### stateproofs(round_num: int, \*\*kwargs: Any)

Get a state proof that covers a given round

* **Parameters:**
  **round_num** (*int*) – The round for which a state proof is desired.

#### get_block_hash(round_num: int, \*\*kwargs: Any)

Get the block hash for the block on the given round.

* **Parameters:**
  **round_num** (*int*) – The round in which the transaction appears.

#### simulate_transactions(request: SimulateRequest, \*\*kwargs: Any)

Simulate transactions being sent to the network.

* **Parameters:**
  * **request** (*models.SimulateRequest*) – Simulation request object
  * **headers** (*dict**,* *optional*) – additional header for request
* **Returns:**
  results from simulation of transactions
* **Return type:**
  Dict[str, Any]

#### simulate_raw_transactions(txns: Sequence[[SignedTransaction](../transaction.md#algosdk.transaction.SignedTransaction) | [LogicSigTransaction](../transaction.md#algosdk.transaction.LogicSigTransaction) | [MultisigTransaction](../transaction.md#algosdk.transaction.MultisigTransaction)], \*\*kwargs)

Simulate a transaction group being sent to the network.

* **Parameters:**
  * **txns** (*Sequence**[**transaction.GenericSignedTransaction**]*) – transaction group to simulate
  * **headers** (*dict**,* *optional*) – additional header for request
* **Returns:**
  results from simulation of transactions
* **Return type:**
  Dict[str, Any]

#### get_sync_round(\*\*kwargs: Any)

Get the minimum sync round for the ledger.

* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### set_sync_round(round: int, \*\*kwargs: Any)

Set the minimum sync round for the ledger.

* **Parameters:**
  **round** (*int*) – Sync round
* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### unset_sync_round(\*\*kwargs: Any)

Unset the minimum sync round for the ledger.

* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### ready(\*\*kwargs: Any)

Returns OK if the node is healthy and fully caught up.

* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### get_timestamp_offset(\*\*kwargs: Any)

Get the timestamp offset in block headers.
This feature is only available in dev mode networks.

* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### set_timestamp_offset(offset: int, \*\*kwargs: Any)

Set the timestamp offset in block headers.
This feature is only available in dev mode networks.

* **Parameters:**
  **offset** (*int*) – Block timestamp offset
* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### get_ledger_state_delta(round: int, response_format: str = 'json', \*\*kwargs: Any)

Get the ledger state delta for a round.

* **Parameters:**
  * **round** (*int*) – The round for the desired state delta
  * **response_format** (*str*) – The format in which the response is returned: either
    “json” or “msgpack”
* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### get_transaction_group_ledger_state_deltas_for_round(round: int, response_format: str = 'json', \*\*kwargs: Any)

Get the ledger state deltas for all transaction groups in a given round.

* **Parameters:**
  * **round** (*int*) – The round for the desired state delta
  * **response_format** (*str*) – The format in which the response is returned: either
    “json” or “msgpack”
* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### get_ledger_state_delta_for_transaction_group(id: str, response_format: str = 'json', \*\*kwargs: Any)

Get the ledger state delta for a transaction group given the
transaction or group ID.

* **Parameters:**
  * **id** (*str*) – A transaction ID or transaction group ID
  * **response_format** (*str*) – The format in which the response is returned: either
    “json” or “msgpack”
* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]

#### get_block_txids(round_num: int, \*\*kwargs: Any)

Get the top level transaction IDs for the block
on the given round.

* **Parameters:**
  **round_num** (*int*) – The round in which the transaction appears.
* **Returns:**
  Response from algod
* **Return type:**
  Dict[str, Any]
