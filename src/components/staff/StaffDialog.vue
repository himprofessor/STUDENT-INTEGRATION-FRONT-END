<template>
  <!-- dialog -->
  <div
    class="dialog fixed lg:top-10 lg:right-0 lg:left-0 md:top-20 md:right-0 md:left-0 top-20 right-0 left-0 z-50 m-auto shadow lg:w-8/12 rounded-lg lg:mt-5 md:mt-10"
  >
    <div class="relative">
      <!-- Modal content -->
      <div v-if="staffDetails" id="popup-modal" tabindex="-1" class="relative bg-white dark:bg-gray-700 rounded-lg w-70" >
        <!-- Modal header -->
        <button @click="closeDialog" type="button" class="absolute top-3 end-2.5 text-dark text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal" >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        
        <!-- //Model body-->
        <div class="md:mt-5 lg:h-[400px] md:h-[400px] h-[450px] overflow-y-auto overflow-x-hidden lg:mb-5 md:mb-4 mb-5">    
          <div class="text-center mb-4 mt-8">
            <img
              :src="staffDetails.media_id"
              alt="Staff Image"
              class="w-24 h-24 rounded-full mx-auto lg:mt-0 md:mt-0 "
            />
            <strong class="mt-3 lg:text-2xl uppercase">
              {{ staffDetails.first_name }} {{ staffDetails.last_name }}
            </strong>
            <div class="w-full">
              {{ staffDetails.position }}
            </div>
          </div>
          <div class="card bg-gray-200 lg:flex justify-center lg:mx-12 rounded-lg">           
            <div class="lg:w-2/2 lg:mb-5 md:w-full md:mx-5 mx-5 ">
              <div class="mt-4 md:flex gap-3 lg:mb-3 md:mb-2 mb-2">
                <div class="lg:w-6/12 md:w-[60%] whitespace-normal break-all">
                  <strong>Email :</strong>             
                  {{ staffDetails.email }}
                </div>
                <div class="lg:w-6/12">
                  <strong>Phone :</strong>              
                  {{ staffDetails.phone }}
                </div>
              </div>
              <div class="lg:flex md:flex gap-3 lg:mb-3 md:mb-2">
                <div class="lg:w-6/12 md:w-[60%]  break-all">
                  <strong>Department :</strong>       
                  {{ staffDetails.department }}
                </div>
                <div class="lg:w-6/12">
                  <strong>Working Days :</strong>             
                  {{ staffDetails.start_date }} to {{ staffDetails.end_date }}
                </div>
              </div>
              <div class="md:w-6/8 mb-5">
                <strong>About staff</strong><br/>
                {{ staffDetails.about }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="staffDetails" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20"></div>
</template>

<script>
export default {
  props: {
    staffDetails: Object,
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>