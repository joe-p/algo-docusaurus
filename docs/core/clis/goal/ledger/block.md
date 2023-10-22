---
title: goal ledger block
---

## goal ledger block



Dump a block to a file or stdout



### Synopsis



Dump a block to a file or stdout. Default behavior is to attempt to decode the raw bytes returned from algod to JSON.




```

goal ledger block [round number] [flags]


```



### Options




```

      --b32          Encode binary blobs using base32 instead of base64

  -h, --help         help for block

  -o, --out string   The filename to dump the block to (if not set, use stdout) (default "-")

  -r, --raw          Format block as msgpack

      --strict       Strict JSON decode: turn all keys into strings


```



### Options inherited from parent commands




```

  -d, --datadir stringArray   Data directory for the node

  -k, --kmddir string         Data directory for kmd


```



### SEE ALSO



* [goal ledger](../../ledger/ledger/)	 - Access ledger-related details



