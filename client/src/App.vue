<template>
  <v-app
    ><v-app-bar color="white accent-4" dark app>
      <v-toolbar-title>
        <v-img src="./assets/imanager.png" width="50px" class="mr-3"></v-img>
      </v-toolbar-title>
      <h3 class="font-weight-light black--text">iManager</h3>
      <v-spacer></v-spacer>
      <v-btn outlined style="color: #f1333f" to="/">Home</v-btn>
    </v-app-bar>
    <v-main style="position: relative">
      <v-container> <router-view :products="products" @deleteProduct="deleteProduct" /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    this.getProducts();
  },
  data() {
    return { products: [] };
  },
  methods: {
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten!');
    },
    async getProducts() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/products',
          method: 'GET',
        });
        this.products = data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(value) {
      try {
        console.log(value);
        await axios({
          url: `http://127.0.0.1:3000/products/${value}`,
          method: 'DELETE',
        });
        // this.products = data;
        this.getProducts();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
