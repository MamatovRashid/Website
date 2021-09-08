<template>
  <header>
    <div class="fixed z-10 w-full header">
      <div class="bg-white flex items-center header-box">
        <div class="header-body flex px-3 xl:px-6 w-full justify-between">
          <div class="flex">
            <button
              class="px-3.5 flex xl:hidden items-center"
              @click="toggle2 = true"
            >
              <i class="ti-menu"></i>
            </button>
            <form class="flex">
              <el-input
                size="medium"
                placeholder="Ҳужжат номи"
                class="w-60 lg:w-72 mr-2"
                v-model="docName"
                clearable
              >
              </el-input>
              <el-input
                size="medium"
                placeholder="Ҳужжат рақами"
                class="w-40 mr-2"
                v-model="docNum"
                clearable
              >
              </el-input>
              <button
                type="button"
                @click="search"
                class="
                  bg-blue-700
                  text-white
                  hover:bg-blue-600
                  p-1.5
                  px-2.5
                  lg:px-3
                  rounded
                  flex
                  items-center
                "
              >
                <i class="ti-search"></i>
                <span class="ml-1 hidden lg:block">Қидириш</span>
              </button>
            </form>

            <button @click="toggle = false" class="ml-4 lg:ml-10 text-blue-600">
              Кенгайтирилган қидирув
            </button>
          </div>
          <button
            class="px-3.5 flex xl:hidden items-center"
            @click="toggle1 = true"
          >
            <i class="ti-upload"></i>
          </button>
        </div>
      </div>
      <div
        class="searchbox absolute top-0 pl-6 w-full py-6"
        :class="{ hide: toggle }"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-3xl mb-4">Ҳужжатни қидириш</h1>
          <button
            class="bg-gray-500 text-white p-1.5 flex rounded"
            @click="toggle = true"
          >
            <i class="ti-close"></i>
          </button>
        </div>
        <div class="box xl:max-w-5xl">
          <div class="grid grid-cols-12 gap-y-4 gap-x-2.5">
            <div class="col-span-3">
              <el-input
                size="medium"
                placeholder="Ҳужжат рақами"
                v-model="docNum"
                clearable
              >
              </el-input>
            </div>
            <div class="col-span-3">
              <el-input
                size="medium"
                placeholder="Опись рақами"
                v-model="opNum"
                clearable
              >
              </el-input>
            </div>
            <div class="col-span-3">
              <el-input
                size="medium"
                placeholder="Фонд рақами"
                v-model="fondNum"
                clearable
              >
              </el-input>
            </div>
            <div class="col-span-3">
              <el-input
                size="medium"
                placeholder="Йиғмажилд рақами"
                v-model="YJNum"
                clearable
              >
              </el-input>
            </div>
            <div class="col-span-3">
              <el-input
                size="medium"
                placeholder="Кирим рақами"
                v-model="krNum"
                clearable
              >
              </el-input>
            </div>
            <div class="col-span-4">
              <el-select
                clearable
                size="medium"
                v-model="Dep"
                placeholder="Департаментлар"
                class="w-full"
              >
                <el-option
                  label="Департамент1"
                  value="Департамент1"
                ></el-option>
                <el-option
                  label="Департамент2"
                  value="Департамент2"
                ></el-option>
              </el-select>
            </div>
            <div class="col-span-5">
              <el-input
                size="medium"
                placeholder="Ҳужжат номи"
                v-model="docName"
                clearable
              >
              </el-input>
            </div>
            <div class="col-span-3">
              <el-select
                clearable
                size="medium"
                v-model="type"
                placeholder="Ҳужжат тури"
                class="w-full"
              >
                <el-option label="тур1" value="тур1"></el-option>
                <el-option label="тури2" value="тури2"></el-option>
              </el-select>
            </div>
            <div class="col-span-3">
              <el-select
                clearable
                size="medium"
                v-model="lang"
                placeholder="Ҳужжат тили"
                class="w-full"
              >
                <el-option label="Ўзбекча" value="krill"></el-option>
                <el-option label="O'zbekcha" value="uz"></el-option>
                <el-option label="Русский" value="ru"></el-option>
                <el-option label="English" value="en"></el-option>
              </el-select>
            </div>
            <div :class="dataClass">
              <el-date-picker
                size="medium"
                type="date"
                :placeholder="dataText"
                v-model="data1"
                style="width: 100%"
                format="dd.MM.yyyy"
              ></el-date-picker>
            </div>
            <div class="col-span-2" v-if="checked">
              <el-date-picker
                size="medium"
                type="date"
                placeholder="сана гача"
                v-model="data2"
                style="width: 100%"
                format="dd.MM.yyyy"
              ></el-date-picker>
            </div>
            <div class="col-span-2 flex items-center">
              <el-checkbox
                v-model="checked"
                label="Оралиқ"
                name="type"
              ></el-checkbox>
            </div>
            <div class="col-span-4">
              <el-select
                clearable
                size="medium"
                v-model="status"
                placeholder="Ҳужжат ҳолати"
                class="w-full"
              >
                <el-option label="Амалдаги" value="active"></el-option>
                <el-option
                  label="Ўз кучини йўқотган"
                  value="passive"
                ></el-option>
              </el-select>
            </div>
            <div class="col-span-4">
              <el-select
                clearable
                size="medium"
                v-model="sort"
                placeholder="Ҳужжат туси"
                class="w-full"
              >
                <el-option label="Ўзбекча" value="krill"></el-option>
                <el-option label="O'zbekcha" value="uz"></el-option>
                <el-option label="Русский" value="ru"></el-option>
                <el-option label="English" value="en"></el-option>
              </el-select>
            </div>
            <div class="col-span-4">
              <el-select
                clearable
                size="medium"
                v-model="vil"
                placeholder="Ҳужжат туси"
                class="w-full"
              >
                <el-option label="Тошкент шаҳар" value="t-city"></el-option>
                <el-option
                  label="Қорақалпоғистон Республикаси"
                  value="QQ_res"
                ></el-option>
                <el-option label="Андижон вилояти" value="and"></el-option>
                <el-option label="Бухоро вилояти" value="bux"></el-option>
                <el-option label="Жиззах вилояти" value="jiz"></el-option>
                <el-option label="Қашқадарё вилояти" value="qash"></el-option>
                <el-option label="Навоий вилояти" value="nav"></el-option>
                <el-option label="Самарқанд вилояти" value="sam"></el-option>
                <el-option label="Сурхондарё вилояти" value="sur"></el-option>
                <el-option label="Сирдарё вилояти" value="sir"></el-option>
                <el-option label="Тошкент вилояти" value="tosh"></el-option>
                <el-option label="Фарғона вилояти" value="far"></el-option>
                <el-option label="Хоразм вилояти" value="xor"></el-option>
              </el-select>
            </div>
            <div class="col-span-12">
              <el-input
                placeholder="Матндаги сўз ёки жумла"
                v-model="text1"
                clearable
              >
              </el-input>
            </div>
          </div>
          <button
            type="button"
            @click="search"
            class="
              bg-blue-700
              text-white
              hover:bg-blue-600
              p-1.5
              px-3
              rounded
              mt-4
              flex
              items-center
            "
          >
            <i class="ti-search mr-1"></i>
            <span>Қидириш</span>
          </button>
        </div>
      </div>
    </div>
    <DataEnter :show="toggle1" @hide="hideToggle1" class="xl:hidden" />
    <Navigation :show1="toggle2" @hide="hideToggle" class="xl:hidden"/>
  </header>
