# method

### *class* MethodDict_Optional

Bases: `TypedDict`

#### desc*: str*

### *class* MethodDict

Bases: `dict`

#### name*: str*

#### args*: List[dict]*

#### returns*: dict*

#### desc*: str*

### *class* Method(name: str, args: List[[Argument](#algosdk.abi.method.Argument)], returns: [Returns](#algosdk.abi.method.Returns), desc: str | None = None)

Bases: `object`

Represents a ABI method description.

* **Parameters:**
  * **name** (*string*) – name of the method
  * **args** (*list*) – list of Argument objects with type, name, and optional
  * **description** – 
  * **returns** ([*Returns*](#algosdk.abi.method.Returns)) – a Returns object with a type and optional description
  * **desc** (*string**,* *optional*) – optional description of the method

#### get_signature()

#### get_selector()

Returns the ABI method signature, which is the first four bytes of the
SHA-512/256 hash of the method signature.

* **Returns:**
  first four bytes of the method signature hash
* **Return type:**
  bytes

#### get_txn_calls()

Returns the number of transactions needed to invoke this ABI method.

#### *static* from_json(resp: str | bytes | bytearray)

#### *static* from_signature(s: str)

#### dictify()

#### *static* undictify(d: dict)

### get_method_by_name(methods: List[[Method](#algosdk.abi.method.Method)], name: str)

### *class* Argument(arg_type: str, name: str | None = None, desc: str | None = None)

Bases: `object`

Represents an argument for a ABI method

* **Parameters:**
  * **arg_type** (*string*) – ABI type or transaction string of the method argument
  * **name** (*string**,* *optional*) – name of this method argument
  * **desc** (*string**,* *optional*) – description of this method argument

#### dictify()

#### *static* undictify(d: dict)

### *class* Returns(arg_type: str, desc: str | None = None)

Bases: `object`

Represents a return type for a ABI method

* **Parameters:**
  * **arg_type** (*string*) – ABI type of this return argument
  * **desc** (*string**,* *optional*) – description of this return argument

#### VOID *= 'void'*

#### dictify()

#### *static* undictify(d: dict)
