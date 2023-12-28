<!-- src\views\home\HomeView.vue -->

<template>
  <div>
    <SlideshowComponent />
    <CardView />
  </div>
</template>

<script>
import CardView from '@/views/card/CardView.vue'; // Updated import path
import SlideshowComponent from '@/components/slideshow/SlideshowComponent.vue'; // Updated import path

export default {
  components: {
    SlideshowComponent,
    CardView,
  },
};
</script>
