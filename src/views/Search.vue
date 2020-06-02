<template>
  <div class="search">
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
            <router-link to="/product">
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
        products:[
          {
            id: 1,
            name: 'Cruise Dual Analog',
            price: 499,
            mark: 4
          },
          {
            id: 2,
            name: 'Crown Summit Backpack',
            price: 250,
            mark: 3
          },
          {
            id: 3,
            name: 'Joust Duffle Bag',
            price: 199,
            mark: 2
          },
          {
            id: 4,
            name: 'Voyage Yoga Bag',
            price: 549,
            mark: 4
          },
          {
            id: 5,
            name: 'Joust Duffle Bag',
            price: 129,
            mark: 5
          },
          {
            id: 6,
            name: 'Cruise Dual Analog',
            price: 499,
            mark: 4
          },
          {
            id: 7,
            name: 'Crown Summit Backpack',
            price: 250,
            mark: 5
          },
          {
            id: 8,
            name: 'Joust Duffle Bag',
            price: 199,
            mark: 5
          },
          {
            id: 9,
            name: 'Voyage Yoga Bag',
            price: 549,
            mark: 4
          },
          {
            id: 10,
            name: 'Joust Duffle Bag',
            price: 129,
            mark: 5
          },
          {
            id: 11,
            name: 'Cruise Dual Analog',
            price: 499,
            mark: 4
          },
          {
            id: 12,
            name: 'Crown Summit Backpack',
            price: 250,
            mark: 5
          },
          {
            id: 13,
            name: 'Joust Duffle Bag',
            price: 199,
            mark: 5
          },
          {
            id: 14,
            name: 'Voyage Yoga Bag',
            price: 549,
            mark: 4
          },
          {
            id: 15,
            name: 'Joust Duffle Bag',
            price: 129,
            mark: 5
          },
          {
            id: 16,
            name: 'Voyage Yoga Bag',
            price: 549,
            mark: 4
          },
          {
            id: 17,
            name: 'Joust Duffle Bag',
            price: 129,
            mark: 5
          },
          {
            id: 18,
            name: 'Joust Duffle Bag',
            price: 129,
            mark: 5
          }
        ]
      }
    },
    methods:{}
  }
</script>