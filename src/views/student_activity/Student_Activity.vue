<template>
  <div>
    <div class="mt-5">
      <ActivityImage />
      <StudentActivityComponent
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :class="{
          'flex-row-reverse': index % 2 === 0,
          'flex-col': isMobileOrTablet
        }"
      ></StudentActivityComponent>
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
          const sortedCards = [...response.data.data];
          this.cards = sortedCards.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          this.cards = this.cards.slice(0, 6);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    checkScreenSize() {
      this.isMobileOrTablet = window.innerWidth <= 768; 
      this.isMobileOrTablet = window.innerWidth <= 1280; 
    },
  },
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
