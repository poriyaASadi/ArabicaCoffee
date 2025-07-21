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
            <section>
                <div class="flex items-center flex-row-reverse justify-between">
                    <h2 class="text-3xl">مطالب خواندنی</h2>
                    <NuxtLink to="" class="text-primary2 flex items-center cursor-pointer">
                        <Icon name="fe:arrow-left" />
                        مشاهده همه 
                    </NuxtLink>
                </div>
                <div class="mt-6">
                    <ul class="grid grid-cols-1 sm-mobile:grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-2">
                        <li v-for="(item , index) in 4" :key="index" class="bg-slate-100 dark:bg-bg-dark-primary p-2 rounded-lg cursor-pointer">
                            <div>
                                <img :src="`/images/blogs/blog-${index + 1}.png`" class="rounded-lg w-full h-52 object-cover transform hover:rotate-1" alt="poster-blog">
                                <div class="flex items-center flex-row-reverse py-2 justify-between">
                                    <div>
                                        <p class="text-right leading-7 font-morabba-light">یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز</p>
                                    </div>
                                    <div class="flex flex-col gap-y-0.5 px-2 items-center my-2.5 *:text-sm text-green-500 border-r">
                                        <p>2{{index + 1}}</p>
                                        <p>مرداد</p>
                                        <p>140{{index + 1}}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="flex flex-col items-end sm:items-center sm:flex-row-reverse gap-3 mt-10">
                <div>
                    <img src="/images/contact.png" class="max-w-[300px]" alt="contact">
                </div>
                <div class="*:text-right flex flex-col items-end">
                    <h2 class="font-morabba text-2xl">یکی از بهترین قهوه ها</h2>
                    <p class="font-morabba-light my-1">...کیفیت قهوه را از ما بخواهید</p>
                    <p class="my-2">...</p>
                    <p class="leading-7 text-sm">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                    <span class="flex mt-3 items-center w-fit p-2 text-sm  gap-x-1 justify-center border-2 border-primary2 rounded-full text-primary2 cursor-pointer">
                        <Icon name="fe:phone" class="text-lg"/>
                        ثبت سفارش تلفنی
                    </span>
                </div>
            </div>
            <div class="mt-16">
                <ul class="p-2 gap-3 gap-y-6 grid grid-cols-1 sm-mobile:grid-cols-2 lg:grid-cols-4">
                    <li class="w-full flex items-center justify-center">
                        <div class="flex items-center flex-row-reverse gap-3">
                            <img src="../public/images/svgs/services/support.svg" alt="icon">
                            <div class="flex flex-col gap-y-2 text-right">
                                <p class="!text-lg hover:text-primary2 transition-color">اکسسوری قهوه</p>
                                <p class="text-xs">وسایل و ادوات دم آوری</p>
                            </div>
                        </div>
                    </li>
                    <li class="w-full flex items-center justify-center">
                        <div class="flex items-center flex-row-reverse gap-3">
                            <img src="../public/images/svgs/services/pitcher.svg" alt="icon">
                            <div class="flex flex-col gap-y-2 text-right">
                                <p class="!text-lg hover:text-primary2 transition-color">اکسسوری قهوه</p>
                                <p class="text-xs">وسایل و ادوات دم آوری</p>
                            </div>
                        </div>
                    </li>
                    <li class="w-full flex items-center justify-center">
                        <div class="flex items-center flex-row-reverse gap-3">
                            <img src="../public/images/svgs/services/coffee.svg" alt="icon">
                            <div class="flex flex-col gap-y-2 text-right">
                                <p class="!text-lg hover:text-primary2 transition-color">اکسسوری قهوه</p>
                                <p class="text-xs">وسایل و ادوات دم آوری</p>
                            </div>
                        </div>
                    </li>
                    <li class="w-full flex items-center justify-center">
                        <div class="flex items-center flex-row-reverse gap-3">
                            <img src="../public/images/svgs/services/express-delivery.svg" alt="icon">
                            <div class="flex flex-col gap-y-2 text-right">
                                <p class="!text-lg hover:text-primary2 transition-color">اکسسوری قهوه</p>
                                <p class="text-xs">وسایل و ادوات دم آوری</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script setup lang="js">
import TitleBar from '~/components/TitleBar.vue';
import CartProduct from '~/components/CartProduct.vue';
import CartPoster from '~/components/CartPoster.vue';
import Catigory from '~/components/Catigory.vue';
import SliderProduct from '~/components/SliderProduct.vue';
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
