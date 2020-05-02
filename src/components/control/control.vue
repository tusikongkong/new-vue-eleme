<template>
  <div class="controlbox">
    <div class="decrease icon-minus" v-show='food.count>0'
    @click.stop='decCart'>
    </div>
    <div class="foodcount" v-show='food.count>0'>
      {{food.count}}
    </div>
    <div class="add icon-plus" @click='addCart'>
      <i icon="cubeic-right"></i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart () {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decCart () {
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../common/style.less';

.controlbox {
  .decrease, .add{
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    // font-size: 24px;
    color: rgb(0,160,220)
  }
  .foodcount {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147,153,159);
  }
}
</style>
