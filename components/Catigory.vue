<template>
    <div class="flex flex-col gap-y-2 items-center justify-center">
        <img :src="props.image" alt="category" class="w-32 h-32 sm-mobile:w-40 sm-mobile:h-40 rounded-full object-cover">
        <p class="text-white">{{props.title}}</p>
    </div>
</template>
<script setup lang="js">
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
});
</script>