<!-- src\views\home\HomeView.vue -->
<template>
  <div>
    <SlideshowView/>
    <CardView />
    <CurrculumnComponent />
    <SubjectComponent/>
    <CareerView />
    <PartnershipView />
  </div>
</template>

<script>
import CareerView from '@/views/career/CareerView.vue'
import CardView from '@/views/card/CardView.vue'; // Updated import path
import SlideshowView from '../slideshow/SlideshowView.vue';
import PartnershipView from '../partnership/PartnershipView.vue';
import CurrculumnComponent from '@/components/currculumn/CurrculumnComponent.vue';
import SubjectComponent from '@/components/subject/SubjectComponent.vue';

export default {
  components: {
    SlideshowView,
    CardView,
    PartnershipView,
    CareerView,
    CurrculumnComponent,
    SubjectComponent,
  },
};
</script>
