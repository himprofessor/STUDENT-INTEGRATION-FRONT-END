<template>
  <div>
    <slideshow-component :slides="slides"></slideshow-component>
  </div>
</template>
  
<script>
  import SlideshowComponent from "@/components/slideshow/SlideshowComponent.vue";
  import http from "@/http-common";
  export default {
    components: {
      SlideshowComponent
    },
    data() {
      return {
        slides: [],
      };
    },
    methods: {
      async fetchSlides() {
        try {
          const response = await http.get("api/slideshow/list");
          this.slides = response.data.data;
        } catch (error) {
          console.error("Error fetching slides:", error);
        }
      },
    },
    mounted() {
      this.fetchSlides();
    },
  };
</script>
