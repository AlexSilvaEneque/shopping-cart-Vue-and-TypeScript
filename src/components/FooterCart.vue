<script setup lang="ts">
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { key } from '../store/store'

    const store = useStore(key)

    const totalCantidad = computed(() => store.getters.totalCantidad)
    const totalPrecio = computed(() => store.getters.totalPrecio)    
    
    const clear = () => {
        store.commit('clearCart')
    }
</script>

<template>
    <th>
        <td>Total cantidad: {{ totalCantidad }}</td>
        <td>
            <button @click="clear">Clear Cart</button>
        </td>
        <td><span>$ <span>{{ totalPrecio }}</span></span></td>
    </th>
</template>

<style scoped>

</style>