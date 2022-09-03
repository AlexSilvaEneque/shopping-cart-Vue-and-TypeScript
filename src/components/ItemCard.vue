<script setup lang="ts">
    import { useStore } from 'vuex'
    import { key } from '../store/store'

    const store = useStore(key)

    const props = defineProps({
        item: { type: Object }
    })

    const increment = () => {
        store.commit('increment', props.item?.id)
    }

    const decrease = () => {
        store.commit('decrease', props.item?.id)
    }
    
</script>

<template>
    <tr>
        <td>{{ props.item?.title }}</td>
        <td>{{ props.item?.cantidad }}</td>
        <td>
            <button @click="increment">+</button>
            <button @click="decrease">-</button>
        </td>
        <td>{{ props.item?.precio * props.item?.cantidad }}</td>
    </tr>    
</template>

<style scoped>

</style>