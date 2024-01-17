<!-- src\views\home\HomeView.vue -->
<template>
  <div>
    <SlideshowView />
    <CardView />
    <CurrculumnComponent />
    <SubjectComponent/>
    <InternShipView/>
    <PartnershipView />
  </div>
</template>

<script>
import InternShipView from '@/views/internship/InternShipView.vue'
import CardView from '@/views/card/CardView.vue'; // Updated import path
import SlideshowView from '@/views/slideshow/SlideshowView.vue'; // Updated import path
import PartnershipView from '../partnership/PartnershipView.vue';
import CurrculumnComponent from '@/components/currculumn/CurrculumnComponent.vue';
import SubjectComponent from '@/components/subject/SubjectComponent.vue';

export default {
  components: {
    SlideshowView,
    CardView,
    PartnershipView,
    InternShipView,
    CurrculumnComponent,
    SubjectComponent,

  },
};
</script>
