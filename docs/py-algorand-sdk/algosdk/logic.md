# logic

### address(program)

Return the address of the program.

* **Parameters:**
  **program** (*bytes*) – compiled program
* **Returns:**
  program address
* **Return type:**
  str

### teal_sign(private_key, data, contract_addr)

Return the signature suitable for ed25519verify TEAL opcode

* **Parameters:**
  * **private_key** (*str*) – private key to sign with
  * **data** (*bytes*) – data to sign
  * **contract_addr** (*str*) – program hash (contract address) to sign for
* **Returns:**
  signature
* **Return type:**
  bytes

### teal_sign_from_program(private_key, data, program)

Return the signature suitable for ed25519verify TEAL opcode

* **Parameters:**
  * **private_key** (*str*) – private key to sign with
  * **data** (*bytes*) – data to sign
  * **program** (*bytes*) – program to sign for
* **Returns:**
  signature
* **Return type:**
  bytes

### get_application_address(appID: int)

Return the escrow address of an application.

* **Parameters:**
  **appID** (*int*) – The ID of the application.
* **Returns:**
  The address corresponding to that application’s escrow account.
* **Return type:**
  str
