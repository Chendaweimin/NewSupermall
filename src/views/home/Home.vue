<template>
    <div class="home">
        <!-- 标题 -->
        <nav-bar>
            <div slot="center">
                <div class="centertxt">陈小二首页</div>
            </div>
        </nav-bar>
        <div class="wrapper">
            <div class="centent">
                <!-- 轮播图 原生(无法滚动)-->
                <!-- <home-swiper :banners="banners"></home-swiper> -->
                <vantswipe :banners="banners"></vantswipe>
                <!-- 推荐 -->                                                                             
                <recommend-view :recommends="recommends"></recommend-view>
                <!-- 热门 -->
                <feature-view></feature-view>
                <!-- 选项卡选项头部 -->
                <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
                <!-- 选项卡选项内容 -->
                <goods-list :goods="showGoods"></goods-list>
            </div>
        </div>
    </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import Vantswipe from "./childComps/Vantswipe";
import FeatureView from "./childComps/FeatureView";

import RecommendView from "./childComps/RecommendView";
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
 
import { getHomeMultidata, getHomeGoods } from "@/network/home";
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    Vantswipe,
    FeatureView,
    RecommendView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // mounted() {
  //   this.scroll = new this.$BScroll('.wrapper', {
  //     click: true,
  //     scrollY: true,
  //     pullDownRefresh: {
  //       threshold: 30, // 下拉距离超过30px触发pullingDown事件
  //       stop: 20 // 回弹停留在距离顶部20px的位置
  //     },
  //     pullUpLoad: {
  //       threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
  //     }
  //   });
  //   this.scroll.on('pullingDown', () => {
  //     console.log('拉下刷新');
  //         this.scroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
  //     }),
  //   this.scroll.on('pullingUp', () => {
  //     console.log('上拉加载');
  //     // 做些事情
  //     this.scroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
  //   })
  // },
  computed:{
    showGoods() {
        return this.goods[this.currentType].list
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     * */
    tabClick(index) {
      // console.log(index);
      // this.currentType = index == 0 ?'pop' : index == 1 ? 'new' :index == 2 ? 'sell'
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
   
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // this.result = res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style>
.home {
    padding: 44px 0 50px;
}

.nav-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}

.centertxt {
    text-align: center;
}

.tab-control {
    position: sticky;
    top: 44px;
    background: #fff;
}

</style>