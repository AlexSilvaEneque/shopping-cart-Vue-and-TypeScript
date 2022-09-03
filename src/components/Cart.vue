<script setup lang="ts">
    import ItemCard from './ItemCard.vue';
    import { useStore } from 'vuex'
    import { key } from '../store/store'
    import { computed } from 'vue'
    import FooterCart from './FooterCart.vue'

    const store = useStore(key)
    const cart = computed(() => store.state.cart)    
</script>

<template>
    <div class="cart">
        <table>
            <thead>
                <tr>                    
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Actions</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="items">
                <ItemCard v-for="(item, index) in cart" :key="index" :item="item" />
            </tbody>
            <tfoot>
                <tr id="foot_cart">
                    <th v-if="Object.keys(cart).length === 0">Empty cart</th>
                    <footer-cart v-else />
                    <!-- <FooterCart v-else /> -->
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style scoped>
    .cart {
        width: 600px;
    }
    table {
        width: 100%;
    }

    #items {
        text-align: center;
    }
</style>