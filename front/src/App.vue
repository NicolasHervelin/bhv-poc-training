<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomePage from '@/pages/HomePage.vue';
import ProductsPage from "@/pages/ProductsPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

@Component({
  components: {
    HomePage,
    ProductPage,
    ProductsPage,
  },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
