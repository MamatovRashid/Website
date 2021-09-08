<template>
  <div
    v-show="show"
    class="settings fixed z-50 w-full h-full top-0 left-0 overflow-y-auto"
  >
    <div
      class="bg-black bg-opacity-25 w-full h-full fixed"
      @click="$emit('hide'), resetForm('ruleForm')"
    ></div>
    <div
      class="
        modal-body
        w-4/5
        rounded-md
        border-gray-400 border
        p-6
        bg-white
        m-auto
        my-9
        relative
        z-10
      "
    >
      <div class="modal-head flex flex-row items-center justify-between mb-4">
        <h1 class="text-2xl">Account sozlamlari</h1>
        <button
          class="bg-gray-300 rounded-sm w-7 h-7"
          @click="$emit('hide'), resetForm('ruleForm')"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-main">
        <el-tabs v-model="activeName">
          <el-tab-pane label="Account" name="first">
            <div class="flex">
              <div class="w-20 h-20 rounded-full overflow-hidden">
                <img
                  class="w-full h-full object-contain"
                  src="../assets/img/avatar.png"
                  alt=""
                />
              </div>
              <div class="ml-6 flex flex-col justify-between">
                <h1 class="text-xl mt-1.5">Ali Valiyev</h1>
                <div>
                  <button
                    class="
                      border
                      rounded
                      py-1.5
                      px-2.5
                      border-blue-700
                      text-blue-700 text-sm
                      font-semibold
                      hover:bg-blue-700
                      hover:text-white
                      mr-3
                    "
                  >
                    O'zgartirish
                  </button>
                  <button
                    class="
                      border
                      rounded
                      py-1.5
                      px-2.5
                      border-red-500
                      text-red-500 text-sm
                      font-semibold
                      hover:bg-red-500
                      hover:text-white
                      mr-3
                    "
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
            <div>
              <el-form
                :label-position="labelPosition"
                label-width="100px"
                :model="user"
                class="flex flex-wrap mt-5 -m-1"
              >
                <el-form-item label="Ism" class="w-1/4 px-1 mb-2.5">
                  <el-input size="medium" v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="Familiya" class="w-1/4 px-1 mb-2.5">
                  <el-input size="medium" v-model="user.surname"></el-input>
                </el-form-item>
                <el-form-item label="Otasining ismi" class="w-1/4 px-1 mb-2.5">
                  <el-input size="medium" v-model="user.lastname"></el-input>
                </el-form-item>
                <el-form-item label="Viloyat" class="mb-2 w-1/4 px-1">
                  <el-select
                    size="medium"
                    filterable
                    v-model="user.region"
                    style="width: 100%"
                  >
                    <el-option
                      :label="user.region"
                      :value="user.region"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Tuman/Shahar" class="mb-2 w-1/4 px-1">
                  <el-input v-model="user.district" size="medium"></el-input>
                </el-form-item>
                <el-form-item label="Departament" class="mb-2 w-1/4 px-1">
                  <el-input v-model="user.dep" size="medium"></el-input>
                </el-form-item>
                <el-form-item label="Rol" class="mb-2 w-1/4 px-1">
                  <el-input v-model="user.dep" size="medium"></el-input>
                </el-form-item>
                <el-form-item label="Manzil" class="mb-2 w-2/3 px-1">
                  <el-input
                    v-model="user.addres"
                    size="medium"
                    type="textarea"
                  ></el-input>
                </el-form-item>
                <el-form-item class="px-1 w-full">
                  <el-button
                    size="medium"
                    class="border border-blue-600 rounded px-3 text-blue-600"
                    >Saqlash</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Ma'lumot" name="second">
            <el-form
              :model="user"
              label-position="top"
              class="flex flex-wrap -mx-2 w-3/4"
            >
              <el-form-item label="Email" class="mb-2 w-1/3 px-2">
                <el-input v-model="user.email" size="medium"></el-input>
              </el-form-item>
              <el-form-item label="Lavozimi" class="mb-2 w-1/3 px-2">
                <el-input v-model="user.position" size="medium"></el-input>
              </el-form-item>
              <el-form-item label="Telefon raqami" class="w-1/3 px-1 mb-2.5">
                <el-input size="medium" v-model="user.phone"></el-input>
              </el-form-item>
              <el-form-item label="Tug'ilgan sana" class="mb-2 w-1/3 px-2">
                <el-date-picker
                  size="medium"
                  format="dd.MM.yyyy"
                  v-model="user.b_day"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="Jinsi" class="mb-2 w-1/3 px-2">
                <el-radio v-model="user.pol" label="erkak">Erkak</el-radio>
                <el-radio v-model="user.pol" label="ayol">Ayol</el-radio>
              </el-form-item>
                <el-form-item class="px-2 w-full">
                  <el-button
                    size="medium"
                    class="border border-blue-600 rounded px-3 text-blue-600"
                    >Saqlash</el-button
                  >
                </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="Xavfsizlik" name="third">
            <div class="w-72">
              <el-form
                label-position="top"
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="120px"
                class="demo-ruleForm"
              >
                <el-form-item label="Eski parol" prop="pass2" class="mb-2.5">
                  <el-input
                    v-model="ruleForm.pass2"
                    autocomplete="off"
                    size="medium"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Yangi parol" prop="pass" class="mb-2.5">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    show-password
                    size="medium"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  label="Yangi parolni takrorlang"
                  prop="checkPass"
                  class="mb-6"
                >
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    show-password
                    size="medium"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >Saqlash</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">Tozalash</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      labelPosition: "top",
      user: {
        img: "../assets/img/avatar.png",
        name: "Ali",
        surname: "Valiyev",
        lastname: "Oybekovich",
        phone: "+99899-000-00-00",
        b_day: "12.12.1990",
        email: "aliValiyev@mail.com",
        position: "Direktor",
        region: "Toshkent shahar",
        district: "Yunusobod tumani",
        dep: "",
        pol: "erkak",
        addres: "Archa mahalla",
      },
      ruleForm: {
        pass: "",
        checkPass: "",
        pass2: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        pass2: [
          {
            required: true,
            message: "error",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
.modal-body {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
  min-height: 70%;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>