# string_type

### *class* StringType

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents a String ABI Type for encoding.

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(string_val: str)

Encode a value into a String ABI bytestring.

* **Parameters:**
  **value** (*str*) – string to be encoded.
* **Returns:**
  encoded bytes of the string
* **Return type:**
  bytes

#### decode(bytestring: bytes | bytearray)

Decodes a bytestring to a string.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  string from the encoded bytestring
* **Return type:**
  str
