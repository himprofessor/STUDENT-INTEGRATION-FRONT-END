<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardComponent />
  <StaffComponent/>
  <MapComponent/>
</template>
<script>
import StaffComponent from "./components/staff/StaffComponent.vue";
import CardComponent from "./components/card/CardComponent.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';
import MapComponent from './components/map/MapComponent.vue';

export default {
  components: {
    StaffComponent,
    CardComponent,
    SlideshowComponent,
    MapComponent,
    HeaderComponent,
    NavbarComponent,
  },
};
</script>

