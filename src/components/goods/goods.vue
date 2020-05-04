<template>
  <div class="goodsbox">
    <cube-scroll-nav
    :side='true'
    :data='goods'
    :options='scrollOptions'
    v-if='goods.length'>
    <cube-scroll-nav-panel
    v-for='(good,index) in goods'
    :label='good.name'
    :key='index'
    :title='good.name'>
    <!-- <div class="menu-wrapper">
      <ul class='menu'>
        <li v-for='(good,index) in goods'
        :key='index'
        class='menu-item'>
          <span class="text">
            <span v-show='good.type>0' class="icon"
            :class='classMap[good.type]'></span>
              {{good.name}}
          </span>
        </li>
      </ul>
    </div> -->
    <div class="foods-wrapper">
      <ul>
        <li v-for='food in good.foods' :key='food.name' class='food-list'>
          <!-- <h1 class="title">{{good.name}}</h1> -->
          <ul>
            <li v-for='(food,cindex) in good.foods' :key='cindex' class='food-item'>
              <div class="foodicon">
                <img :src="food.icon" class='foodimg'>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class='count'>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class='now'>￥{{food.price}}</span>
                  <span v-show='food.oldPrice' class='old'>￥{{food.oldPrice}}</span>
                </div>
                <div class="control-wrapper">
                  <control :food='food'></control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <shopcart
    :delivery-price='seller.deliveryPrice'
    :min-price='seller.minPrice'
    :selectFoods='selectFoods'></shopcart>
  </div>
</template>

<script>
import control from '../control/control.vue'
import shopcart from '../shopcart/shopcart.vue'

export default {
  props: {
    goods: {
      type: Array
    },
    seller: {
      type: Object
    }
  },
  data () {
    return {
      scrollOptions: {
        // click: false,
        directionLockThreshold: 0
      }
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    control,
    shopcart
  },
  computed: {
    selectFoods () {
      const foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  }
}
</script>

<style lang='less'>
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
}
.goodsbox {
  display: flex;
  position: absolute;
  top: 178px;
  bottom: 46px;
  width: 100%;
  .cube-scroll-nav-bar {
    overflow: scroll;
    flex: 0 0 80px;
    width: 88px;
    background-color: #f3f5f7;
    .cube-scroll-nav-bar-item {
      display: table;
      height: 54px;
      width: 56px;
      line-height: 14px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      padding: 0;
      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
      }
      span {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
        text-align: left;
      }
    }
  }
  .foods-wrapper {
    overflow: scroll;
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147,153,159);
      background-color: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      padding-bottom: 18px;
      position: relative;
      .foodicon {
        flex: 0 0 57px;
        margin-right: 10px;
        .foodimg {
          width:57px;
          height: 57px;
        }
      }
      .content {
        flex:1;
        .name {
          margin: 2px 0 8px;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
        }
        .desc {
          line-height: 12px;
          margin-bottom: 8px;
          font-size: 10px;
          color: #93999f;
        }
        .extra {
          line-height: 10px;
          font-size: 10px;
          color: #93999f;
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: #f01414;
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: #93999f;
          }
        }
        .control-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px
        }
      }
    }
  }
}

// .decrease {
//   background-image: url('decrease_3@2x.png');
// }
// .discount {
//   background-image: url('discount_3@2x.png');
// }
// .special {
//   background-image: url('special_3@2x.png');
// }
// .invoice {
//   background-image: url('invoice_3@2x.png');
// }
// .guarantee {
//   background-image: url('guarantee_3@2x.png');
// }

.cube-scroll-nav-panel-title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147,153,159);
    background-color: #f3f5f7;
}

</style>
