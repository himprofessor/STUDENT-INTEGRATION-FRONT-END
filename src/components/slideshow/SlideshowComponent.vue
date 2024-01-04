<template>
    <div class="slides relative h-56 overflow-hidden md:h-96">
      <button-component v-slot="{ currentSlides }">
        <carousel-component>
          <div class="duration-700 ease-in-out" v-show="currentSlides === 1">
            <div class="absolute inset-0">
              <img :src="slide ? slide.image : ''" class="absolute block w-full h-full object-cover" alt="" />
              <div v-if="slide && (slide.heading || slide.description)" class="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
  
            <span class="absolute text-white inset-16 flex items-center">
              <div class="w-full text-center md:block md:text-start">
                <h1 v-if="slide && (slide.heading || slide.description)" class="font-bold text-2xl mb-1 md:text-4xl md:mb-3 my-text">
                  {{ slide.heading }}
                </h1>
                <p class="text-xs md:text-2xl">{{ slide ? slide.description : '' }}</p>
              </div>
            </span>
          </div>
        </carousel-component>
      </button-component>
    </div>
  </template>
  
  <script>
  import ButtonComponent from "./ButtonComponent.vue";
  import CarouselComponent from "./CarouselComponent.vue";
  
  export default {
    components: { ButtonComponent, CarouselComponent },
    props: {
      slide: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  