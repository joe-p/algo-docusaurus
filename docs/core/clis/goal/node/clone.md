---
title: goal node clone
---

## goal node clone



Clone the specified node to create another node



### Synopsis



Clone the specified node to create another node. Optionally you can control whether the clone includes the current ledger, or if it starts with an uninitialized one. The default is to clone the ledger as well. Specify -n or --noledger to start with an uninitialized ledger.




```

goal node clone [flags]


```



### Options




```

  -h, --help               help for clone

  -n, --noledger           Don't include ledger when copying (No Ledger)

  -t, --targetdir string   Target directory for the clone


```



### Options inherited from parent commands




```

  -d, --datadir stringArray   Data directory for the node

  -k, --kmddir string         Data directory for kmd


```



### SEE ALSO



* [goal node](../../node/node/)	 - Manage a specified algorand node



