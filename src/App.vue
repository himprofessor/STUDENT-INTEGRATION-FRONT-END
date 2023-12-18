<template>
  <div id="app" class="md:mt-20 md:ml-5 md:mr-5 mx-1 md:mx-3" >
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from "./components/card/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
};
</script>