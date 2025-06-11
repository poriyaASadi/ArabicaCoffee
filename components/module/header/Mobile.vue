<template>
    <div class="!overflow-x-hidden">
    <header class="w-full relative mobile:hidden bg-white dark:bg-bg-dark-primary p-3 px-4 flex items-center justify-between flex-row-reverse">
        <div @click="switchSideBar" class="dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-7 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <div>
            <img src="/public/images/svgs/app-logo-type.svg" alt="app-logo">
        </div>
        <div class="dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-7 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </div>
    </header>
       <Sidebar :isShow="showSide" v-model:isShow="showSide" />
       <div v-if="showSide" @click.self="switchSideBar" class="absolute cursor-pointer top-0 left-0 w-full h-full rgba-linear-dark z-20"></div>
    </div>
</template>
<script setup lang="js">
import Sidebar from './Sidebar.vue';
const showSide = ref(false);
function switchSideBar() {
  showSide.value = !showSide.value;
}
watch(showSide, (newVal) => {
  if (newVal) {
    document.body.style.overflowY = 'hidden'; // اسکرول y غیرفعال
  } else {
    document.body.style.overflowY = ''; // اسکرول به حالت پیش‌فرض برگردد
  }
});
</script>