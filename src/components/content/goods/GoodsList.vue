<template>
    <div class="goods clear-fix">
        <goods-list-item 
        v-for="item in goods" 
        :key="item.title" 
        :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';
export default {
    name: 'GoodsList',
    components: {
        GoodsListItem,
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
</style>