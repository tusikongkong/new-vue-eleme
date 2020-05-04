<template>
  <div class="ratingsbox">
    <div class="rating-content">
      <div class="overview">
        <div class="o-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="o-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size='36' :score='seller.serviceScore'></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size='36' :score='seller.foodScore'></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type" v-show='ratings'>
          <span class="block positive"
          :class="{'p-active':selectType===2}"
          @click='getall'>全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive"
          :class="{'p-active':selectType===0}"
          @click='getpositive'>满意
            <span class="count">{{getratings(0).length}}</span>
          </span>
          <span class="block negative"
          :class="{'n-active':selectType===1}"
          @click='getnegative'>不满意
            <span class="count">{{getratings(1).length}}</span>
          </span>
        </div>
        <div class="switch">
          <span class='icon icon-spinner8'
          :class="{'active':onlyContent}"
          @click='toggleonly'></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for='(rating,index) in selectratings(selectType, onlyContent)' :key='index'>
            <div class="avatar">
              <img class='rating-img' :src='rating.avatar'>
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <star :size='24' :score='rating.score'></star>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show='getre(rating.recommend)'>
                <span class="rating-icon"
                :class='geticon(rating.rateType)'></span>
                <template v-for='(rec,index) in rating.recommend'>
                  <span class="everyrec" :key='index'>{{rec}}</span>
                </template>
              </div>
              <div class="time">{{format(rating.rateTime)}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star.vue'
import moment from 'moment'

export default {
  props: {
    seller: {
      type: Object
    },
    ratings: {
      type: Array
    }
  },
  data () {
    return {
      selectType: 2,
      onlyContent: false
    }
  },
  methods: {
    getall () {
      this.selectType = 2
    },
    getpositive () {
      this.selectType = 0
    },
    getnegative () {
      this.selectType = 1
    },
    toggleonly () {
      this.onlyContent = !this.onlyContent
    },
    getratings (type) {
      return this.ratings.filter(function (rating) {
        return rating.rateType === type
      })
    },
    geticon (type) {
      if (type === 0) {
        return 'icon-smile'
      } else {
        return 'icon-tongue'
      }
    },
    getre (recommend) {
      if (recommend.length === 0) {
        return false
      } else {
        return true
      }
    },
    format (time) {
      return moment(time).format('YYYY-MM-DD hh:mm')
    },
    selectratings (type, text) {
      if (type === 0) {
        if (text === true) {
          return this.ratings.filter(function (rating) {
            return rating.score >= 3 & rating.text !== ''
          })
        } else {
          return this.ratings.filter(function (rating) {
            return rating.score >= 3
          })
        }
      } else if (type === 1) {
        if (text === true) {
          return this.ratings.filter(function (rating) {
            return rating.score < 3 & rating.text !== ''
          })
        } else {
          return this.ratings.filter(function (rating) {
            return rating.score < 3
          })
        }
      } else {
        if (text === true) {
          return this.ratings.filter(function (rating) {
            return rating.text !== ''
          })
        } else {
          return this.ratings.filter(function (rating) {
            return rating
          })
        }
      }
    }
  },
  components: {
    star
  }
}
</script>

<style lang='less' scoped>
@import '../../common/style.less';

.ratingsbox {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: scroll;
  .overview {
    display: flex;
    padding: 18px 0;
    .o-left {
      flex: 0 0 137px;
      padding: 6px 0;
      width: 137px;
      border-right: 1px solid rgba(7,17,27,.1);
      text-align: center;
      .score {
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: #f90;
      }
      .title {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: #07111b;
      }
      .rank {
        line-height: 10px;
        font-size: 10px;
        color: #93999f;
      }
    }
    .o-right {
      flex: 1;
      padding: 6px 0 6px 24px;
      .score-wrapper {
        margin-bottom: 8px;
        font-size: 0;
        .title {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: #07111b;
        }
        .starbox {
          display: inline-block;
          margin: 0 12px;
          vertical-align: top;
        }
        .score {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: #f90;
        }
      }
      .delivery-wrapper {
        .title {
          line-height: 18px;
          font-size: 12px;
          color: #07111b;
        }
        .delivery {
          margin-left: 12px;
          font-size: 12px;
          color: #93999f;
        }
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
  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      position: relative;
      font-size: 0;
      border-bottom: 1px solid rgba(7,17,27,.1);
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        .count {
          margin-left: 2px;
          font-size: 8px;
        }
      }
      .positive {
        background-color: rgba(0,160,220,0.2);
      }
      .negative {
        background-color: rgba(77,85,93,0.2);
      }
      .p-active {
        color: white;
        background-color: #00a0dc;
      }
      .n-active {
        color: white;
        background-color: #4d555d;
      }
    }
    .switch {
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7,17,27,.1);
      color: #93999f;
      font-size: 0;
      .icon {
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        font-size: 24px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
      }
      .active {
        color: #00c850;
      }
    }
  }
  .rating-wrapper {
    padding: 0 18px;
    ul {
      .rating-item {
        display: flex;
        padding: 18px 0;
        position: relative;
        border-bottom: 1px solid rgba(7,17,27,.1);
        .avatar {
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img {
            border-radius: 50%;
            width: 28px;
            height: 28px;
          }
        }
        .content {
          position: relative;
          flex: 1;
          .name {
            margin-bottom: 4px;
            line-height: 12px;
            font-size: 10px;
            color: #07111b;
          }
          .starbox {
            margin-bottom: 6px;
            font-size: 0;
            .star-item {
              display: inline-block;
              margin-right: 6px;
              vertical-align: top;
            }
          }
          .text {
            margin-bottom: 8px;
            line-height: 18px;
            color: #07111b;
            font-size: 12px;
          }
          .recommend {
            line-height: 16px;
            .rating-icon {
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
            }
            .icon-smile {
              color: #00a0dc;
            }
            .icon-tongue {
              color: rgba(77, 85, 93, 0.6)
            }
            .everyrec {
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
              padding: 0 6px;
              border: 1px solid rgba(7,17,27,.1);
              border-radius: 1px;
              color: #93999f;
              background: #fff;
            }
          }
          .time {
            position: absolute;
            top: 0;
            right: 0;
            line-height: 12px;
            font-size: 10px;
            color: #93999f;
          }
        }
      }
    }
  }
}
</style>
