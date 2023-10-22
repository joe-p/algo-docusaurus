# ufixed_type

### *class* UfixedType(type_size: int, type_precision: int)

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents an Ufixed ABI Type for encoding.

* **Parameters:**
  * **type_size** (*int*) – size of a ufixed type.
  * **type_precision** (*int*) – number of precision for a ufixed type.

#### bit_size

* **Type:**
  int

#### precision

* **Type:**
  int

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value: int)

Encodes a value into a Ufixed ABI type bytestring. The precision denotes
the denominator and the value denotes the numerator.

* **Parameters:**
  **value** (*int*) – ufixed numerator value in uint to be encoded
* **Returns:**
  encoded bytes of the ufixed numerator
* **Return type:**
  bytes

#### decode(bytestring: bytes | bytearray)

Decodes a bytestring to a ufixed numerator.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  ufixed numerator value from the encoded bytestring
* **Return type:**
  int
