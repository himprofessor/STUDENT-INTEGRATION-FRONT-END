<template>
    <div class="department lg:w-1/2 lg:my-1 lg:p-2 md:w-80 md:my-3 w-80 my-2">
        <img :src="department.media_id" alt="Profile Image" class="w-full h-60" />
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