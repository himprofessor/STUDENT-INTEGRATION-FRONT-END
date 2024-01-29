<template>
  <div class="mt-5 lg:flex lg:mx-20 md:mx-10 mx-5 cursor-pointer">
    <div class="col-start-1 col-span-3 outline-none lg:w-6/12 md:w-full">
      <img :src="mainImage" alt="" class="w-full" />
    </div>
    <div class="col-start-4 col-end-7 lg:w-1/2">
      <div class="grid grid-cols-3 grid-rows-3">
        <img
          @click="updateMainImage(index)"
          v-for="(image, index) in images"
          :key="index"
          :class="{
            'outline-none': index !== selectedImageIndex,
            border: index !== selectedImageIndex,
            'border border-blue-600': index === selectedImageIndex,
          }"
          :src="image"
          alt="internship image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      selectedImageIndex: 0,
    };
  },
  computed: {
    mainImage() {
      return this.images.length > 0 ? this.images[this.selectedImageIndex] : "";
    },
  },
  methods: {
    updateMainImage(index) {
      this.selectedImageIndex = index;
    },
  },
};
</script>