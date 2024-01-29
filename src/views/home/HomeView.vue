<!-- src\views\home\HomeView.vue -->
<template>
  <SlideshowView />
  <CardView />
  <CurriculumView />
  <CourseView/>
  <InternShipView/>
  <PartnershipView />
</template>

<script>
import SlideshowView from '@/views/slideshow/SlideshowView.vue';
import CardView from '@/views/card/CardView.vue'; // Updated import path
import CurriculumView from '../curriculum/CurriculumView.vue';
import CourseView from '@/views/course/CourseView.vue';
import InternShipView from '@/views/internship/InternShipView.vue';
import PartnershipView from '../partnership/PartnershipView.vue';

export default {
  components: {
    SlideshowView,
    CardView,
    CurriculumView,
    CourseView,
    PartnershipView,
    InternShipView,
  }
}
</script>