<template>
  <div class="item-wrap">
    <img :src="goodsItem.show.img" alt="">
    <div class="item-wrap-b clear-fix">
        <p>{{goodsItem.title}}</p>
        <span class="price">￥ {{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
name:'GoodsListItem',
props:{
    goodsItem:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style>
  .goods {
     width: 94%;
     margin: auto;
     /* column-count: 2;
     column-gap: 0; */
  }
.item-wrap:nth-child(2n) {
  margin-right: 0;
}
.item-wrap {
  float: left;
  width: 48%;
  margin-right: 4%;
  margin-bottom: 10px;
}
.item-wrap img {
  display: block;
  width: 100%;
  height: 254px;
  border-radius: 6px;
}
.item-wrap-b {
  padding: 5px;
}
.item-wrap-b p{
  font-size: 16px;
  overflow: hidden;    
  text-overflow:ellipsis;    
  white-space: nowrap;
  margin-bottom: 8px;
}

.item-wrap-b .price{
  float: left;

}
.item-wrap-b .collect{
  float: right;

}
.item-wrap-b .collect {
  display: inline-block;
  background: url('@/assets/img/common/collect.svg') no-repeat;
  background-size: 14px 14px;
  padding-left: 18px;
  background-position: 0% 1px;
}
</style>