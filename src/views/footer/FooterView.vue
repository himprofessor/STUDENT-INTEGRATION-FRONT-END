<template>
  <div class="footer bg-003">
      <div class="group-card p-5 ml-5 mr-5 md:mt-20">
          <h1 class="flex justify-center text-xl text-white text-center font-bold mb-5">
              Student's activity
          </h1>
          <div class="card mx-10 bg-white gap-5 p-5 flex flex-wrap rounded-md">
              <FooterCardComponent
                  v-for="(card, index) in cards"
                  :key="index"
                  :card="card"
                  :readMore="readMore"
              />
          </div>
      </div>
      <FooterComponent/>
  </div>
</template>
<script>
import FooterCardComponent from "@/components/footer/FooterCardComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
export default{
  components:{
      FooterComponent,
      FooterCardComponent,
  },
  data() {
    return {
      cards: [
        {
          image: '5.png',
          title: 'Canteen',
          description: "Student activities during lunch at passerelles numeriques cambodia.",
        },
        {
          image: '6.png',
          title: 'Aerobics',
          description: 'Student have aerobics at passerelles numeriques cambodia.',
        },
        {
          image: '4.png',
          title: 'PN Cambodia Graduation Ceremony',
          description: 'After school, we had a joint graduation ceremony at passerelles numeriques cambodia.',
        },
      ],
    };
  },
  methods: {
    readMore(card) {
      console.log('Read more clicked for:', card.title);
    },
  },
};
</script>
<style scoped>

.card-grid {
  width: 31%; /* Adjusted width for desktop screens */
  margin-left: 1%;
  margin-right: 1%;
  grid-template-columns: repeat(3, 1fr);
}

/* styles for mobile */
.card-grid {
  width: 100%;
  gap: 10px;
  margin-left: 0%;
  margin-right: 0%;
  grid-template-columns: repeat(1, 1fr);
}

.card-grid  {
  width: 100%;
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
    width: 30%; /* Adjusted width for three columns on desktop */
    margin-left: 1%;
    margin-right: 1%;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
