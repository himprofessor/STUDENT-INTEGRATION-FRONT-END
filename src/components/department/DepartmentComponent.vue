<template>
  <div class="department lg:w-[49%] lg:my-0 md:w-[48%] md:my-0 w-full mb-2">
    <div class="relative">
      <img :src="department.media_id" alt="Profile Image" class="w-full lg:h-60 md:h-52  h-48 object-cover object-top"/>
      <div class="absolute inset-0 bg-black bg-opacity-40">
        <span class="absolute inset-10 lg:flex items-center md:flex items-center text-center flex items-center font-bold lg:text-4xl md:text-xl text-lg text-white">{{department.department_name}}</span>
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