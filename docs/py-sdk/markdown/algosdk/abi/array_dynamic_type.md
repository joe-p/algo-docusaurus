# array_dynamic_type

### *class* ArrayDynamicType(arg_type: [ABIType](base_type.md#algosdk.abi.base_type.ABIType))

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents a ArrayDynamic ABI Type for encoding.

* **Parameters:**
  **child_type** ([*ABIType*](base_type.md#algosdk.abi.base_type.ABIType)) – the type of the dynamic array.

#### child_type

* **Type:**
  [ABIType](base_type.md#algosdk.abi.base_type.ABIType)

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(value_array: List[Any] | bytes | bytearray)

Encodes a list of values into a ArrayDynamic ABI bytestring.

* **Parameters:**
  * **value_array** (*list* *|* *bytes* *|* *bytearray*) – list of values to be encoded.
  * **ByteType** (*If the child types are*) – 
  * **be** (*then bytes* *or* *bytearray can*) – 
  * **well.** (*passed in to be encoded as*) – 
* **Returns:**
  encoded bytes of the dynamic array
* **Return type:**
  bytes

#### decode(array_bytes: bytes | bytearray)

Decodes a bytestring to a dynamic list.

* **Parameters:**
  **array_bytes** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  values from the encoded bytestring
* **Return type:**
  list
