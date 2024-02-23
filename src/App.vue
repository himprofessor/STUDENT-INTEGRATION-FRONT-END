<template>
  <div>
    <HeaderComponent/>
    <NavbarComponent/>
    <router-view></router-view>
    <FooterView/>
  </div>
</template>

<script>
import FooterView from "./views/footer/FooterView.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import NavbarComponent from "./components/header/NavbarComponent.vue";
export default {
  components: {
    HeaderComponent,
    NavbarComponent,
    FooterView,
  },
};
</script>