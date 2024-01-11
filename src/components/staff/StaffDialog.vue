<template>
  <!-- dialog -->
  <div
    class="dialog fixed lg:top-5 lg:right-0 lg:left-0 md:top-20 md:right-0 md:left-0 top-20 right-0 left-0 z-50 m-auto shadow lg:w-8/12 rounded-lg"
  >
    <div class="relative">
      <!-- Modal content -->
      <div
        v-if="staffDetails"
        id="popup-modal"
        tabindex="-1"
        class="relative bg-white dark:bg-gray-700 rounded-lg w-70"
      >
        <!-- Modal header -->
        <div
          class="flex items-center justify-between md:p-2 border-b dark:border-gray-600 sticky top-0"
        >
          <span class="w-9/12 lg:pl-0 md:pl-0 pl-3">
            <span class="lg:text-2xl md:text-xl text-lg font-semibold ml-4"
              >Detail Information Staff</span
            >
          </span>
          <button
            @click="closeDialog"
            class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out"
          >
            <svg
              class="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <!-- Modal body -->
        <div
          class="flex detail p-4 md:p-5 h-[480px] overflow-y-auto overflow-x-hidden"
        >
          <!-- left  -->
          <div class="left w-50">
            <div class="card1 border-r-2 w-80 p-8">
              <img
                :src="staffDetails.media_id"
                alt="Staff Image"
                class="w-21 h-21 rounded-full mb-4 bg-blue-500 mx-auto"
              />
              <h1 class="lg:text-3xl font-medium text-gray-900 text-center">
                {{ staffDetails.first_name }} {{ staffDetails.last_name }}
              </h1>
              <div class="w-full">
                <strong>Position : </strong>
                {{ staffDetails.position }}
              </div>
            </div>
          </div>

          <!-- right  -->
          <div class="right ml-5">
            <div class="flex flex-wrap w-full">
              <div class="flex justify-between w-full">
                <div>
                  <strong>Email : </strong><br />
                  {{ staffDetails.email }}
                </div>
                <div>
                  <strong>Phone : </strong><br />
                  {{ staffDetails.phone }}
                </div>
              </div>

              <div class="flex justify-between w-full">
                <div>
                  <strong>Department : </strong><br />
                  {{ staffDetails.department }}
                </div>
                <div>
                  <strong>Working Days : </strong><br />
                  {{ staffDetails.start_date }} to {{ staffDetails.end_date }}
                </div>
              </div>
            </div>
            <!-- about  -->
            <div class="col-md-6 text-wrap">
              <strong>About Staff : </strong><br />
              {{ staffDetails.about }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="staffDetails"
    class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20"
  ></div>
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