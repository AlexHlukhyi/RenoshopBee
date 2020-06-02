<template>
  <div class="checkout">
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/catalog">Catalog</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/checkout">Checkout</router-link></li>
        </ul>
        <div class="order-details wrapper">
          <div class="section">
            <h5>BILLING DETAILS</h5>
            <p class="important">First Name and Last Name</p>
            <div class="form-group wrapper">
              <input type="text" id="first-name" class="small"/>
              <input type="text" id="last-name" class="small"/>
            </div>
            <p class="important">Country</p>
            <select class="medium">
              <option disabled="disabled" selected="selected">Country</option>
              <option>Ukraine</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
            <p>Company Name</p>
            <input type="text" id="company" placeholder="First Name" class="small"/>
            <p class="important">Address</p>
            <input type="text" id="address" placeholder="Street address" class="small"/>
            <p>Postcode/Zip</p>
            <input type="number" id="postcode" placeholder="Postcode/Zip" class="small"/>
            <p class="important">Town/City</p>
            <input type="text" id="town" placeholder="Town/City" class="small"/>
            <p class="important">E-mail Address</p>
            <input type="text" id="e-mail" class="small"/>
            <p class="important">Phone</p>
            <input type="text" id="phone" class="small"/>
          </div>
          <div class="section">
            <div class="calculation wrapper">
              <h5>YOUR ORDER</h5>
              <div class="wrapper">
                <p>Product:</p>
                <p>Total</p>
              </div>
              <hr/>
              <div class="wrapper">
                <p>Casual men wearing cool shoe x 1</p>
                <p>$120</p>
              </div>
              <div class="wrapper">
                <p>Casual men wearing x 2</p>
                <p>$280</p>
              </div>
              <hr/>
              <div class="wrapper">
                <p>Subtotal</p>
                <p>$400</p>
              </div>
              <div class="wrapper">
                <p>Shipping</p>
                <p>Free Shipping</p>
              </div>
              <hr/>
              <div class="wrapper bold">
                <p>Total</p>
                <p>$400</p>
              </div>
              <hr/>
              <div class="payment">
                <p>
                  <input type="radio" name="payment"/>Direct Bank Transfer
                </p>
                <p class="hint">Make your payment directly into our bank account. Please use yur Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                <p>
                  <input type="radio" name="payment"/>Cheque Payment
                </p>
                <p>
                  <input type="radio" name="payment"/>PayPal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="order-controls wrapper">
          <p>
            <input type="checkbox"/>Create an account?
          </p>
          <button class="green-button small-button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    components: {},
    data(){
      return {
        subtotal: 0,
        coupon: 50,
        total: 0,
        products:[
          {
            name: 'Cruise Dual Analog',
            size: 'S',
            color: 'Black',
            price: 499,
            quantity: 1
          },
          {
            name: 'Crown Summit Backpack',
            size: 'XS',
            color: 'White',
            price: 250,
            quantity: 2
          },
          {
            name: 'Joust Duffle Bag',
            size: 'L',
            color: 'Brown',
            price: 199,
            quantity: 1
          },
          {
            name: 'Voyage Yoga Bag',
            size: 'XL',
            color: 'Black',
            price: 549,
            quantity: 3
          }
        ]
      }
    },
    methods:{
      updateTotals() {
        let subtotal = 0;
        for(let product of this.products) {
          subtotal += product.price * product.quantity;
        }
        this.subtotal = subtotal;
        this.total = this.subtotal - this.coupon;
        if (this.total < 0) {
          this.total = 0;
        }
      },
      toCatalog() {
        this.$router.push('catalog');
      },
      toCheckout() {
        this.$router.push('checkout');
      },
      deleteProduct(key) {
        this.products.splice(key, 1)
        this.updateTotals();
      }
    },
    mounted() {
      this.updateTotals();
    }
  }
</script>