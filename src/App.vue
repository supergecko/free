<template>
  <div id="app">
    <!-- 通用头部 -->
    <Header />
    <router-view />
    <!-- 通用底部 -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
