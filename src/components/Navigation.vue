<template>
    <div class="left fixed h-screen left-0 top-0 flex flex-col z-30">
        <div class="logo text-center h-20 flex justify-center items-center">
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="logo">
            </router-link>
        </div>
        <ul class="flex flex-col flex-1 px-2.5">
            <li class="mb-2">
                <router-link to="/doc" class="flex flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                    <i class="ti-file text-2xl"></i>
                    <span class="mt-1.5">Ҳужжатлар</span>
                </router-link>
            </li>
            <li class="mb-2">
                <button @click="toggle = true" class="flex flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                    <i class="fas fa-cloud-upload-alt text-2xl"></i>
                    <span class="mt-1.5 text-center">Ҳужжат юклаш</span>
                </button>
            </li>
            <li class="mb-2">
                <router-link to="/file/1" class="flex flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                    <i class="ti-settings text-2xl"></i>
                    <span class="mt-1.5">Созламалар</span>
                </router-link>
            </li>
        </ul>
        <DataEnter :show="toggle" @hide="hideToggle" />
    </div>
</template>

<script>
import DataEnter from './DataEnter.vue'
export default {
  name: 'Navigation',
  components: {
    DataEnter
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    hideToggle() {
      this.toggle = false;
    },
  },
}
</script>
<style lang="scss" scoped>
    .left{
        background: #0062ff;
        width: 110px;
    }
    li:nth-last-child(2){
        flex-grow: 1;
    }
</style>