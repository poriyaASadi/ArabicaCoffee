<template>
    <div class="rounded-lg p-2 h-40 my-5 z-10 relative flex items-end justify-center *:text-white cursor-pointer flex-col">
        <img :src="props.image" alt="imagePoster" class="absolute left-0 bottom-0  -z-10 w-full h-full rounded-lg object-cover object-top">
        <div class="rgba-linear-dark rounded-lg w-full h-full absolute left-0 top-0 -z-10"></div>
        <h2 class="text-4xl">
            {{ props.title }}
        </h2>
        <p class="mt-3.5">{{props.description}}</p>
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
    description: {
        type: String,
        required: true
    }
});

</script>