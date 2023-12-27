<template>
  <div class="slides relative h-56 overflow-hidden md:h-96">
    <button-component v-slot="{ currentSlides }">
      <carousel-component v-for="(slide, index) in slideshows" :key="index">
        <div
          v-show="currentSlides === index + 1"
          class="duration-700 ease-in-out"
        >
          <div class="absolute inset-0">
            <img
              :src="require(`../../assets/slideshow/${slide.image}`)"
              class="absolute block w-full h-full object-cover"
              alt=""
            />
            <div
              v-if="slide.heading || slide.description"
              class="absolute inset-0 bg-black bg-opacity-40"
            ></div>
          </div>
          <span class="absolute text-white inset-16 flex items-center">
                <div class="w-full text-center md:block md:text-start">
                  <h1
                    v-if="slide.heading || slide.description"
                    class="font-bold text-2xl mb-1 md:text-4xl md:mb-3 my-text"
                  >
                    {{ slide.heading }}
                  </h1>
                  <p class="text-xs md:text-2xl">{{ slide.description }}</p>
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
  setup() {
    const slideshows = [
      { image: "slide1.png", heading: "", description: "" },
      {
        image: "slide2.png",
        heading: "Passerellesnumeriques Cambodia",
        description: "Welcome class 2024 for coming and join with our mission to get a better life in future!",
      },
      {
        image: "slide3.png",
        heading: "PNC School Cambodia",
        description: "Welcome class 2024 for coming and join with our mission to get a better life in future!",
      },
      {
        image: "slide4.png",
        heading: "Our actions in Cambodia",
        description: "previously known as CIST, offers a 2 year IT training program based on a holistic educative approach including technical and soft skills, and a personal development program.",
      },
      {
        image: "slide5.png",
        heading: "Passerellesnumeriques Cambodia",
        description: "Welcome class 2024 for coming and join with our mission to get a better life in future!",
      },
    ];
    return { slideshows };
  },
};
</script>