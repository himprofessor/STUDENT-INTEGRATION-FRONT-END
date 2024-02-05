<template>
  <div class="mt-3 lg:mx-20 md:mx-10 mx-5">
    <InternshipComponent
      v-for="(internship, index) in internships"
      :key="index"
      :internship="internship"
    />
  </div>
</template>

<script>
import http from "@/http-common"; // Import http-common.js
import InternshipComponent from '@/components/internship_program/InternshipComponent.vue';

export default {
  components:{
    InternshipComponent
  },
  data() {
    return {
      internships: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
        .get("api/internship/list")
        .then((response) => {
          this.internships = response.data.data.sort((a, b) =>new Date(b.created_at) - new Date(a.created_at));
          this.internships = this.internships.slice(0, 1);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>