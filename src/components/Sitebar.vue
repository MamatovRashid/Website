<template>
  <div
    class="
      bg-white
      fixed
      right-0
      w-72
      2xl:w-80
      h-screen
      top-0
      border-l
      p-6
      pr-0
    "
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
          "
        >
          <i class="ti-upload mr-3"></i>
          Ҳужжатни юклаш
        </button>
      </div>
    </div>
    <div
      class="
        modal
        fixed
        w-full
        h-full
        top-0
        left-0
        bg-black bg-opacity-25
        overflow-y-auto
      "
    >
      <div
        class="
          modal-body
          max-w-4xl
          rounded-md
          border-gray-400 border
          p-6
          bg-white
          m-auto
          my-9
        "
      >
        <div class="modal-head flex flex-row items-center justify-between mb-4">
          <h1 class="text-2xl">Ҳужжат қўшиш</h1>
          <button class="bg-gray-300 rounded-sm w-7 h-7">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm grid grid-cols-12 gap-x-2.5"
          >
            <el-form-item prop="docNum" class="col-span-3">
              <el-input
                size="medium"
                placeholder="Ҳужжат рақами"
                v-model="ruleForm.docNum"
                clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="opNum" class="col-span-3">
              <el-input
                size="medium"
                placeholder="Опись рақами"
                v-model="ruleForm.opNum"
                clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="fondNum" class="col-span-3">
              <el-input
                size="medium"
                placeholder="Фонд рақами"
                v-model="ruleForm.fondNum"
                clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="YJNum" class="col-span-3">
              <el-input
                size="medium"
                placeholder="Йиғмажилд рақами"
                v-model="ruleForm.YJNum"
                clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="docName" class="col-span-6">
              <el-input
                size="medium"
                placeholder="Ҳужжат номи"
                v-model="ruleForm.docName"
                clearable
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="Dep" class="col-span-6">
              <el-select
                clearable
                size="medium"
                v-model="ruleForm.Dep"
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
            </el-form-item>
            <el-form-item prop="type" class="col-span-3">
              <el-select
                clearable
                size="medium"
                v-model="ruleForm.type"
                placeholder="Ҳужжат тури"
                class="w-full"
              >
                <el-option label="тур1" value="тур1"></el-option>
                <el-option label="тури2" value="тури2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="lang" class="col-span-3">
              <el-select
                clearable
                size="medium"
                v-model="ruleForm.lang"
                placeholder="Ҳужжат тили"
                class="w-full"
              >
                <el-option label="Ўзбекча" value="krill"></el-option>
                <el-option label="O'zbekcha" value="uz"></el-option>
                <el-option label="Русский" value="ru"></el-option>
                <el-option label="English" value="en"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="date1" class="col-span-3">
              <el-date-picker
                size="medium"
                type="date"
                placeholder="Қабул қилинган сана"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
            <el-form-item prop="status" class="col-span-3">
              <el-select
                clearable
                size="medium"
                v-model="ruleForm.status"
                placeholder="Ҳужжат ҳолати"
                class="w-full"
              >
                <el-option label="Амалдаги" value="active"></el-option>
                <el-option
                  label="Ўз кучини йўқотган"
                  value="passive"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="sort" class="col-span-6">
              <el-select
                clearable
                size="medium"
                v-model="ruleForm.sort"
                placeholder="Ҳужжат туси"
                class="w-full"
              >
                <el-option label="Ўзбекча" value="krill"></el-option>
                <el-option label="O'zbekcha" value="uz"></el-option>
                <el-option label="Русский" value="ru"></el-option>
                <el-option label="English" value="en"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="vil" class="col-span-6">
              <el-select
                clearable
                size="medium"
                v-model="ruleForm.vil"
                placeholder="Ҳудуд"
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
            </el-form-item>
            <el-form-item prop="text1" class="col-span-12">
              <el-input type="textarea" v-model="ruleForm.text1" clearable placeholder="Ҳужжат аннотацияси"></el-input>
            </el-form-item>
            <div class="flex col-span-9">

            </div>
            <el-form-item class="col-span-3">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Create</el-button
              >
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        docName: "",
        docNum: null,
        opNum: null,
        fondNum: null,
        YJNum: null,
        Dep: "",
        type: "",
        lang: "",
        date1: "",
        status: "",
        sort: "",
        vil: "",
        text1: "",
      },
      rules: {
        docName: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "blur",
          },
        ],
        docNum: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "blur",
          },
        ],
        opNum: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "blur",
          },
        ],
        fondNum: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "blur",
          },
        ],
        YJNum: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "blur",
          },
        ],
        Dep: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        type: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        lang: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        status: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        sort: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        vil: [
          {
            required: true,
            message: "Маълумот киритинг",
            trigger: "change",
          },
        ],
        text1: [
          {
            required: true,
            message: "Маълумот киритинг",
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
          this.$message({
            message: 'Congrats, this is a success message.',
            type: 'success'
          });
          this.resetForm(formName);
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
<style lang="scss" scoped>
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
