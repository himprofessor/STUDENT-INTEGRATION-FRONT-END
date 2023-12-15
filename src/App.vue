<template>
  <div>
    <HeaderVue />
    <NavBar />
  </div>
</template>
<script>
import HeaderVue from "./components/HeaderComponent/Header/HeaderVue.vue";
import NavBar from "./components/HeaderComponent/Navigations/NavBar.vue";

export default {
  components: {
    NavBar,
    HeaderVue,
  },
};
</script>