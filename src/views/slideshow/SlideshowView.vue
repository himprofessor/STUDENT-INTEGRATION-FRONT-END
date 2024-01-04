<template>
  <div class="slides relative h-56 overflow-hidden md:h-96">
    <slideshow-component :slide="slide" v-for="(slide, index) in slideshows" :key="index"></slideshow-component>
  </div>
</template>

<script>
import SlideshowComponent from "@/components/slideshow/SlideshowComponent.vue";
import http from "@/http-common";

export default {
  components: { SlideshowComponent },
  data() {
    return {
      slideshows: [],
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      http
        .get("/api/slideshow/list")
        .then((response) => {
          console.log("API Response:", response.data);
          this.slideshows = response.data.data;
          // console.log("Number of slideshows:", this.slideshows.length);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
