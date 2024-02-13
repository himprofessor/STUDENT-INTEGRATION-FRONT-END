<template>
  <div>
    <ActivityImage />
    <StudentActivityComponent
      v-for="(card, index) in displayedItems"
      :key="index"
      :card="card"
      :class="{
        'flex-row-reverse': index % 2 === 0,
        'flex-col': isMobileOrTablet
      }"
    />
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
  </div>
</template>
<script>
import ActivityImage from "@/components/student_activity/ActivityImage.vue";
import StudentActivityComponent from "@/components/student_activity/StudentActivityComponent.vue";
import http from "@/http-common";

export default {
  components: {
    StudentActivityComponent,
    ActivityImage,
  },
  data() {
    return {
      cards: [],
      pageRow: 5,
      currentPage: 1,
      isMobileOrTablet: false,
    };
  },
  mounted() {
    this.fetchData();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    fetchData() {
      http
        .get("api/student-activity/list")
        .then((response) => {
          this.cards = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    checkScreenSize() {
      this.isMobileOrTablet = window.innerWidth <= 768; 
      this.isMobileOrTablet = window.innerWidth <= 1280; 
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
  },
  computed: {
    // pagination 
    totalPages() {
      return Math.ceil(this.cards.length / this.pageRow);
    },
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.pageRow;
      const endIndex = startIndex + this.pageRow;
      return this.cards.slice(startIndex, endIndex);
    },
  }
};
</script>


<style scoped>
@media (max-width: 768px) {
  .flex-col {
    flex-direction: column;
  }
}
@media (max-width: 1280px) {
  .flex-col {
    flex-direction: column;
  }
}
</style>
