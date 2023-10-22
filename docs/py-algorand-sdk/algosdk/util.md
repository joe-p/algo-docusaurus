# util

### microalgos_to_algos(microalgos)

Convert microalgos to algos.

* **Parameters:**
  **microalgos** (*int*) – how many microalgos
* **Returns:**
  how many algos
* **Return type:**
  int or decimal

### algos_to_microalgos(algos)

Convert algos to microalgos.

* **Parameters:**
  **algos** (*int* *or* *decimal*) – how many algos
* **Returns:**
  how many microalgos
* **Return type:**
  int

### sign_bytes(to_sign, private_key)

Sign arbitrary bytes after prepending with “MX” for domain separation.

* **Parameters:**
  **to_sign** (*bytes*) – bytes to sign
* **Returns:**
  base64 signature
* **Return type:**
  str

### verify_bytes(message, signature, public_key)

Verify the signature of a message that was prepended with “MX” for domain
separation.

* **Parameters:**
  * **message** (*bytes*) – message that was signed, without prefix
  * **signature** (*str*) – base64 signature
  * **public_key** (*str*) – base32 address
* **Returns:**
  whether or not the signature is valid
* **Return type:**
  bool

### build_headers_from(kwarg_headers: Dict[str, Any], additional_headers: Dict[str, Any])

Build correct headers for AlgodClient.algod_request.

* **Parameters:**
  * **kwarg_headers** (*Dict**[**str**,* *Any**]*) – headers passed through kwargs.
  * **additional_headers** (*Dict**[**str**,* *Any**]*) – additional headers to pass to AlgodClient.algod_request
* **Returns:**
  final version of headers dictionary to be used for AlgodClient.algod_request
* **Return type:**
  Dict[str, any]
