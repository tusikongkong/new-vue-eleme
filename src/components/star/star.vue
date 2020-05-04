<template>
  <div class="starbox" :class='starType'>
    <span v-for='(itemClass,index) in itemClasses'
    :class='itemClass'
    class='star-item'
    :key='index'></span>
  </div>
</template>

<script>
const stars = 5

export default {
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number
    }
  },
  computed: {
    itemClasses () {
      const result = []
      const scroeon = parseInt(this.score)
      for (let i = 0; i < scroeon; i++) {
        result.push('star-on')
      }
      while (result.length < stars) {
        result.push('star-off')
      }
      return result
    },
    starType () {
      return 'star-' + this.size
    }
  }
}
</script>

<style lang='less' scoped>

.star-24 {
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
}
.star-36 {
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
}
.star-48 {
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
}
.star-on {
  background-image: url('star_on@2x.png');
}
.star-off {
  background-image: url('star_off@2x.png');
}

</style>
