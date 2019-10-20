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
        imgUrl: "//source.qunarzz.com/site/images/wns/20190926_dujia_homepage_750x192_5.jpg"
      },{
        id: '002',
        imgUrl: "//source.qunarzz.com/site/images/wns/20191014_dujia_homepage_top_banner_4.jpg"
      },{
        id: '003',
        imgUrl: "//source.qunarzz.com/site/images/wns/20191017_dujia_homepage_750x192_5.jpg"
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