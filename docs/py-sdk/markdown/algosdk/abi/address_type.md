# address_type

### *class* AddressType

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents an Address ABI Type for encoding.

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value: str | bytes)

Encode an address string or a 32-byte public key into a Address ABI bytestring.

* **Parameters:**
  * **value** (*str* *|* *bytes*) – value to be encoded. It can be either a base32
  * **key.** (*address string* *or* *a 32-byte public*) – 
* **Returns:**
  encoded bytes of the address
* **Return type:**
  bytes

#### decode(bytestring: bytearray | bytes)

Decodes a bytestring to a base32 encoded address string.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  base32 encoded address from the encoded bytestring
* **Return type:**
  str
