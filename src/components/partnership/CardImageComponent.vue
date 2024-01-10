<template>
  <div class="lg:mx-20 md:mx-10 mx-5 justify-center my-5">
    <div class="flex flex-wrap gap-3 mb-2 justify-center rounded-md">
      <div v-for="(item, index) in items" :key="index" class="shadow-md flex items-center justify-center lg:w-72 md:w-52 w-full lg:h-52 md:h-52 h-72 rounded-md hover:border-blue-500 border-2">
        <img :src="item.image" alt="Card Image" class="card-image mb-5 w-40 h-40 rounded-full outline-none border-gray-200 border-2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    items: Array,
  }
};
</script>