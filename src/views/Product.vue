<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <ul class="category-path">
              <li v-for="category in product.categoryPath" :key="category.id">
                {{ category.name }}
                <span class="category-divider"></span>
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h3>{{ product.name }}</h3>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <strong>Model: </strong>
            {{ product.modelNumber }}
          </v-col>
          <v-col cols="3">
            <strong>SKU: </strong>
            {{ product.id }}
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <product-star-rating :rating="product.customerReviewAverage"></product-star-rating>
            <span v-if="product.customerReviewCount">
              <strong>{{ product.customerReviewAverage }}</strong>
              ({{ product.customerReviewCount }})
            </span>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <product-gallery :product="product"></product-gallery>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            {{ product.longDescription }}
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h4>Overview</h4>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <h5>What's Included</h5>
            <ul>
              <li v-for="item in product.includedItemList" :key="item.includedItem">
                {{ item.includedItem }}
              </li>
            </ul>

            <h5>Ratings</h5>
            <product-star-rating 
              :rating="product.customerReviewAverage" 
              :width="144" 
              :height="28"
              class="rating-large">
            </product-star-rating>
            <strong class="average-large">{{ product.customerReviewAverage }}</strong>
            <div v-if="product.customerReviewCount">
              ({{ product.customerReviewCount }} reviews)
            </div>
          </v-col>
          <v-col cols="7">
            <h5>Features</h5>
            <ul>
              <li v-for="feature in product.features" :key="feature.feature">
                {{ feature.feature }}
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h4 class="reviews">Reviews</h4>
            <product-review v-for="review in reviews" :key="review.id" :review="review">
            </product-review>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <label for="title">Title</label>
            <v-text-field id="title" v-model="userReview.title" outlined></v-text-field>
            <label for="body">Body</label>
            <v-textarea id="body" v-model="userReview.body" outlined></v-textarea>

            <v-row>
              <v-col cols="4">
                <v-select
                  v-model="userReview.rating"
                  :items="ratings"
                  :auto-select-first="true"
                  :return-object="false"
                  outlined>
                </v-select>
              </v-col>
              <v-col cols="3" offset-md="5">
                <v-btn color="primary" @click="postReview">Post review</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h4 class="also-viewed">People Also Viewed</h4>
            <div class="also-viewed-container">
              <product-card v-for="(alsoViewedProduct, i) in alsoViewed" :key="i"
                :product="alsoViewedProduct" :image-width="'260px'" class="also-viewed-card">
              </product-card>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <strong class="product-price">${{ product.salePrice }}</strong>

            <div class="sale" v-show="product.onSale">
              <p>On Sale</p>
              <p>
                <span class="saved-amount">Save ${{ (product.regularPrice - product.salePrice).toFixed(2) }}</span> 
                was ${{ product.regularPrice }}
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <p>{{ product.onlineAvailabilityText }}</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-btn text class="add-to-cart-button" @click="addToCart">
              <v-icon>fa-shopping-cart</v-icon>
              <span>Add to cart</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ProductsService } from '../services/ProductsService';
import { Product } from '@/models/Product';
import { AxiosResponse } from 'axios';
import ProductStarRating from '@/components/ProductStartRating.vue';
import ProductGallery from '@/components/ProductGallery.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductReview from '@/components/ProductReview.vue';
import { ProductImage } from '../models/ProductImage';
import { Review } from '../models/Review';

@Component({
  components: {
    ProductStarRating,
    ProductGallery,
    ProductCard,
    ProductReview,
  },
})
export default class ProductComponent extends Vue {

  private productService!: ProductsService;
  private product: Product | any = {};
  private reviews: Review[] = [];
  private alsoViewed: Product[] = [];
  private userReview: Review = new Review(0, '', '', 1);

  private ratings: any[] = [
    { value: 1, text: 'Poor' },
    { value: 2, text: 'Fair' },
    { value: 3, text: 'Average' },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent' },
  ];

  private mounted() {
    this.productService = new ProductsService(this.$store.state.token);

    const productId = this.$route.params.id;
    this.productService.getById(productId)
      .then((res: AxiosResponse<Product>) => this.product = res.data);

    this.productService.getProductReviews(productId)
      .then((res: AxiosResponse<Review[]>) => this.reviews = res.data);

    this.productService.getAlsoViewed(productId)
      .then((res: AxiosResponse<Product[]>) => this.alsoViewed = res.data);
  }

  private postReview(): void {
    this.userReview.user = this.$store.state.user;
    const lastId = Math.max(...this.reviews.map((r: Review) => r.id));
    this.userReview.id = lastId + 1;

    this.reviews.push(JSON.parse(JSON.stringify(this.userReview)));
    this.userReview = new Review(0, '', '', 1);
  }

  private addToCart() {
    this.$store.commit('addToCart', this.product);
  }
}
</script>

<style lang="scss" scoped>
  .col {
    padding: 4px 12px;

    ul {
      margin-bottom: 20px;
    }
  }

  .category-path {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.8em;

    li {
      float: left;
      margin: 0;
      padding-right: 7px;

      .category-divider {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 7px;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 4px solid #9a9b9b;
      }

      &:last-of-type {
        .category-divider {
          display: none;
        }
      }
    }
  }

  h5, .reviews, .also-viewed {
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
  }

  .rating-large {
    margin-top: 20px;
    margin-right: 15px;
  }

  .average-large {
    font-size: 2rem;
  }

  .reviews, .also-viewed {
    margin-top: 20px;
  }

  .also-viewed-container {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 20px;

    .also-viewed-card {
      margin-right: 20px;
    }
  }

  .v-select {
    margin-top: 0;
    padding-top: 0;
  }

  .product-price {
    font-size: 2rem;
  }

  .sale {
    p {
      margin-bottom: 0;
    }

    .saved-amount {
      background-color: #bb0628;
      color: white;
      padding: 0 5px;
    }
  }

  .add-to-cart-button {
    width: 100%;
    background-color: #ffe000;
  }
</style>