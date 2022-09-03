<script setup lang="ts">
  import { useStore } from 'vuex'
  import { key } from './store/store'
  import Header from './components/Header.vue'
  import Card from './components/Card.vue'
  import { computed, onMounted } from 'vue'
  import Cart from './components/Cart.vue'

  const store = useStore(key)
  const products = computed(() => store.state.products)

  const cart = computed(() => store.state.cart)

  onMounted(() => {
    store.dispatch('fetchData')
  })

</script>

<template>
  <Header />
  <div class="container_card">    
    <!-- <Card class="cardv" v-for="(product, index) in products" :key="index" :id="product.id" :img="product.thumbnailUrl" :title="product.title" :price="product.precio" /> -->
    <Card v-for="(product, index) in products" :key="index" :product="product" />
  </div>

  <Cart/>

</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container_card {    
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-template-rows: repeat(2, 300px);    
  }

</style>