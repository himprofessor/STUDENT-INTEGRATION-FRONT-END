<template>
  <div class="department lg:w-[49%] lg:my-0 md:w-[48%] md:my-0 w-full mb-2">
    <div class="relative">
      <img :src="department.media_id" alt="Profile Image" class="w-full lg:h-60 md:h-52 h-48 object-cover object-top" />
      <div class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div class="text-white text-center px-4">
          <p class="font-bold text-2xl md:text-2xl lg:text-3xl text-left lg:ml-3">{{ department.department_name }}</p>
          <p v-html="department.description" class="lg:text-lg lg:ml-3 text-sm mt-2 text-left"></p>
        </div>
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