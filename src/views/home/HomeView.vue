<!-- src\views\home\HomeView.vue -->
<template>
  <SlideshowView />
  <CardView />
  <CurriculumView />
  <CourseView/>
  <InternshipView/>
  <PartnershipView />
</template>

<script>
import SlideshowView from '@/views/slideshow/SlideshowView.vue';
import CardView from '@/views/card/CardView.vue';
import CurriculumView from '../curriculum/CurriculumView.vue';
import CourseView from '@/views/course/CourseView.vue';
import InternshipView from '@/views/internship_program/InternshipView.vue'
import PartnershipView from '../partnership/PartnershipView.vue';

export default {
  components: {
    SlideshowView,
    CardView,
    CurriculumView,
    CourseView,
    PartnershipView,
    InternshipView,
  }
}
</script>