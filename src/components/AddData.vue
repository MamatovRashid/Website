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
      <div class="modal-main">
          <div>
              <div>
                <h1>Департаментлар</h1>
              </div>
              <div>
                  
              </div>
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
      default: true,
    },
  },
  data() {
    return {
        
    }
  },
  methods: {

  },
};
</script>
<style scoped>

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