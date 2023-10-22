# auction

### *class* Bid(bidder, bid_currency, max_price, bid_id, auction_key, auction_id)

Bases: `object`

Represents a bid in an auction.

* **Parameters:**
  * **bidder** (*str*) – address of the bidder
  * **bid_currency** (*int*) – how much external currency is being spent
  * **max_price** (*int*) – the maximum price the bidder is willing to pay
  * **bid_id** (*int*) – bid ID
  * **auction_key** (*str*) – address of the auction
  * **auction_id** (*int*) – auction ID

#### bidder

* **Type:**
  str

#### bid_currency

* **Type:**
  int

#### max_price

* **Type:**
  int

#### bid_id

* **Type:**
  int

#### auction_key

* **Type:**
  str

#### auction_id

* **Type:**
  int

#### dictify()

#### sign(private_key)

Sign a bid.

* **Parameters:**
  **private_key** (*str*) – private_key of the bidder
* **Returns:**
  signed bid with the signature
* **Return type:**
  [SignedBid](#algosdk.auction.SignedBid)

#### *static* undictify(d)

### *class* SignedBid(bid, signature)

Bases: `object`

Represents a signed bid in an auction.

* **Parameters:**
  * **bid** ([*Bid*](#algosdk.auction.Bid)) – bid that was signed
  * **signature** (*str*) – the signature of the bidder

#### bid

* **Type:**
  [Bid](#algosdk.auction.Bid)

#### signature

* **Type:**
  str

#### dictify()

#### *static* undictify(d)

### *class* NoteField(signed_bid, note_field_type)

Bases: `object`

Can be encoded and added to a transaction.

* **Parameters:**
  * **signed_bid** ([*SignedBid*](#algosdk.auction.SignedBid)) – bid with signature of bidder
  * **note_field_type** (*str*) – the type of note; see constants for possible
    types

#### signed_bid

* **Type:**
  [SignedBid](#algosdk.auction.SignedBid)

#### note_field_type

* **Type:**
  str

#### dictify()

#### *static* undictify(d)
