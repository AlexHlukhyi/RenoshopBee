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
              <select class="medium">
                <option disabled="disabled" selected="selected">Select Size</option>
                <option :key="size.id" v-for="size in product.sizes">{{ size.name }}</option>
              </select>
              <select class="medium">
                <option disabled="disabled" selected="selected">Select Color</option>
                <option :key="color.id" v-for="color in product.colors">{{ color.name }}</option>
              </select>
              <input type="number" placeholder="Select Quantity" class="medium" value="1"/>
            </div>
            <div class="actions">
              <a href="#" class="action"><i class="fas fa-shopping-cart"></i></a>
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
              <div class="review wrapper" v-bind:key="review.id" v-for="review in reviews"><img class="thumbnail"/>
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
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>Your review:</p>
                <textarea></textarea>
                <button class="green-button small-button">SUBMIT</button>
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
                <router-link to="/product">
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
        reviews: null,
        relatedProducts: null,
        mark: 0
      }
    },
    methods:{
      countMark() {
        let marks = 0;
        for (let review of this.reviews) {
          marks += review.mark;
        }
        this.mark = marks/this.reviews.length;
      }
    },
    mounted() {
      this.axios.get('http://renoshop.bee/api/products/1').then(response => {
          this.product = response.data.product;
          this.reviews = response.data.reviews;
          this.relatedProducts = response.data.relatedProducts;
          this.countMark();
        }
      );
    }
  }
</script>