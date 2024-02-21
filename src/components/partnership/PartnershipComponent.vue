<template>
  <div @mouseenter="activeIndex = index" @mouseleave="activeIndex = null"
    class="flex items-center cursor-pointer justify-center lg:w-72 md:w-[32%] w-full lg:h-52 md:h-52 h-72 rounded-md border-2 relative">
    <img :src="partnership.media_id" alt="partnership" class="w-40 h-40 rounded-full" />
    <!-- hover text  -->
    <div v-if="activeIndex === index" class="hover:border-blue-500 rounded-md border-2 absolute inset-0 bg-black bg-opacity-50 text-center text-white flex flex-col justify-center">
      <span class="text-3xl font-semibold">{{ partnership.partnership_name }}</span>
      <p class="whitespace-normal whitespace-wrap px-3 text-sm">{{ partnership.address }}</p>
      <a v-if="partnership.website" :href="partnership.website" class="text-textA">Link here</a>
      <p v-else>{{ partnership.website }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partnership: Object, 
  },
  data() {
    return {
      activeIndex: null,
    };
  },
};
</script>