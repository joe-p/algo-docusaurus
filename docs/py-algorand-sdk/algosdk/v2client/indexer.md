# v2client.indexer

### *class* IndexerClient(indexer_token, indexer_address, headers=None)

Bases: `object`

Client class for indexer. Handles all indexer requests.

* **Parameters:**
  * **indexer_token** (*str*) – indexer API token
  * **indexer_address** (*str*) – indexer address
  * **headers** (*dict**,* *optional*) – extra header name/value for all requests

#### indexer_token

* **Type:**
  str

#### indexer_address

* **Type:**
  str

#### headers

* **Type:**
  dict

#### indexer_request(method, requrl, params=None, data=None, headers=None)

Execute a given request.

* **Parameters:**
  * **method** (*str*) – request method
  * **requrl** (*str*) – url for the request
  * **params** (*dict**,* *optional*) – parameters for the request
  * **data** (*dict**,* *optional*) – data in the body of the request
  * **headers** (*dict**,* *optional*) – additional header for request
* **Returns:**
  loaded from json response body
* **Return type:**
  dict

#### health(\*\*kwargs)

Return 200 and a simple status message if the node is running.

#### accounts(asset_id=None, limit=None, next_page=None, min_balance=None, max_balance=None, block=None, auth_addr=None, application_id=None, round_num=None, include_all=False, exclude=None, \*\*kwargs)

Return accounts that match the search; microalgos are the default
currency unless asset_id is specified, in which case the asset will
be used.

* **Parameters:**
  * **asset_id** (*int**,* *optional*) – include accounts holding this asset
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **min_balance** (*int**,* *optional*) – results should have an amount greater
    than this value (results with an amount equal to this value
    are excluded)
  * **max_balance** (*int**,* *optional*) – results should have an amount less
    than this value (results with an amount equal to this value
    are excluded)
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **auth_addr** (*str**,* *optional*) – Include accounts configured to use
    this spending key.
  * **application_id** (*int**,* *optional*) – results should filter on this
    application
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    For performance reasons, this parameter may be disabled on some configurations.
    Using application-id or asset-id filters will return both creator and opt-in accounts.
    Filtering by include-all will return creator and opt-in accounts for deleted assets and accounts.
    Non-opt-in managers are not included in the results when asset-id is used.
    If specified, do not include block
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.
  * **exclude** (*str optional*) – Exclude additional items such as asset holdings,
    application local data stored for this account,
    asset parameters created by this account,
    and application parameters created by this account.

#### asset_balances(asset_id, limit=None, next_page=None, min_balance=None, max_balance=None, include_all=False, \*\*kwargs)

Return accounts that hold the asset; microalgos are the default
currency unless asset_id is specified, in which case the asset will
be used.

* **Parameters:**
  * **asset_id** (*int*) – include accounts holding this asset
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **min_balance** (*int**,* *optional*) – results should have an amount greater
    than this value (results with an amount equal to this value
    are excluded)
  * **max_balance** (*int**,* *optional*) – results should have an amount less
    than this value (results with an amount equal to this value
    are excluded)
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### block_info(block=None, round_num=None, header_only=None, \*\*kwargs)

Get the block for the given round.

* **Parameters:**
  * **block** (*int**,* *optional*) – block number
  * **round_num** (*int**,* *optional*) – alias for block; specify one of these
  * **header_only** (*bool**,* *optional*) – 

#### account_info(address, block=None, round_num=None, include_all=False, exclude=None, \*\*kwargs)

Return account information.

* **Parameters:**
  * **address** (*str*) – account public key
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block
  * **include_all** (*bool**,* *optional*) – Include all items including closed accounts, deleted applications,
    destroyed assets, opted-out asset holdings, and closed-out application localstates.
    Defaults to false.
  * **exclude** (*str optional*) – Exclude additional items such as asset holdings,
    application local data stored for this account, asset parameters created by this account,
    and application parameters created by this account.

#### lookup_account_assets(address, limit=None, next_page=None, asset_id=None, block=None, round_num=None, include_all=False, \*\*kwargs)

Return asset information for a specific account.

* **Parameters:**
  * **address** (*str*) – account public key
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **asset_id** (*int*) – include transactions for the specified
    asset
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### lookup_account_asset_by_creator(address, limit=None, next_page=None, asset_id=None, block=None, round_num=None, include_all=False, \*\*kwargs)

Return asset information created by a specific account.

* **Parameters:**
  * **address** (*str*) – account public key
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **asset_id** (*int*) – include transactions for the specified
    asset
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### lookup_account_application_local_state(address, limit=None, next_page=None, application_id=None, block=None, round_num=None, include_all=False, \*\*kwargs)

Return application local state for a specific account.

* **Parameters:**
  * **address** (*str*) – account public key
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **application_id** (*int**,* *optional*) – restrict search to application index
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### lookup_account_application_by_creator(address, limit=None, next_page=None, application_id=None, block=None, round_num=None, include_all=False, \*\*kwargs)

Return asset information created by a specific account.

* **Parameters:**
  * **address** (*str*) – account public key
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **application_id** (*int**,* *optional*) – restrict search to application index
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### transaction(txid, \*\*kwargs)

