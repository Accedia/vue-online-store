<template>
  <v-card class="product-card">
    <img :src="productUrl"
      class="product-image"/>
    <v-card-title>
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        {{ product.name }}
      </router-link>
    </v-card-title>

    <div class="review-rating">
      <product-star-rating :rating="product.customerReviewAverage"></product-star-rating>

      <span v-if="product.customerReviewCount">
        <strong>{{ product.customerReviewAverage }}</strong>
        ({{ product.customerReviewCount }})
      </span>
    </div>

    <strong class="product-price">${{ product.salePrice }}</strong>

    <div class="sale" v-show="product.onSale">
      <p>On Sale</p>
      <p>
        <span class="saved-amount">Save ${{ (product.regularPrice - product.salePrice).toFixed(2) }}</span> 
        was ${{ product.regularPrice }}
      </p>
    </div>

    <v-card-actions class="actions">
      <v-btn text>
        <v-icon>fa-shopping-cart</v-icon>
        <span>Add to cart</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Product } from '@/models/Product';
import ProductStarRating from '@/components/ProductStartRating.vue';

@Component({
  components: {
    ProductStarRating,
  },
})
export default class ProductCardComponent extends Vue {

  @Prop() private product!: Product;

  private get productUrl(): string {
    if (!this.product.images || this.product.images.length === 0) {
      return '';
    }

    const standartImage = this.product.images
      .filter((i) => i.rel === 'Front_Standard')[0];

    return standartImage ? standartImage.href : this.product.images[0].href;
  }
}
</script>

<style lang="scss" scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
    padding-top: 20px;
    padding-bottom: 20px;

    .product-image {
      display: block;
      width: 100%;
      height: 200px;
      object-fit: contain;
      padding-left: 20px;
      padding-right: 20px;
    }

    .v-card__title {
      padding: 0;
      margin-left: 20px;

      a {
        text-decoration: none;
        font-size: 18px;
        line-height: 20px;
      }
    }

    .review-rating {
      margin-left: 20px;
    }

    .product-price {
      font-size: 2rem;
      margin-left: 20px;
    }

    .sale {
      margin-left: 20px;

      p {
        margin-bottom: 0;
      }

      .saved-amount {
        background-color: #bb0628;
        color: white;
        padding: 0 5px;
      }
    }

    .actions {
      button {
        width: 100%;
        background-color: #ffe000;
      }
    }
  }
</style>