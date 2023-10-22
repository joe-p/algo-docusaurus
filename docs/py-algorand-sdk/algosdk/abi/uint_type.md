# uint_type

### *class* UintType(type_size: int)

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents an Uint ABI Type for encoding.

* **Parameters:**
  **bit_size** (*int*) – size of a uint type, e.g. for a uint8, the bit_size is 8.

#### bit_size

* **Type:**
  int

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value: int)

Encodes a value into a Uint ABI type bytestring.

* **Parameters:**
  **value** (*int*) – uint value to be encoded
* **Returns:**
  encoded bytes of the uint value
* **Return type:**
  bytes

#### decode(bytestring: bytes | bytearray)

Decodes a bytestring to a uint.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  uint value from the encoded bytestring
* **Return type:**
  int
