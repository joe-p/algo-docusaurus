---
title: Your First Transaction
---



# Install Sandbox

!!! info
    This step is only required if you are not using AlgoKit. If you are using AlgoKit, you can spin up a sandbox using the LocalNet, see [AlgoKit getting started guide](/docs/get-started/algokit/#start-a-localnet) for more information. 

!!! Prerequisites

Algorand provides a docker instance for setting up a node, which can be used to get started developing. To install and use this instance, follow these instructions.


```bash
git clone https://github.com/algorand/sandbox.git
cd sandbox
./sandbox up dev 

```

This will install and start private network. To read more about Algorand networks see [Algorand Networks](../../get-details/algorand-networks/index.md){target=_blank}. 

[More Information about the sandbox](https://developer.algorand.org/articles/introducing-sandbox-20/) and [how to use](https://developer.algorand.org/tutorials/exploring-the-algorand-sandbox/) it.


# Install Java SDK 
Algorand provides an [SDK for Java](https://github.com/algorand/java-algorand-sdk). The instructions for installing the SDK are as follows. The Java SDK is available in the MVN repository and can be used in your Maven project by including the following dependency.

!!! Prerequisites


```java
<dependency>
    <groupId>com.algorand</groupId>
    <artifactId>algosdk</artifactId>
    <version>2.0.0</version>
</dependency>

```

The [GitHub repository](https://github.com/algorand/js-algorand-sdk){target=_blank} contains additional documentation and examples.


The SDK is installed and can now interact with the Sandbox created earlier.

# Create an Account
In order to interact with the Algorand blockchain, you must have a funded account. To quickly create a test account use the following code.


```java
Account acct = new Account();
System.out.println("Address: " + acct.getAddress());
System.out.println("Passphrase: " + acct.toMnemonic());

```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/Overview.java#L76-L79)


!!! Warning

# Fund the Account
Before sending transactions to the Algorand network, the account must be funded to cover the minimal transaction fees that exist on Algorand. In this example, we'll be using prefunded accounts available in the Sandbox. To fund an account on Testnet account use the [Algorand faucet](https://dispenser.testnet.aws.algodev.network/){target=_blank}. 


!!! Info


# Connect Your Client
An Algod client must be instantiated prior to making calls to the API endpoints. You must provide values for `<algod-address>` and `<algod-token>`. The CLI tools implement the client natively. By default, the `algodToken` for each [sandbox](https://github.com/algorand/sandbox) is set to its `aaa...` value and the `algodAddress` corresponds to `http://localhost:4001`.



```java
String algodHost = "http://localhost";
int algodPort = 4001;
String algodToken = "a".repeat(64);
AlgodClient algodClient = new AlgodClient(algodHost, algodPort, algodToken);

// OR if the API provider requires a specific header key for the token
String tokenHeader = "X-API-Key";
AlgodClient otherAlgodClient = new AlgodClient(algodHost, algodPort, algodToken, tokenHeader);

```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/Overview.java#L94-L102)

!!! Info
    The example code connects to the sandbox Algod client. If you want to connect to a public API client, change the host, port, and token parameters to match the API service. See some service available [here](https://developer.algorand.org/ecosystem-projects/?tags=api-services)

!!! Info
    If you are connecting to the Testnet, a dispenser is available [here](https://dispenser.testnet.aws.algodev.network/){target=_blank}

# Check Your Balance
Before moving on to the next step, make sure your account has been funded by the faucet.


```java
Response<com.algorand.algosdk.v2.client.model.Account> acctInfoResp = algodClient
        .AccountInformation(acct.getAddress()).execute();
com.algorand.algosdk.v2.client.model.Account acctInfo = acctInfoResp.body();
// print one of the fields in the account info response
System.out.printf("Current balance: %d", acctInfo.amount);

```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/Overview.java#L84-L89)


# Build First Transaction
Transactions are used to interact with the Algorand network. To create a payment transaction use the following code.
​

```java
Response<TransactionParametersResponse> suggestedParams = algodClient.TransactionParams().execute();
Integer amount = 1000000; // 1 Algo
Transaction ptxn = Transaction.PaymentTransactionBuilder()
        .sender(acct.getAddress())
        .amount(amount)
        .receiver(acct2.getAddress())
        .suggestedParams(suggestedParams.body()).build();

```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/Overview.java#L25-L32)
​
!!! Info
    Algorand supports many transaction types. To see what types are supported see [Transactions](../../get-details/transactions/index.md#transaction-types){target=_blank}. 

# Sign First Transaction
Before the transaction is considered valid, it must be signed by a private key. Use the following code to sign the transaction.


```java
SignedTransaction sptxn = acct.signTransaction(ptxn);

```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/Overview.java#L35-L36)

!!! Info

# Submit the Transaction
The signed transaction can now be submitted to the network. The SDK `waitForConfirmation` utility function is called after the transaction is submitted to wait until the transaction is broadcast to the Algorand blockchain and is confirmed. 


```java
// encode the transaction
byte[] encodedTxBytes = Encoder.encodeToMsgPack(sptxn);
// submit the transaction to the algod server
Response<PostTransactionsResponse> resp = algodClient.RawTransaction().rawtxn(encodedTxBytes).execute();
// wait for the transaction to be confirmed
String txid = resp.body().txId;
PendingTransactionResponse result = Utils.waitForConfirmation(algodClient, txid, 4);
System.out.printf("Transaction %s confirmed in round %d\n", txid, result.confirmedRound);

```
[Snippet Source](https://github.com/algorand/java-algorand-sdk/blob/examples/examples/src/main/java/com/algorand/examples/Overview.java#L39-L47)

# Viewing the Transaction

To view the transaction we submitted to the sandbox Algod, open [DappFlow](https://app.dappflow.org/explorer/home){target=_blank} and choose `Sandbox` configuration option, then search for the transaction ID. 
