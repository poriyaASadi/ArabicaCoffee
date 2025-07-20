<script lang="ts" setup>
import CartProduct from '~/components/CartProduct.vue'
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
    slidesPerView : 1,
    spaceBetween : 7,
          breakpoints: {
                // When window width is >= 768px
                400: {
                    slidesPerView: 2,
                },
                738 : {
                    slidesPerView : 3,
                },
                // When window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                },
            },
    effect: 'creative',
    loop: true,
    autoplay: {
        delay: 5000,
    }
});

onMounted(() => {
    console.log(swiper.instance);
})
</script>
<template>
    <div>
        <div class="flex items-center my-6 mt-16 justify-between flex-row-reverse">
            <div class="flex flex-col gap-y-1.5 items-end">
                <h2 class="text-3xl">پیشنهاد این هفته</h2>
                <p class="text-sm">...پیشنهاد قهوه خور ها</p>
            </div>
            <div
                class="flex items-center *:p-3 *:bg-primary2 dark:*:bg-bg-dark-primary gap-3 *:flex *:items-center *:justify-center *:rounded-full *:shadow-md *:cursor-pointer">
                <button @click="swiper?.prev()">
                    <Icon name="fe:arrow-left" class="text-xl" />
                </button>
                <button @click="swiper?.next()">
                    <Icon name="fe:arrow-right" class="text-xl" />
                </button>
            </div>
        </div>
        <ClientOnly>
            <swiper-container class="w-full  h-auto" ref="containerRef">
                <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="w-full flex my-3 items-center justify-center mx-auto h-auto">
                    <CartProduct image="/images/products/p5.png" />
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>
</template>
<style lang="css"></style>