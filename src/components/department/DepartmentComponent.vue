<template>
  <div class="department lg:w-1/2 lg:my-1 lg:p-2 md:w-80 md:my-3 w-80 my-2">
    <div class="relative">
      <img :src="department.media_id" alt="Profile Image" class="w-full lg:h-60 md:h-52 object-cover object-center"/>
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