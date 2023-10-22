# constants

### KMD_AUTH_HEADER *= 'X-KMD-API-Token'*

header key for kmd requests

* **Type:**
  str

### ALGOD_AUTH_HEADER *= 'X-Algo-API-Token'*

header key for algod requests

* **Type:**
  str

### INDEXER_AUTH_HEADER *= 'X-Indexer-API-Token'*

header key for indexer requests

* **Type:**
  str

### UNVERSIONED_PATHS *= ['/health', '/versions', '/metrics', '/genesis', '/ready']*

paths that don’t use the version path prefix

* **Type:**
  str[]

### NO_AUTH*: List[str]* *= []*

requests that don’t require authentication

* **Type:**
  str[]

### PAYMENT_TXN *= 'pay'*

indicates a payment transaction

* **Type:**
  str

### KEYREG_TXN *= 'keyreg'*

indicates a key registration transaction

* **Type:**
  str

### ASSETCONFIG_TXN *= 'acfg'*

indicates an asset configuration transaction

* **Type:**
  str

### ASSETFREEZE_TXN *= 'afrz'*

indicates an asset freeze transaction

* **Type:**
  str

### ASSETTRANSFER_TXN *= 'axfer'*

indicates an asset transfer transaction

* **Type:**
  str

### APPCALL_TXN *= 'appl'*

indicates an app call transaction, allows creating, deleting, and interacting with an application

* **Type:**
  str

### STATEPROOF_TXN *= 'stpf'*

indicates an state proof transaction

* **Type:**
  str

### NOTE_FIELD_TYPE_DEPOSIT *= 'd'*

indicates a signed deposit in NoteField

* **Type:**
  str

### NOTE_FIELD_TYPE_BID *= 'b'*

indicates a signed bid in NoteField

* **Type:**
  str

### NOTE_FIELD_TYPE_SETTLEMENT *= 's'*

indicates a signed settlement in NoteField

* **Type:**
  str

### NOTE_FIELD_TYPE_PARAMS *= 'p'*

indicates signed params in NoteField

* **Type:**
  str

### TXID_PREFIX *= b'TX'*

transaction prefix when signing

* **Type:**
  bytes

### TGID_PREFIX *= b'TG'*

transaction group prefix when computing the group ID

* **Type:**
  bytes

### BID_PREFIX *= b'aB'*

bid prefix when signing

* **Type:**
  bytes

### BYTES_PREFIX *= b'MX'*

bytes prefix when signing

* **Type:**
  bytes

### MSIG_ADDR_PREFIX *= 'MultisigAddr'*

prefix for multisig addresses

* **Type:**
  str

### LOGIC_PREFIX *= b'Program'*

program (logic) prefix when signing

* **Type:**
  bytes

### LOGIC_DATA_PREFIX *= b'ProgData'*

program (logic) data prefix when signing

* **Type:**
  bytes

### APPID_PREFIX *= b'appID'*

application ID prefix when signing

* **Type:**
  bytes

### HASH_LEN *= 32*

how long various hash-like fields should be

* **Type:**
  int

### CHECK_SUM_LEN_BYTES *= 4*

how long checksums should be

* **Type:**
  int

### KEN_LEN_BYTES *= 32*

how long addresses are in bytes

* **Type:**
  int

### ADDRESS_LEN *= 58*

how long addresses are in base32, including the checksum

* **Type:**
  int

### MNEMONIC_LEN *= 25*

how long mnemonic phrases are

* **Type:**
  int

### MIN_TXN_FEE *= 1000*

minimum transaction fee

* **Type:**
  int

### MICROALGOS_TO_ALGOS_RATIO *= 1000000*

how many microalgos per algo

* **Type:**
  int

### METADATA_LENGTH *= 32*

length of asset metadata

* **Type:**
  int

### NOTE_MAX_LENGTH *= 1024*

maximum length of note field

* **Type:**
  int

### LEASE_LENGTH *= 32*

byte length of leases

* **Type:**
  int

### MULTISIG_ACCOUNT_LIMIT *= 255*

maximum number of addresses in a multisig account

* **Type:**
  int

### TX_GROUP_LIMIT *= 16*

maximum number of transaction in a transaction group

* **Type:**
  int

### MAX_ASSET_DECIMALS *= 19*

maximum value for decimals in assets

* **Type:**
  int

### LOGIC_SIG_MAX_COST *= 20000*

max execution cost of a teal program

* **Type:**
  int

### LOGIC_SIG_MAX_SIZE *= 1000*

max size of a teal program and its arguments in bytes

* **Type:**
  int

### APP_PAGE_MAX_SIZE *= 2048*

max size of a page for an application in bytes

* **Type:**
  int

### ZERO_ADDRESS *= 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ'*

algorand encoded address of 32 zero bytes

* **Type:**
  str
