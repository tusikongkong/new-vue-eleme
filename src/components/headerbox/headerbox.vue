<template>
  <div class="headerbox">
    <div class="topbox">
      <div class="img-wrapper">
        <img :src='seller.avatar'>
      </div>
      <div class="content-wrapper">
        <div class="topmessage1">
          <span class="imgbac"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="topmessage2">
          <span>
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </span>
        </div>
        <div class="topmessage3" v-if='seller.supports'>
          <span class='icon' :class='classMap[seller.supports[0].type]'></span>
          <span class="des">
            {{seller.supports[0].description}}
          </span>
        </div>
      </div>
      <div class="buttonwrapper"
      v-if='seller.supports'
      @click='toggle'>
        <button class="btn">{{seller.supports.length}}个&nbsp;&gt;</button>
      </div>
    </div>
    <div class="bulletin-wrapper" @click='toggle'>
      <span class="bulletinimg"></span>
      <span class="content">{{seller.bulletin}}</span>
      <i class='little'>&gt;</i>
    </div>
    <div class="backimg">
      <img :src="seller.avatar">
    </div>
    <div class="dialog-wrapper" v-show='dialogshow'>
      <div class="dialog-content">
        <h1 class='h1-name'>{{seller.name}}</h1>
        <div class='star-wrapper'>
          <star :size='24' :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="othercontent">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul class="supports" v-for='(support,index) in seller.supports' :key='index'>
          <li class="support-item">
            <span class="logo" :class='classMap[index]'>
            </span>
            <span class="text">{{support.description}}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="othercontent">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin-box">
          <p class="bulletin-content">
            {{seller.bulletin}}
          </p>
          </div>
      </div>
      <div class="dialog-footer" @click='toggle'>
        <span class="toclose">&times;</span>
        </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star.vue'
export default {
  props: {
    seller: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      imgtype: '',
      dialogshow: false,
      staron: '',
      staroff: ''
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    toggle () {
      this.dialogshow = !this.dialogshow
    }
  },
  components: {
    star
  }
}
</script>

<style lang='less' scoped>
body, html {
  line-height: 1;
  font-weight: 200;
}
.headerbox {
  position: relative;
}
.topbox {
  padding: 24px 24px 18px 24px;
  background-color: rgba(7,17,27,0.5);
  color:white
}
.img-wrapper, .content-wrapper {
  display: inline-block;
  vertical-align: top;
  img {
    height: 64px
  }
  .topmessage1 {
    display: block;
    .imgbac {
      display: inline-block;
      height: 18px;
      width: 30px;
      background-image: url('brand@2x.png');
      background-size: 30px 18px;
      vertical-align: top;
    }
    .name {
      margin-left: 6px;
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
    }
  }
  .topmessage2 {
    display: block;
    margin-bottom: 10px;
    line-height: 12px;
    margin-top: 10px;
    font-size: 12px;
  }
  .topmessage3 {
    display: block;
    line-height: 12px;
    font-size: 12px;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-size: 12px 12px;
      background-repeat: no-repeat;
      vertical-align: top;
    }
    .decrease {
      background-image: url('decrease_2@2x.png');
    }
  }
}

.decrease {
  background-image: url('decrease_2@2x.png');
}
.discount {
  background-image: url('discount_2@2x.png');
}
.special {
  background-image: url('special_2@2x.png');
}
.invoice {
  background-image: url('invoice_2@2x.png');
}
.guarantee {
  background-image: url('invoice_2@2x.png');
}

.content-wrapper {
    margin-left: 15px;
}
.buttonwrapper {
  position: absolute;
  right: 12px;
  bottom: 50px;
  .btn {
    border-radius: 14px;
    border: aliceblue;
    padding: 0 8px;
    height: 24px;
    background-color: rgb(77,64,54);
    color:white;
  }
}
.backimg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
  img {
    width: 100%;
    height: 100%
  }
}

.bulletin-wrapper {
  height: 28px;
  line-height: 28px;
  padding: 0 22px 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(0,0,0,0.5);
  color:white;
  position: relative;
  .bulletinimg {
    background-image: url('bulletin@2x.png');
    background-size: 22px 12px;
    display: inline-block;
    width: 22px;
    height: 12px;
    position: absolute;
    top: 8px;
  }
  .content {
    font-size: 10px;
    margin-left: 28px;
  }
  .little {
    position: absolute;
    font-size: 10px;
    right: 12px;
  }
}

.dialog-wrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(7,17,27,0.8);
  color: white;
  .dialog-content {
    min-height: 100%;
    margin-bottom: -60px;
    display: block;
    // margin-top: 64px;这两个会把 sticky footer的页面撑开
    // padding-bottom: 64px;
    .h1-name {
      line-height: 16px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      padding-top: 64px;
    }
    .star-wrapper {
      margin-top: 18px;
      padding: 2px 0;
      text-align: center;
    }
    .title {
      display: flex;
      width: 80%;
      margin: 30px auto 24px auto;
      .line {
        flex: 1;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
      }
      .othercontent {
        padding: 0 12px;
        font-weight: 700;
        font-size: 14px;
      }
    }
    .supports {
      width: 80%;
      margin: 0 auto;
      .support-item {
        padding: 0 12px;
        margin-bottom: 12px;
        .logo {
          display: inline-block;
          background-size: 16px 16px;
          vertical-align: top;
          width: 16px;
          height: 16px;
          margin-right: 6px;
          background-repeat: no-repeat;
        }
      }
    }
    .bulletin-box {
      width: 80%;
      margin: 0 auto;
      .bulletin-content {
        padding: 0 12px;
        line-height: 24px;
        font-size: 12px;
      }
    }
  }
  .dialog-footer {
    height: 60px;
    color: white;
    text-align: center;
    font-size: 50px;
  }
}
</style>
