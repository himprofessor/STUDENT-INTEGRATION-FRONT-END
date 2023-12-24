<template>
  <div class="group-card md:mt-20 max-w-screen-xl">
    <h1 class="text-xl font-bold">
      <a href="new/update">New / Updates</a>
    </h1>
    <div class="card w-full flex flex-wrap justify-between">
      <CardComponent
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :readMore="readMore"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/card/CardComponent.vue";
import http from "@/http-common"; // Import http-common.js

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Make a GET request to your Laravel API endpoint
      http
        .get("api/student-activity/list")
        .then((response) => {
          // Update the cards property with the API response
          this.cards = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    readMore(card) {
      console.log("Read more clicked for:", card.title);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

<style>
.card-item {
  width: 30%;
}
.group-card {
  margin-right: 6%;
  margin-left: 6%;
}
/* styles for mobile */
.card-item {
  gap: 10px;
  margin-left: 3%;
  margin-right: 0%;
  flex-direction: column; /* Corrected from 'flex-template-columns' to 'flex-direction' */
}

/* Tablet styles */
@media screen and (min-width: 600px) {
  .card-item {
    margin-left: 0%;
    margin-right: 0%;
    flex-direction: column; /* Corrected from 'flex-template-columns' to 'flex-direction' */
  }
}

/* Desktop styles */
@media screen and (min-width: 1024px) {
  .card-item {
    margin-left: 0%;
    margin-right: 0%;
    flex-direction: column; /* Corrected from 'flex-template-columns' to 'flex-direction' */
  }
}
</style>
