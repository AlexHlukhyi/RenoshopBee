<template>
  <div class="catalog">
    <main>
      <div class="container">
        <ul class="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
        </ul>
        <div class="catalog wrapper">
          <div id="filters" class="filters">
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
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Cruise Dual Analog</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Crown Summit Backpack</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Joust Duffle Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Voyage Yoga Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Joust Duffle Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Cruise Dual Analog</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Crown Summit Backpack</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Joust Duffle Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Voyage Yoga Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Joust Duffle Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Voyage Yoga Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              </div>
              <div class="product small"><img class="small-image"/>
                <div class="actions"><a href="#" class="action"><i class="fas fa-shopping-cart"></i></a><a href="#" class="action"><i class="fas fa-heart"></i></a><a href="#" class="action"><i class="fas fa-retweet"></i></a></div><a href="#">
                  <h5>Joust Duffle Bag</h5></a>
                <div class="price">250.00</div>
                <div class="marks wrapper"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
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
  </div>
</template>
