<template>
  <div>
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
        </ul>
        <div class="search-results wrapper">
          <p>Showing 1-12 of 44 results</p>
          <select>
            <option>Sort by newness</option>
            <option>Sort by popularity</option>
            <option>Sort by cost</option>
          </select>
        </div>
        <div class="items wrapper">
          <div class="product small" :key="product.id" v-for="product in products"><img/>
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
        <div class="pages wrapper">
          <ul>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    components: {},
    data(){
      return {
        products: null
      }
    },
    watch:{
      $route() {
        this.getProducts();
      }
    },
    methods:{
      getProducts() {
        this.axios.get('http://renoshop.bee/api/search?q=' + this.$route.query.q).then(response => {
          this.products = response.data.products;
        });
      }
    },
    mounted() {
      this.getProducts();
    }
  }
</script>