<template>
    <div class="w-full h-[calc(100%-96px)] flex flex-col  items-center justify-center">
        <Desktop />
        <!-- main header data -->
        <div class="w-full flex mx-auto max-w-[1728px] items-center h-full justify-center sm:justify-start">
            <div class="text-white mt-16 mobile:mt-0 text-right flex items-end justify-end flex-col">
                <h1 class="font-morabba mt-3 text-3xl md:text-5xl mobile:text-7xl">قهوه عربیکا تانزانیا</h1>
                <h6 class="font-morabba-light text-xl md:text-3xl">یک فنجان بالانس !</h6>
                <div class="w-32 h-[2px] my-6 bg-primary"></div>
                <p class="font-dana text-sm md:text-base leading-8 max-w-[300px] md:max-w-[460px] text-right">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های
                    قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
            </div>
        </div>

    </div>
</template>
<script setup lang="js">
import Desktop from './module/header/Desktop.vue';
</script>