<template>
  <div class="text-center py-5 px-5 lg:text-3xl md:text-2xl text-2xl font-bold">
    Our partnership
  </div>
  <div class="flex flex-wrap gap-3 lg:mx-20 md:mx-10 mx-5 my-5 justify-center">
    <CardComponent 
      v-for="(partnership, index) in partnerships" 
      :key="index" 
      :partnership="partnership"
    />
  </div>
</template>

<script>
import CardComponent from '../../components/partnership/CardImageComponent.vue';
import http from "@/http-common";

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      partnerships: [],
    };
  },
  methods: {
    fetchData() {
      http
        .get("api/partnership/list")
        .then((response) => {
          this.partnerships = response.data.data;
          console.log(this.partnerships);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
}
</script>
