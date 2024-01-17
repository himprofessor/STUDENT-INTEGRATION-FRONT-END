<template>
  <CareerImage/>
  <div>
    <h1 class="font-bold my-5 lg:text-3xl md:text-4xl text-xl lg:mx-20 md:mx-10 mx-5">
      Jobs list below:
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-20 md:mx-10 mx-5">
      <CareerComponent
        v-for="(career, index) in careers"
        :key="index"
        :career="career">
      </CareerComponent>
    </div>
  </div>
</template>
  
<script>
import CareerImage from "@/components/career/CareerImage.vue";
import CareerComponent from "@/components/career/CareerComponent.vue"
import http from "@/http-common";

export default {
  components: {
    CareerComponent,
    CareerImage,
  },
  data() {
    return {
      careers: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
      .get("api/career/list")
      .then((response) => {
        this.careers = response.data.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    },
  },
};
</script>