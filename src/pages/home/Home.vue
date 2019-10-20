<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icons-list="iconsList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons,
    'home-recommend': HomeRecommend,
    'home-weekend': HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json?city=' + this.curCity)
        .then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess (res) {
      if(res.data.ret && res.data.data) {
        var data = res.data.data;
        this.swiperList = data.swiperList;
        this.iconsList = data.iconsList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted () {
    this.getHomeInfo();
  }
}
</script>

<style lang="stylus" scoped>

</style>