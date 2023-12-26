<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardView />
  <StaffComponent/>
  <MapComponent/>
</template>
<script>
import StaffComponent from "./components/staff/StaffComponent.vue";
import CardView from './views/card/CardView.vue'; // 
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';
import MapComponent from './components/map/MapComponent.vue';

export default {
  components: {
    StaffComponent,
    SlideshowComponent,
    MapComponent,
    CardView, //
    HeaderComponent,
    NavbarComponent,
  },
};
</script>

