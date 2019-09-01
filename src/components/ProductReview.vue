<template>
  <v-row class="customer-review">
    <v-col cols="4">
      <v-row v-if="review.user">
        <v-col cols="12">
          <img :src="userImage" class="user-image" />
          <p>
            {{ review.user.name.title | capitalize }} 
            {{ review.user.name.first | capitalize }} 
            {{ review.user.name.last | capitalize }}
          </p>
          <p>
            <v-icon color="primary">fa-at</v-icon>
            <span> {{ review.user.login.username }}</span>
          </p>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="8">
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
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Review } from '../models/Review';
import ProductStarRating from '@/components/ProductStartRating.vue';

@Component({
  components: {
    ProductStarRating,
  },
  filters: {
    capitalize: (val: string) => val.charAt(0).toUpperCase() + val.slice(1),
  },
})
export default class ProductReviewComponent extends Vue {
  @Prop() private review!: Review;

  private get userImage(): string {
    return this.review.user!.picture!.medium;
  }
}
</script>

<style lang="scss" scoped>
  .customer-review {

    p {
      margin-bottom: 5px;
    }

    padding-top: 20px;
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

    &:last-of-type {
      margin-bottom: 30px;
    }

    .user-image {
      width: 55px;
      height: 55px;
      border-radius: 50px;
    }
  }
</style>
