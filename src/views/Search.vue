<template>
  <v-container>
    <h3>Search results</h3>

    <p v-if="!products.length">No items found</p>

    <div class="found-items" v-if="products.length">
      <v-row class="headers">
        <v-col cols="4" offset="1">
          Product
        </v-col>
      </v-row>

      <v-row v-for="product in products" :key="product.id" class="found-item">
        <v-col cols="1">
          <img :src="product.images[0].href" class="product-image" />
        </v-col>
        <v-col cols="4">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            {{ product.name }}
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ProductsService } from '../services/ProductsService';
import { Product } from '@/models/Product';
import { AxiosResponse } from 'axios';

@Component
export default class SearchComponent extends Vue {

  private service!: ProductsService;
  private products: Product[] = [];

  private mounted(): void {
    this.service = new ProductsService(this.$store.state.token);

    this.service.search(this.$route.query.q.toString())
      .then((res: AxiosResponse<Product[]>) => this.products = res.data);
  }
}
</script>

<style lang="scss" scoped>
.found-items {
  .headers {
    font-weight: bold;
  }

  .product-image {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .found-item {
    border-bottom: 1px solid #9a9b9b;
  }

  .product-price {
    font-size: 1.5rem;
  }

  .saved-amount {
    background-color: #bb0628;
    color: white;
    padding: 0 5px;
  }
}
</style>
