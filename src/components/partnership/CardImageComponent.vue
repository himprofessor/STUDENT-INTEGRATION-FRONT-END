<template>
  <div class="mx-20 justify-center my-5">
    <div class="flex flex-wrap gap-2 mb-2 justify-center rounded-md">
      <div v-for="(item, index) in items" :key="index" class="shadow-md flex items-center justify-center lg:w-72 h-60 rounded-md outline-none hover:border-blue-500 border-2">
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

<style>

</style>
