<template>
  <div class="flex">
    <div class="flex-1">
      <div class="home xl:p-2 mt-2">
        <Home1 />
        <div class="my-6 lg:my-10">
          <apexchart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="px-4 mb-6 lg:mb-10">
          <div class="-mx-1.5 lg:-mx-2 flex">
            <div class="w-1/4 px-1.5 lg:px-2">
              <h1 class="text-xl mb-2">Йиллар бўйича</h1>
              <div class="border border-gray-300 py-1 pl-2 rounded pr-1">
                <div class="h-48 lg:h-72 overflow-y-auto">
                  <ul>
                    <li class="mb-2">
                      <button
                        class="
                          border
                          text-left
                          border-blue-600
                          text-blue-600
                          lg:font-semibold
                          hover:text-white
                          hover:bg-blue-600
                          px-2.5
                          lg:px-3
                          py-1
                          lg:py-1.5
                          rounded
                        "
                      >
                        2021
                      </button>
                      <span class="ml-2">(100)</span>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-1/3 px-1.5 lg:px-2">
              <h1 class="text-xl mb-2">Шакли бўйича</h1>
              <div class="border border-gray-300 py-1 pl-2 rounded pr-1">
                <div class="h-48 lg:h-72 overflow-y-auto">
                  <ul>
                    <li class="mb-2">
                      <button
                        class="
                          border
                          text-left
                          border-blue-600
                          text-blue-600
                          lg:font-semibold
                          hover:text-white
                          hover:bg-blue-600
                          px-2.5
                          lg:px-3
                          py-1
                          lg:py-1.5
                          rounded
                        "
                      >
                        Qonun
                      </button>
                      <span class="ml-2">(100)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-5/12 px-1.5 lg:px-2">
              <h1 class="text-xl mb-2">Департамент бўйича</h1>
              <div class="border border-gray-300 py-1 pl-2 rounded pr-1">
                <div class="h-48 lg:h-72 overflow-y-auto">
                  <ul>
                    <li class="mb-2 items-center flex">
                      <button
                        class="
                          dep
                          text-left
                          border border-blue-600
                          text-blue-600
                          lg:font-semibold
                          hover:text-white
                          hover:bg-blue-600
                          px-2.5
                          lg:px-3
                          py-1
                          lg:py-1.5
                          rounded
                          text-sm
                          lg:text-base
                        "
                      >
                        departament departament departament
                      </button>
                      <span class="ml-2 mr-1">(1000000)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs">
          <el-table
            class="mb-10"
            ref="singleTable"
            :data="malumot"
            highlight-current-row
            style="width: 100%; max-width: 1536px"
          >
            <el-table-column type="index" width="50" fixed> </el-table-column>
            <el-table-column property="docName" label="Ҳужжат номи" min-width="300" fixed>
              <template slot-scope="scope">
                <router-link :to="`/file/${1}`" class="hover:text-blue-700">
                  {{ scope.row.docName }}
                </router-link>
              </template>
            </el-table-column>
            <el-table-column property="docNum" label="Ҳужжат" width="75">
            </el-table-column>
            <el-table-column property="opNum" label="Опись" width="65">
            </el-table-column>
            <el-table-column property="fondNum" label="Фонд" width="65">
            </el-table-column>
            <el-table-column property="krNum" label="Кирим" width="65">
            </el-table-column>
            <el-table-column property="YJNum" label="Йиғмажилд" width="100">
            </el-table-column>
            <el-table-column property="date1" label="Сана" width="100">
            </el-table-column>
            <el-table-column prop="type" label="Ҳолати" width="70">
              <template slot-scope="scope">
                <div
                  class="w-6 h-6 flex items-center justify-center rounded-3xl"
                  :class="[
                    scope.row.type === 'pas' ? 'bg-red-600' : 'bg-green-600',
                  ]"
                >
                  <i
                    class="cursor-pointer text-white"
                    :class="[scope.row.type === 'pas' ? 'ti-close' : 'ti-check']"
                    :title="[
                      scope.row.type === 'pas' ? 'Ўз кучини йўқотган' : 'Амалда',
                    ]"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="lll" label="" width="40">
              <i class="ti-eye cursor-pointer"></i>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home1 from "../components/Home1.vue";
export default {
  name: "Home",
  components: {
    Home1,
  },
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
      series: [
        {
          name: "Қонун",
          data: [44, 55, 41, 67, 22, 43, 21, 49, 41, 15, 22, 43, 49],
        },
        {
          name: "Қарор",
          data: [13, 23, 20, 8, 13, 27, 33, 12, 41, 25, 22, 21, 49],
        },
        {
          name: "Фармон",
          data: [11, 17, 15, 15, 21, 14, 15, 13, 41, 35, 43, 21, 29],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          // stackType: "100%",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: [
            "Тошкент ш",
            "Қорақалпоғистон",
            "Андижон",
            "Бухоро",
            "Жиззах",
            "Қашқадарё",
            "Навоий",
            "Самарқанд",
            "Сурхондарё",
            "Сирдарё",
            "Тошкент",
            "Фарғона",
            "Хоразм",
          ],
        },
        fill: {
          opacity: 1,
        },
        // legend: {
        //   position: "right",
        //   offsetX: 0,
        //   offsetY: 50,
        // },
      },
    };
  },
};
</script>

<style scoped>
.dep {
  max-width: 80%;
}
.tabs{
  width: calc(100vw - 426px);
}
@media screen and (max-width: 1279px) {
  .tabs{
    width: 100vw;
  }
}
</style>
