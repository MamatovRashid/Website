<template>
  <div
    v-show="show"
    class="modal fixed z-50 w-full h-full top-0 left-0 overflow-y-auto"
  >
    <div
      class="bg-black bg-opacity-25 min-w-full min-h-screen absolute"
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
        <h1 class="text-2xl">Маълумот қўшиш</h1>
        <button
          class="bg-gray-300 rounded-sm w-7 h-7"
          @click="$emit('hide'), resetForm('ruleForm')"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-main flex">
        <div class="w-1/2 pr-3">
          <el-collapse accordion>
            <el-collapse-item name="1">
              <template slot="title">
                <div class="flex items-center">
                  <h1 class="text-lg">Департаментлар</h1>
                  <button class="ml-3 flex">
                    <i class="el-icon-folder-add text-lg"></i>
                  </button>
                </div>
              </template>
              <div class="flex">
                <div class="border py-3 pl-3 pr-0.5">
                  <div class="h-32 overflow-y-auto">
                    <ul class="pr-2">
                      <li
                        class="py-1"
                        v-for="(deps, index) in options"
                        :key="index"
                      >
                        <div class="flex items-center mb-1">
                          <h1 class="text-base mr-3">
                            <i
                              @click="deps.depshow = !deps.depshow"
                              class="text-lg cursor-pointer"
                              :class="
                                deps.depshow
                                  ? 'el-icon-folder'
                                  : 'el-icon-folder-opened'
                              "
                            ></i>
                            {{ deps.label }}
                          </h1>
                          <button class="mr-3">
                            <i class="el-icon-edit text-lg"></i>
                          </button>
                          <el-popconfirm
                            confirm-button-text="Ha"
                            cancel-button-text="Yo'q"
                            icon="el-icon-info"
                            icon-color="red"
                            title="Ushbu ma'lumotni o'chirmoqchimisiz?"
                          >
                            <button class="mr-3" slot="reference">
                              <i class="el-icon-delete text-lg"></i>
                            </button>
                          </el-popconfirm>
                          <button>
                            <i class="el-icon-folder-add text-lg"></i>
                          </button>
                        </div>
                        <div v-show="!deps.depshow">
                          <ul class="pr-2">
                            <li
                              class="py-1 flex ml-5 border-t"
                              v-for="(ded, index) in deps.children"
                              :key="index"
                            >
                              <h1 class="text-base mr-3 flex-1">
                                {{ ded.label }}
                              </h1>
                              <button class="mr-3">
                                <i class="el-icon-edit text-lg"></i>
                              </button>
                              <el-popconfirm
                                confirm-button-text="Ha"
                                cancel-button-text="Yo'q"
                                icon="el-icon-info"
                                icon-color="red"
                                title="Ushbu ma'lumotni o'chirmoqchimisiz?"
                              >
                                <button class="mr-3" slot="reference">
                                  <i class="el-icon-delete text-lg"></i>
                                </button>
                              </el-popconfirm>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <div class="flex">
                  <h1 class="text-lg">{{ docNum.name }}</h1>
                  <button class="ml-3 flex">
                    <i class="el-icon-folder-add text-lg"></i>
                  </button>
                </div>
              </template>
              <div class="flex">
                <div class="border py-3 pl-3 pr-0.5">
                  <div class="h-36 overflow-y-auto">
                    <ul class="pr-2">
                      <li
                        class="py-1"
                        v-for="(num, index) in docNum.docNum1"
                        :key="index"
                      >
                        <div class="flex items-center">
                          <h1 class="text-base mr-3 flex-1">
                            {{ num.label }}
                          </h1>
                          <button class="mr-3">
                            <i class="el-icon-edit text-lg"></i>
                          </button>
                          <el-popconfirm
                            confirm-button-text="Ha"
                            cancel-button-text="Yo'q"
                            icon="el-icon-info"
                            icon-color="red"
                            title="Ushbu ma'lumotni o'chirmoqchimisiz?"
                          >
                            <button class="mr-3" slot="reference">
                              <i class="el-icon-delete text-lg"></i>
                            </button>
                          </el-popconfirm>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title">
                <div class="flex items-center">
                  <h1 class="text-lg">Опись рақами</h1>
                  <button class="ml-3 flex">
                    <i class="el-icon-folder-add text-lg"></i>
                  </button>
                </div>
              </template>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template slot="title">
                <div class="flex items-center">
                  <h1 class="text-lg">Фонд рақами</h1>
                  <button class="ml-3 flex">
                    <i class="el-icon-folder-add text-lg"></i>
                  </button>
                </div>
              </template>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="w-1/2 pl-3">
          <el-collapse accordion>
            <el-collapse-item name="5">
              <template slot="title">
                <div class="flex items-center">
                  <h1 class="text-lg">Ҳужжат тили</h1>
                  <button class="ml-3 flex">
                    <i class="el-icon-folder-add text-lg"></i>
                  </button>
                </div>
              </template>
            </el-collapse-item>
          </el-collapse>
        </div>
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
      options: [
        {
          value: 1,
          depshow: true,
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
          depshow: true,
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
          depshow: true,
          label: "Департамент3",
        },
      ],
      docNum: {
        name: "Ҳужжат рақами",
        docNum1: [
          {
            value: 1,
            label: "S191",
          },
          {
            value: 2,
            label: "A12100",
          },
          {
            value: 3,
            label: "D233",
          },
          {
            value: 3,
            label: "D233",
          },
          {
            value: 3,
            label: "D233",
          },
          {
            value: 3,
            label: "D233",
          },
        ],
      },
    };
  },
  methods: {},
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