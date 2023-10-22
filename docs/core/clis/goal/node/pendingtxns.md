---
title: goal node pendingtxns
---

## goal node pendingtxns



Get a snapshot of current pending transactions on this node



### Synopsis



Get a snapshot of current pending transactions on this node, cut off at MAX transactions (-m), default 0. If MAX=0, fetches as many transactions as possible.




```

goal node pendingtxns [flags]


```



### Options




```

  -h, --help                 help for pendingtxns

  -m, --maxPendingTxn uint   Cap the number of txns to fetch


```



### Options inherited from parent commands




```

  -d, --datadir stringArray   Data directory for the node

  -k, --kmddir string         Data directory for kmd


```



### SEE ALSO



* [goal node](../../node/node/)	 - Manage a specified algorand node



