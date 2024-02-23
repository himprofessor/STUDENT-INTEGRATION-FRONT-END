<template>
  <div class="lg:mx-20 md:mx-10 mx-5">
    <h1 class="text-center lg:text-3xl md:text-2xl text-xl font-bold mb-3">
      All the student must follow of these rule 
    </h1>
    <div v-for="(rule, index) in rules" :key="index">
      <iframe
        :src="rule.file"
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </div>
  </div>
</template>
  
<script>
import http from "@/http-common";

export default {
  data() {
    return {
      rules: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
        .get("api/rules/list")
        .then((response) => {
          this.rules = response.data.data.sort((a, b) =>new Date(b.created_at) - new Date(a.created_at));
          this.rules = this.rules.slice(0, 1);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>