<template>
  <CareerImage/>
  <div>
    <h1 class="font-bold my-5 lg:text-3xl md:text-4xl text-xl lg:mx-20 md:mx-10 mx-5">
      Jobs list below:
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-20 md:mx-10 mx-5">
      <CareerComponent
        v-for="(career, index) in displayedItems"
        :key="index"
        :career="career">
      </CareerComponent>
    </div>
  </div>
  <!-- pagination  -->
  <div aria-label="pagination">
    <ul class="inline-flex -space-x-px text-sm my-5 lg:mx-20 md:mx-10 mx-5">
      <li>
        <a :disabled="currentPage === 1" @click="previousPage" class="flex items-center justify-center px-3 h-10 leading-tight text-black bg-white hover:bg-003 border border-e-0 border-blue-300 rounded-s cursor-pointer">Previous</a>
      </li>
      <li v-for="page in totalPages" :key="page">
        <a :class="{'text-textA font-bold border border-blue-500': page === currentPage}" class="flex items-center justify-center px-3 h-10 leading-tight bg-white border border-blue-300">{{page}}</a>
      </li>
      <li>
        <a :disabled="currentPage === totalPages" @click="nextPage" class="flex items-center justify-center px-3 h-10 leading-tight text-black bg-white hover:bg-003 border border-blue-300 rounded-e cursor-pointer">Next</a>
      </li>
    </ul>
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
      pageRow: 10,
      currentPage: 1,
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
  // pagination
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  },
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  },
  computed: {
    // pagination 
    totalPages() {
      return Math.ceil(this.careers.length / this.pageRow);
    },
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.pageRow;
      const endIndex = startIndex + this.pageRow;
      return this.careers.slice(startIndex, endIndex);
    },
  }
};
</script>