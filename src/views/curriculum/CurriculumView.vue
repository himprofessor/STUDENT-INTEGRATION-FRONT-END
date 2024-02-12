<template> 
  <div class="flex flex-col justify-center md:h-full lg:mx-20 md:mx-10 mx-5 my-5">
    <h1 class="font-bold lg:text-3xl md:text-4xl text-xl mb-5">Curriculum</h1> 
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
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
        this.curriculums = response.data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        this.curriculums = this.curriculums.slice(0, 1);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    },
  },
}
</script>