<template>
  <div class="name text-center p-5 text-3xl font-bold">
    <h1 class="text-bold">Our partnership</h1>
  </div>
  <CardComponent :items="itemsArray" />
</template>

<script>
import CardComponent from '../../components/partnership/CardImageComponent.vue';

export default {
  components: {
    CardComponent,
  },
    data() {
    return {
      itemsArray: [
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/logo_edm_web_transparent_0.jpg" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2020/10/FondBellon_WebsitePartners-400x284.png" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2023/12/image-4-1.png" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2022/04/Logo-website-400x284.png" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/logo_FondationAmanjaya-400x284.png" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2023/12/22LPASingapore.png" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2022/07/UBS-logo-300x284.png" },
        { image: "https://www.passerellesnumeriques.org/wp-content/uploads/2023/11/Website-Logo-Update-big-1.png" },
      ],
    };
  },
}
</script>

<style>

</style>