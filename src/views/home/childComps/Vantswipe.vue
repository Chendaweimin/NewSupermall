<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item.image">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    name: 'Vantswipe',
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
    },
    props: {
        banners: {
            type: Array,
            default() {
                []
            }
        }
    }
}
</script>

<style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.my-swipe a {
    display: block;
}

.my-swipe img {
    display: block;
    width: 100%;
}
</style>