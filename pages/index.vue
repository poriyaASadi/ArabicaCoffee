<template>
    <div class=" overflow-hidden dark:text-white pt-20 mobile:pt-40 z-10 relative font-dana">
        <img src="/images/body-bg.png" alt="body-png" class="absolute opacity-15 -z-10 left-0 top-0">
        <section class="max-w-[1100px]  mobile:p-3 rounded-md px-2 mobile:px-6 mx-auto">
            <TitleBar />
            <ul
                class="grid sm-mobile:grid-cols-2 *:mx-auto justify-center items-center gap-4 sm:grid-cols-3 mobile:grid-cols-4 ">
                <li v-for="(item, index) in 8" :key="index">
                    <CartProduct />
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
                <SliderProduct/>
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
