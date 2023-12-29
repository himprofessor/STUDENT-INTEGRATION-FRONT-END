<!-- src\views\home\HomeView.vue -->
<template>
  <div>
    <SlideshowComponent />
    <CardView />
    <SubjectComponent />

  </div>
</template>

<script>
import SubjectComponent from '@/components/subject/SubjectComponent.vue';
import CardView from '@/views/card/CardView.vue'; // Updated import path
import SlideshowComponent from '@/components/slideshow/SlideshowComponent.vue'; // Updated import path

export default {
  components: {
    SlideshowComponent,
    CardView,
    SubjectComponent
  },
};
</script>
