<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardComponent />
  <StaffComponent/>
</template>
<script>
import StaffComponent from "./components/staff/StaffComponent.vue";
import CardComponent from "./components/card/CardComponent.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';


export default {
  components: {
    StaffComponent,
    CardComponent,
    HeaderComponent,
    NavbarComponent,
    SlideshowComponent,
  },
};
</script>

