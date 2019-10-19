<template>
  <div class="sw-wrapper">
    <swiper :options="swiperOption" v-if="isSwiperShow">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: 'swiper-pagination'
      },
      swiperList: [{
        id: '001',
        imgUrl: "//img1.qunarzz.com/sight/p0/1909/d2/d262bc6fb6500df3a3.img.jpg_600x330_58fbd3da.jpg"
      },{
        id: '002',
        imgUrl: "//img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_600x330_cd78f1b7.jpg"
      },{
        id: '003',
        imgUrl: "//img1.qunarzz.com/sight/p0/1501/89/babe532d89b23ac070bc09dd092dc9b0.water.jpg_600x330_0e666363.jpg"
      }]
    }
  },
  computed: {
    isSwiperShow: function() {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.sw-wrapper >>> .swiper-pagination-bullet-active 
  background-color #fff

.sw-wrapper
  width 100%
  height 0
  padding-bottom 26.67%
  background-color #eee
  overflow hidden

.sw-wrapper .swiper-img
  width 100%
  height 100%
</style>