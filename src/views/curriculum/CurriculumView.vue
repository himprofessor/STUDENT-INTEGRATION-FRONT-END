<template> 
  <div class="flex flex-col justify-center md:h-full mt-5 ">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 md:mx-10 mx-5">
      <CurriculumComponent
        v-for="(curriculum, index) in curriculums"
        :key="index"
        :curriculum="curriculum">
      </CurriculumComponent>
    </div>
  </div>
</template>

<script>
import CurriculumComponent from '@/components/curriculum/CurriculumComponent.vue';
import http from "@/http-common";

export default {
  components: {
    CurriculumComponent,
  },
  data() {
    return {
      curriculums: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
      .get("api/curriculum/list")
      .then((response) => {
        this.curriculums = response.data.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    },
  },
}
</script>

 