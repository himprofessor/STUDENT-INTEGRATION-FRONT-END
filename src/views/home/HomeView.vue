<!-- src\views\home\HomeView.vue -->
<template>
  <div>
    <SlideshowView />
    <CardView />
    <CurriculumView />
    <SubjectComponent/>
    <InternShipView/>
    <PartnershipView />
  </div>
</template>

<script>
import SlideshowView from '@/views/slideshow/SlideshowView.vue'; // Updated import path
import CardView from '@/views/card/CardView.vue'; // Updated import path
import CurriculumView from '../curriculum/CurriculumView.vue';
import SubjectComponent from '@/components/subject/SubjectComponent.vue';
import InternShipView from '@/views/internship/InternShipView.vue';
import PartnershipView from '../partnership/PartnershipView.vue';

export default {
  components: {
    SlideshowView,
    CardView,
    CurriculumView,
    SubjectComponent,
    PartnershipView,
    InternShipView,
  },
};
</script>
