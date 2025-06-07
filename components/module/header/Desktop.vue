<template>
    <header class="max-w-[1728px] hidden w-full h-24 rounded-full p-2 font-dana bg-bg-header mobile:flex items-center">
        <div class="w-full flex items-center px-3 justify-between flex-row-reverse">
            <div class="flex items-center gap-x-3 flex-row-reverse">
                <div class="">
                    <img src="/public/images/app-logo.png" alt="logo">
                </div>
                <ul class="hidden mobile:flex items-center gap-x-6 text-white colors-primary flex-row-reverse">
                    <li>صفحه اصلی</li>
                    <li class="relative hover:*:opacity-100">
                        فروشگاه
                        <div
                            class="absolute opacity-0 transition-opacity delay-150 duration-150 w-[180px] rounded-xl bg-white dark:bg-bg-dark-primary left-2/4 right-2/4 transform -translate-x-2/4 -bottom-[230px]">
                            <div class="w-full h-[4px] bg-primary rounded-t-xl"></div>
                            <ul
                                class="text-right dark:*:text-white *:text-sm *:py-1.5 *:cursor-pointer *:hover:text-primary *:text-black p-2 px-3">
                                <li>قهوه ویژه</li>
                                <li>ویژه در سطح جهانی</li>
                                <li>قهوه درجه یک</li>
                                <li>ترکیبات تجاری</li>
                                <li>کپسول قهوه</li>
                                <li>قهوه زینو برزیلی</li>
                            </ul>
                        </div>
                    </li>
                    <li>دیکشنری</li>
                    <li>بلاگ</li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                </ul>
            </div>
            <div class="flex items-center gap-x-10 text-primary">
                <div class="flex items-center cursor-pointer gap-x-1">
                    <p>ورود | ثبت نام</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                </div>
                <div class="flex cursor-pointer text-primary items-center gap-x-3">
                    <div>
                        <DarkMode />
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="js">
import DarkMode from '~/components/DarkMode.vue';
</script>