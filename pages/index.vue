<template>
    <div class=" overflow-hidden dark:text-white pt-20 mobile:pt-40 z-10 relative font-dana">
        <img src="/images/body-bg.png" alt="body-png" class="absolute opacity-15 -z-10 left-0 top-0">
        <section class="max-w-[1100px]  mobile:p-3 rounded-md px-2 mobile:px-6 mx-auto">
            <TitleBar />
            <ul
                class="grid sm-mobile:grid-cols-2 *:mx-auto justify-center items-center gap-4 sm:grid-cols-3 mobile:grid-cols-4 ">
                <li v-for="(item, index) in 8" :key="index">
                    <CartProduct image="/images/products/p3.png" />
                </li>
            </ul>
            <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <li v-for="(item, index) in 2" :key="index">
                    <CartPoster :image="dataPoster[index].image" :title="dataPoster[index].title"
                        :description="dataPoster[index].description" />
                </li>
            </ul>
            <ul class="flex items-center my-4 sm-mobile:my-6 ga-2 sm-mobile:gap-3 flex-wrap justify-center">
                <li v-for="(item, index) in 5" :key="index">
                    <Catigory :image="dataCategory[index].image" :title="dataCategory[index].title" />
                </li>
            </ul>
            <section>
                <SliderProduct />
            </section>
            <section>
                <div class="my-10">
                    <ul class="flex p-3 gap-3 flex-col  sm-mobile:px-6 rounded-md items-center bg-green1 justify-between sm:flex-row-reverse">
                        <li class="w-full">
                            <div class="flex items-center justify-center gap-3 flex-row-reverse">
                                <img src="/images/club/diamond.png" alt="diamond">
                                <div class="flex flex-col gap-y-3 items-end">
                                    <h2 class="dark:text-white font-morabba text-3xl text-white">کافی کلاب</h2>
                                    <p class="font-morabba-light text-right text-white">میدونستی میتونی با امتیازهات قهوه بگیری؟</p>
                                </div>
                            </div>
                        </li>
                        <li class="flex items-center flex-row-reverse w-full justify-center gap-3">
                            <div class="flex items-center justify-center gap-3 *:h-14 *:flex *:justify-center *:items-center *:w-14 *:rounded-lg *:bg-white">
                                <div><img src="/images/club/Ticket-Star.svg" alt=""/></div>
                                <div><img src="/images/club/Activity.svg" alt=""></div>
                                <div><img src="/images/club/Discovery.svg" alt=""></div>
                            </div>
                              <div class="flex flex-col items-center *:text-white justify-center gap-1">
                                <span class="text-2xl">543</span>
                                <p class="font-morabba-light">امتیاز شما</p>
                                <button class="flex items-center bg-primary2 text-sm md:text-base text-white p-2 rounded-full cursor-pointer">
                                    <Icon name="fe:arrow-left" class="" />
                                    دریافت جایزه
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            
        </section>
    </div>
</template>
<script setup lang="js">
import TitleBar from '~/components/TitleBar.vue';
import CartProduct from '~/components/CartProduct.vue';
import CartPoster from '~/components/CartPoster.vue';
import Catigory from '~/components/Catigory.vue';
import SliderProduct from '~/components/SliderProduct.vue'
// posters Data 
const dataPoster = ref([
    {
        image: '/images/categories/category-left.jpg',
        title: 'انواع قهوه',
        description: 'ترکیبی و تک خاستگاه',
    },
    {
        image: '/images/categories/category-right.jpg',
        title: 'پودر های فوری',
        description: 'نسکافه  , هات چاکلت  , ماسالا',
    }
]);
const dataCategory = ref([
    {
        image: '/images/categories/category1.png',
        title: 'قهوه دمی و اسپرسو'
    },
    {
        image: '/images/categories/category2.png',
        title: 'لوازم جانبی و تجهیزات'
    },
    {
        image: '/images/categories/category3.png',
        title: 'اسپرسو ساز'
    },
    {
        image: '/images/categories/category4.png',
        title: 'پک تستر قهوه'
    },
    {
        image: '/images/categories/category5.png',
        title: 'قهوه ترک'
    },
])
</script>
