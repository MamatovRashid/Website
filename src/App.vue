<template>
  <div id="app">
    <div v-if="open">
      <div class="login">
        <div class="login-body w-screen min-h-screen py-12">
          <div class="flex justify-center items-center text-white">
            <div class="imgbox h-28 2xl:h-36 mr-5">
              <img src="./assets/img/gerb.png" class="h-full" alt="gerb" />
            </div>
            <p class="text-xl 2xl:text-2xl text-center">
              Ўзбекистон Республикаси Давлат солиқ қўмитаси <br />
              ҳужжатларини архивлаштиришни автоматлаштириш тизими
            </p>
          </div>
          <div v-if="loading" class="mx-auto text-white text-center pt-20">
            <i class="el-icon-loading text-4xl"></i>
            <p class="text-2xl">Iltimos kuting...</p>
          </div>
          <div
            v-else
            class="
              form-wrapper
              w-96
              mx-auto
              bg-white
              my-6
              p-8
              rounded
              text-center
            "
          >
            <div class="logo mb-2">
              <img class="mx-auto" src="./assets/img/logo.png" alt="logo" />
            </div>
            <h1 class="text-2xl mb-6">Light Storage</h1>
            <el-form
              :model="dynamicValidateForm"
              ref="dynamicValidateForm"
              class="demo-dynamic"
            >
              <el-form-item
                class="w-full"
                prop="login"
                :rules="[
                  {
                    required: true,
                    message: 'Loginni kiriting',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  size="medium"
                  placeholder="Login"
                  v-model="dynamicValidateForm.login"
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                :rules="[
                  {
                    required: true,
                    message: 'Parolni kiriting',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  size="medium"
                  placeholder="Parol"
                  v-model="dynamicValidateForm.password"
                  show-password
                ></el-input>
              </el-form-item>
              <div class="flex justify-between mb-5">
                <el-checkbox
                  class="text-black"
                  v-model="checkk"
                  >Eslab qolish</el-checkbox
                >
                <a href="#" class="text-sm">Parolni qayta tiklash</a>
              </div>
              <el-form-item>
                <el-button
                  size="medium"
                  class="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    font-semibold
                    border-blue-600
                    btnsub
                    text-white
                    hover:text-white
                  "
                  @click="submitForm('dynamicValidateForm')"
                  >Кириш</el-button
                >
              </el-form-item>
              <hr class="2xl:mb-8 mb-5" />
              <div>
                <button
                  class="
                    border
                    py-1
                    px-2.5
                    text-sm
                    font-semibold
                    rounded
                    hover:bg-gray-300
                  "
                >
                  Ro'yhatdan o'tish
                </button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <User2 v-if="checkk"/>
      <div v-else class="flex flex-wrap">
        <div class="w-full flex">
          <Navigation />
          <div class="main min-h-screen flex flex-1" ref="main">
            <div class="flex flex-col flex-1">
              <div class="w-full" style="height: 90px;">
                <Header />
              </div>
              <router-view class="flex-1" />
              <Footer/>
            </div>
          </div>
          <Sitebar v-if="sitebar"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Login from "./components/Login.vue";
import Navigation from "./components/Navigation.vue";
import Header from "./components/Header.vue";
import Sitebar from "./components/Sitebar.vue";
import Footer from "./components/Footer.vue";
import User2 from "./components/User2.vue";
export default {
  name: "App",
  components: {
    Login,
    Navigation,
    Header,
    Sitebar,
    Footer,
    User2,
  },
  data() {
    return {
      sitebar: true,
      loading: false,
      open: false,
      checkk: false,
      dynamicValidateForm: {
        login: "",
        password: "",
        cheked: false,
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          if (
            this.dynamicValidateForm.login === "admin" &&
            this.dynamicValidateForm.password === "admin2021"
          ) {
            setTimeout(() => {
              this.loading = false;
              this.$notify({
                title: "Tabriklaymiz",
                message: "Tizimga muaffaqiyatli kirdingiz",
                type: "success",
              });
              this.open = false;
              this.resetForm(formName);
            }, 1000);
          } else {
            setTimeout(() => {
              this.loading = false;
              this.$notify.error({
                title: "Xato",
                message: "Login yoki parol xato",
              });
            }, 500);
          }
        } else {
          this.$notify.error({
            title: "Xato",
            message: "Login parol kiriting",
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {
    this.$nextTick(() => {
      if(this.$router.currentRoute.name === "Documents"){
        this.sitebar = false
        if(window.innerWidth > 1279){
          this.$refs.main.style.marginRight = 0
        }
      }
    })
  },
  watch: {
    "$route.name": function (name) {
      if(name === "Documents"){
        this.sitebar = false
        if(window.innerWidth > 1279){
          this.$refs.main.style.marginRight = 0
        }
      }
      else{
        this.sitebar = true
        if(window.innerWidth > 1279){
          this.$refs.main.style.marginRight = '300px'
        }
      }
    },
  },
};
</script>
<style lang="scss">
body::-webkit-scrollbar {
  display: none;
}
.main{
  margin-right: 300px;
  margin-left: 110px;
}
@media screen and (max-width: 1279px) {
  .main{
    margin: 0;
  }
}
/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
.el-input__inner {
  border: 1px solid #e1e1e1 !important;
  color: #495057 !important;
}
.el-input__inner::placeholder {
  color: #6c757d !important;
}
.el-textarea__inner {
  border: 1px solid #e1e1e1 !important;
  color: #495057 !important;
}
.el-textarea__inner::placeholder {
  color: #6c757d !important;
}
thead {
  color: #737373 !important;
  font-size: 14px;
}
@media screen and (max-width: 1279px) {
  thead .cell{
    padding-right: 0 !important;
  }
}
tbody .cell {
  color: #212529;
  font-size: 15px;
}
@media screen and (max-width: 1023px) {
  tbody .cell {
    font-size: 13px;
  }
}
.apexcharts-toolbar {
  z-index: 1 !important;
}
.cell {
  word-break: normal !important;
}
.btnsub:focus {
  background: rgb(37, 99, 235) !important;
  color: #fff !important;
}
.login {
  background: url(./assets/img/Soliq.jpg) center center / cover no-repeat fixed;
}
.login-body {
  background: rgba(0, 98, 255, 0.5);
}
.overflow-y-auto::-webkit-scrollbar {
  width: 5px;
  position: absolute;
  right: 0;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  margin-left: 100px;
  border-radius: 5px;
  background: #cccccc;
}
.settings .el-form-item__label{
  padding-bottom: 4px !important;
  line-height: 1.5 !important;
  color: #000 !important;
}
.user2 .el-form-item__label{
  padding-bottom: 4px !important;
  line-height: 1.5 !important;
  color: #000 !important;
  font-weight: 600 !important;
}
.el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

.el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #aaa;
}
.el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 5px;
  }
.el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  position: absolute;
  z-index: 10;
}
.el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 10px;
  position: absolute;
  z-index: 10;
  }
.el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 5px;
  
  position: absolute;
  z-index: 10;
  background: #aaa;
}
.el-table__fixed, .el-table__fixed-right{
  height: 100% !important;
}
.el-table--scrollable-y .el-table__fixed-right{
  right: 10px !important;
}
.el-table__fixed-body-wrapper{
  max-height: calc(100% - 70px) !important;
}
.navleft{
  transform: translateX(110px);
  transition: all 0.4s ease;
}
</style>
