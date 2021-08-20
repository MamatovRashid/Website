<template>
    <div class="left fixed w-28 h-screen left-0 top-0 flex flex-col">
        <div class="logo text-center h-20 flex justify-center items-center">
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="logo">
            </router-link>
        </div>
        <ul class="flex flex-col flex-1 px-2.5">
            <li class="mb-2">
                <router-link to="/doc" class="flex flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                    <i class="ti-file text-2xl"></i>
                    <span class="mt-1.5">Ҳужжатлар</span>
                </router-link>
            </li>
            <li class="mb-2">
                <router-link to="/doc" class="flex flex-col items-center py-4 rounded-md text-white opacity-90 hover:opacity-100 hover:bg-opacity-20 hover:bg-white">
                    <i class="ti-settings text-2xl"></i>
                    <span class="mt-1.5">Созламалар</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Navigation',
    components: {
    }
}
</script>

<style lang="scss" scoped>
    .left{
        background: #0062ff;
    }
    li:nth-last-child(2){
        flex-grow: 1;
    }
</style>