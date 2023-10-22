---
title: goal clerk rawsend
---

## goal clerk rawsend



Send raw transactions



### Synopsis



Send raw transactions.  The transactions must be stored in a file, encoded using msgpack as transactions.SignedTxn. Multiple transactions can be concatenated together in a file.




```

goal clerk rawsend [flags]


```



### Options




```

  -f, --filename string   Filename of file containing raw transactions

  -h, --help              help for rawsend

  -N, --no-wait           Don't wait for transactions to commit

  -r, --rejects string    Filename for writing rejects to (default is txFilename.rej)


```



### Options inherited from parent commands




```

  -d, --datadir stringArray   Data directory for the node

  -k, --kmddir string         Data directory for kmd

  -w, --wallet string         Set the wallet to be used for the selected operation


```



### SEE ALSO



* [goal clerk](../../clerk/clerk/)	 - Provides the tools to control transactions 



