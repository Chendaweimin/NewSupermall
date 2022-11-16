<template>
    <div id="Maintabbar">
        <tab-bar>
            <tab-bar-item path="/home" activeColor="black">
                <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
           <tab-bar-item path="/category" activeColor="black">
                <img slot="item-icon" src="@/assets/img/tabbar/class.svg" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/class_active.svg" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
             <tab-bar-item path="/cart" activeColor="black">
                <img slot="item-icon" src="@/assets/img/tabbar/shop.svg" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/shop_active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" activeColor="black">
                <img slot="item-icon" src="@/assets/img/tabbar/user.svg" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/user_active.svg" alt="">
                <div slot="item-text">我的</div>
           </tab-bar-item> 
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar';
import TabBarItem from '@/components/common/tabbar/TabBarItem';

export default {
    name: 'Maintabbar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
        color: #dcdcdc;
    }
    
    .tab-bar-item img {
        height: 24px;
        margin: auto;
        vertical-align: middle;
        margin-top: 3px;
    }
</style>