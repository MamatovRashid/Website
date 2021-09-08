<template>
  <div>
    <div
      class="fixed bg-black w-full h-full top-0 left-0 opacity-30 z-20"
      @click="$emit('hide')"
      :class="!show1 ? 'hidden' : 'flex'"
    ></div>
    <div
      class="left fixed h-screen top-0 flex flex-col z-20 -left-full xl:left-0"
      :class="{ navleft: show1 }"
    >
      <div class="logo text-center h-20 flex justify-center items-center">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="logo" />
        </router-link>
      </div>
      <ul class="flex flex-col flex-1 px-2.5">
        <li class="mb-2">
          <router-link
            to="/doc"
            class="
              flex flex-col
              items-center
              py-4
              rounded-md
              text-white
              opacity-90
              hover:opacity-100
              hover:bg-opacity-20 hover:bg-white
            "
          >
            <i class="ti-file text-2xl"></i>
            <span class="mt-1.5">Ҳужжатлар</span>
          </router-link>
        </li>
        <!-- <li class="mb-2">
                    <button @click="toggle1 = true" class="flex flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                        <i class="fas fa-cloud-upload-alt text-2xl"></i>
                        <span class="mt-1.5 text-center">Ҳужжат юклаш</span>
                    </button>
                </li> -->
        <!-- <li class="mb-2">
                    <button @click="toggle2 = true" class="flex w-full flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                        <i class="el-icon-edit text-2xl"></i>
                        <span class="mt-1.5 text-center">edit</span>
                    </button>
                </li> -->
        <li class="mb-2">
          <button
            @click="toggle3 = true"
            class="
              flex
              w-full
              flex-col
              items-center
              py-4
              rounded-md
              text-white
              opacity-90
              hover:opacity-100
              hover:bg-opacity-20 hover:bg-white
            "
          >
            <i class="far fa-user text-2xl"></i>
            <span class="mt-1.5 text-center">Users</span>
          </button>
        </li>
        <li class="mb-2 text-center text-white">
          <button>UZ</button>
          <button class="mx-1 px-1 border-r border-l">RU</button>
          <button class="text-black">УЗ</button>
        </li>
        <li class="mb-2">
          <button
            @click="toggle = true"
            class="
              flex flex-col
              items-center
              py-4
              rounded-md
              text-white
              opacity-90
              hover:opacity-100
              hover:bg-opacity-20 hover:bg-white
            "
          >
            <i class="ti-settings text-2xl"></i>
            <span class="mt-1.5">Созламалар</span>
          </button>
        </li>
      </ul>
    </div>
    <DataEnter :show="toggle1" @hide="hideToggle1" />
    <AddData :show="toggle2" @hide="hideToggle2" />
    <Settings :show="toggle" @hide="hideToggle" />
    <Users :show="toggle3" @hide="hideToggle3" />
  </div>
</template>

<script>
import DataEnter from "./DataEnter.vue";
import AddData from "./AddData.vue";
import Settings from "./Settings.vue";
import Users from "./Users.vue";
export default {
  name: "Navigation",
  props: ["show1"],
  components: {
    DataEnter,
    AddData,
    Settings,
    Users,
  },
  data() {
    return {
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle: false,
    };
  },
  methods: {
    hideToggle1() {
      this.toggle1 = false;
    },
    hideToggle2() {
      this.toggle2 = false;
    },
    hideToggle3() {
      this.toggle3 = false;
    },
    hideToggle() {
      this.toggle = false;
    },
  },
};
</script>
<style scoped>
.left {
  background: #0062ff;
  width: 110px;
  left: 0;
}
@media screen and (max-width: 1279px) {
  .left {
    left: -110px;
    transition: all 0.4s ease;
  }
}
li:nth-last-child(3) {
  flex-grow: 1;
}
</style>