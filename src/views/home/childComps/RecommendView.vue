<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends" :key="item.image">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        margin: 20px 0;
        padding-bottom: 10px;
        border-bottom: 6px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item a {
        display: block;
    }
    .recommend-item a img {
        /* height: 60px; */
        width: calc(100% - 40px);
        display: block;
        margin: auto;
    }
    .recommend-item a div {
        text-align: center;
        font-size: 14px;
        margin-top: 5px;
    }
</style>