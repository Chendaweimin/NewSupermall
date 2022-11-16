<template>
    <div class="tab-control">
        <div class="tab-control-item" :class="{ active: index === currentIndex }" 
             v-for="(item, index) in titles"
            :key="item.titles" @click="itemClick(index)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    data() {
        return {
            currentIndex: 0,
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
   
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
.tab-control {
    display: flex;
}

.tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}

.tab-control-item span {
    padding: 5px 0;
}

.active {
    color: var(--color-high-text);
}

.active span {
    border-bottom: 2px solid var(--color-tint);
}
</style>