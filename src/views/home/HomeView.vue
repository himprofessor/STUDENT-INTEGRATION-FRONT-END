<!-- src\views\home\HomeView.vue -->

<template>
  <div>
    <SlideshowComponent />
    <CardView />
    <CurrculumnComponent />
    <CareerView />
    <PartnershipView />
  </div>
</template>

<script>
import CareerView from '@/views/career/CareerView.vue'
import CardView from '@/views/card/CardView.vue'; // Updated import path
import SlideshowComponent from '@/components/slideshow/SlideshowComponent.vue'; // Updated import path
import PartnershipView from '../partnership/PartnershipView.vue';
import CurrculumnComponent from '@/components/currculumn/CurrculumnComponent.vue';

export default {
  components: {
    SlideshowComponent,
    CardView,
    PartnershipView,
    CareerView,
    CurrculumnComponent
  },
};
</script>
