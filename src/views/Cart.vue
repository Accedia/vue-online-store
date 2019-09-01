<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="7">
        <h3>Your cart</h3>

        <p v-if="!items.length">There are no items in your cart</p>

        <div class="cart-items" v-if="items.length">
          <v-row class="headers">
            <v-col cols="4" offset="1">
              Product
            </v-col>
            <v-col cols="2">
              Item Price
            </v-col>
            <v-col cols="2">
              Quantity
            </v-col>
            <v-col cols="2">
              Total
            </v-col>
          </v-row>

          <v-row v-for="item in items" :key="item.item.id" class="cart-item">
            <v-col cols="1">
              <img :src="item.item.images[0].href" class="product-image" />
            </v-col>
            <v-col cols="4">
              <router-link :to="{ name: 'product', params: { id: item.item.id } }">
                {{ item.item.name }}
              </router-link>
            </v-col>
            <v-col cols="2">
              <p class="product-price">${{ item.item.salePrice }}</p>
              <div v-if="item.item.onSale">
                <p>On Sale</p>
                <p class="saved-amount">Save ${{ (item.item.regularPrice - item.item.salePrice).toFixed(2) }}</p>
              </div>
            </v-col>
            <v-col cols="2">
              <v-text-field v-model="item.count" class="item-quantity" single-line></v-text-field>
            </v-col>
            <v-col cols="2">
              <p class="product-price">${{ item.item.salePrice * item.count }}</p>
              <div v-if="item.item.onSale">
                <p>On Sale</p>
                <p class="saved-amount">Save ${{ ((item.item.regularPrice - item.item.salePrice) * item.count).toFixed(2) }}</p>
              </div>
            </v-col>
            <v-col cols="1">
              <v-btn icon>
                <v-icon color="primary" @click="deleteCartItem(item.item)">fa-trash</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <h3 class="delivery-address">Delivery Address</h3>
          </v-row>

          <v-row>
            <label for="address1">Address</label>
          </v-row>
          <v-row>
            <v-text-field id="address1" single-line></v-text-field>
          </v-row>
          <v-row>
            <v-text-field id="address2" single-line></v-text-field>
          </v-row>
          <v-row>
            <label for="country">Country</label>
          </v-row>
          <v-row>
            <v-text-field id="country" single-line></v-text-field>
          </v-row>
          <v-row>
            <label for="city">City</label>
          </v-row>
          <v-row>
            <v-text-field id="city" single-line></v-text-field>
          </v-row>
          <v-row>
            <label for="postalCode">Postal Code</label>
          </v-row>
          <v-row>
            <v-text-field id="postalCode" single-line></v-text-field>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-dialog
      max-width="290"
      v-model="showDialog">
      <v-card>
        <v-card-title class="headline">
          Remove from cart
        </v-card-title>

        <v-card-text>
          Are you sure you want to remove this item from the cart?
        </v-card-text>

        <v-card-actions>
          <v-btn color="error" @click="deleteItem">Yes</v-btn>
          <v-btn @click="cancel">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { CartItem } from '../store';
import { Product } from '../models/Product';

@Component
export default class CartComponent extends Vue {

  private get items(): CartItem[] {
    return this.$store.state.cart;
  }

  private showDialog: boolean = false;
  private selectedItem: Product | null = null;

  private deleteCartItem(item: Product) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  private cancel(): void {
    this.showDialog = false;
  }

  private deleteItem(): void {
    if (this.selectedItem) {
      this.$store.commit('removeFromCart', this.selectedItem);
      this.selectedItem = null;
      this.showDialog = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-items {
    .headers {
      font-weight: bold;
    }

    .product-image {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }

    .cart-item {
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

    p {
      margin-bottom: 0;
    }

    .item-quantity {
      padding-top: 0;
      margin-top: 0;
    }

    .delivery-address {
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }


</style>