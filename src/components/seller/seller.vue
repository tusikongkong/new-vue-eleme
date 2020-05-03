<template>
  <div class="sellerbox">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <star :size='36' :score='seller.score'></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class='stress'>{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class='stress'>{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block none-border">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class='stress'>{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite icon-yelp"
          :class="{'active':favorite}"
          @click='toggleFav'></span>
          <span class="toggle-text">{{textFav}}</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports">
          <li class="support-item" v-for='(item,index) in seller.supports'
          :key='index'>
            <span class="icon" :class='classMap[index]'></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item"
            v-for='(pic,index) in seller.pics'
            :key='index'>
              <img :src="pic">
            </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class='info'>
        <h1 class="title">商家信息</h1>
        <ul class='infos'>
          <li class="info-item"
          v-for='(info,index) in seller.infos'
          :key='index'>
            <span class="text">{{info}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star.vue'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      favorite: false,
      text: ''
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  computed: {
    textFav () {
      if (this.favorite === false) {
        return '收藏'
      } else {
        return '已收藏'
      }
    }
  },
  methods: {
    toggleFav () {
      this.favorite = !this.favorite
    }
  },
  components: {
    star
  }
}
</script>

<style lang='less' scoped>
@import '../../common/style.less';

.sellerbox {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: scroll;
  .overview {
    position: relative;
    padding: 18px;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: #07111b;
      font-size: 14px;
    }
    .desc {
      padding-bottom: 18px;
      position: relative;
      font-size: 0;
      border-bottom: 1px solid rgba(7,17,27,.1);
      .starbox {
        display: inline-block;
        margin-right: 8px;
        vertical-align: top;
      }
      .text {
        display: inline-block;
        margin-right: 12px;
        line-height: 18px;
        vertical-align: top;
        font-size: 10px;
        color: #4d555d;
      }
    }
    .remark {
      display: flex;
      padding-top: 18px;
      .block {
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(7,17,27,.1);
        h2 {
          margin-bottom: 4px;
          line-height: 10px;
          font-size: 10px;
          color: #93999f;
        }
        .content {
          line-height: 24px;
          font-size: 10px;
          color: #07111b;
          .stress {
            font-size: 24px;
          }
        }
      }
      .none-border {
        border-right: none;
      }
    }
    .favorite {
      position: absolute;
      width: 50px;
      right: 11px;
      top: 18px;
      text-align: center;
      .icon-favorite {
        display: block;
        margin-bottom: 4px;
        line-height: 24px;
        font-size: 24px;
        color: #d4d6d9;
      }
      .toggle-text {
        line-height: 10px;
        font-size: 10px;
        color: #4d555d;
      }
      .active {
        color: red;
      }
    }
  }
  .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7,17,27,.1);
    border-bottom: 1px solid rgba(7,17,27,.1);
    background: #f3f5f7;
  }
  .bulletin, .info {
    padding: 18px 18px 0;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: #07111b;
      font-size: 14px;
    }
    .content-wrapper {
      padding: 0 12px 16px;
      position: relative;
      .content {
        line-height: 24px;
        font-size: 12px;
        color: #f01414;
      }
    }
    .supports, .infos {
      .support-item, .info-item {
        padding: 16px 12px;
        position: relative;
        font-size: 0;
        border-top: 1px solid rgba(7,17,27,.1);
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: top;
          margin-right: 6px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
        }
        .text {
          line-height: 16px;
          font-size: 12px;
          color: #07111b;
        }
      }
    }
  }
  .pics {
    padding: 18px;
    .title {
      margin-bottom: 12px;
      line-height: 14px;
      color: #07111b;
      font-size: 14px;
    }
    .pic-wrapper {
        width: 100%;
        overflow-x: scroll;
        white-space: nowrap;
        .pic-list {
          .pic-item {
            display: inline-block;
            margin-right: 6px;
            height: 90px;
            width: 120px;
            img {
              height: 90px;
              width: 120px;
            }
          }
        }
      }
  }
}

.decrease {
  background-image: url('decrease_1@3x.png');
}
.discount {
  background-image: url('discount_1@3x.png');
}
.special {
  background-image: url('special_1@3x.png');
}
.invoice {
  background-image: url('invoice_1@3x.png');
}
.guarantee {
  background-image: url('guarantee_1@3x.png');
}
</style>
