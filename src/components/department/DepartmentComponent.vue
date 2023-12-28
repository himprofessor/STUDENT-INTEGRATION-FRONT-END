<template>
  <div class="department lg:w-1/2 lg:my-1 lg:p-2 md:w-80 md:my-3 w-80 my-2">
    <div class="relative">
      <img :src="department.media_id" alt="Profile Image" class="w-full lg:h-80 md:h-68"/>
      <div class="absolute inset-0 flex items-center bg-black bg-opacity-40">
        <span class="absolute inset-10 flex items-center font-bold lg:text-4xl md:text-3xl text-lg text-white">{{department.department_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    department: Object,
  },
  data() {
    return {};
  },
};
</script>