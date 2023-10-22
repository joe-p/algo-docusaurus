# box_reference

### *class* BoxReference(app_index: int, name: bytes)

Bases: `object`

Represents a box reference with a foreign app index and the box name.

* **Parameters:**
  * **app_index** (*int*) – index of the application in the foreign app array
  * **name** (*bytes*) – key for the box in bytes

#### *static* translate_box_reference(ref: Tuple[int, bytes | bytearray | str | int] | [BoxReference](#algosdk.box_reference.BoxReference), foreign_apps: List[int], this_app_id: int)

#### *static* translate_box_references(references: List[Tuple[int, bytes | bytearray | str | int]], foreign_apps: List[int], this_app_id: int)

Translates a list of tuples with app IDs and names into an array of
BoxReferences with foreign indices.

* **Parameters:**
  * **references** (*list**[**(**int**,* *bytes**)**]*) – list of tuples specifying app id
    and key for boxes the app may access
  * **foreign_apps** (*list**[**int**]*) – list of other applications in appl call
  * **this_app_id** (*int*) – app ID of the box being references

#### dictify()

#### *static* undictify(d)
