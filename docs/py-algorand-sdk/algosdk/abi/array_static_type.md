# array_static_type

### *class* ArrayStaticType(arg_type: [ABIType](base_type.md#algosdk.abi.base_type.ABIType), array_len: int)

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents a ArrayStatic ABI Type for encoding.

* **Parameters:**
  * **child_type** ([*ABIType*](base_type.md#algosdk.abi.base_type.ABIType)) – the type of the child_types array.
  * **array_len** (*int*) – length of the static array.

#### child_type

* **Type:**
  [ABIType](base_type.md#algosdk.abi.base_type.ABIType)

#### static_length

* **Type:**
  int

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value_array: List[Any] | bytes | bytearray)

Encodes a list of values into a ArrayStatic ABI bytestring.

* **Parameters:**
  * **value_array** (*list* *|* *bytes* *|* *bytearray*) – list of values to be encoded.
  * **array.** (*The number* *of* *elements must match the predefined length of*) – 
  * **ByteType** (*If the child types are*) – 
  * **be** (*then bytes* *or* *bytearray can*) – 
  * **well.** (*passed in to be encoded as*) – 
* **Returns:**
  encoded bytes of the static array
* **Return type:**
  bytes

#### decode(array_bytes: bytes | bytearray)

Decodes a bytestring to a static list.

* **Parameters:**
  **array_bytes** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  values from the encoded bytestring
* **Return type:**
  list
