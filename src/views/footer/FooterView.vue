<template>
  <div class="bg-003 mt-5">
    <div class="header">
      <h1 class="py-3 flex justify-center text-xl text-white text-center font-bold">
        Student's activity
      </h1>
    </div>
    <div class="lg:mx-20 md:mx-10 mx-5 bg-white flex flex-wrap rounded-md gap-5 px-5 py-5">
      <FooterCardComponent
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :readMore="readMore"
      />
    </div>
    <FooterComponent/>
  </div>
</template>
<script>
import FooterCardComponent from "@/components/footer/FooterCardComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import http from "@/http-common";

export default {
  components: {
    FooterComponent,
    FooterCardComponent,
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
      http
        .get("api/student-activity/list")
        .then((response) => {
          // Sort the cards based on the creation date in descending order
          this.cards = response.data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          // Display only the first three cards
          this.cards = this.cards.slice(0, 3);
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