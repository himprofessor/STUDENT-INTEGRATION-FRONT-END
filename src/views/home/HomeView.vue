<!-- src\views\home\HomeView.vue -->
<template>
  <SlideshowView />
  <CardView />
  <CurrculumnComponent />
  <CourseView/>
  <InternShipView/>
  <PartnershipView />
</template>

<script>
import InternShipView from '@/views/internship/InternShipView.vue'
import CardView from '@/views/card/CardView.vue'; // Updated import path
import SlideshowView from '@/views/slideshow/SlideshowView.vue'; // Updated import path
import PartnershipView from '../partnership/PartnershipView.vue';
import CurrculumnComponent from '@/components/currculumn/CurrculumnComponent.vue';
import CourseView from '@/views/course/CourseView.vue';

export default {
  components: {
    SlideshowView,
    CardView,
    PartnershipView,
    InternShipView,
    CurrculumnComponent,
    CourseView,
  },
};
</script>