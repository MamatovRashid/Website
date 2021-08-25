<template>
  <div
    v-show="show"
    class="
      modal
      fixed
      z-50
      w-full
      h-full
      top-0
      left-0
      overflow-y-auto
    "
  >
    <div class="bg-black bg-opacity-25 w-full h-full absolute" @click="$emit('hide'), resetForm('ruleForm')"></div>
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
        relative
        z-10
      "
    >
      <div class="modal-head flex flex-row items-center justify-between mb-4">
        <h1 class="text-2xl">Ҳужжат қўшиш</h1>
        <button
          class="bg-gray-300 rounded-sm w-7 h-7"
          @click="$emit('hide'), resetForm('ruleForm')"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-main">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm grid grid-cols-12 gap-x-4 gap-y-4"
        >
          <el-form-item size="medium" prop="docNum" class="mb-0 col-span-3">
            <el-input
              placeholder="Ҳужжат рақами"
              v-model="ruleForm.docNum"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item size="medium" prop="opNum" class="mb-0 col-span-3">
            <el-input
              placeholder="Опись рақами"
              v-model="ruleForm.opNum"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item size="medium" prop="fondNum" class="mb-0 col-span-3">
            <el-input
              placeholder="Фонд рақами"
              v-model="ruleForm.fondNum"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item size="medium" prop="YJNum" class="mb-0 col-span-3">
            <el-input
              placeholder="Йиғмажилд рақами"
              v-model="ruleForm.YJNum"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item size="medium" prop="krNum" class="mb-0 col-span-3">
            <el-input
              placeholder="Кирим рақами"
              v-model="ruleForm.krNum"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item size="medium" prop="Dep" class="mb-0 col-span-4">
            <el-cascader
              v-model="ruleForm.Dep"
              :show-all-levels="false"
              :options="options"
              :props="props"
              placeholder="Департаментлар"
              class="w-full"
              collapse-tags
              clearable
            ></el-cascader>
          </el-form-item>

          <el-form-item size="medium" prop="docName" class="mb-0 col-span-5">
            <el-input
              placeholder="Ҳужжат номи"
              v-model="ruleForm.docName"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item size="medium" prop="type" class="mb-0 col-span-3">
            <el-select
              clearable
              v-model="ruleForm.type"
              placeholder="Ҳужжат тури"
              class="w-full"
            >
              <el-option label="тур1" value="тур1"></el-option>
              <el-option label="тури2" value="тури2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item size="medium" prop="lang" class="mb-0 col-span-3">
            <el-select
              clearable
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

          <el-form-item size="medium" prop="date1" class="mb-0 col-span-3">
            <el-date-picker
              type="date"
              placeholder="Қабул қилинган сана"
              v-model="ruleForm.date1"
              format="dd.MM.yyyy"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>

          <el-form-item size="medium" prop="status" class="mb-0 col-span-3">
            <el-select
              clearable
              v-model="ruleForm.status"
              placeholder="Ҳужжат ҳолати"
              class="w-full"
            >
              <el-option label="Амалдаги" value="active"></el-option>
              <el-option label="Ўз кучини йўқотган" value="passive"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item size="medium" prop="sort" class="mb-0 col-span-6">
            <el-select
              clearable
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

          <el-form-item size="medium" prop="vil" class="mb-0 col-span-6">
            <el-select
              clearable
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

          <el-form-item size="medium" prop="text1" class="mb-0 col-span-12">
            <el-input
              type="textarea"
              v-model="ruleForm.text1"
              clearable
              placeholder="Ҳужжат аннотацияси"
            ></el-input>
          </el-form-item>
          <el-form-item class="flex mb-0 col-span-8">
            <el-upload
              class="upload-demo flex items-center"
              :limit="1"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >Файл танланг</el-button
              >
            </el-upload>
          </el-form-item>

          <el-form-item size="medium" class="mb-0 col-span-4">
            <el-button
              type="primary"
              class="bg-blue-700"
              @click="submitForm('ruleForm')"
              >Ҳужжат қўшиш</el-button
            >
            <el-button @click="resetForm('ruleForm')">Тозалаш</el-button>
          </el-form-item>
        </el-form>
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
    return {
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "Департамент1",
          children: [
            {
              value: 2,
              label: "Бошқарма1.1",
            },
            {
              value: 6,
              label: "Бошқарма1.2",
            },
            {
              value: 10,
              label: "Бошқарма1.3",
            },
          ],
        },
        {
          value: 14,
          label: "Департамент2",
          children: [
            {
              value: 15,
              label: "Бошқарма2.1",
            },
            {
              value: 19,
              label: "Бошқарма2.2",
            },
          ],
        },
        {
          value: 23,
          label: "Департамент3",
        },
      ],
      ruleForm: {
        docName: "",
        docNum: "",
        opNum: "",
        fondNum: "",
        YJNum: "",
        krNum: "",
        Dep: "",
        type: "",
        lang: "",
        date1: "",
        status: "",
        sort: "",
        vil: "",
        text1: "",
        file: "",
      },
      rules: {
        file: [
          {
            required: true,
            message: "File киритинг",
            trigger: "blur",
          },
        ],
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
        krNum: [
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
            trigger: "select",
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
          this.$refs.upload.submit();
          this.$notify({
            title: "Qo'shildi",
            message: "Ma'lumot muaffaqiyatli qo'shildi",
            type: "success",
          });
          this.resetForm(formName);
          this.$emit("hide");
        } else {
            this.$notify.error({
            title: "Error",
            message: "Ma'lumotni to'liq kiriting",
          });
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
  },
};
</script>
<style>
.el-form-item__error {
  padding-top: 0;
}

.modal-body {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
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