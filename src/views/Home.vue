<template>
  <div class="home">
    <div id="carousel" data-ride="carousel" class="carousel slide">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="slide-content container">
            <h2>THE BEST</h2>
            <h2>WOOCOMERCE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur, dolor ducimus eligendi eum facere hic iste itaque labore laboriosam.</p>
            <button class="grey">BUY NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide-content container">
            <h2>PERFECT</h2>
            <h2>DESIGN</h2>
            <p>Ab dignissimos dolor ducimus excepturi explicabo facilis ipsam iste iure magni modi molestias natus obcaecati sapiente sit tenetur ullam, ut.</p>
            <button class="grey">ABOUT</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide-content container">
            <h2>INSPIRING</h2>
            <h2>QUALITY</h2>
            <p>Consectetur deleniti incidunt quaerat quia ratione sequi soluta veritatis voluptate? Explicabo facilis ipsam iste iure magni modi obcaecati</p>
            <button class="grey">CONTACT US</button>
          </div>
        </div>
      </div><a href="#carousel" role="button" data-slide="prev" class="carousel-control-prev"><i class="fas fa-chevron-circle-left"></i></a><a href="#carousel" role="button" data-slide="next" class="carousel-control-next"><i class="fas fa-chevron-circle-right"></i></a>
    </div>
    <main>
      <div class="best-sellers">
        <div class="title">
          <h3>BEST SELLERS</h3>
          <div class="small-tag-line">The best productions from us</div>
        </div>
        <div class="items wrapper">
          <div class="product small" :key="product.id" v-for="product in bestSellers"><img/>
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
      <div class="static-blocks wrapper">
        <div class="static-block"><i class="fas fa-gem"></i>
          <h4>SPECIAL OFFERS</h4>
          <p>Shop Big Save Big</p>
        </div>
        <div class="static-block"><i class="fab fa-telegram-plane"></i>
          <h4>FREE DELIVERY</h4>
          <p>On Orders Above $99</p>
        </div>
        <div class="static-block"><i class="fas fa-retweet"></i>
          <h4>30 DAYS RETURN</h4>
          <p>Policy We Offers</p>
        </div>
        <div class="static-block"><i class="fas fa-rocket"></i>
          <h4>FASTEST SHIPPING</h4>
          <p>2 Days Express</p>
        </div>
      </div>
      <div class="categories wrapper"><a href="#" class="category"><img src="@/assets/img/category-border.png"/>
        <p>FASHION</p>
        <div class="middle-tag-line">SUMMER & AUTUMN</div>
        <p>WINTER COLLECTION</p></a><a href="#" class="category"><img src="@/assets/img/category-border.png"/>
        <p>FASHION FOR MEN</p>
        <div class="middle-tag-line">30% OFF</div>
        <p>WINTER COLLECTION</p></a><a href="#" class="category"><img src="@/assets/img/category-border.png"/>
        <p>FASHION</p>
        <div class="middle-tag-line">NEW FASHION STYLES</div>
        <p>WINTER COLLECTION</p></a></div>
      <div class="featured-products">
        <div class="title">
          <h3>FEATURED PRODUCTS</h3>
          <div class="small-tag-line">Newest trends from top brands</div>
        </div>
        <div class="items wrapper">
          <div class="product small" :key="product.id" v-for="product in featuredProducts"><img/>
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
      <div class="feedback wrapper" ref="feedback">
        <div class="subscription">
          <div class="big-tag-line">Get Out Special Discount</div>
          <p>Register your email for news and special offers.</p>
          <div class="form-group wrapper">
            <input type="text" id="subscription-email" placeholder="E-mail address..." class="big"/>
            <button class="button green-button">CONTACT US</button>
          </div>
        </div>
        <div class="clients wrapper">
          <a href="#"><img src="@/assets/img/clients/client-1.png"/></a>
          <a href="#"><img src="@/assets/img/clients/client-2.png"/></a>
          <a href="#"><img src="@/assets/img/clients/client-3.png"/></a>
          <a href="#"><img src="@/assets/img/clients/client-4.png"/></a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      bestSellers:[
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
        }
      ],
      featuredProducts: [
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
        }
      ]
    }
  },
  methods:{}
}
</script>

<style lang="sass">

</style>