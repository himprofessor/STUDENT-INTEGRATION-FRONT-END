<template>
  <div class="group-card md:mt-20 mx-3 md:mx-2 w-full max-w-screen-xl">
    <h1 class="text-xl font-bold md:mx-3">
      <a href="new/update">New / Updates</a>
    </h1>
    <br />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-3 mr-3 gap-2 place-content-stretch">
      <div
        class="card-item max-w-xs rounded overflow-hidden shadow-lg"
        v-for="(card, index) in cards"
        :key="index"
      >
        <img :src="card.image" alt="Card Image" class="object-cover card-image" />
        <div class="card-content p-2 md:p-4">
          <div class="font-bold text-xl mb-2">{{ card.title }}</div>
          <p class="text-gray-700 text-base">{{ card.description }}</p>
          <span @click="readDetail(card)" class="text-blue-500 rounded flex items-center cursor-pointer mt-3">
            Read Detail
            <svg
              class="w-6 h-3 text-blue-400 dark:text-white ml-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
          <div class="card-g flex justify-between flex-col md:flex-row md:items-center mt-3">
            <div class="flex items-center mb-3 md:mb-0 md:mr-4">
              <svg
                class="w-4 h-4 text-gray-600 mr-1"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V12h6"></path>
              </svg>
              <p class="text-gray-600 text-sm">{{ card.date }}</p>
            </div>
            <div class="flex items-center">
              <svg
                class="w-4 h-4 text-gray-600 mr-1"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 14c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zM12 12c-1.33 0-2.67 1.34-2.67 4H14C14 13.34 13.33 12 12 12zm-1.33-7A2.67 2.67 0 0 1 14 7.33c0 1.47-1.2 2.67-2.67 2.67S8.67 8.8 8.67 7.33A2.67 2.67 0 0 1 11.33 5z"
                />
              </svg>
              <p class="text-gray-600 text-sm">{{ card.admin }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: require('@/assets/ero.png'),
          title: "PNC",
          description: "At PNC, we have a lot of clubs such as library, music, dancing ...",
          date: "2023-01-01",
          admin: "Admin 1",
        },
        // Add more cards as needed
      ],
    };
  },
  methods: {
    readDetail(card) {
      console.log("Read Detail clicked for:", card.title);
    },
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; /* Adjust the margin as needed */
}

.card-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-item .card-content {
  padding: 1rem;
}

.card-image {
  max-width: 100%;
  max-height: 50%;
}

/* styles for mobile */
.card-grid {
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr;
}

/* Tablet styles */
@media screen and (min-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop styles */
@media screen and (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop styles */
@media screen and (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
