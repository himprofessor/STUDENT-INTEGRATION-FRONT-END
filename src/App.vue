<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardView />
  <StaffComponent/>
</template>
<script>
import StaffComponent from "./components/staff/StaffComponent.vue";
import CardView from './views/card/CardView.vue'; // 
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';


export default {
  components: {
    StaffComponent,
    CardView, //
    HeaderComponent,
    NavbarComponent,
    SlideshowComponent,
  },
};
</script>

