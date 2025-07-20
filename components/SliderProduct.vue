<template>
    <div>
        <div>
            <button @click="swiper.next()">
                Next
            </button>
            <button @click="swiper.prev()">
                Prev
            </button>
        </div>
        <ClientOnly>
            <swiper-container class="w-full h-56 bg-red-100" ref="containerRef" :init="false">
                <swiper-slide
                v-for="(slide , idx) in slides"
                :key="idx"
                class="bg-red-500 w-full  h-10"
                >
                slide {{ idx + 1 }}
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>
</template>
<script lang="js" setup>
 const containerRef = ref(null);
 const slides = ref(Array.from({length : 10}));
 const swiper = useSwiper(containerRef,{
    slidesPerView : 3,
    effect : 'creative',
    loop : true ,
    autoplay : {
        delay : 5000,
    },
    // creativeEffect : {
    //     prev : {
    //         shadow : true,
    //         translate : [0,0,-400]
    //     },
    //     next : {
    //         shadow : true , 
    //         translate : [0,0,-400],
    //     }
    // }
 });

 onMounted(() => {
    console.log(swiper.instance);
 })
</script>
<style lang="css">

</style>