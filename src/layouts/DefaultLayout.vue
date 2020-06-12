<template>
    <div>
        <header>
            <div class="contacts-bar wrapper">
                <div class="contacts wrapper"><a href="#" class="wrapper"><i class="fas fa-phone-alt"></i>
                    <div>+1 123 456 789</div>
                </a>
                    <div>|</div>
                    <a href="#" class="wrapper"><i class="fas fa-envelope"></i>
                        <div>info@company.com</div>
                    </a>
                </div>
                <div v-if="!user" class="user-info wrapper">
                    <router-link to="/login" class="wrapper">
                        <i class="fas fa-sign-in-alt"></i>
                        <div>Sign In</div>
                    </router-link>
                    <div>|</div>
                    <router-link to="/register" class="wrapper">
                        <i class='fas fa-sign-out-alt'></i>
                        <div>Sign Up</div>
                    </router-link>
                </div>
                <div v-else class="user-info wrapper">
                    <a href="#" class="wrapper">
                        <i class='fas fa-user'></i>
                        <div>{{ user.name }}</div>
                    </a>
                    <div>|</div>
                    <a @click="logout()" class="wrapper">
                        <i class='fas fa-sign-out-alt'></i>
                        <div>Sign Out</div>
                    </a>
                </div>
            </div>
            <div class="navigation-bar wrapper">
                <router-link to="/" class="logo">
                    <span class="bold">RENOSHOP</span><span>BEE</span>
                </router-link>
                <router-link to="/" class="logo short">
                    <span class="bold">R</span><span>BEE</span>
                </router-link>
                <div v-if="categories" class="navigation wrapper">
                    <router-link to="/">HOME</router-link>
                    <router-link :to="'/categories/' + category.id + '/products'" v-bind:key="category.id" v-for="category in categories">{{ category.name.toUpperCase() }}</router-link>
                </div>
                <div class="small-navigation wrapper">
                    <a data-toggle="modal" data-target="#search">
                        <i class="fas fa-search"></i>
                    </a>
                    <router-link to="/cart">
                        <i class="fas fa-shopping-cart">
                            <div v-if="cartItems" class="items-count">{{ cartItems.length }}</div>
                        </i>
                    </router-link>
                    <a @click="openMenu()">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        </header>

        <router-view></router-view>

        <footer>
            <div class="top-section">
                <div class="container wrapper">
                    <div class="wrapper">
                        <p>We're confident we've provided all the best for you. Stay connect with us.</p>
                    </div>
                    <div class="contacts wrapper">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-behance"></i></a>
                    </div>
                </div>
            </div>
            <div class="middle-sections">
                <div class="container wrapper">
                    <div class="section">
                        <h6>NAVIGATION</h6>
                        <router-link to="/">Home</router-link>
                        <router-link to="/catalog">Catalog</router-link>
                        <a data-toggle="modal" data-target="#search">Search</a>
                    </div>
                    <div class="section">
                        <h6>CATEGORIES</h6>
                        <router-link :to="'/categories/' + category.id + '/products'" v-bind:key="category.id" v-for="category in categories">{{ category.name }}</router-link>
                    </div>
                    <div class="section">
                        <h6>ACCOUNT</h6>
                        <a href="#" data-toggle="modal" data-target="#sign-in">Sign In</a>
                        <a href="#" data-toggle="modal" data-target="#sign-up">Sign Up</a>
                        <router-link to="/cart">My Cart</router-link>
                    </div>
                    <div class="section">
                        <h6>CONTACT INFO</h6>
                        <p><i class="fas fa-globe-americas"></i>1234 Your Address, Country</p>
                        <p><i class="fas fa-phone-alt"></i>+1 123 456 789</p>
                        <p><i class="fas fa-envelope"></i>info@company.com</p>
                    </div>
                </div>
            </div>
            <div class="bottom-section">
                <div class="container wrapper">
                    <div class="wrapper">
                        <p>Copyright 2020 RenoshopBee all right reserved - Developed by Oleksandr Hlukhyi</p>
                    </div>
                    <div class="payment-methods wrapper">
                        <div class="payment-method"><i class="fab fa-cc-visa"></i></div>
                        <div class="payment-method"><i class="fab fa-cc-paypal"></i></div>
                        <div class="payment-method"><i class="fab fa-cc-mastercard"></i></div>
                        <div class="payment-method"><i class="fab fa-cc-amazon-pay"></i></div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="overlay" class="overlay" :class="(menuVisible)?'active':''" @click="closeMenu()"></div>
        <div id="menu" class="menu" :class="(menuVisible)?'active':''">
            <router-link to="/" class="logo" @click.native="closeMenu()">
                <span class="bold">RENOSHOP</span><span>BEE</span>
            </router-link>
            <hr/>
            <div class="navigation wrapper">
                <a href="#" data-toggle="modal" data-target="#sign-in" @click="closeMenu()">SIGN IN</a>
                <a href="#" data-toggle="modal" data-target="#sign-up" @click="closeMenu()">SIGN UP</a>
            </div>
            <hr/>
            <div class="navigation wrapper">
                <router-link to="/" @click.native="closeMenu()">HOME</router-link>
                <router-link :to="'/categories/' + category.id + '/products'" v-bind:key="category.id" v-for="category in categories" @click.native="closeMenu()">{{ category.name.toUpperCase() }}</router-link>
            </div>
        </div>
        <div id="search" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade">
            <div role="document" class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"><a href="#" class="logo"><span
                            class="bold">RENOSHOP</span><span>BEE</span></a>
                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span
                                aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <p>Enter your search query here...</p>
                        <input type="text" v-model="searchQuery" class="small"/>
                    </div>
                    <div class="modal-footer">
                        <button class="button green-button small-button" :data-dismiss="(searchQuery)?'modal':'undefined'" @click="search()">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    data() {
      return {
        user: null,
        menuVisible: false,
        categories: null,
        cartItems: null,
        searchQuery: ''
      }
    },
    watch:{
      $route() {
        this.getUser();
      }
    },
    methods: {
      openMenu() {
        this.menuVisible = true;
      },
      closeMenu() {
        this.menuVisible = false;
      },
      getCategories() {
        this.axios.get('http://renoshop.bee/api/categories').then(
          response => (
            this.categories = response.data.categories
          )
        );
      },
      getCartItems() {
        this.axios.get('http://renoshop.bee/api/cart/' + this.user.id + '/items').then(response => {
          this.cartItems = response.data.products;
        });
      },
      search() {
        if (this.searchQuery) {
          this.$router.push('search?q=' + this.searchQuery);
        }
      },
      getUser() {
        if(this.$store.getters.token) {
          this.axios.post('http://renoshop.bee/api/auth/me')
          .then((response) => {
            let user = response.data;
            this.$store.commit('setUser', {
              user: user
            });
            this.user = user;
            this.getCartItems();
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      logout() {
        localStorage.removeItem('user-token');
        this.$store.commit('logout');
        this.cartItems = null;
        this.user = null;
      }
    },
    mounted() {
      this.getCategories();
      this.getUser();
    }
  }
</script>

<style>

</style>