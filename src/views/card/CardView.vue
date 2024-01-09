<template>
  <div class="lg:mx-20 md:mx-20 mx-5">
    <h1 class="lg:text-3xl md:text-3xl text-lg font-bold lg:my-6 md:my-5 my">
      <a href="new/update">New / Updates</a>
    </h1>
    <div class="flex flex-wrap lg:gap-3 md:gap-5">
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
          console.log(this.cards)
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