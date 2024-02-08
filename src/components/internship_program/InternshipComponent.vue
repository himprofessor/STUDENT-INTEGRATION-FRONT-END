<template>
  <!-- internship title and description  -->
  <div class="text-center mb-3">
    <h1 class="text-center py-2 lg:text-3xl md:text-2xl text-xl font-bold">
      {{internship.internship_title}}
    </h1>
    <span v-html="truncateDescription(internship.internship_description)"></span>
    <div class="flex justify-center items-center text-center my-2" v-if="internship.internship_description.length > 450">
      <span @click="showFullDescription = !showFullDescription" class="text-blue-500 underline underline-offset-4 rounded flex items-center cursor-pointer">
        {{ showFullDescription ? 'Read less' : 'Read more' }}
        <svg class="h-4 w-5 text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="7 7 12 12 7 17" />
          <polyline points="13 7 18 12 13 17" />
        </svg>
      </span>
    </div>
  </div>
  <!-- internship program image  -->
  <div class="lg:flex lg:h-[440px]">
    <div class="col-start-1 col-span-3 outline-none lg:w-6/12 md:w-full">
      <img :src="mainImage" alt="internship image" class="w-full lg:h-full md:h-[600px] h-80 object-cover object-top"/>
    </div>
    <div class="col-start-4 col-end-7 lg:w-1/2 cursor-pointer">
      <div class="grid grid-cols-3 grid-rows-3">
        <img
          @click="updateMainImage(index)"
          v-for="(image, index) in internship.images"
          :key="index"
          :class="{
            'outline-none': index !== selectedImageIndex,
            border: index !== selectedImageIndex,
            'border-2 border-blue-600': index === selectedImageIndex,
          }"
          :src="image" alt="internship image" class="lg:h-[147px] md:h-48 h-28 lg:w-60 md:w-80 w-60 object-cover object-top"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    internship: Object,
  },
  data() {
    return {
      selectedImageIndex: 0,
      showFullDescription: false,
    };
  },
  computed: {
    mainImage() {
      return this.internship.images.length > 0 ? this.internship.images[this.selectedImageIndex] : "";
    },
  },
  methods: {
    updateMainImage(index) {
      this.selectedImageIndex = index;
    },
    // show text
    truncateDescription(des) {
      const maxLength = 450;
      if (des.length > maxLength && !this.showFullDescription) {
        return des.slice(0, maxLength) + " ...";
      }
      return des;
    },
  },
};
</script>