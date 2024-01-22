<template>
  <div class="lg:w-72 md:w-80 w-full my-2">
    <!-- img, title and desc -->
    <div>
      <span v-for="(image, index) in card.images" :key="index"></span>
      <img v-if="card.images" :src="card.images[0]" alt="Card Image" class="mb-3 w-full lg:h-52 h-60 object-cover object-center"/>
    </div>
    <p class="font-bold md:text-xl text-lg">{{ card.title }}</p>
    <p class="text-gray-700 text-base h-16">{{ truncateDescription(card.description) }}</p>
    <!-- Read more  -->
    <span @click="showDialog" class="text-blue-500 flex items-center cursor-pointer mt-3 hover:bg-blue-100 w-32 p-1 rounded">
      Read more
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
        <svg class="h-4 w-4 text-gray-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" />
        </svg>
        <p class="text-gray-600 text-sm">{{card.created_by}}</p>
      </div>
    </div>
  </div>
  <!--card dialog -->
  <div class="dialog fixed lg:top-0 right-0 left-0 top-10 right-0 left-0 z-50 m-auto lg:w-5/12 md:w-10/12 w-11/12 rounded">
    <div class="relative">
      <!-- Modal content -->
      <div v-if="dialogView" id="popup-modal" tabindex="-1" class="relative bg-white dark:bg-gray-700 animate-zoom-in rounded border border-gray-200">
        <div class="overflow-y-auto overflow-x-hidden lg:max-h-[580px] md:max-h-[880px] max-h-[580px]">
          <!-- image show  -->
          <span v-for="(image, index) in card.images" :key="index" v-show="activeIndex === index" class="flex relative sticky top-0">
            <button @click="hideDialog" type="button" class="bg-black bg-opacity-50 rounded-full absolute top-2 end-3 text-white text-sm lg:w-8 lg:h-8 md:w-10 md:h-10 w-10 h-10 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <img :src="image" alt="" class="w-full lg:h-80 md:h-96 h-60 object-cover object-center rounded-t-sm">
          </span>
          <!-- title desc created at and created by -->
          <div class="lg:px-3 md:px-5 lg:px-10 md:px-5 px-5  my-3">
            <span class="lg:text-lg md:text-3xl text-lg font-semibold">{{ card.title }}</span><br>
            <div class="overflow-hidden max-h-300">
              <span class="lg:text-sm md:text-xl text-sm">{{ card.description }} </span>
            </div>
            <div class="lg:flex md:flex justify-between mt-1">
              <div class="flex items-center mb-3 md:mb-0 md:mr-4">
                <svg class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p class="text-gray-600 lg:text-sm md:text-xl text-sm ml-1">{{ card.created_at }}</p>
              </div>
              <div class="flex items-center">
                <svg class="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" />
                </svg>
                <p class="text-gray-600 lg:text-sm md:text-xl text-sm ml-1">{{ card.created_by }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="dialogView" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"></div>
</template>

<script>
export default {
  props: {
    card: Object,
    readMore: Function,
  },
  data() {
    return {
      showFullDescription: false,
      dialogView: false,
      activeIndex: 0,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    // lease text 
    truncateDescription(description) {
      if (description.length > 85 && !this.showFullDescription) {
        return description.slice(0, 85) + ' ' + '...';
      }
      return description;
    },
    // dialog 
    showDialog() {
      this.dialogView = true;
    },
    hideDialog() {
      this.dialogView = false;
    },
    // show from one to one image
    startSlideshow() {
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.card.images.length;
      }, 4000);
    },
  },
};
</script>
<style scoped>
  @keyframes zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .animate-zoom-in {
    animation: zoom-in 0.3s ease-in-out;
  }
</style>