<template>
  <div class="doc px-6">
    <div class="mt-4 mb-8">
      <el-dropdown>
        <el-button
          size="medium"
          class="
            mr-2
            font-semibold
            text-black
            border-gray-400
            hover:bg-gray-300
            hover:text-black
            hover:border-gray-300
            focus:bg-gray-50
            focus:border-gray-400
            focus:text-black
          "
        >
          Йил бўйича<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <div class="max-h-80 overflow-y-auto">
            <el-dropdown-item>2021</el-dropdown-item>
            <el-dropdown-item>2020</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button
          size="medium"
          class="
            mr-2
            font-semibold
            text-black
            border-gray-400
            hover:bg-gray-300
            hover:text-black
            hover:border-gray-300
            focus:bg-gray-50
            focus:border-gray-400
            focus:text-black
          "
        >
          Йил бўйича<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="px-1">
          <div class="h-80 overflow-y-auto">
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
            <el-dropdown-item
              >СУДЛАР ВА ҲУҚУҚНИ МУҲОФАЗА ҚИЛУВЧИ ОРГАНЛАР</el-dropdown-item
            >
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-table
      ref="singleTable"
      :data="malumot"
      highlight-current-row
      style="width: 100%; max-width: 1500px"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column property="docName" label="Ҳужжат номи">
        <template slot-scope="scope">
          <router-link :to="`/file/${1}`" class="hover:text-blue-700">
            {{ scope.row.docName }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column property="docNum" label="Ҳужжат" width="100" sortable>
      </el-table-column>
      <el-table-column property="opNum" label="Опись" width="90" sortable>
      </el-table-column>
      <el-table-column property="fondNum" label="Фонд" width="85" sortable>
      </el-table-column>
      <el-table-column property="krNum" label="Кирим" width="95" sortable>
      </el-table-column>
      <el-table-column property="YJNum" label="Йиғмажилд" width="125" sortable>
      </el-table-column>
      <el-table-column property="date1" label="Сана" width="100">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Ҳолати"
        width="85"
        :filters="[
          { text: 'Амалдагилар', value: 'active' },
          { text: 'Ўз кучини йўқотганлар', value: 'pas' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p
              v-html="
                scope.row.type === 'pas' ? 'Ўз кучини йўқотган' : 'Амалда'
              "
            ></p>
            <div
              slot="reference"
              class="
                name-wrapper
                w-6
                h-6
                flex
                items-center
                justify-center
                rounded-3xl
              "
              :class="[
                scope.row.type === 'pas' ? 'bg-red-600' : 'bg-green-600',
              ]"
            >
              <i
                class="cursor-pointer text-white"
                :class="[scope.row.type === 'pas' ? 'ti-close' : 'ti-check']"
              ></i>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column property="lll" label="" width="40">
        <i class="ti-eye cursor-pointer"></i>
      </el-table-column>
    </el-table>
    <div class="my-6 flex justify-end">
      <el-pagination background layout="prev, pager, next" :total="20">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Documents",
  data() {
    return {
      malumot: [
        {
          docName:
            "«Коронавирус пандемияси ва глобал инқироз ҳолатларининг иқтисодиёт тармоқларига салбий таъсирини юмшатиш бўйича чора-тадбирлар қабул қилинганлиги муносабати билан Ўзбекистон Республикасининг айрим қонун ҳужжатларига ўзгартиш ва қўшимчалар киритиш тўғрисида»ги Ўзбекистон Республикаси Қонуни ҳақида",
          docNum: "S323",
          opNum: "990",
          fondNum: "123",
          YJNum: "345",
          krNum: "121",
          date1: "12.12.2021",
          type: "active",
          ll: "ss",
        },
        {
          docName:
            "Вазирлар Маҳкамасининг «Давлат ва хўжалик бошқаруви органлари, маҳаллий давлат ҳокимияти органлари ва бошқа ташкилотларда енгил хизмат автомашиналаридан фойдаланишни янада тартибга солиш чора-тадбирлари тўғрисида» 2011 йил 26 майдаги 153-сон қарорига ўзгартириш киритиш ҳақида",
          docNum: "S321",
          opNum: "980",
          fondNum: "123",
          YJNum: "345",
          krNum: "111",
          date1: "11.12.2021",
          type: "pas",
          ll: "ss",
        },
        {
          docName:
            "Вазирлар Маҳкамасининг 2017 йил 4 октябрдаги 795-сон қарори билан тасдиқланган Хизматчиларнинг асосий лавозимлари ва ишчилар касблари классификаторининг 2-иловасига ўзгартириш ва қўшимчалар киритиш тўғрисида",
          docNum: "A323",
          opNum: "991",
          fondNum: "123",
          YJNum: "345",
          krNum: "101",
          date1: "13.12.2021",
          type: "active",
          ll: "ss",
        },
        {
          docName:
            "Тошкент вилоятининг Бўстонлиқ туманида тажриба тариқасида жисмоний шахсларнинг солиқ солиш объектлари ҳисобга қўйилганлиги тўғрисида гувоҳнома бериш, ягона электрон платформани юритиш ва унга кўчмас мулк объектлари ижарага берилганлиги тўғрисидаги маълумотларни киритиш тартиби ҳақида вақтинчалик низомни тасдиқлаш тўғрисида",
          docNum: "S373",
          opNum: "990",
          fondNum: "123",
          YJNum: "345",
          krNum: "122",
          date1: "12.12.2020",
          type: "active",
          ll: "ss",
        },
      ],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      return row.type === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style lang="scss">
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
</style>
