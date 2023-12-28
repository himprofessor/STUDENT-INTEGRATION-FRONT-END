<!-- src/components/card/CardComponent.vue -->
<template>
  <div class="md:w-80 lg:w-72 w-80 my-2">
    <!-- img  -->
    <img :src="card.image" alt="Card Image" class="mb-3 w-full h-48"/>
    <!-- titel and desc  -->
    <div class="font-bold text-xl">{{ card.title }}</div>
    <p class="text-gray-700 text-base">{{ card.description }}</p>
    <!-- read more  -->
    <span @click="readMore(card)" class="text-blue-500 rounded flex items-center cursor-pointer mt-3">Read more
      <svg class="w-6 h-3 text-blue-400 dark:text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </span>
    <!-- created at and created by -->
    <div class="card-g flex justify-between md:flex-row md:items-center mt-3">
      <div class="flex items-center mb-3 md:mb-0 md:mr-4">
        <svg class="w-4 h-4 text-gray-600 mr-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V12h6"></path>
        </svg>
        <p class="text-gray-600 text-sm">{{ card.created_at }}</p>
      </div>
      
      <div class="flex items-center">
        <svg class="w-4 h-4 text-gray-600 mr-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 14c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zM12 12c-1.33 0-2.67 1.34-2.67 4H14C14 13.34 13.33 12 12 12zm-1.33-7A2.67 2.67 0 0 1 14 7.33c0 1.47-1.2 2.67-2.67 2.67S8.67 8.8 8.67 7.33A2.67 2.67 0 0 1 11.33 5z"/>
        </svg>
        <p class="text-gray-600 text-sm">Admin</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    readMore: Function,
  },
};
</script>