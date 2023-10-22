# base_type

### *class* ABIType

Bases: `ABC`

Represents an ABI Type for encoding.

#### *abstract* is_dynamic()

Return whether the ABI type is dynamic.

#### *abstract* byte_len()

Return the length in bytes of the ABI type.

#### *abstract* encode(value: Any)

Serialize the ABI value into a byte string using ABI encoding rules.

#### *abstract* decode(bytestring: bytes)

Deserialize the ABI type and value from a byte string using ABI encoding rules.

#### *static* from_string(s: str)

Convert a valid ABI string to a corresponding ABI type.
