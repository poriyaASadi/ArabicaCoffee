<template>
    <div class=" overflow-hidden dark:text-white pt-20 mobile:pt-40 z-10 relative font-dana">
        <img src="/images/body-bg.png" alt="body-png" class="absolute opacity-15 -z-10 left-0 top-0">
        <section class="max-w-[1100px]  mobile:p-3 rounded-md px-2 mobile:px-6 mx-auto">
            <TitleBar />
            <ul class="grid sm-mobile:grid-cols-2 *:mx-auto justify-center items-center gap-4 sm:grid-cols-3 mobile:grid-cols-4 ">
                <li v-for="(item, index) in 8" :key="index">
                    <CartProduct />
                </li>
            </ul>
        </section>
    </div>
</template>
<script setup lang="js">
import TitleBar from '~/components/TitleBar.vue';
import CartProduct from '~/components/CartProduct.vue';
</script>
