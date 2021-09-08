<template>
  <div class="container mx-auto my-10 user2">
    <el-form ref="form" class="-mx-4 flex flex-wrap" :model="form" label-width="120px" label-position="top">
      <el-form-item label="Lavozim nomi" class="w-1/2 px-4">
        <el-input size="medium" v-model="form.lavoz" placeholder="Lavozim nomini kiriting"></el-input>
      </el-form-item>
      <el-form-item label="Lavozim nomi" class="w-1/2 px-4">
        <el-select class="w-full" size="medium" v-model="form.locat" placeholder="Respublika uchun lavozim">
            <el-option label="Respublika" value="1"></el-option>
            <el-option label="Viloyat" value="2"></el-option>
            <el-option label="Tuman" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="px-4 mb-0 mt-6">
        <el-button class="bg-blue-600 hover:bg-blue-700 focus:bg-blue-600 hover:text-white focus:text-white text-white">Bekor qilish</el-button>
        <el-button class="bg-green-600 hover:bg-green-700 focus:bg-green-600 hover:text-white focus:text-white text-white">Saqlash</el-button>
      </el-form-item>
    </el-form>
    <div class="mt-10">
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column fixed label="№" type="index" width="50">
        </el-table-column>
        <el-table-column prop="name" label="Harakat nomi" sortable> </el-table-column>
        <el-table-column label="Yaratish" width="180">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.a"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Ko'rish" width="180">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.b"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="O'zgartirish" width="180">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.c"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="O'chirish" width="180">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.d"></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Mulk egalari qo'shish",
          a: false,
          b: false,
          c: false,
          d: false,
        },
        {
          name: "Mulk egalari qo'shish",
          a: false,
          b: false,
          c: false,
          d: false,
        },
        {
          name: "Mulk egalari qo'shish",
          a: false,
          b: false,
          c: false,
          d: false,
        },
        {
          name: "Mulk egalari qo'shish",
          a: false,
          b: false,
          c: false,
          d: false,
        },
        {
          name: "Mulk egalari qo'shish",
          a: false,
          b: false,
          c: false,
          d: false,
        },
        {
          name: "Mulk egalari qo'shish",
          a: false,
          b: false,
          c: false,
          d: false,
        },
      ],
      form: {
          lavoz: "",
          locat: ""

      }
    };
  },
};
</script>