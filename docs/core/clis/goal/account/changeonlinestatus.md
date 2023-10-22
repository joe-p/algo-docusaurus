---
title: goal account changeonlinestatus
---

## goal account changeonlinestatus



Change online status for the specified account



### Synopsis



Change online status for the specified account. Set online should be 1 to set online, 0 to set offline. The broadcast transaction will be valid for a limited number of rounds. goal will provide the TXID of the transaction if successful. Going online requires that the given account has a valid participation key. If the participation key is specified using --partkeyfile, you must separately install the participation key from that file using "goal account installpartkey".




```

goal account changeonlinestatus [flags]


```



### Options




```

  -a, --address string       Account address to change (required if no --partkeyfile)

  -f, --fee uint             The Fee to set on the status change transaction (defaults to suggested fee)

      --firstvalid uint      FirstValid for the status change transaction (0 for current)

  -h, --help                 help for changeonlinestatus

      --lastvalid uint       The last round where the transaction may be committed to the ledger

  -x, --lease string         Lease value (base64, optional): no transaction may also acquire this lease until lastvalid

  -N, --no-wait              Don't wait for transaction to commit

  -o, --online               Set this account to online or offline (default true)

      --partkeyfile string   Participation key file (required if no --address)

  -S, --signer string        Address of key to sign with, if different due to rekeying

  -t, --txfile string        Write status change transaction to this file

  -v, --validrounds uint     The validity period for the status change transaction


```



### Options inherited from parent commands




```

  -d, --datadir stringArray   Data directory for the node

  -k, --kmddir string         Data directory for kmd

  -w, --wallet string         Set the wallet to be used for the selected operation


```



### SEE ALSO



* [goal account](../../account/account/)	 - Control and manage Algorand accounts



