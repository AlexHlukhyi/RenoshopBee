<template>
  <div>
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/catalog">Catalog</router-link></li>
        </ul>
        <div class="catalog wrapper">
          <div class="filters" :class="(showFilters)?'active':''">
            <div class="categories-filter">
              <h5>CATEGORIES</h5>
              <ul>
                <li><a>Accessories (15)</a></li>
                <li><a>Dresses (50)</a></li>
                <li><a>Women (150)</a></li>
                <li><a>Men (150)</a></li>
                <li><a>Watch (25)</a></li>
                <li><a>Clothing (10)</a></li>
                <li><a>Bags (100)</a></li>
              </ul>
            </div>
            <hr/>
            <div class="price-filter">
              <h5>PRICE</h5>
              <div class="wrapper">
                <input type="text" value="$10" class="small"/>
                <input type="text" value="$500" class="small"/><a class="green-button small-button"><i class="fas fa-search"></i></a>
              </div>
            </div>
            <hr/>
            <div class="size-filter">
              <h5>SIZE</h5>
              <div class="wrapper"><a>
                <div class="white-button small-button">XS</div></a><a>
                <div class="white-button small-button">S</div></a><a>
                <div class="green-button small-button">M</div></a><a>
                <div class="white-button small-button">L</div></a><a>
                <div class="white-button small-button">SL</div></a><a>
                <div class="white-button small-button">XL</div></a><a>
                <div class="white-button small-button">XXL</div></a></div>
            </div>
            <hr/>
            <div class="color-filter">
              <h5>COLOR</h5>
              <ul>
                <li><a>Black</a></li>
                <li><a>White</a></li>
                <li><a>Red</a></li>
                <li><a>Yellow</a></li>
              </ul>
            </div>
          </div>
          <div class="content">
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
                <div v-if="product.mark" class="marks wrapper">
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
        </div>
      </div>
    </main>
    <div v-if="!showFilters" class="filters-button" @click="openFilters()"><i class="fas fa-caret-right"></i></div>
    <div v-if="showFilters" class="filters-button" @click="closeFilters()"><i class="fas fa-caret-left"></i></div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {

    },
    data(){
      return {
        showFilters: false,
        products: null,
      }
    },
    watch:{
      $route() {
        this.getProducts();
      }
    },
    methods: {
      openFilters() {
        this.showFilters = true
      },
      closeFilters() {
        this.showFilters = false
      },
      getProducts() {
        this.axios.get('http://renoshop.bee/api/categories/' + this.$route.params.id + '/products').then(response => {
          this.products = response.data.products;
        });
      }
    },
    mounted() {
      this.getProducts();
    }
  }
</script>