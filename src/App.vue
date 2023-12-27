<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardView />
  <StaffView/>
  <!-- <MapComponent/> -->
  <FooterComponent/>
</template>

<script>
import FooterView from "./views/footer/FooterView.vue";
import StaffView from './views/staff/StaffView.vue';
import CardView from './views/card/CardView.vue'; // 
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';
// import MapComponent from './components/map/MapComponent.vue';
export default {
  components: {
    SlideshowComponent,
    // MapComponent,
    StaffView,
    CardView, //
    HeaderComponent,
    NavbarComponent,
    FooterView,
  },
};
</script>

