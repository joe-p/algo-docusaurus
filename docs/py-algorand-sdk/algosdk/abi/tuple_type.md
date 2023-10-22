# tuple_type

### *class* TupleType(arg_types: List[Any])

Bases: [`ABIType`](base_type.md#algosdk.abi.base_type.ABIType)

Represents a Tuple ABI Type for encoding.

* **Parameters:**
  **arg_types** (*list*) – list of types in the tuple.

#### child_types

* **Type:**
  list

#### byte_len()

Return the length in bytes of the ABI type.

#### is_dynamic()

Return whether the ABI type is dynamic.

#### encode(values: List[Any] | bytes | bytearray)

Encodes a list of values into a TupleType ABI bytestring.

* **Parameters:**
  * **values** (*list* *|* *bytes* *|* *bytearray*) – list of values to be encoded.
  * **uint16.** (*The length* *of* *the list cannot exceed a*) – 
  * **ByteType** (*If the child types are*) – 
  * **be** (*then bytes* *or* *bytearray can*) – 
  * **well.** (*passed in to be encoded as*) – 
* **Returns:**
  encoded bytes of the tuple
* **Return type:**
  bytes

#### decode(bytestring: bytes | bytearray)

Decodes a bytestring to a tuple list.

* **Parameters:**
  **bytestring** (*bytes* *|* *bytearray*) – bytestring to be decoded
* **Returns:**
  values from the encoded bytestring
* **Return type:**
  list
