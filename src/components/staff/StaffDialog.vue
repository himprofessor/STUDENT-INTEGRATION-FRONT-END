<template>
  <!-- dialog -->
  <div
    class="dialog fixed lg:top-5 lg:right-0 lg:left-0 md:top-20 md:right-0 md:left-0 top-20 right-0 left-0 z-50 m-auto shadow lg:w-8/12 rounded-lg"
  >
    <div class="relative">
      <!-- Modal content -->
      <div v-if="staffDetails" id="popup-modal" tabindex="-1" class="relative bg-white dark:bg-gray-700 rounded-lg w-70" >
        <!-- Modal header -->
        <div class="flex items-center justify-between md:p-2 border-b dark:border-gray-600 sticky top-0">
          <span class="w-9/12 lg:pl-0 md:pl-0 pl-3">
            <span class="lg:text-2xl md:text-xl text-lg font-semibold ml-4">Detail Information Staff</span>   
          </span>
          <button
            @click="closeDialog"
            class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
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
        <div class="modal-body border-r">
          <div class="flex p-4 md:p-5 h-[350px] overflow-y-auto overflow-x-hidden">    
            <div class="md:w-1/3 text-center px-5 mb-4 text-center px-5 border-r">
              <img
                :src="staffDetails.media_id"
                alt="Staff Image"
                class="w-24 h-24 rounded-full mx-auto"
              />
              <h2 class="mt-3 whitespace-wrap text-2xl text-gray-950">
                {{ staffDetails.first_name }} {{ staffDetails.last_name }}
              </h2>
              <div class="w-full">
                <strong>Position: </strong>
                {{ staffDetails.position }}
              </div>
            </div>
            <div class="md:w-2/3 mb-8 px-3">

              <div class="flex">
                <div class="md:w-6/12">
                  <strong>Email</strong><br/>                
                  {{ staffDetails.email }}
                </div>
              </div>
              <div class="flex mt-3">
                <div class="md:w-6/12 ">
                  <strong>Phone</strong><br/>               
                  {{ staffDetails.phone }}
                </div>
              </div>
              <div class="flex mt-3">
                <div class="md:w-6/12">
                  <strong>Department</strong><br/>        
                  {{ staffDetails.department }}
                </div>
                <div class="md:w-6/12">
                  <strong>Working Days</strong><br/>             
                  {{ staffDetails.start_date }} to {{ staffDetails.end_date }}
                </div>
              </div>
              <div class="md:w-6/8">
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