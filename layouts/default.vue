<template>
    <div>
         <Mobile/>
        <section class="relative mobile:bg-[url(/images/headerBgDesktop.webp)] z-10 px-3  min-h-[25rem] mobile:h-screen pt-5">
            <img src="/images/headerBgMobile.webp" alt="app-logo" class="absolute object-cover top-0 left-0 -z-10 min-h-full mobile:hidden w-full">
            <Header />
        </section>
        <slot />
    </div>
</template>
<script setup lang="js">
import Header from '~/components/Header.vue';
import Mobile from '~/components/module/header/Mobile.vue';
</script>