<template>
  <!-- dialog -->
  <div
    class="dialog fixed lg:top-10 lg:right-0 lg:left-0 md:top-20 md:right-0 md:left-0 top-20 right-0 left-0 z-50 m-auto shadow lg:w-8/12 rounded-lg lg:mt-5 md:mt-10"
  >
    <div class="relative">
      <!-- Modal content -->
      <div v-if="staffDetails" id="popup-modal" tabindex="-1" class="relative bg-white dark:bg-gray-700 rounded-lg w-70" >
        <!-- Modal header -->
        <div class="lg:mx-5 md:mx-5 mx-5 flex items-center justify-between border-b dark:border-gray-600 sticky top-0">
          <span class="w-9/12 lg:my-3 md:my-2 my-2">
            <span class="lg:text-2xl md:text-xl text-sm font-semibold">Detail Information Staff</span>   
          </span>
          <button
            @click="closeDialog"
            class="text-gray-500 "
          >
            <svg  class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" >     
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <!-- //Model body-->
        <div class="modal-body lg:border-r md:border-b">
          <div class="lg:flex md:flex md:mt-5 lg:h-[370px] md:h-[350px] h-[450px] overflow-y-auto overflow-x-hidden lg:mb-5 md:mb-4 mb-5">    
            <div class="lg:w-[27%] md:w-1/3 text-center mb-4 border-r-2">
              <img
                :src="staffDetails.media_id"
                alt="Staff Image"
                class="w-24 h-24 rounded-full mx-auto lg:mt-0 md:mt-0 "
              />
              <strong class="mt-3 lg:text-2xl">
                {{ staffDetails.first_name }} {{ staffDetails.last_name }}
              </strong>
              <div class="w-full">
                {{ staffDetails.position }}
              </div>
            </div>
            <div class="lg:w-2/3 md:w-full lg:mx-3 md:mx-3 mx-5">
              <div class="lg:flex md:flex gap-3 lg:mb-3 md:mb-2 mb-2">
                <div class="lg:w-6/12 md:w-[60%] whitespace-normal break-all">
                  <strong>Email</strong><br/>                
                  {{ staffDetails.email }}
                </div>
                <div class="lg:w-6/12">
                  <strong>Phone</strong><br/>               
                  {{ staffDetails.phone }}
                </div>
              </div>
              <div class="lg:flex md:flex gap-3 lg:mb-3 md:mb-2 mb-2">
                <div class="lg:w-6/12 md:w-[60%] whitespace-normal break-all ">
                  <strong>Department</strong><br/>        
                  {{ staffDetails.department }}
                </div>
                <div class="lg:w-6/12">
                  <strong>Working Days</strong><br/>             
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