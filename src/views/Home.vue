<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <h4>Categories</h4>
        <v-treeview
          :items="categories"
          :load-children="getSubCategories"
          :active.sync="active"
          :return-object="true"
          item-children="subCategories"
          activatable
          transition
        ></v-treeview>
      </v-col>
      <v-col>
        <v-subheader>
          <h3>Most Popular</h3>
          <span v-if="active.length" class="subtitle">
           &nbsp; in {{ active[0].name }}
          </span>
        </v-subheader>
        <v-row>
          <v-col cols="4" v-for="(product, i) in mostViewed" :key="product.id + i">
            <product-card :product="product"></product-card>
          </v-col>
        </v-row>

        <v-subheader>
          <h3>Daily Deals</h3>
          <span v-if="active.length" class="subtitle">
           &nbsp; in {{ active[0].name }}
          </span>
        </v-subheader>
        <v-row>
          <v-col cols="4" v-for="(product, i) in dealsOfTheDay" :key="product.id + i">
            <product-card :product="product"></product-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { CategoriesService } from '@/services/CategoriesService';
import { ProductsService } from '@/services/ProductsService';
import { Category } from '@/models/Category';
import { AxiosResponse } from 'axios';
import { Watch } from 'vue-property-decorator';
import { Product } from '../models/Product';
import ProductCard from '@/components/ProductCard.vue';

@Component({
  components: {
    ProductCard,
  },
})
export default class Home extends Vue {

  private categoriesService!: CategoriesService;
  private productsService!: ProductsService;
  private categories: Category[] = [];
  private active: any[] = [];

  private mostViewed: Product[] = [];
  private dealsOfTheDay: Product[] = [];

  private mounted() {
    this.categoriesService = new CategoriesService(this.$store.state.token);
    this.productsService = new ProductsService(this.$store.state.token);

    this.categoriesService.getCategories()
      .then((res: AxiosResponse<Category[]>) => {
        res.data.forEach((d) => d.subCategories = []);
        this.categories = res.data;
      });

    this.reloadData();
  }

  private reloadData(): void {
    this.productsService.getMostViewed()
      .then((res: AxiosResponse<Product[]>) => this.mostViewed = res.data);
    this.productsService.getDealsOfTheDay()
      .then((res: AxiosResponse<Product[]>) => this.dealsOfTheDay = res.data);
  }

  @Watch('active')
  private activeChanged(value: any) {
    if (value.length) {
      const selectedCategory = value[0].id;
      this.categoriesService.getMostViewedProducts(selectedCategory)
        .then((res: AxiosResponse<Product[]>) => this.mostViewed = res.data);
      this.categoriesService.getDealsOfTheDay(selectedCategory)
        .then((res: AxiosResponse<Product[]>) => this.dealsOfTheDay = res.data);
    } else {
      this.reloadData();
    }
  }

  private getSubCategories(item: any) {
    return this.categoriesService.getSubCategories(item.id)
      .then((data) => {
        data.data.forEach((s) => s.subCategories = []);
        return item.subCategories.push(...data.data);
      });
  }
}
</script>

<style lang="scss">
  .v-subheader {
    padding: 0;

    h3 {
      font-size: 1.7rem;
    }

    .subtitle {
      font-size: 1rem;
      margin-top: .4rem;
    }
  }

  .v-treeview-node__label {
    cursor: pointer;
  }
</style>