<!-- CareerComponent.vue -->
<template>
  <div class="card flex flex-col md:flex-row bg-003">
    <div class="md:w-2/5 lg:w-1/2 grid md:place-items-center w-full">
      <img
        :src="externalImageUrl"
        alt="Career Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="md:w-5/6 bg-white shadow-md flex flex-col space-y-2 md:p-3 font-nunito md:text-start pb-3">
      <div class="mb-2">
        <p class="text-lg font-bold">{{ career.job_title }}</p>
      </div>
      <div class="mb-2">
        <p class="text-gray-500">{{ career.job_description }}</p>
      </div>
      <div class="mb-2">
        <p class="text-gray-600">salary: 200$ - 500$</p>
      </div>
      <!-- Add more content as needed -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      externalImageUrl: "https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/PNC_students_outside_classroom_2015-30.jpg",
    };
  },
  props: {
    career: {
      type: Object,
      required: true,
    },
  },
};
</script>
