# interface

### *class* InterfaceDict_Optional

Bases: `TypedDict`

#### desc*: str*

### *class* InterfaceDict

Bases: `dict`

#### name*: str*

#### methods*: List[[MethodDict](method.md#algosdk.abi.method.MethodDict)]*

#### desc*: str*

### *class* Interface(name: str, methods: List[[Method](method.md#algosdk.abi.method.Method)], desc: str | None = None)

Bases: `object`

Represents a ABI interface description.

* **Parameters:**
  * **name** (*string*) – name of the interface
  * **methods** (*list*) – list of Method objects
  * **desc** (*string**,* *optional*) – description of the interface

#### *static* from_json(resp: str | bytes | bytearray)

#### dictify()

#### *static* undictify(d: dict)

#### get_method_by_name(name: str)
