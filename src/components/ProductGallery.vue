<template>
  <v-carousel>
    <v-carousel-item 
      v-for="image in images" 
      :key="image" 
      class="image-container">
      <img :src="image" />
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Product } from '@/models/Product';
import { ProductImage } from '@/models/ProductImage';

@Component
export default class ProductGalleryComponent extends Vue {

  @Prop() private product!: Product;

  private get images(): string[] {
    if (!this.product.images) {
      return [];
    }

    const suitableImages = this.product.images
      .filter((i: ProductImage) => {
        const width = parseInt(i.width, 10);
        const height = parseInt(i.height, 10);

        return (width >= 500 && width < 1000) || (height >= 500 && height < 1000);
      });

    return suitableImages.length > 0
      ? suitableImages.map((i: ProductImage) => i.href)
      : [];
  }
}
</script>

<style lang="scss" scoped>
  .image-container {
    width: 610px;
    height: 550px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>