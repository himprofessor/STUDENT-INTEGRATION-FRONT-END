<template>
  <div class="lg:mx-20 md:mx-10 mx-5">
    <h1 class="text-center lg:text-3xl md:text-2xl text-xl font-bold my-5">
      The courses that will be covered in the two-year program
    </h1>
    <div class="flex flex-wrap gap-3">
      <CourseComponent
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
        :class="{
          'bg-003': index % 2 === 0,
          'bg-002': index % 2 !== 0
        }"
      />
    </div>
  </div>
</template>

  
<script>
import http from "@/http-common"; // Import http-common.js
import CourseComponent from "@/components/course/CourseComponent.vue";

export default {
  components: {
    CourseComponent,
  },
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
        .get("api/course/list")
        .then((response) => {
          this.courses = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>