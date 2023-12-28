<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <SlideshowComponent />
  <CardView />
  <SubjectComponent/>
  <StaffView/>
  <FooterView/>
</template>

<script>
import FooterView from "./views/footer/FooterView.vue";
import StaffView from './views/staff/StaffView.vue';
import CardView from './views/card/CardView.vue'; 
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import SlideshowComponent from './components/slideshow/SlideshowComponent.vue';
import SubjectComponent from './components/subject/SubjectComponent.vue';
export default {
  components: {
    SlideshowComponent,
    StaffView,
    CardView, 
    HeaderComponent,
    NavbarComponent,
    FooterView,
    SubjectComponent
  },
};
</script>