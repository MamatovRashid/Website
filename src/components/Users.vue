<template>
  <div class="fixed w-full h-full z-50 top-0 left-0 overflow-y-auto" v-show="show">
    <div
      class="w-full h-screen fixed z-0 bg-gray-600 opacity-80 cursor-pointer"
      @click="$emit('hide')"
    ></div>
    <div class="container mx-auto my-10 z-10 relative">
      <div
        class="
          bg-gray-200
          flex
          absolute
          right-2
          -top-2
          w-7
          h-7
          justify-center
          items-center
          rounded-full
          cursor-pointer
        "
        @click="$emit('hide')"
      >
        <i class="fas fa-times"></i>
      </div>
      <div class="bg-white p-8 rounded mx-4">
        <div class="mb-6 flex justify-between">
          <h1 class="text-2xl">Userlar</h1>
          <button class="bg-green-600 text-white px-2 rounded">User qo'shish</button>
        </div>
        <div>
          <el-table
            :data="tableData"
            style="width: 100%; padding-bottom: 1px"
            stripe
            border
          >
            <el-table-column fixed type="index" width="50"> </el-table-column>
            <el-table-column fixed label="Rasm" width="80">
              <template slot-scope="scope">
                <div class="w-14 h-14 flex">
                  <img :src="scope.row.rasm" alt="" class="object-contain" />
                </div>
              </template>
            </el-table-column>
            <el-table-column sortable fixed prop="name" label="Ism" width="120">
            </el-table-column>
            <el-table-column
              sortable
              prop="surname"
              label="Familiya"
              width="150"
            >
            </el-table-column>
            <el-table-column
              sortable
              prop="dep"
              label="Departament"
              min-width="250"
            >
            </el-table-column>
            <el-table-column prop="email" label="Email" min-width="250">
            </el-table-column>
            <el-table-column prop="tel" label="Telefon raqami" width="150">
            </el-table-column>
            <el-table-column sortable prop="reg" label="Viloyat" width="230">
            </el-table-column>
            <el-table-column fixed="right" label="Harakat" min-width="150">
              <template>
                <el-button
                  @click="handleClick"
                  type="text"
                  size="small"
                  class="
                    bg-red-500
                    text-white
                    px-2
                    hover:bg-red-600
                    hover:text-white
                    focus:bg-red-600
                    focus:text-white
                    text-base
                    leading-none
                  "
                >
                  <i class="el-icon-delete"></i>
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  class="
                    bg-green-500
                    text-white
                    px-2
                    hover:bg-green-600
                    focus:bg-green-600
                    hover:text-white
                    focus:text-white
                    text-base
                    leading-none
                  "
                >
                  <i class="el-icon-edit"></i>
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  class="
                    bg-blue-500
                    text-white
                    px-2
                    hover:bg-blue-600
                    focus:bg-blue-600
                    focus:text-white
                    hover:text-white
                    text-base
                    leading-none
                  "
                >
                  <i class="el-icon-view"></i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
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
  methods: {
    handleClick() {
      console.log("click");
    },
  },
  data() {
    return {
      tableData: [
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Ali",
          surname: "Valiyev",
          dep: "Davlat soliq qo'mitasi ",
          email: "alivaliyev@mail.com",
          tel: "+99899-000-00-00",
          reg: "Toshkent shahar",
        },
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Ali",
          surname: "Valiyev",
          dep: "Davlat soliq qo'mitasi ",
          email: "alivaliyev@mail.com",
          tel: "+99899-000-00-00",
          reg: "Toshkent shahar",
        },
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Ali",
          surname: "Valiyev",
          dep: "Davlat soliq qo'mitasi ",
          email: "alivaliyev@mail.com",
          tel: "+99899-000-00-00",
          reg: "Toshkent shahar",
        },
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Ali",
          surname: "Valiyev",
          dep: "Davlat soliq qo'mitasi ",
          email: "alivaliyev@mail.com",
          tel: "+99899-000-00-00",
          reg: "Toshkent shahar",
        },
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Ali",
          surname: "Valiyev",
          dep: "Davlat soliq qo'mitasi ",
          email: "alivaliyev@mail.com",
          tel: "+99899-000-00-00",
          reg: "Toshkent shahar",
        },
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Ali",
          surname: "Valiyev",
          dep: "Davlat soliq qo'mitasi ",
          email: "alivaliyev@mail.com",
          tel: "+99899-000-00-00",
          reg: "Toshkent shahar",
        },
        {
          rasm: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
          name: "Begzod",
          surname: "Axmedov",
          dep: "O'zbekiston fanlar akademiyasi",
          email: "begzodaxmedov@mail.com",
          tel: "+99899-111-10-00",
          reg: "Xorazim viloyati",
        },
        {
          rasm: "https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg",
          name: "Muhammadshernazar",
          surname: "Davlatov",
          dep: "O'zbekiston axborot agentligi",
          email: "sherzoddavlatov@mail.com",
          tel: "+99899-000-00-00",
          reg: "Qoraqalpog'iston Raspublikasi",
        },
        {
          rasm: "https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172455/2B8_5801.jpg",
          name: "Marjona",
          surname: "G'afforova",
          dep: "O'zbekiston axborot agentligi",
          email: "marjonagaffarova@mail.com",
          tel: "+99899-000-00-00",
          reg: "Sirdaryo viloyati",
        },
        {
          rasm: "https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg",
          name: "Sherzod",
          surname: "Davlatov",
          dep: "O'zbekiston axborot agentligi",
          email: "sherzoddavlatov@mail.com",
          tel: "+99899-000-00-00",
          reg: "Qoraqalpog'iston Raspublikasi",
        },
        {
          rasm: "https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172455/2B8_5801.jpg",
          name: "Marjona",
          surname: "G'afforova",
          dep: "O'zbekiston axborot agentligi",
          email: "marjonagaffarova@mail.com",
          tel: "+99899-000-00-00",
          reg: "Sirdaryo viloyati",
        },
      ],
    };
  },
};
</script>
<style scoped>
.aa {
  height: 3000px;
}
</style>