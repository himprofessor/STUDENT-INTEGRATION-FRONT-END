<!-- src/components/slideshow/SlideshowComponent.vue -->
<template>
  <div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="slides relative h-56 overflow-hidden md:h-96 mt-28">
      <!-- Slides -->
      <div v-for="(slide, index) in slides" :key="index" :class="{'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex, 'transition-opacity': true,}" data-carousel-item :aria-current="index === currentIndex" :aria-label="`Slide ${index + 1}`">
        <img :src="slide.image" class="absolute block w-full h-full object-cover" alt="..."/>
        <div v-if="slide.heading || slide.description" class="absolute inset-0 bg-black bg-opacity-40"></div>
        <span class="absolute text-white inset-20 flex items-center">
          <div class="w-full text-center md:block md:text-start">
            <p v-if="slide.heading || slide.description" class="font-bold md:text-4xl mb-1 lg:text-5xl md:mb-3">{{ slide.heading }}</p>
            <p class="text-xs md:text-2xl">{{ slide.description }}</p>
          </div>
        </span>
      </div>
    </div>
    <!-- Icon next, previous and indecators  -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-4 rtl:space-x-reverse hidden md:block">
      <!-- prevous  -->
      <button type="button" @click="prevSlide">
        <svg class="w-4 h-3 text-white dark:text-gray-400 rtl:rotate-180 hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </button>
      <!-- indicators -->
      <button @click="goToSlide(index)" v-for="(slide, index) in slides" :key="index" type="button" class="w-3 h-3 rounded-full bg-white bg-opacity-30" :class="{'active':index === currentIndex}" :aria-current="index === currentIndex" :aria-label="`Slide ${index + 1}`" data-carousel-slide-to="index"></button>
      <!-- next  -->
      <button type="button" @click="nextSlide">
        <svg class="w-4 h-3 text-white dark:text-gray-400 rtl:rotate-180 hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    slides: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutomaticSlideshow() {
      setInterval(() => {
        this.nextSlide();
      }, 7000); // Adjust the interval as needed (5000 milliseconds = 5 seconds)
    },
  },
  mounted() {
    this.startAutomaticSlideshow();
  },
};
</script>
<style scoped>
  .active{
    background-color: #e2eaee;
  }
</style>