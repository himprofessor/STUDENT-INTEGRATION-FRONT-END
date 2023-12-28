<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardView />
  <StaffView/>
  <FooterView/>
</template>

<script>
import CareerView from "./views/career/CareerView.vue";
import FooterView from "./views/footer/FooterView.vue";
import StaffView from './views/staff/StaffView.vue';
import CardView from './views/card/CardView.vue'; 
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';
export default {
  components: {
    CareerView,
    SlideshowComponent,
    StaffView,
    CardView, 
    HeaderComponent,
    NavbarComponent,
    FooterView,
  },
};
</script>