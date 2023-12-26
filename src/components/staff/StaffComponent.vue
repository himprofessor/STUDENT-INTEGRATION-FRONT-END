<template>
  <div class="w-96 my-5 px-5 py-5 rounded-lg shadow shadow-gray-500">
    <div class="bg-red-100 rounded-md department font-bold flex justify-center">
      <p class="font-normal text-stone-600"> {{ staff.department }}</p>
    </div>

    <div class="flex flex-col items-center justify-center mt-4">
      <div class="w-20 h-20 rounded-full overflow-hidden mb-2">
        <img :src="staff.media_id" alt="Profile Image" class="w-full h-full object-cover"/>
      </div>
      <p class="dark:text-dark text-sm font-bold uppercase tracking-wide text-center">{{ staff.first_name }} {{ staff.last_name }}</p>
      <p class="font-normal text-stone-700 mb-2">{{ staff.position }}</p>
    </div>

    <div class="flex">
      <div class="icon">
        <svg class="w-4 h-4 text-stone-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"></path>
        </svg>
      </div>
      <p class="w-11/12 flex whitespace-normal flex-wrap font-normal text-sm text-stone-500 ml-1">{{ staff.email }}</p>
    </div>

    <div class="flex">
      <div class="icon">
        <svg class="w-4 h-4 text-stone-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.4-.5-3.6 0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4V19m-4-7h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7Z"></path>
        </svg>
      </div>
      <p class="w-11/12 flex whitespace-normal flex-wrap font-normal text-sm text-stone-500 ml-1">{{ staff.phone }}</p>
    </div>

    <div class="flex">
      <div class="icon">
        <svg class="w-4 h-4 text-stone-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
      </div>
      <p class="w-11/12 flex whitespace-normal flex-wrap font-normal text-sm text-stone-500 ml-1">{{ staff.start_date }} - {{ staff.end_date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    staff: Object,
  },
  data() {return {}},
};
</script>
