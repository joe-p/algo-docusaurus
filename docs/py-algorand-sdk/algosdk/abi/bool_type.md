# bool_type

### *class* BoolType

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents a Bool ABI Type for encoding.

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value: bool)

Encode a boolean value

* **Parameters:**
  **value** (*bool*) – value to be encoded
* **Returns:**
  encoded bytes (“0x80” if True, “0x00” if False) of the boolean
* **Return type:**
  bytes

#### decode(bytestring: bytes | bytearray)

Decodes a bytestring to a single boolean.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded that contains a single boolean, i.e. “0x80” or “0x00”
* **Returns:**
  boolean from the encoded bytestring
* **Return type:**
  bool
