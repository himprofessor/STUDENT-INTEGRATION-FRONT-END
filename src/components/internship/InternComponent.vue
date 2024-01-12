<template>
  <div class="text-center lg:mx-20 md:mx-10 mx-5">
    <h1 class="text-center py-3 lg:text-3xl md:text-2xl text-xl font-bold">
      Internship Program at The End of Year 2
    </h1>
    <span v-html="truncateDescription(description)" />
    <div class="flex justify-center items-center text-center mb-5">
      <span @click="showFullDescription = !showFullDescription" class="text-blue-500 underline underline-offset-4 rounded flex items-center cursor-pointer mt-3">
        {{ showFullDescription ? 'Read less' : 'Read more' }}
        <svg class="h-4 w-5 text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="7 7 12 12 7 17" />
          <polyline points="13 7 18 12 13 17" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFullDescription: false,
      description: "The Department of Software Engineering aims to graduate world-class super engineers and global leaders by using cutting edge technologies and innovation-centric education to respond to the challenges of an ever-changing world. The Department of Software Engineering aims to graduate world-class super engineers and global leaders by using cutting edge technologies and innovation-centric education to respond to the challenges of an ever-changing world.",
    };
  },
  methods: {
    truncateDescription(description) {
      if (description.length > 245 && !this.showFullDescription) {
        return description.slice(0, 245) + " ...";
      }
      return description;
    },
  },
};
</script>