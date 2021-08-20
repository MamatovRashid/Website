<template>
  <div id="app">
    <Header />
    <Navigation/>
    <Sitebar />
    <div class="pl-28 pr-72 2xl:pr-80 pt-20">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import Sitebar from '@/components/Sitebar.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Header,
    Sitebar
  }
}
</script>
<style lang="scss">

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
