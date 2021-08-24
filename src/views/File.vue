<template>
    <div class="file">
        <Sitebar/>
        <div class="flex p-3">
            <div class="w-1/3 px-3">
                <div class="border border-gray-400 p-3 pr-0.5 rounded">
                    <div class="h-screen overflow-y-auto pr-2">
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Ҳужжат номи:</h1>
                            <p class="text-blue-900 font-semibold" >Тижорат банкларида жиноий фаолиятдан олинган даромадларни легаллаштиришга, терроризмни молиялаштиришга ва оммавий қирғин қуролини тарқатишни молиялаштиришга қарши курашиш бўйича ички назорат қоидаларига қўшимча ва ўзгартиришлар киритиш ҳақида</p>
                        </div>
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Шакли:</h1>
                            <p class="text-blue-900 font-semibold" >Қарор</p>
                        </div>
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Департамент:</h1>
                            <p class="text-blue-900 font-semibold" >Ахборот-коммуникация технологиялари департаменти</p>
                        </div>
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Ҳужжат рақами:</h1>
                            <p class="text-blue-900 font-semibold" >2886-7</p>
                        </div>
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Опись рақами:</h1>
                            <p class="text-blue-900 font-semibold" >S026</p>
                        </div>
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Фонд рақами:</h1>
                            <p class="text-blue-900 font-semibold" >153</p>
                        </div>
                        <div class="pb-4 mb-4 border-b border-gray-400">
                            <h1 class="text-xl font-medium mb-1">Қабул қилинган санаси:</h1>
                            <p class="text-blue-900 font-semibold" >08.07.2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-2/3 px-3">
                <embed src="/lll.pdf" style="width: 100%; height: 100%;"  type="application/pdf">
            </div>
        </div>
    </div>
</template>
<script>
import Sitebar from '../components/Sitebar.vue'
import pdf from 'vue-pdf'
export default {
    name: 'File',
    components: {
        Sitebar,
        pdf
    }
}
</script>
<style scoped>
    .file{
        padding-right: 300px;
    }
</style>