<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from './components/Footer'
  import Header from './components/Header'
  export default {
    components:{
      Footer,
      Header
    }
  }
</script>
<style lang='less' scoped>

</style>
