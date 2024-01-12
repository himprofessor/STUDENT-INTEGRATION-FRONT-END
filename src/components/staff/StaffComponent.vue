<template>
  <div @click="openDialog" class="md:w-2/2 lg:w-72 w-80 pb-5 shadow-md border border-gray-200 rounded-lg my-3 bg-gray-100 cursor-pointer">
    <!-- department  -->
    <div class="bg-003 rounded-b-lg w-2/4 m-auto p-1">
      <p class="text-center text-white whitespace-normal font-normal text-xs">{{ staff.department }}</p>
    </div>
    <!-- image first and last name -->
    <div class="flex flex-col items-center justify-center my-5">
      <div class="w-20 h-20 rounded-full overflow-hidden mb-2">
        <img :src="staff.media_id" alt="Profile Image" class="w-full h-full object-cover"/>
      </div>
      <p class="text-center text-gray-900 whitespace-normal flex-wrap font-bold text-2xl">{{ staff.first_name }} {{ staff.last_name }}</p>
      <p class="text-center text-gray-900 whitespace-normal flex-wrap font-normal text-sm">{{ staff.position }}</p>
    </div>
    <!-- icon phone email -->
    <span class="flex justify-center">
      <svg class="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </span>
    <p class="text-center text-gray-900 whitespace-normal flex-wrap font-bold text-sm">Contact info</p>
    <p class="text-center text-gray-900 whitespace-normal flex-wrap font-normal text-xs">{{ staff.phone }}</p>
    <p class="flex whitespace-normal break-all text-center mx-3 justify-center text-gray-900 whitespace-normal flex-wrap font-normal text-xs">{{ staff.email }}</p>
  </div>
  <!-- StaffDialog component -->
  <StaffDialog v-if="dialogView" :staffDetails="staff" @close="closeDialog" />
</template>

<script>
import StaffDialog from "./StaffDialog.vue";

export default {
  props: {
    staff: Object,
  },
  data() {
    return {
     
      dialogView: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogView = true;
    },
    closeDialog() {
      this.dialogView = false;
    },
  },
  components: {
    StaffDialog,
  },
};
</script>

