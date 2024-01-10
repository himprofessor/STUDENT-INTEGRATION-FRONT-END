<template>
  <div class="lg:w-[32%] md:w-[48%] w-full">
    <div>
      <span v-for="(image, index) in card.images" :key="index"></span>
      <img v-if="card.images" :src="card.images[0]" alt="Card Image" class="object-cover object-center"/>
    </div>
    <div class="font-bold md:text-xl text-lg">{{ card.title }}</div>
    <p class="text-gray-700 text-base h-15">{{ truncateDescription(card.description) }}</p>
    <span @click="readMore(card)" class="text-blue-500 rounded flex items-center cursor-pointer mt-3">
      Read more
      <svg
        class="w-6 h-3 text-blue-400 dark:text-white ml-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </span>
  </div>
</template>
  
<script>
export default {
  props: {
    card: Object,
    readMore: Function,
  },
  data(){return{}},
  methods:{
    // lease text 
    truncateDescription(description) {
      if (description.length > 99 && !this.showFullDescription) {
        return description.slice(0, 99) + ' ' + '...';
      }
      return description;
    },
  }
};
</script>