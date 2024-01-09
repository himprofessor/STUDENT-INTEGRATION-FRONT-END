<template>
  <div class="grid grid-cols-6 p-5 mx-20">
    <div class="col-start-1 col-span-3 outline-none hover:border-blue-500 border-2 w-50">
      <img :src="mainImage" alt="">
    </div>
    <div class="col-start-4 col-end-7 w-50">
      <div class="grid grid-cols-3 grid-rows-3">
        <img v-for="(image, index) in images.slice(0, 9)" :key="index" class="outline-none hover:border-blue-500 border-2" :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  computed: {
    mainImage() {
      return this.images.length > 0 ? this.images[0] : '';
    },
  },
};
</script>