# encoding

### msgpack_encode(obj)

Encode the object using canonical msgpack.

* **Parameters:**
  **obj** ([*Transaction*](transaction.md#algosdk.transaction.Transaction)*,* [*SignedTransaction*](transaction.md#algosdk.transaction.SignedTransaction)*,* [*MultisigTransaction*](transaction.md#algosdk.transaction.MultisigTransaction)*,* [*Multisig*](transaction.md#algosdk.transaction.Multisig)*,*            [*Bid*](auction.md#algosdk.auction.Bid)*, or* [*SignedBid*](auction.md#algosdk.auction.SignedBid)) – object to be encoded
* **Returns:**
  msgpack encoded object
* **Return type:**
  str

#### NOTE
Canonical Msgpack: maps must contain keys in lexicographic order; maps
must omit key-value pairs where the value is a zero-value; positive
integer values must be encoded as “unsigned” in msgpack, regardless of
whether the value space is semantically signed or unsigned; integer
values must be represented in the shortest possible encoding; binary
arrays must be represented using the “bin” format family (that is, use
the most recent version of msgpack rather than the older msgpack
version that had no “bin” family).

### msgpack_decode(enc)

Decode a msgpack encoded object from a string.

* **Parameters:**
  **enc** (*str*) – string to be decoded
* **Returns:**
  decoded object
* **Return type:**
  [Transaction](transaction.md#algosdk.transaction.Transaction), [SignedTransaction](transaction.md#algosdk.transaction.SignedTransaction), [Multisig](transaction.md#algosdk.transaction.Multisig), [Bid](auction.md#algosdk.auction.Bid), or [SignedBid](auction.md#algosdk.auction.SignedBid)

### is_valid_address(addr)

Check if the string address is a valid Algorand address.

* **Parameters:**
  **addr** (*str*) – base32 address
* **Returns:**
  whether or not the address is valid
* **Return type:**
  bool

### decode_address(addr)

Decode a string address into its address bytes and checksum.

* **Parameters:**
  **addr** (*str*) – base32 address
* **Returns:**
  address decoded into bytes
* **Return type:**
  bytes

### encode_address(addr_bytes)

Encode a byte address into a string composed of the encoded bytes and the
checksum.

* **Parameters:**
  **addr_bytes** (*bytes*) – address in bytes
* **Returns:**
  base32 encoded address
* **Return type:**
  str

### checksum(data)

Compute the checksum of arbitrary binary input.

* **Parameters:**
  **data** (*bytes*) – data as bytes
* **Returns:**
  checksum of the data
* **Return type:**
  bytes

### encode_as_bytes(e: bytes | bytearray | str | int)

Confirm or coerce element to bytes.
