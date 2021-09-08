<template>
  <div class="login">
    <div class="login-body w-screen min-h-screen py-12">
      <div class="flex justify-center items-center text-white">
        <div class="imgbox h-28 2xl:h-36 mr-5">
          <img src="../assets/img/gerb.png" class="h-full" alt="gerb" />
        </div>
        <p class="text-xl 2xl:text-2xl text-center">
          Ўзбекистон Республикаси Давлат солиқ қўмитаси <br />
          ҳужжатларини архивлаштиришни автоматлаштириш тизими
        </p>
      </div>
      <div
        class="form-wrapper w-96 mx-auto bg-white my-6 p-8 rounded text-center"
      >
        <div class="logo mb-2">
          <img class="mx-auto" src="../assets/img/logo.png" alt="logo" />
        </div>
        <h1 class="text-2xl mb-6">Light Storage</h1>
        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          class="demo-dynamic"
        >
          <el-form-item
            class="w-full"
            prop="email"
            :rules="[
              {
                required: true,
                message: 'Emailni kiriting',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Iltimos emailni to`g`ri kiriting',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input
              size="medium"
              placeholder="Email"
              v-model="dynamicValidateForm.email"
              autocomplete="on"
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
              v-model="dynamicValidateForm.checked"
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

            <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
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
</template>


<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        email: "",
        password: "",
        cheked: false,
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify({
            title: "Success",
            message: "This is a success message",
            type: "success",
          });
          this.resetForm(formName);
        } else {
          this.$notify.error({
            title: "Error",
            message: "This is an error message",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.login {
  background: url(../assets/img/Soliq.jpg) center center / cover no-repeat fixed;
}
.login-body {
  background: rgba(0, 98, 255, 0.5);
}
</style>