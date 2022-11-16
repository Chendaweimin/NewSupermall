<template>
    <div id="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'black'
        }
    },  
    computed:{
       //动态判断活跃路由
       isActive(){
          return this.$route.path.indexOf(this.path) !== -1
       },
       //动态判断字体颜色
       activeStyle(){
        return this.isActive ? {color:this.activeColor} :{}
       }
    },
    methods:{
         // 路由跳转
        itemClick(){
            this.$router.replace(this.path).catch(err=>{})
        }
    }
}
</script>

<style scoped>
#tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color: #dcdcdc;
}

#tab-bar-item img {
    height: 24px;
    margin: auto;
    vertical-align: middle;
    margin-top: 3px;
}
</style>