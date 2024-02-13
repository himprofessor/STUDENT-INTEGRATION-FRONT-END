<!-- CareerComponent.vue -->
<template>
  <div class="card flex flex-col md:flex-row lg:my-1">
    <div class="md:w-2/5 lg:w-1/2 grid md:place-items-center w-full">
      <img :src="career.media_id" alt="Career Image" class="w-full lg:h-[170px] md:h-[150px] h-60 object-cover" />
    </div>
    <!-- text content  -->
    <div class="md:w-5/6 bg-white shadow-md flex flex-col space-y-3 lg:px-3 md:px-3 pb-3">
      <span class="lg:text-2xl md:text-xl text-xl font-bold lg:mt-0 md:mt-0 mt-3">{{ career.title }}</span>
      <span v-html="truncateDescription(career.description)" class="text-gray-500"/>
      <span v-if="career.description.length > 100" @click="showDialog" class="text-textA flex items-center cursor-pointer hover:bg-blue-100 w-32 rounded p-1">
        Read more
        <svg class="w-6 h-3 dark:text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </span>
    </div>
  </div>
  <!-- dialog  -->
  <div class="dialog fixed lg:top-0 right-0 left-0 top-10 right-0 left-0 z-50 m-auto lg:w-5/12 md:w-10/12 w-11/12 rounded">
    <div class="relative">
      <!-- Modal content -->
      <div v-if="dialogView" id="popup-modal" tabindex="-1" class="relative bg-white dark:bg-gray-700 animate-zoom-in rounded border border-gray-200">
        <div class="overflow-y-auto overflow-x-hidden lg:max-h-[580px] md:max-h-[880px] max-h-[580px]">
          <span class="flex relative sticky top-0">
            <button @click="hideDialog" type="button" class="bg-black bg-opacity-50 rounded-full absolute top-2 end-3 text-white text-sm lg:w-8 lg:h-8 md:w-10 md:h-10 w-10 h-10 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <img :src="career.media_id" alt="" class="w-full lg:h-80 md:h-96 h-60 object-cover object-center rounded-t-sm">
          </span>
          <div class="lg:px-10 md:px-10 px-5 my-3">
            <span class="lg:text-lg md:text-3xl text-lg font-bold">{{ career.title }}</span><br>
            <span v-html="career.description" class="lg:text-sm md:text-xl text-sm"/>
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
      const maxLength = 100;
      if (description.length > maxLength && !this.showFullDescription) {
        return description.slice(0, maxLength) + " ...";
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
