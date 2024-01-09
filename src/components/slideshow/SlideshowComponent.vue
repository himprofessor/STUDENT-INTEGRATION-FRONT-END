<!-- src/components/slideshow/SlideshowComponent.vue -->

<template>
  <div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="slides relative h-56 overflow-hidden md:h-96 mt-28">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{
          'opacity-100': index === currentIndex,
          'opacity-0': index !== currentIndex,
          'transition-opacity': true,
        }"
        data-carousel-item
        :aria-current="index === currentIndex"
        :aria-label="`Slide ${index + 1}`"
      >
        <img
          :src="slide.image"
          class="absolute block w-full h-full object-cover"
          alt="..."
        />
        <span class="absolute text-white inset-20 flex items-center">
          <div class="w-full text-center md:block md:text-start">
            <p
              v-if="slide.heading || slide.description"
              class="font-bold text-2xl mb-1 md:text-5xl md:mb-3"
            >
              {{ slide.heading }}
            </p>
            <p class="text-xs md:text-2xl">{{ slide.description }}</p>
          </div>
        </span>
      </div>
    </div>

    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        type="button"
        class="w-3 h-3 rounded-full"
        :aria-current="index === currentIndex"
        :aria-label="`Slide ${index + 1}`"
        data-carousel-slide-to="index"
      ></button>
    </div>

    <!-- Slider controls -->
    <button
      type="button"
      @click="prevSlide"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <!-- Left arrow icon -->
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>

    <button
      type="button"
      @click="nextSlide"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <!-- Right arrow icon -->
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
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
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    startAutomaticSlideshow() {
      setInterval(() => {
        this.nextSlide();
      }, 5000); // Adjust the interval as needed (5000 milliseconds = 5 seconds)
    },
  },
  mounted() {
    this.startAutomaticSlideshow();
  },
};
</script>
  
  <style scoped>
/* Add your component-specific styles here */
</style>
  