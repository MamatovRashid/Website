<template>
  <div id="app">
    <Header />
    <Navigation/>
    <div class="min-h-screen flex">
      <div class="main flex flex-col flex-1">
        <router-view class="flex-1"/>
        <Footer/>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Header,
    Footer
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
.main{
  padding-left: 110px;
  padding-top: 90px;
}
.modal-body .el-form-item__error {
  padding-top: 1px;
}
.modal-body .el-upload-list__item {
  margin: 0;
}
* {
  font-family: sans-serif;
}
.el-tag {
  background: none !important;
  border: none !important;
}
.el-input__inner{
  border: 1px solid #e1e1e1 !important;
  color: #495057 !important;
}
.el-input__inner::placeholder{
  color: #6c757d !important;
}
.el-textarea__inner{
  border: 1px solid #e1e1e1 !important;
  color: #495057 !important;
}
.el-textarea__inner::placeholder{
  color: #6c757d !important;
}
thead{
  color: #737373 !important;
  font-size: 14px;
}
tbody .cell{
  color: #212529;
  font-size: 15px;
}
.apexcharts-toolbar{
  z-index: 1 !important;
}
.cell{
  word-break: normal !important;
}
</style>
