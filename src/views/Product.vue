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
            <div v-for="review in reviews" :key="review.id" class="customer-review">
              <strong>{{ review.title }}</strong>
              <div class="rating">
                <product-star-rating 
                  :rating="review.rating" 
                  :width="150"
                  :height="28">
                </product-star-rating>
                <span>{{ review.rating }}</span>
              </div>
              <p>{{ review.body }}</p>
            </div>
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
import { ProductImage } from '../models/ProductImage';
import { Review } from '../models/Reviews';

@Component({
  components: {
    ProductStarRating,
    ProductGallery,
  },
})
export default class ProductComponent extends Vue {

  private productService!: ProductsService;
  private product: Product | any = {};
  private reviews: Review[] = [];

  private mounted() {
    this.productService = new ProductsService(this.$store.state.token);

    this.productService.getById(this.$route.params.id)
      .then((res: AxiosResponse<Product>) => this.product = res.data);

    this.productService.getProductReviews(this.$route.params.id)
      .then((res: AxiosResponse<Review[]>) => this.reviews = res.data);
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

  h5, .reviews {
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

  .reviews {
    margin-top: 20px;
  }

  .customer-review {
    padding-top: 20px;
    padding-left: 30%;
    border-bottom: 1px solid #e0e0e0;

    strong, .rating {
      display: block;
      margin-bottom: 25px;
    }

    .rating {
      span:last-of-type {
        margin-left: 10px;
        font-size: 2rem;
      }
    }
  }
</style>