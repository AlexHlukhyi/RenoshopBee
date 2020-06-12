<template>
  <div>
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/catalog">Catalog</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
        <table class="cart">
          <thead>
          <tr>
            <th>Products</th>
            <th>Color & Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-bind:key="product.id" v-for="(product, index) in $parent.cartItems">
            <th><img class="thumbnail"/>{{ product.name }}</th>
            <td>
              <div>Size: {{ product.size }}</div>
              <div>Color: {{ product.color }}</div>
            </td>
            <td>
              <input type="number" v-model="product.quantity" @change="updateTotals()" min="1" max="100" class="small"/>
            </td>
            <td>${{ product.price }}</td>
            <td>${{ product.price * product.quantity }}
              <button class="delete-button" @click="deleteProduct(product.id, index)">
                <i class="far fa-times-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <button class="white-button small-button" @click="updateTotals()">UPDATE CART</button>
              <button class="green-button small-button" @click="toCatalog()">CONTINUE SHOPPING</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="order-details wrapper">
          <div class="section">
            <h5>USE COUPON CODE</h5>
            <p>Enter your coupon code here</p>
            <div class="form-group wrapper">
              <input type="text" id="coupon-code" placeholder="Coupon code" class="small"/>
              <button class="green-button small-button">APPLY</button>
            </div>
          </div>
          <div class="section">
            <h5>USE GIFT VOUCHER</h5>
            <p>Enter your gift voucher code here</p>
            <div class="form-group wrapper">
              <input type="text" placeholder="Gift voucher code" class="small"/>
              <button class="green-button small-button">APPLY</button>
            </div>
          </div>
          <div class="section">
            <h5>SHIPPING AVAILABILITY</h5>
            <p>Select country</p>
            <select class="medium">
              <option disabled="disabled" selected="selected">Country</option>
              <option>Ukraine</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
            <p>Select state</p>
            <select class="medium">
              <option disabled="disabled" selected="selected">State</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <p>Postcode/Zip</p>
            <input type="number" placeholder="Postcode/Zip" class="small"/>
          </div>
          <div class="section">
            <h5>SHIPPING CART CALCULATION</h5>
            <div class="calculation wrapper">
              <div class="wrapper">
                <p>Subtotal</p>
                <p>${{ subtotal }}</p>
              </div>
              <div class="wrapper">
                <p>Coupon</p>
                <p>-${{ coupon }}</p>
              </div>
              <div class="wrapper">
                <p>Shipping</p>
                <p>Free Shipping</p>
              </div>
              <hr/>
              <div class="wrapper">
                <p>Total</p>
                <p>${{ total }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="order-controls wrapper">
          <button class="white-button small-button" @click="updateTotals()">UPDATE TOTALS</button>
          <button class="green-button small-button" @click="toCheckout()">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    components: {},
    data(){
      return {
        subtotal: 0,
        coupon: 50,
        total: 0
      }
    },
    methods:{
      updateTotals() {
        let subtotal = 0;
        for(let product of this.$parent.cartItems) {
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
      deleteProduct(id, index) {
        this.axios.post('http://renoshop.bee/api/cart/remove', {
          id: id
        })
          .then(() => {
            this.$parent.cartItems.splice(index, 1);
            this.updateTotals();
          }).catch((error) => {
            console.log(error);
          });
      }
    },
    mounted() {}
  }
</script>