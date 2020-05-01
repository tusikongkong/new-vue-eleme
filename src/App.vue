<template>
  <div class="appbox">
    <headerbox :seller='seller'></headerbox>
    <div class="router-wrapper">
      <div class="routerbox1">
        <router-link to='/goods' >商品 </router-link>
      </div>
      <div class="routerbox2">
        <router-link to='/ratings'>评论</router-link>
      </div>
      <div class="routerbox3">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <div class="view-wrapper">
      <router-view keep-alive
      :goods='goods'
      :ratings='ratings'
      :seller='seller'></router-view>
    </div>
  </div>
</template>

<script>
import headerbox from './components/headerbox/headerbox.vue'

export default {
  data () {
    return {
      seller: {},
      goods: [],
      ratings: []
    }
  },
  created () {
    this.$axios
      .get('data.json')
      .then(Response => {
        this.seller = Response.data.seller
        this.goods = Response.data.goods
        this.ratings = Response.data.ratings
      })
  },
  components: {
    headerbox
  }
}
</script>

<style lang='less' scoped>
.router-wrapper {
  background-color: white;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  .routerbox1, .routerbox2, .routerbox3 {
    display: inline-block;
    width: 33.3%;
    text-align: center;
    height: 27px;
    font-size: 14px;
    padding-top: 13px;
    position: relative;
    a {
      top: 13px;
    }
    a:hover {
      color: red;
    }
  }
}
.cube-scroll-nav-bar {
    background-color: blue;
}
</style>
