<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons :icons-list="iconsList"></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons
  },
  data () {
    return {
      iconsList: [],
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
        this.iconsList = data.iconsList;
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