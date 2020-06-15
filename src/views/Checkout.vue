<template>
  <div>
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
            <input type="text" v-model="$parent.user.name" class="small"/>
            <p class="important">Country</p>
            <select class="medium" v-model="country">
              <option disabled value="">Country</option>
              <option value="Ukraine">Ukraine</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
            <p>Company Name</p>
            <input type="text" v-model="company" placeholder="Company Name" class="small"/>
            <p class="important">Address</p>
            <input type="text" v-model="address" placeholder="Street address" class="small"/>
            <p>Postcode/Zip</p>
            <input type="text" v-model="postcode" placeholder="Postcode/Zip" class="small"/>
            <p class="important">Town/City</p>
            <input type="text" v-model="city" placeholder="Town/City" class="small"/>
            <p class="important">E-mail Address</p>
            <input type="text" v-model="$parent.user.email" class="small"/>
            <p class="important">Phone</p>
            <input type="text" v-model="$parent.user.phone" class="small"/>
          </div>
          <div class="section">
            <div class="calculation wrapper">
              <h5>YOUR ORDER</h5>
              <div class="wrapper">
                <p>Product:</p>
                <p>Total</p>
              </div>
              <hr/>
              <div class="wrapper" v-bind:key="product.id" v-for="(product) in $parent.cartItems">
                <p>{{ product.name }} x {{ product.quantity }}</p>
                <p>${{ product.price * product.quantity}}</p>
              </div>
              <hr/>
              <div class="wrapper">
                <p>Subtotal</p>
                <p>${{ subtotal }}</p>
              </div>
              <div class="wrapper">
                <p>Shipping</p>
                <p>Free Shipping</p>
              </div>
              <hr/>
              <div class="wrapper bold">
                <p>Total</p>
                <p>${{ total }}</p>
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
          <p v-if="$parent.user">
            <input type="checkbox"/>Create an account?
          </p>
          <button class="green-button small-button" @click="makeOrder()">MAKE ORDER</button>
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
        total: 0,
        country: '',
        company: '',
        address: '',
        postcode: '',
        city: ''
      }
    },
    methods:{
      updateTotals() {
        let subtotal = 0;
        for(let product of this.$parent.cartItems) {
          subtotal += product.price * product.quantity;
        }
        this.subtotal = subtotal;
        this.total = this.subtotal;
        if (this.total < 0) {
          this.total = 0;
        }
      },
      makeOrder() {
        let order = {
          user_id: this.$parent.user.id,
          country: this.country,
          city: this.city,
          postcode: this.postcode,
          address: this.address
        };
        console.log(order);
        this.axios.post('http://renoshop.bee/api/orders/add', order).then(() => {
          alert('Success!');
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.updateTotals();
    }
  }
</script>