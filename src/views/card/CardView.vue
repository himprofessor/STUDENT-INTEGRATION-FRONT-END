<template>
  <div class="group-card md:mt-20 max-w-screen-xl">
    <h1 class="text-xl font-bold">
      <a href="new/update">New / Updates</a>
    </h1>
    <div class="card w-full gap-5 flex flex-wrap">
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

<style scoped>
.card-grid {
  width: 23.7%;
}
.group-card {
  margin-right: 6%;
  margin-left: 6%;
}
/* styles for mobile */
.card-grid {
  width: 95%;
  gap: 10px;
  margin-left: 3%;
  margin-right: 0%;
  grid-template-columns: repeat(1, 1fr);
}

/* Tablet styles */
@media screen and (min-width: 600px) {
  .card-grid {
    width: 47%;
    margin-left: 1%;
    margin-right: 0%;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop styles */
@media screen and (min-width: 1024px) {
  .card-grid {
    width: 23.5%;
    margin-left: 0%;
    margin-right: 0%;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