</template>
<script>
import Navigation from "./Navigation.vue";
import DataEnter from "./DataEnter.vue";
export default {
  name: "Header",
  components: {
    Navigation,
    DataEnter,
  },
  data() {
    return {
      toggle: true,
      toggle1: false,
      toggle2: false,
      checked: false,
      docName: "",
      docNum: "",
      opNum: "",
      fondNum: "",
      YJNum: "",
      krNum: "",
      Dep: "",
      type: "",
      lang: "",
      data1: "",
      data2: "",
      status: "",
      sort: "",
      vil: "",
      text1: "",
    };
  },
  computed: {
    dataText() {
      return this.checked ? "сана дан" : "Қабул қилинган санаси";
    },
    dataClass() {
      return this.checked ? "col-span-2" : "col-span-3";
    },
  },
  methods: {
    hideToggle() {
      this.toggle2 = false;
    },
    hideToggle1() {
      this.toggle1 = false;
    },
    search() {
      if (this.docName) {
        console.log(this.docName);
        this.docName = "";
      }
      if (this.docNum) {
        console.log(this.docNum);
        this.docNum = "";
      }
    },
  },
  watch: {
    "$route.name": function () {
      this.toggle = true;
      this.toggle2 = false;
    },
  },
};
</script>

<style scoped>
.searchbox {
  transition: all 1s ease;
  z-index: 1;
  padding-right: 434px;
  background: rgb(254, 254, 254);
  box-shadow: 0 -4px 10px 0 #000;
}
@media screen and (max-width: 1279px) {
  .searchbox {
    padding-right: 24px;
  }
}
.hide {
  transform: translateY(-800px);
}
.header-box {
  height: 90px;
}
</style>