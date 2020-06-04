<template>
  <div class="products-index">
    <h1>{{ message }}</h1>
    <div v-for="product in products">
      <p>
        name:
        <a v-bind:href="`/products/${product.id}`">{{ product.name }}</a>
      </p>
      <p>price: {{ product.price }}</p>
      <img v-bind:src="product.images[1].url" />

      <p>description: {{ product.description }}</p>
      <hr />
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "come shop with chikondiman, we got 'chu",
      products: [],
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {},
};
</script>