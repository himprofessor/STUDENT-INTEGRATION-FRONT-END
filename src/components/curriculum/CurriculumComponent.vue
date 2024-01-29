<template>
  <div v-if="curriculum" class="flex flex-col justify-center md:h-full mt-5 ">
    <h1 class="font-bold my-5 lg:text-3xl md:text-4xl text-xl lg:mx-10 md:mx-10 mx-5">Curriculum</h1>
    <div class=" relative flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 lg:mx-10 md:mx-10 mx-5 mt-2 rounded-lg">    
      <div class="lg:w-1/5 md:w-[39%] w-full">
        <img :src="curriculum.media_id" alt="curriculum logo" class="md:h-32 md:w-2/2 w-96 h-48 my-3" />
      </div>
      <div class="md:w-5/6 bg-white flex flex-col space-y-2 md:p-3 font-nunito md:text-start pb-3">
        <h3 class="font-bold text-gray-800 lg:text-2xl md:text-xl text-lg">{{ curriculum.title }}</h3>
        <p class="md:text-base text-gray-500 text-sm">{{ truncateDescription(curriculum.description) }}</p>
        <span @click="showFullDescription = !showFullDescription" class="text-blue-500 rounded flex items-center cursor-pointer mt-3">
          {{ showFullDescription ? 'Read less' : 'Read more' }}
          <svg class="h-5 w-5 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="7 7 12 12 7 17" />
          <polyline points="13 7 18 12 13 17" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curriculum: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showFullDescription: false,
    };
  },
  methods: {
    // lease text
    truncateDescription(description) {
      if (description.length > 245 && !this.showFullDescription) {
        return description.slice(0, 245) + " " + "...";
      }
      return description;
    },
  },
};
</script>