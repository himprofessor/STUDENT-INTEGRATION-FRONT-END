<template>
  <div class="text-center py-5 px-5 lg:text-3xl md:text-2xl text-2xl font-bold">
    Our partnership
  </div>
  <CardComponent :partnerships="partnerships"/>
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
