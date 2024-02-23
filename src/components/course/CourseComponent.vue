<template>
  <div class="rounded-md lg:w-[49.4%] md:w-[49%] w-full">
    <div class="text-center mx-10 my-10">
      <h5 class="mb-5 text-xl md:text-2xl font-bold">
        {{course.course_name}}
      </h5>
      <p v-html="course.course_description" class="text-dark"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    course: Object,
  },
  data() {
    return {};
  },
};
</script>