<template>
  <div id="app" class="bg-gray-100 p-8 ">
      <StaffComponent :staffs="staffs"/>
  </div>
</template>
<script>
import StaffComponent from "./components/staff/StaffComponent.vue";

export default {
  components: {
    StaffComponent,
  },
};
</script>

