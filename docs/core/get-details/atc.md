---
title: Atomic Transaction Composer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



Constructing [atomic transactions](../get-details/atomic_transfers.md) requires building up the set of transactions, assigning a group id, and then signing the transactions. While this is not a difficult thing to do on its own, it can be made more difficult if one of the transactions is an Application Call to an [ABI](/docs/get-details/dapps/smart-contracts/ABI/) compliant application. This is because the arguments passed to the application call must be properly encoded and may include transactions or accounts that are part of the application call or group. 

The Atomic Transaction Composer is a convenient way to build out an atomic group of transactions that handles encoding and decoding of ABI arguments and return values. 

!!! Note 
    The following code examples are snippits to demonstrate usage. Additional examples are available [here](https://github.com/algorand-devrel/demo-abi).


## Create Atomic Transaction Composer 

To use the Atomic Transaction Composer, first initialize the composer: 

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
const atc = new algosdk.AtomicTransactionComposer();
```
[Snippet Source](https://github.com/algorand/js-algorand-sdk/blob/examples/examples/atc.ts#L52-L53)

</TabItem>
<TabItem value="python" label="Python">

```python
atc = AtomicTransactionComposer()
```
[Snippet Source](https://github.com/algorand/py-algorand-sdk/blob/examples/examples/atc.py#L12-L13)

</TabItem>
<TabItem value="go" label="Go">

```go
// Create the atc we'll use to compose our transaction group
var atc = transaction.AtomicTransactionComposer{}
```
[Snippet Source](https://github.com/algorand/go-algorand-sdk/blob/examples/examples/atc/main.go#L40-L42)

</TabItem>
<TabItem value="java" label="Java">

```java
AtomicTransactionComposer atc = new AtomicTransactionComposer();
```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/ATC.java#L49-L50)

</TabItem>
</Tabs>

## Add individual transactions

Individual transactions being passed to the composer must be wrapped in a `TransactionWithSigner`. This allows some conveniences we'll see later on.

Constructing a Transaction with Signer and adding it to the transaction composer can be done as follows:

<Tabs>
<TabItem value="python" label="Python">

```python
addr, sk = acct.address, acct.private_key

# Create signer object
signer = AccountTransactionSigner(sk)

# Get suggested params from the client
sp = algod_client.suggested_params()

# Create a transaction
ptxn = transaction.PaymentTxn(addr, sp, addr, 10000)

# Construct TransactionWithSigner
tws = TransactionWithSigner(ptxn, signer)

# Pass TransactionWithSigner to ATC
atc.add_transaction(tws)
```
[Snippet Source](https://github.com/algorand/py-algorand-sdk/blob/examples/examples/atc.py#L22-L38)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// construct a transaction
const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
from: sender.addr,
suggestedParams,
to: sender.addr,
amount: 1000,
});

// add the transaction to the ATC with a signer
atc.addTransaction({ txn: paymentTxn, signer: sender.signer });
```
[Snippet Source](https://github.com/algorand/js-algorand-sdk/blob/examples/examples/atc.ts#L63-L73)

</TabItem>
<TabItem value="go" label="Go">

```go
// Get suggested params and make a transaction as usual
sp, err := algodClient.SuggestedParams().Do(context.Background())
if err != nil {
log.Fatalf("error getting suggested tx params: %s", err)
}

txn, err := transaction.MakePaymentTxn(acct1.Address.String(), acct1.Address.String(), 10000, nil, "", sp)
if err != nil {
log.Fatalf("failed to make transaction: %s", err)
}

// Construct a TransactionWithSigner and pass it to the atc
signer := transaction.BasicAccountTransactionSigner{Account: acct1}
atc.AddTransaction(transaction.TransactionWithSigner{Txn: txn, Signer: signer})
```
[Snippet Source](https://github.com/algorand/go-algorand-sdk/blob/examples/examples/atc/main.go#L45-L59)

</TabItem>
<TabItem value="java" label="Java">

```java
// Create a transaction
Transaction ptxn = PaymentTransactionBuilder.Builder().amount(10000).suggestedParams(sp)
.sender(acct.getAddress()).receiver(acct.getAddress()).build();

// Construct TransactionWithSigner
TransactionWithSigner tws = new TransactionWithSigner(ptxn,
acct.getTransactionSigner());

// Pass TransactionWithSigner to atc
atc.addTransaction(tws);
```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/ATC.java#L53-L63)

</TabItem>
</Tabs>

The call to add a transaction may be performed multiple times, each time adding a new transaction to the atomic group. Recall that a maximum of 16 transactions may be included in a single group.


## Calling ABI Methods

When calling an [ABI](/docs/get-details/dapps/smart-contracts/ABI/) compliant application, the Atomic Transaction Composer will handle encoding and decoding of the arguments passed and the return value.  It will also make sure that any [reference types](/docs/get-details/dapps/smart-contracts/ABI/#reference-types) are packed into the transaction group appropriately.  Additionally, since it knows the method signature and types required, it will do some type checking to make sure the arguments passed are valid for the method call. 

In order to call the methods, a Contract or Interface is constructed. Typically this will be done using a [json file](/docs/get-details/dapps/smart-contracts/ABI/#api) that describes the api for the application.   

Once the Contract object is constructed, it can be used to look up and pass method objects into the Atomic Transaction Composers `add_method_call`

<Tabs>
<TabItem value="python" label="Python">

```python
with open("calculator/contract.json") as f:
js = f.read()
contract = abi.Contract.from_json(js)
```
[Snippet Source](https://github.com/algorand/py-algorand-sdk/blob/examples/examples/atc.py#L44-L47)
```python

# Simple call to the `add` method, method_args can be any type but _must_
# match those in the method signature of the contract
atc.add_method_call(
app_id,
contract.get_method_by_name("add"),
addr,
sp,
signer,
method_args=[1, 1],
)
```
[Snippet Source](https://github.com/algorand/py-algorand-sdk/blob/examples/examples/atc.py#L50-L61)
```python
# Other options:
# txngroup = atc.build_group()
# txids = atc.submit(client)
result = atc.execute(algod_client, 4)
for res in result.abi_results:
print(res.return_value)
```
[Snippet Source](https://github.com/algorand/py-algorand-sdk/blob/examples/examples/atc.py#L65-L71)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const abi = JSON.parse(
fs.readFileSync(path.join(__dirname, '/calculator/contract.json'), 'utf8')
);
const contract = new algosdk.ABIContract(abi);
```
[Snippet Source](https://github.com/algorand/js-algorand-sdk/blob/examples/examples/atc.ts#L56-L60)
```javascript
atc.addMethodCall({
appID: appIndex,
method: contract.getMethodByName('add'),
methodArgs: [1, 2],
sender: sender.addr,
signer: sender.signer,
suggestedParams,
});
```
[Snippet Source](https://github.com/algorand/js-algorand-sdk/blob/examples/examples/atc.ts#L76-L84)
```javascript
const result = await atc.execute(client, 4);
for (const mr of result.methodResults) {
console.log(`${mr.returnValue}`);
}
```
[Snippet Source](https://github.com/algorand/js-algorand-sdk/blob/examples/examples/atc.ts#L87-L91)

</TabItem>
<TabItem value="go" label="Go">

```go
b, err := ioutil.ReadFile("calculator/contract.json")
if err != nil {
log.Fatalf("failed to read contract file: %s", err)
}

contract := &abi.Contract{}
if err := json.Unmarshal(b, contract); err != nil {
log.Fatalf("failed to unmarshal contract: %s", err)
}
```
[Snippet Source](https://github.com/algorand/go-algorand-sdk/blob/examples/examples/atc/main.go#L28-L37)
```go
// Grab the method from out contract object
addMethod, err := contract.GetMethodByName("add")
if err != nil {
log.Fatalf("failed to get add method: %s", err)
}

// Set up method call params
mcp := transaction.AddMethodCallParams{
AppID:           appID,
Sender:          acct1.Address,
SuggestedParams: sp,
OnComplete:      types.NoOpOC,
Signer:          signer,
Method:          addMethod,
MethodArgs:      []interface{}{1, 1},
}
if err := atc.AddMethodCall(mcp); err != nil {
log.Fatalf("failed to add method call: %s", err)
}
```
[Snippet Source](https://github.com/algorand/go-algorand-sdk/blob/examples/examples/atc/main.go#L62-L81)
```go
result, err := atc.Execute(algodClient, context.Background(), 4)
if err != nil {
log.Fatalf("failed to get add method: %s", err)
}

for _, r := range result.MethodResults {
log.Printf("%s => %v", r.Method.Name, r.ReturnValue)
}
```
[Snippet Source](https://github.com/algorand/go-algorand-sdk/blob/examples/examples/atc/main.go#L84-L92)

</TabItem>
<TabItem value="java" label="Java">

```java
// Read the json from disk
String jsonContract = Files.readString(Paths.get("calculator/contract.json"));
// Create Contract from Json
Contract contract = Encoder.decodeFromJson(jsonContract, Contract.class);
```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/ATC.java#L66-L70)
```java
// create methodCallParams by builder (or create by constructor) for add method
List<Object> methodArgs = new ArrayList<Object>();
methodArgs.add(1);
methodArgs.add(1);

MethodCallTransactionBuilder<?> mctb = MethodCallTransactionBuilder.Builder();

MethodCallParams mcp = mctb.applicationId(appId).signer(acct.getTransactionSigner())
.sender(acct.getAddress())
.method(contract.getMethodByName("add")).methodArguments(methodArgs)
.onComplete(Transaction.OnCompletion.NoOpOC).suggestedParams(sp).build();

atc.addMethodCall(mcp);
```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/ATC.java#L73-L86)
```java
ExecuteResult res = atc.execute(algodClient, 2);
System.out.printf("App call (%s) confirmed in round %d\n", res.txIDs, res.confirmedRound);
res.methodResults.forEach(methodResult -> {
System.out.printf("Result from calling '%s' method: %s\n", methodResult.method.name,
methodResult.value);
});
```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/ATC.java#L89-L95)

</TabItem>
</Tabs>

## Foreign References

In order to inspect state for an Account, Asset, Application, or Box, you must pass a reference to the foreign object. This is done by passing a reference to the foreign object in one of the reference arrays. While the ABI takes care of some of this by allowing arguments to be reference types, sometimes you need to pass a reference to an object that is not an argument to the method. 


<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
const foreignRefAtc = new algosdk.AtomicTransactionComposer();
foreignRefAtc.addMethodCall({
suggestedParams,
appID: appIndex,
method: contract.getMethodByName('add'),
methodArgs: [1, 2],
sender: sender.addr,
signer: sender.signer,
// pass foreign refs
appAccounts: [otherAcct.addr],
appForeignApps: [1337],
appForeignAssets: [42],
boxes: [
{
appIndex,
name: new Uint8Array(Buffer.from('coolBoxName')),
},
],
});
```
[Snippet Source](https://github.com/algorand/js-algorand-sdk/blob/examples/examples/atc.ts#L120-L139)

</TabItem>
<TabItem value="python" label="Python">

```python
atc = AtomicTransactionComposer()
atc.add_method_call(
app_id,
my_method,
addr,
sp,
signer,
accounts=[acct2.address],
foreign_apps=[1337],
foreign_assets=[42],
boxes=[[app_id, b"key"]],
)
```
[Snippet Source](https://github.com/algorand/py-algorand-sdk/blob/examples/examples/atc.py#L90-L102)

</TabItem>
<TabItem value="go" label="Go">

```go
mcp = transaction.AddMethodCallParams{
AppID:           appID,
Sender:          acct1.Address,
SuggestedParams: sp,
OnComplete:      types.NoOpOC,
Signer:          signer,
Method:          addMethod,
MethodArgs:      []interface{}{1, 1},
// Pass foreign references to the app
ForeignAccounts: []string{acct2.Address.String()},
ForeignApps:     []uint64{1337},
ForeignAssets:   []uint64{42},
BoxReferences: []types.AppBoxReference{
{AppID: appID, Name: []byte("coolBoxName")},
},
}
```
[Snippet Source](https://github.com/algorand/go-algorand-sdk/blob/examples/examples/atc/main.go#L114-L130)

</TabItem>
<TabItem value="java" label="Java">

```java
MethodCallTransactionBuilder<?> refBuilder = MethodCallTransactionBuilder.Builder();

List<AppBoxReference> boxReferences = new ArrayList<>();
boxRefs.add(new AppBoxReference(appId.intValue(), "cool-box".getBytes()));

List<Address> acctReferences = new ArrayList<>();
acctReferences.add(otherAccount.getAddress());

List<Long> appReferences = new ArrayList<>();
appReferences.add(1337l);

List<Long> assetReferences = new ArrayList<>();
appReferences.add(42l);

MethodCallParams foreignRefMCP = refBuilder
.suggestedParams(sp)
.applicationId(appId)
.sender(acct.getAddress())
.method(contract.getMethodByName("add"))
.methodArguments(methodArgs)
.signer(acct.getTransactionSigner())
.onComplete(Transaction.OnCompletion.NoOpOC)
.accounts(acctReferences)
.foreignApps(appReferences)
.foreignAssets(assetReferences)
.boxReferences(boxReferences)
.build();
```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/ATC.java#L117-L144)
</TabItem>
</Tabs>
