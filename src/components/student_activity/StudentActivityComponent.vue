<template>
  <div class="group-card flex gap-2 mt-9 lg:w-[90%] lg:mx-20 md:10 mx-5">
    <div class="group-text lg:px-2 lg:w-1/2 md:w-2/2 w-2/2">
      <h3 class="text-center lg:text-2xl md:text-2xl text-xl font-bold">
        {{ card.title }}
      </h3>
      <span v-html="truncateDescription(card.description)" class="lg:text-xl md:text-xl text-xl"></span>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 lg:w-[50%] md:w-full">
      <div class="col-start-1 col-span-2 row-span-2 outline-none w-full">
        <img :src="mainImage" alt="main student activity image" class="py-1 px-1 lg:h-[300px] md:h-[300px] h-[210px] w-full object-cover object-top"/>
      </div>
      <img
        @click="updateMainImage(index)"
        v-for="(image, index) in displayedImages"
        :key="index"
        :class="{
          'outline-none': index !== selectedImageIndex,
          'border': index !== selectedImageIndex,
          'border-2 border-textA': index === selectedImageIndex,
        }"
        :src="image" alt="student activity image" class="py-1 px-1 w-full lg:h-[150px] md:h-[150px] h-[105px] object-cover object-top"
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