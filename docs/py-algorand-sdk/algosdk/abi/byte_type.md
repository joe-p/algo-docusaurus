# byte_type

### *class* ByteType

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents a Byte ABI Type for encoding.

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value: int)

Encode a single byte or a uint8

* **Parameters:**
  **value** (*int*) – value to be encoded
* **Returns:**
  encoded bytes of the uint8
* **Return type:**
  bytes

#### decode(bytestring: bytes | bytearray)

Decodes a bytestring to a single byte.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  byte value of the encoded bytestring
* **Return type:**
  int
