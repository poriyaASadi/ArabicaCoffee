<template>
    <footer class="bg-bg-dark-primary p-3 pb-0 xl:p-6 py-14 mt-10">
        <div>
            <ul class="max-w-[1700px] mx-auto gap-y-10 gap-6 text-white grid grid-cols-1 footer:grid-cols-2 xl:grid-cols-3">
                <li>
                    <div class="*:text-right">
                        <div class="font-morabba text-primary2 text-lg">
                            <h3>در تماس باشیم</h3>
                        </div>
                        <p class="flex my-2 flex-row-reverse items-center gap-x-1">
                            <Icon name="fe:location" class="text-primary2 text-lg" />
                            بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                        </p>
                        <div class="flex my-3 items-center *:text-primary2 flex-wrap flex-row-reverse gap-4">
                            <a href="#" class="flex items-center flex-row-reverse gap-x-1">
                                <Icon name="fe:browser" class="text-lg" />
                                info@Coffee.com
                            </a>
                            <p class="flex items-center gap-x-1">
                                0902 123 6628
                                <Icon name="fe:phone" class="text-lg" />
                            </p>
                            <p class="flex items-center !text-white gap-x-1">
                                021 - 6789012
                            </p>
                        </div>
                        <div class="flex flex-col sm-mobile:flex-row items-end sm-mobile:items-center justify-end gap-3 sm:gap-6 mt-6 *:flex *:items-center *:gap-2">
                            <button type="button"
                                class="bg-transparent px-6 cursor-pointer py-1.5 border border-primary2 text-primary2 rounded-full">@golden_coffee
                                <Icon name="fe:instagram" class="text-lg" />
                            </button>
                            <button type="button"
                                class="bg-primary2 cursor-pointer rounded-full text-black px-6 py-1.5">@golden_coffee
                                <Icon name="fe:insert-link" class="text-lg" />
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="text-right text-lg text-primary2 font-morabba">
                        <h3>دسترسی سریع</h3>
                    </div>
                    <div
                        class="grid grid-cols-2 *:text-right *:*:my-1.5 *:*:cursor-pointer *:*:hover:text-primary2 *:*:tracking-tight gap-3">
                        <ul>
                            <li>حریم خصوصی</li>
                            <li>عودت کالا</li>
                            <li>شرایط استفاده</li>
                            <li>ثبت سفارش</li>
                        </ul>
                        <ul>
                            <li>پرسش های متداول</li>
                            <li>فرصت های شغلی</li>
                            <li>ضمانت نامه</li>
                            <li>ارتباط با ما</li>
                        </ul>
                    </div>
                </li>
                <li class="w-full md:col-span-2 xl:col-span-1">
                    <div class="flex flex-col items-end">
                        <div class="flex items-center flex-row-reverse w-full  gap-x-2">
                            <img src="/images/svgs/logo.svg" alt="logo">
                            <img src="/images/svgs/logo-type.svg" alt="logo">
                        </div>
                        <p class="text-right max-w-[800px] mt-3 leading-8">ما برآنیم تا با پیشرو بودن در فرآیند تولید،
                            نوع و کیفیت
                            محصول، خدمات و توزیع، الگویی برای
                            تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم
                            ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="border-t border-slate-400 flex items-center justify-center mt-5">
            <p class="text-slate-300 my-5 font-morabba-light tracking-widest">دیزاین و محتوای این سایت از وب سایت <b class="text-green1">سبزلرن</b> الهام گرفته شده است</p>
        </div>
    </footer>
</template>