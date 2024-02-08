<template>
  <div class="lg:mx-20 md:mx-10 mx-5 justify-center my-5">
    <div class="flex flex-wrap gap-3 mb-2 justify-center rounded-md">
      <div
        v-for="(partnership, index) in partnerships"
        :key="index"
        class="shadow-md flex items-center justify-center lg:w-72 md:w-52 w-full lg:h-52 md:h-52 h-72 rounded-md hover:border-blue-500 border-2 relative"
        @click="toggleOverlay(index)"
      >
        <img :src="partnership.media_id" alt="Card Image" class="card-image mb-5 w-40 h-40 rounded-full outline-none border-gray-200 border-2"/>
        <div
          v-if="activeIndex === index"
          class="absolute inset-0 bg-blue-500 bg-opacity-75 text-white p-4 flex flex-col justify-center partnerships-center"
        >
          <h3 class="text-lg font-semibold">{{ partnership.partnership_name }}</h3>
          <p class="whitespace-normal">{{ partnership.address }}</p>
          <a :href="partnership.website" class="text-blue-200 hover:text-white block w-full overflow-hidden whitespace-wrap">{{ partnership.website }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partnerships: Array,
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  methods: {
    toggleOverlay(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
  },
};
</script>
