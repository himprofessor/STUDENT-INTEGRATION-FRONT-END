<!-- CareerComponent.vue -->
<template>
  <div class="card flex flex-col md:flex-row lg:my-1">
    <div class="md:w-2/5 lg:w-1/2 grid md:place-items-center w-full">
      <img :src="career.media_id" alt="Career Image" class="w-full h-full object-cover" />
    </div>
    <!-- text content  -->
    <div class="md:w-5/6 bg-white shadow-md flex flex-col space-y-3 lg:px-3 md:px-3 pb-3">
      <span class="lg:text-2xl md:text-xl text-xl font-bold lg:mt-0 md:mt-0 mt-3">{{ career.title }}</span>
      <span class="text-gray-500">{{ truncateDescription(career.description) }}</span>
      <span @click="showDialog" class="text-textA flex items-center cursor-pointer hover:bg-blue-100 w-32 rounded p-1">
        Read more
        <svg class="w-6 h-3 dark:text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </span>
    </div>
  </div>
  <!-- dialog  -->
  <div class="dialog fixed lg:top-5 lg:right-0 lg:left-0 md:top-20 md:right-0 md:left-0 top-20 right-0 left-0 z-50  m-auto shadow lg:w-7/12 rounded-lg">
    <div class="relative">
      <!-- Modal content -->
      <div v-if="dialogView" id="popup-modal" tabindex="-1" class="relative bg-white dark:bg-gray-700 rounded-lg border border-2">
        <!-- Modal header -->
        <div class="flex items-center justify-between lg:py-4 md:py-3 py-3 border-b dark:border-gray-600 sticky top-0">
          <span class="w-9/12 lg:pl-0 md:pl-0 pl-3">
            <span class="lg:text-4xl md:text-2xl text-xl lg:ml-5 md:ml-5 ml-3 font-semibold">{{ career.title }}</span>
          </span>
          <button @click="hideDialog" type="button" class="absolute top-3 end-2.5 text-dark text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal" >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="detail md:p-5 overflow-y-auto overflow-x-hidden h-[450px] lg:mx-0 md:mx-0 mx-5">
          <div class="mb-3 lg:mt-0 md:mt-0 mt-5">
            <span class="flex">
              <img :src="career.media_id" alt="" class="w-full lg:h-80 md:h-full object-cover object-center">
            </span>
          </div>
          <span>
            {{ career.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="dialogView" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"></div>
</template>

<script>
export default {
  props: {
    career: {
      type: Object,
      required: true,
    },
  },
  data(){
    return {
      showFullDescription: false,
      dialogView: false,
    }
  },
  methods:{
    // lease text 
    truncateDescription(description) {
      if (description.length > 90 && !this.showFullDescription) {
        return description.slice(0, 90) + ' ' + '...';
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
  }
};
</script>
