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
                <div class="user-info wrapper">
                    <a href="#" data-toggle="modal" data-target="#sign-in" class="wrapper">
                        <!--<i class='fas fa-user'></i>-->
                        <i class="fas fa-sign-in-alt"></i>
                        <!--<div>Alex Hlukhyi</div>-->
                        <div>Sign In</div>
                    </a>
                    <div>|</div>
                    <a href="#" data-toggle="modal" data-target="#sign-up" class="wrapper">
                        <!--<i class='fas fa-sign-out-alt'></i>-->
                        <i class="fas fa-user-plus"></i>
                        <!--<div>Sign Out</div>-->
                        <div>Sign Up</div>
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
                        <i class="fas fa-shopping-cart"><div class="items-count">3</div></i>
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
                <router-link to="/catalog" @click.native="closeMenu()">WOMEN</router-link>
                <router-link to="/catalog" @click.native="closeMenu()">MEN</router-link>
                <router-link to="/catalog" @click.native="closeMenu()">KIDS</router-link>
                <router-link to="/catalog" @click.native="closeMenu()">JEWELLERY</router-link>
                <router-link to="/catalog" @click.native="closeMenu()">ACCESSORIES</router-link>
            </div>
        </div>
        <div id="sign-in" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade">
            <div role="document" class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"><a href="#" class="logo"><span
                            class="bold">RENOSHOP</span><span>BEE</span></a>
                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span
                                aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <p>Enter your credentials to sign in.</p>
                        <input type="text" id="sign-in-email" placeholder="E-mail" class="small wrong"/>
                        <p class="error">Wrong e-mail!</p>
                        <input type="text" id="sign-in-password" placeholder="Password" class="small"/>
                        <p>
                            <input type="checkbox"/>Remember me?
                        </p>
                    </div>
                    <div class="modal-footer"><a href="#">
                        <div class="button green-button small-button">SIGN IN</div>
                    </a></div>
                </div>
            </div>
        </div>
        <div id="sign-up" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade">
            <div role="document" class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"><a href="#" class="logo"><span
                            class="bold">RENOSHOP</span><span>BEE</span></a>
                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span
                                aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <p>Enter your credentials to create a new account.</p>
                        <input type="text" id="sign-up-first-name" placeholder="First Name" class="small"/>
                        <input type="text" id="sign-up-last-name" placeholder="Last Name" class="small"/>
                        <input type="text" id="sign-up-phone" placeholder="Phone" class="small"/>
                        <input type="text" id="sign-up-email" placeholder="E-mail" class="small"/>
                        <input type="text" id="sign-up-password" placeholder="Password" class="small"/>
                        <input type="text" id="sign-up-repeat-password" placeholder="Repeat password" class="small"/>
                    </div>
                    <div class="modal-footer"><a href="#">
                        <div class="button green-button small-button">SIGN UP</div>
                    </a></div>
                </div>
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
                        <a href="#">
                            <div class="button green-button small-button" :data-dismiss="(searchQuery)?'modal':'undefined'" @click="search()">SEARCH</div>
                        </a>
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
        menuVisible: false,
        categories: null,
        searchQuery: ''
      }
    },
    methods: {
      openMenu() {
        this.menuVisible = true;
      },
      closeMenu() {
        this.menuVisible = false;
      },
      search() {
        if (this.searchQuery) {
          this.$router.push('search?q=' + this.searchQuery);
        }
      }
    },
    mounted() {
      this.axios.get('http://renoshop.bee/api/categories').then(
        response => (
          this.categories = response.data.categories
        )
      );
    }
  }
</script>

<style scoped>

</style>