Returns information about the given transaction.

* **Parameters:**
  **txid** (*str*) – The ID of the transaction to look up.

#### search_transactions(limit=None, next_page=None, note_prefix=None, txn_type=None, sig_type=None, txid=None, block=None, min_round=None, max_round=None, asset_id=None, start_time=None, end_time=None, min_amount=None, max_amount=None, address=None, address_role=None, exclude_close_to=False, application_id=None, rekey_to=False, round_num=None, \*\*kwargs)

Return a list of transactions satisfying the conditions.

* **Parameters:**
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **note_prefix** (*bytes**,* *optional*) – specifies a prefix which must be
    contained in the note field
  * **txn_type** (*str**,* *optional*) – type of transaction; one of “pay”,
    “keyreg”, “acfg”, “axfer”, “afrz”
  * **sig_type** (*str**,* *optional*) – type of signature; one of “sig”, “msig”,
    “lsig”
  * **txid** (*str**,* *optional*) – lookup a specific transaction by ID
  * **block** (*int**,* *optional*) – include results for the specified round
  * **min_round** (*int**,* *optional*) – include results at or after the
    specified round
  * **max_round** (*int**,* *optional*) – include results at or before the
    specified round
  * **asset_id** (*int**,* *optional*) – include transactions for the specified
    asset
  * **start_time** (*str**,* *optional*) – include results after the given time;
    must be an RFC 3339 formatted string
  * **end_time** (*str**,* *optional*) – include results before the given time;
    must be an RFC 3339 formatted string
  * **min_amount** (*int**,* *optional*) – results should have an amount greater
    than this value; microalgos are the default currency unless an
    asset-id is provided, in which case the asset will be used
  * **max_amount** (*int**,* *optional*) – results should have an amount less
    than this value, microalgos are the default currency unless an
    asset-id is provided, in which case the asset will be used
  * **address** (*str**,* *optional*) – only include transactions with this
    address in one of the transaction fields
  * **address_role** (*str**,* *optional*) – one of “sender” or “receiver”;
    combine with the address parameter to define what type of
    address to search for
  * **exclude_close_to** (*bool**,* *optional*) – combine with address and
    address_role parameters to define what type of address to
    search for; the close to fields are normally treated as a
    receiver, if you would like to exclude them set this parameter
    to true
  * **application_id** (*int**,* *optional*) – filter for transactions pertaining
    to an application
  * **rekey_to** (*bool**,* *optional*) – include results which include the
    rekey-to field
  * **round_num** (*int**,* *optional*) – alias for block; only specify one of
    these

#### search_transactions_by_address(address, limit=None, next_page=None, note_prefix=None, txn_type=None, sig_type=None, txid=None, block=None, min_round=None, max_round=None, asset_id=None, start_time=None, end_time=None, min_amount=None, max_amount=None, rekey_to=False, round_num=None, \*\*kwargs)

Return a list of transactions satisfying the conditions for the address.

* **Parameters:**
  * **address** (*str*) – only include transactions with this
    address in one of the transaction fields
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **note_prefix** (*bytes**,* *optional*) – specifies a prefix which must be
    contained in the note field
  * **txn_type** (*str**,* *optional*) – type of transaction; one of “pay”,
    “keyreg”, “acfg”, “axfer”, “afrz”
  * **sig_type** (*str**,* *optional*) – type of signature; one of “sig”, “msig”,
    “lsig”
  * **txid** (*str**,* *optional*) – lookup a specific transaction by ID
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **min_round** (*int**,* *optional*) – include results at or after the
    specified round
  * **max_round** (*int**,* *optional*) – include results at or before the
    specified round
  * **asset_id** (*int**,* *optional*) – include transactions for the specified
    asset
  * **start_time** (*str**,* *optional*) – include results after the given time;
    must be an RFC 3339 formatted string
  * **end_time** (*str**,* *optional*) – include results before the given time;
    must be an RFC 3339 formatted string
  * **min_amount** (*int**,* *optional*) – results should have an amount greater
    than this value; microalgos are the default currency unless an
    asset-id is provided, in which case the asset will be used
  * **max_amount** (*int**,* *optional*) – results should have an amount less
    than this value, microalgos are the default currency unless an
    asset-id is provided, in which case the asset will be used
  * **rekey_to** (*bool**,* *optional*) – include results which include the
    rekey-to field
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block

#### search_asset_transactions(asset_id, limit=None, next_page=None, note_prefix=None, txn_type=None, sig_type=None, txid=None, block=None, min_round=None, max_round=None, address=None, start_time=None, end_time=None, min_amount=None, max_amount=None, address_role=None, exclude_close_to=False, rekey_to=False, round_num=None, \*\*kwargs)

Return a list of transactions satisfying the conditions for the address.

