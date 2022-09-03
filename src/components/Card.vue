<script setup lang="ts">    
    import { useStore } from 'vuex'
    import { key } from '../store/store'

    const prop = defineProps({
        product: { type: Object }
    })
    
    console.log(prop.product)


    // TODO: todo lo que está dentro de defineProps es un prop individual ....

    // const props = defineProps({
    //     id: Number,
    //     img: String,
    //     title: String,
    //     price: Number
    // })

    const store = useStore(key)

    const add = () => {
        // store.dispatch('addCart', props.id)
        store.dispatch('addCart', prop.product?.id)
    }

</script>

<template>
    <div class="card">
        <div class="card_img">
            <img :src="product?.thumbnailUrl">
        </div>
        <div class="card_details">
            <span>{{ product?.title }}</span>
            <span>$ {{ product?.precio }}</span>
        </div>
        <div class="card_footer">
            <button type="button" @click="add">Añadir</button>
        </div>
    </div>
</template>

<style scoped>
    .card {
        border: solid .8px gray;
        width: 200px;
        height: 280px;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        padding: 0 0 5px;
    }

    .card_img {
        width: 100%;        
    }

    img {
        width: 100%;
    }

    span {
        display: block;
    }

    span:first-of-type {
        font-weight: 700;
        font-size: 20px;
    }

    button {
        bottom: 0;
        width: 70px;
        height: 30px;
        border: none;
        background: none;
        background-color: #ea1;
        border-radius: 5px;
        font-weight: 700;
    }
</style>