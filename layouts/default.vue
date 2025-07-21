<template>
    <div class="bg-white dark:bg-[#27272A]">
        <Mobile />
         <section
            class="relative mobile:bg-[url(/images/headerBgDesktop.webp)] bg-no-repeat z-10 px-3  min-h-[25rem] mobile:h-screen pt-5">
            <img src="/images/headerBgMobile.webp" alt="app-logo"
                class="absolute object-cover top-0 left-0 -z-10 min-h-full mobile:hidden w-full">
            <Header />
            <div class="absolute cursor-pointer -bottom-4 right-1/2 left-1/2 transform -translate-x-1/2">
                <div
                    class="w-8 mobile:w-10 mobile:h-10 flex relative items-center justify-center h-8 border-2 border-primary2  rounded-full dark:bg-bg-dark-primary bg-white">
                    <div class="animate-ping absolute left-1/2 right-1/2 w-8 h-8 mobile:w-10 mobile:h-10 -translate-x-1/2 rounded-full border-2 border-primary2"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-6 text-primary2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
         </section>
        <slot />
        <Footer/>
    </div>
</template>
<script setup lang="js">
import Header from '~/components/Header.vue';
import Footer from '~/components/module/footer/Footer.vue';
import Mobile from '~/components/module/header/Mobile.vue';
</script>