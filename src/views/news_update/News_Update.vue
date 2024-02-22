<template>
  <div class="lg:mx-20 md:mx-20 mx-5">
    <h1 class="lg:text-3xl md:text-3xl text-lg font-bold lg:my-6 md:my-5 my">
      <span>News/update</span>
    </h1>
    <!-- list  -->
    <div class="flex flex-wrap lg:gap-3 md:gap-5">
      <CardComponent
        v-for="(card, index) in displayedItems"
        :key="index"
        :card="card"
        :readMore="readMore"
      />
    </div>
    <!-- pagination  -->
    <div aria-label="pagination">
      <ul class="inline-flex -space-x-px text-sm my-5">
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
import CardComponent from "@/components/card/CardComponent.vue";
import http from "@/http-common";
  
export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      cards: [],
      pageRow: 12,
      currentPage: 1,
    };
  },
  mounted() {
    this.fetchData();
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