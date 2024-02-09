<template>
  <div class="group-card flex gap-2 mt-9 lg:w-[90%] lg:mx-20 md:10 mx-5">
    <div class="group-text p-4 lg:w-1/2 md:w-2/2 w-2/2">
      <h3 class="text-center py-2 lg:text-2xl md:text-2xl text-xl font-bold">
        {{ card.title }}
      </h3>
      <span v-html="truncateDescription(card.description)" class="lg:text-xl md:text-xl text-xl"></span>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 lg:w-[50%] md:w-full mt-8">
      <div class="col-start-1 col-span-2 row-span-2 outline-none lg:w-[99%] md:w-full">
        <img :src="mainImage" alt="student activity image"/>
      </div>
      <img
        @click="updateMainImage(index)"
        v-for="(image, index) in displayedImages"
        :key="index"
        :class="{
          'outline-none': index !== selectedImageIndex,
          'border': index !== selectedImageIndex,
          'border-2 border-blue-600': index === selectedImageIndex,
        }"
        :src="image" alt="student activity image" class="w-[99%] p-1"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      selectedImageIndex: 0,
    };
  },
  computed: {
    displayedImages() {
      return this.card.images.slice(0, 6); 
    },
    mainImage() {
      return this.displayedImages.length > 0 ? this.displayedImages[this.selectedImageIndex] : "";
    },
  },
  methods: {
    updateMainImage(index) {
      this.selectedImageIndex = index;
    },
    truncateDescription(description) {
      return description; 
    },
  },
};
</script>