<template>
  <div>
    <home-header class="header"></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>