* **Parameters:**
  * **asset_id** (*int*) – include transactions for the specified
    asset
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **note_prefix** (*bytes**,* *optional*) – specifies a prefix which must be
    contained in the note field
  * **txn_type** (*str**,* *optional*) – type of transaction; one of “pay”,
    “keyreg”, “acfg”, “axfer”, “afrz”
  * **sig_type** (*str**,* *optional*) – type of signature; one of “sig”, “msig”,
    “lsig”
  * **txid** (*str**,* *optional*) – lookup a specific transaction by ID
  * **block** (*int**,* *optional*) – this is a synonym for round_num. Do not
    include both.
  * **min_round** (*int**,* *optional*) – include results at or after the
    specified round
  * **max_round** (*int**,* *optional*) – include results at or before the
    specified round
  * **address** (*str**,* *optional*) – only include transactions with this
    address in one of the transaction fields
  * **start_time** (*str**,* *optional*) – include results after the given time;
    must be an RFC 3339 formatted string
  * **end_time** (*str**,* *optional*) – include results before the given time;
    must be an RFC 3339 formatted string
  * **min_amount** (*int**,* *optional*) – results should have an amount greater
    than this value; microalgos are the default currency unless an
    asset-id is provided, in which case the asset will be used
  * **max_amount** (*int**,* *optional*) – results should have an amount less
    than this value, microalgos are the default currency unless an
    asset-id is provided, in which case the asset will be used
  * **address_role** (*str**,* *optional*) – one of “sender” or “receiver”;
    combine with the address parameter to define what type of
    address to search for
  * **exclude_close_to** (*bool**,* *optional*) – combine with address and
    address_role parameters to define what type of address to
    search for; the close to fields are normally treated as a
    receiver, if you would like to exclude them set this parameter
    to true
  * **rekey_to** (*bool**,* *optional*) – include results which include the
    rekey-to field
  * **round_num** (*int**,* *optional*) – Include results for the specified round.
    If specified, do not include block

#### search_assets(limit=None, next_page=None, creator=None, name=None, unit=None, asset_id=None, include_all=False, \*\*kwargs)

Return assets that satisfy the conditions.

* **Parameters:**
  * **limit** (*int**,* *optional*) – maximum number of results to return
  * **next_page** (*str**,* *optional*) – the next page of results; use the next
    token provided by the previous results
  * **creator** (*str**,* *optional*) – filter just assets with the given creator
    address
  * **name** (*str**,* *optional*) – filter just assets with the given name
  * **unit** (*str**,* *optional*) – filter just assets with the given unit
  * **asset_id** (*int**,* *optional*) – return only the asset with this ID
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### asset_info(asset_id, include_all=False, \*\*kwargs)

Return asset information.

* **Parameters:**
  * **asset_id** (*int*) – asset index
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### applications(application_id, round=None, round_num=None, include_all=False, \*\*kwargs)

Return applications that satisfy the conditions.

* **Parameters:**
  * **application_id** (*int*) – application index
  * **round** (*int**,* *optional*) – not supported, DO NOT USE!
  * **round_num** (*int**,* *optional*) – not supported, DO NOT USE!
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### search_applications(application_id=None, creator=None, round=None, limit=None, next_page=None, round_num=None, include_all=False, \*\*kwargs)

Return applications that satisfy the conditions.

* **Parameters:**
  * **application_id** (*int**,* *optional*) – restrict search to application index
  * **creator** (*str**,* *optional*) – filter just assets with the given creator
    address
  * **round** (*int**,* *optional*) – not supported, DO NOT USE!
  * **limit** (*int**,* *optional*) – restrict number of results to limit
  * **next_page** (*str**,* *optional*) – used for pagination
  * **round_num** (*int**,* *optional*) – not supported, DO NOT USE!
  * **include_all** (*bool**,* *optional*) – include all items including closed
    accounts, deleted applications, destroyed assets, opted-out
    asset holdings, and closed-out application localstates. Defaults
    to false.

#### application_logs(application_id, limit=None, min_round=None, max_round=None, next_page=None, sender_addr=None, txid=None, \*\*kwargs)

Return log messages generated by the passed in application.

* **Parameters:**
  * **application_id** (*int*) – application index
  * **limit** (*int**,* *optional*) – limit maximum number of results to return
  * **min_round** (*int**,* *optional*) – only include results at or after the specified round
  * **max_round** (*int**,* *optional*) – only include results at or before the specified round
  * **next_page** (*str**,* *optional*) – used for pagination
  * **sender_addr** (*str**,* *optional*) – only include transactions with this sender address
  * **txid** (*str**,* *optional*) – only include results with this transaction ID

#### application_box_by_name(application_id: int, box_name: bytes, \*\*kwargs)

Return the value of an application’s box.

NOTE: box values are returned as base64-encoded strings.

* **Parameters:**
  * **application_id** (*int*) – application index
  * **box_name** (*bytes*) – The name (key) of the box.

#### application_boxes(application_id: int, limit: int = 0, next_page=None, \*\*kwargs)

Return a list of all the application’s boxes.

NOTE: box names are returned as base64-encoded strings.

* **Parameters:**
  * **application_id** (*int*) – The ID of the application to look up.
  * **limit** (*int**,* *optional*) – Max number of box names to return.
    If max is not set, or max == 0, returns all box-names up to queried indexer’s defaultBoxesLimit.
  * **next_page** (*str**,* *optional*) – used for pagination
