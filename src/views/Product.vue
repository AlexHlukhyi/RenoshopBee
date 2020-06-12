<template>
  <div v-if="product">
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/catalog">Catalog</router-link></li>
          <li><router-link to="/product">{{ product.name }}</router-link></li>
        </ul>
        <div class="product large">
          <div class="product-images"><img/>
            <div class="thumbnails wrapper"><a href="#"><img/></a><a href="#"><img/></a><a href="#"><img/></a><a href="#"><img/></a></div>
          </div>
          <div class="product-info"><a href="#">
            <h5>{{ product.name }}</h5></a>
            <div class="price">{{ product.price }}</div>
            <div class="marks wrapper">
              <i :class="(mark < i)?'far fa-star':'fas fa-star'" :key="i" v-for="i in 5"></i>
            </div>
            <p>{{ product.short_description }}</p>
            <hr/>
            <div class="properties">
              <select class="medium" v-model="size">
                <option disabled value="">Select Size</option>
                <option v-bind:value="size.id" :key="size.id" v-for="size in product.sizes">{{ size.name }}</option>
              </select>
              <select class="medium" v-model="color">
                <option disabled value="">Select Color</option>
                <option v-bind:value="color.id" :key="color.id" v-for="color in product.colors">{{ color.name }}</option>
              </select>
              <input type="number" placeholder="Select Quantity" class="medium" min="1" max="100" v-model="quantity"/>
            </div>
            <div class="actions">
              <a href="#" @click.prevent="addToCart()" class="action"><i class="fas fa-shopping-cart"></i></a>
              <a href="#" class="action"><i class="fas fa-heart"></i></a>
              <a href="#" class="action"><i class="fas fa-retweet"></i></a>
            </div>
          </div>
          <div class="product-description">
            <h5>Description</h5>
            <p>{{ product.description }}</p>
          </div>
          <hr/>
          <div class="product-reviews">
            <h5>Reviews</h5>
            <div class="reviews wrapper">
              <p>{{ reviews.length }} reviews to Cruise Analog Dual</p>
              <div class="review wrapper" v-bind:key="review.id" v-for="review in reviews.slice(0, 6)"><img class="thumbnail"/>
                <div class="review-body">
                  <div class="wrapper">
                    <div class="marks wrapper">
                      <i :class="(review.mark < i)?'far fa-star':'fas fa-star'" :key="i" v-for="i in 5"></i>
                    </div>
                    <div class="date">{{ review.date }}</div>
                  </div>
                  <h5>{{ review.name }}</h5>
                  <p>{{ review.text }}</p>
                </div>
              </div>
              <div class="new-review wrapper">
                <h5>Add a review</h5>
                <p>Your rating:</p>
                <div class="marks wrapper">
                  <i :class="(newReview.mark < i)?'far fa-star':'fas fa-star'" :key="i" v-for="i in 5" @click="newReview.mark=i"></i>
                </div>
                <p>Your review:</p>
                <textarea v-model="newReview.text"></textarea>
                <button class="green-button small-button" @click="addReview()">SUBMIT</button>
              </div>
            </div>
          </div>
          <div class="related-products">
            <div class="title">
              <h3>RELATED PRODUCTS</h3>
              <div class="small-tag-line">Check this out too</div>
            </div>
            <div class="items wrapper">
              <div class="product small" :key="product.id" v-for="product in relatedProducts"><img/>
                <div class="actions">
                  <a href="#" class="action"><i class="fas fa-shopping-cart"></i></a>
                  <a href="#" class="action"><i class="fas fa-heart"></i></a>
                  <a href="#" class="action"><i class="fas fa-retweet"></i></a>
                </div>
                <router-link :to="'/product/' + product.id">
                  <h5>{{ product.name }}</h5>
                </router-link>
                <div class="price">{{ product.price }}</div>
                <div class="marks wrapper">
                  <i :class="(product.mark < i)?'far fa-star':'fas fa-star'" :key="i" v-for="i in 5"></i>
                </div>
              </div>
            </div>
          </div>
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
        product: null,
        quantity: 1,
        color: '',
        size: '',
        mark: 0,
        reviews: null,
        newReview: {
          mark: 0,
          text: '',
        },
        relatedProducts: null
      }
    },
    watch:{
      $route() {
        this.getProduct();
      }
    },
    methods:{
      countMark() {
        let marks = 0;
        for (let review of this.reviews) {
          marks += review.mark;
        }
        this.mark = marks/this.reviews.length;
      },
      getProduct() {
        this.axios.get('http://renoshop.bee/api/products/' + this.$route.params.id).then(response => {
          this.product = response.data.product;
          this.reviews = response.data.reviews;
          this.relatedProducts = response.data.relatedProducts;
          this.countMark();
        });
      },
      addToCart() {
        let item = {
          user: this.$parent.user.id,
          product: this.product.id,
          quantity: this.quantity,
          size: this.size,
          color: this.color
        };
        this.axios.post('http://renoshop.bee/api/cart/add', item).then(() => {
          this.$parent.cartItems.push(item);
          alert('Item added!')
        }).catch((error) => {
          console.log(error);
        });
      },
      addReview() {
        let review = {
          user: this.$parent.user.id,
          product: this.product.id,
          mark: this.newReview.mark,
          text: this.newReview.text,
        };
        this.axios.post('http://renoshop.bee/api/reviews/add', review).then(() => {
          this.reviews.push(review);
          this.newReview.mark = 0;
          this.newReview.text = '';
          this.countMark();
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.getProduct();
    }
  }
</script>