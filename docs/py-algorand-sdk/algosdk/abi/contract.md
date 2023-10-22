# contract

### *class* NetworkInfoDict

Bases: `TypedDict`

#### appID*: int*

### *class* ContractDict_Optional

Bases: `TypedDict`

#### desc*: str*

### *class* ContractDict

Bases: `dict`

#### name*: str*

#### methods*: List[[MethodDict](method.md#algosdk.abi.method.MethodDict)]*

#### networks*: Dict[str, [NetworkInfoDict](#algosdk.abi.contract.NetworkInfoDict)]*

#### desc*: str*

### *class* Contract(name: str, methods: List[[Method](method.md#algosdk.abi.method.Method)], desc: str | None = None, networks: Dict[str, [NetworkInfo](#algosdk.abi.contract.NetworkInfo)] | None = None)

Bases: `object`

Represents a ABI contract description.

* **Parameters:**
  * **name** (*string*) – name of the contract
  * **methods** (*list*) – list of Method objects
  * **desc** (*string**,* *optional*) – description of the contract
  * **networks** (*dict**,* *optional*) – information about the contract in a
    particular network, such as an app-id.

#### *static* from_json(resp: str | bytes | bytearray)

#### dictify()

#### *static* undictify(d: dict)

#### get_method_by_name(name: str)

### *class* NetworkInfo(app_id: int)

Bases: `object`

Represents network information.

* **Parameters:**
  **app_id** (*int*) – application ID on a particular network

#### dictify()

#### *static* undictify(d: dict)
