<template>
  <HeaderVue />
  <NavBar />
  <SlideshowComponent />
  <CardComponent />
  <StaffComponent/>
  <MapComponent/>
</template>
<script>
import StaffComponent from "./components/staff/StaffComponent.vue";
import CardComponent from "./components/card/CardComponent.vue";
import HeaderVue from "./components/HeaderComponent/Header/HeaderVue.vue";
import NavBar from "./components/HeaderComponent/Navigations/NavBar.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';
import MapComponent from './components/map/MapComponent.vue';

export default {
  components: {
    StaffComponent,
    CardComponent,
    NavBar,
    HeaderVue,
    SlideshowComponent,
    MapComponent
  },
};
</script>

