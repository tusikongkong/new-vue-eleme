<template>
  <div class="shopbox">
    <div class="content" @click='togglelist'>
        <div class="content-left">
            <div class="logo-wrapper">
                <div class="logo" :class="totalCount>0?'highlight':'nomal'">
                    <span class="icon-cart"
                    :class="{'highlight':totalCount>0}"></span>
                </div>
                <div class="num">{{totalCount}}</div>
            </div>
            <div class="price"
            :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
            <div class="desc">
                另需配送费￥{{deliveryPrice}}元
            </div>
        </div>
        <div class="content-right" :class="totalPrice>=minPrice?'enough':'not-enough'">
            <div class="pay">
                {{payDes}}
            </div>
        </div>
    </div>
    <div class="shop-wrapper" v-show='!fold'>
        <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty">清空</span>
        </div>
        <div class="list-content">
        <ul>
            <li class="food" v-for='(food,index) in selectFoods' :key='index'>
                <span class="name">{{food.name}}</span>
                <div class="price">
                    <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="control-wrapper">
                    <control :food='food'></control>
                </div>
            </li>
        </ul></div>
    </div>
  </div>
</template>

<script>
import control from '../control/control.vue'

export default {
  data () {
    return {
      fold: true
    }
  },
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDes () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        const diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    }
  },
  methods: {
    togglelist () {
      if (!this.totalCount) {
        this.fold = true
      } else {
        this.fold = !this.fold
      }
    }
  },
  components: {
    control
  }
}
</script>

<style lang='less' scoped>
@import '../../common/style.less';

.shopbox {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    .content {
        display: flex;
        background-color: #141d27;
        color: rgba(255,255,255,0.4);
        .content-left {
            flex:1;
            .logo-wrapper {
                display: inline-block;
                vertical-align: top;
                position: relative;
                top: -10px;
                margin: 0 12px;
                padding: 6px;
                width: 56px;
                height: 56px;
                box-sizing: border-box;
                border-radius: 50%;
                background: #141d27;
                .highlight {
                    background: #00a0dc;
                }
                .nomal {
                    background-color: #2b343c;
                }
                .logo {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    text-align: center;
                    .icon-cart {
                        line-height: 44px;
                        font-size: 24px;
                        color: #80858a;
                    }
                    .highlight {
                        color: white;
                    }
                }
                .num {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 24px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    border-radius: 16px;
                    font-size: 9px;
                    font-weight: 700;
                    color: #fff;
                    background: #f01414;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
                }
            }
            .price {
                display: inline-block;
                vertical-align: top;
                margin-top: 12px;
                line-height: 24px;
                padding-right: 12px;
                box-sizing: border-box;
                border-right: 1px solid rgba(255,255,255,0.1);
                font-size: 16px;
                font-weight: 700;
            }
            .highlight {
                color: white;
            }
            .desc {
                display: inline-block;
                vertical-align: top;
                margin: 12px 0 0 12px;
                line-height: 24px;
                font-size: 10px;
            }
        }
        .content-right {
            flex: 0 0 105px;
            width: 105px;
            .pay {
                height: 48px;
                line-height: 48px;
                text-align: center;
                font-size: 12px;
                font-weight: 700;
            }
        }
        .enough {
            background-color: #00b43c;
            color:white;
        }
        .not-enough {
            background-color: #2b333b;
        }
    }
    .shop-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        transform: translate3d(0,-100%,0);
        .list-header {
            height: 40px;
            line-height: 40px;
            padding: 0 18px;
            background: #f3f5f7;
            // border-bottom: 1px solid rgba(7,17,27,.1);
            .title {
                float: left;
                font-size: 14px;
                color: #07111b;
            }
            .empty {
                float: right;
                font-size: 12px;
                color: #00a0dc;
            }
        }
        .list-content {
            padding: 0 18px;
            max-height: 217px;
            overflow: hidden;
            background: #fff;
            .food {
                padding: 12px 0;
                box-sizing: border-box;
                position: relative;
                .name {
                    line-height: 24px;
                    font-size: 14px;
                    color: #07111b;
                }
                .price {
                    position: absolute;
                    right: 90px;
                    bottom: 12px;
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #f01414;
                }
                .control-wrapper {
                    position: absolute;
                    right: 0;
                    bottom: 6px;
                }
            }
        }
    }
}
</style>
