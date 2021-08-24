<template>
  <div
    class="bg-white fixed right-0 h-screen top-0 border-l p-6 pr-0 z-20 right"
  >
    <div class="sitebar flex flex-col h-full">
      <div class="sitebar-header">
        <h1 class="text-xl mb-6 pr-6">Ҳужжатлар омбори</h1>
      </div>
      <div class="sitebar-content scrollstyle flex-grow">
        <div class="pr-6">
          <div class="flex items-center py-3 border-b">
            <div
              class="
                icons
                w-12
                h-12
                flex
                justify-center
                items-center
                rounded
                mr-3
              "
            >
              <i class="ti-clipboard"></i>
            </div>
            <div class="flex-grow">
              <p>Буйруқлар</p>
              <span class="text-xs text-gray-700">110та файл</span>
            </div>
            <div>
              <h5 class="text-lg font-medium text-blue-600">15.7 GB</h5>
            </div>
          </div>
          <div class="flex items-center py-3 border-b">
            <div
              class="
                icons
                w-12
                h-12
                flex
                justify-center
                items-center
                rounded
                mr-3
              "
            >
              <i class="ti-files"></i>
            </div>
            <div class="flex-grow">
              <p>Фармонлар</p>
              <span class="text-xs text-gray-700">8та файл</span>
            </div>
            <div>
              <h5 class="text-lg font-medium text-blue-600">20 GB</h5>
            </div>
          </div>
          <div class="flex items-center py-3 border-b">
            <div
              class="
                icons
                w-12
                h-12
                flex
                justify-center
                items-center
                rounded
                mr-3
              "
            >
              <i class="ti-files"></i>
            </div>
            <div class="flex-grow">
              <p>Фармойишлар</p>
              <span class="text-xs text-gray-700">46та файл</span>
            </div>
            <div>
              <h5 class="text-lg font-medium text-blue-600">10.5 GB</h5>
            </div>
          </div>
          <div class="flex items-center py-3 border-b">
            <div
              class="
                icons
                w-12
                h-12
                flex
                justify-center
                items-center
                rounded
                mr-3
              "
            >
              <i class="ti-files"></i>
            </div>
            <div class="flex-grow">
              <p>Бошқа ҳужжат</p>
              <span class="text-xs text-gray-700">50та файл</span>
            </div>
            <div>
              <h5 class="text-lg font-medium text-blue-600">2.8 GB</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="sitebar-footer pr-6 pt-6">
        <button
          @click="toggle = true"
          class="
            border border-blue-600
            text-blue-600
            w-full
            p-4
            rounded-md
            font-semibold
            text-lg
            flex
            items-center
            justify-center
            hover:text-white
            hover:bg-blue-600
          "
        >
          <i class="ti-upload mr-3"></i>
          Ҳужжатни юклаш
        </button>
      </div>
    </div>
    <DataEnter :show="toggle" @hide="hideToggle" />
  </div>
</template>
<script>
import DataEnter from './DataEnter.vue'
export default {
  name: 'Sitebar',
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
.right {
  width: 300px;
}
.icons {
  color: #0062ff;
  background: rgba(0, 98, 255, 0.125);
}
.scrollstyle {
  overflow: auto;
}

.scrollstyle::-webkit-scrollbar {
  width: 5px;
  position: absolute;
  right: 0;
}

.scrollstyle::-webkit-scrollbar-thumb {
  margin-left: 100px;
  border-radius: 5px;
  background: #cccccc;
}

</style>
