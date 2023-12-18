<template>
  <HeaderVue />
  <NavBar />
  <div id="app" class="md:mt-20 md:ml-5 md:mr-5 mx-1 md:mx-3" >
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from "./components/card/CardComponent.vue";
import HeaderVue from "./components/HeaderComponent/Header/HeaderVue.vue";
import NavBar from "./components/HeaderComponent/Navigations/NavBar.vue";

export default {
  components: {
    CardComponent,
    NavBar,
    HeaderVue,
  },
};
</script>