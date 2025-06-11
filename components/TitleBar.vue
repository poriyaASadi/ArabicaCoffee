<template>
    <div>
        <section class="w-full flex items-center p-3 justify-between flex-row-reverse">
            <div class="flex flex-col gap-y-2 text-right">
                <h2 class="text-xl mobile:text-3xl font-morabba text-primary2">جدیدترین محصولات</h2>
                <p class="text-xs">فرآوری شده از دانه قهوه</p>
            </div>
            <div>
                <NuxtLink to="/all-category" class="flex items-center text-primary2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    مشاهده همه
                </NuxtLink>
            </div>
        </section>
    </div>
</template>