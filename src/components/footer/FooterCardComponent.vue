<template>
    <div class="card-grid grid-cols-4 place-content-stretch rounded-md">
     <img :src="card.image" alt="Card Image" class="card-image mb-5" style="width: 100%; max-height: 200px;"/>
       <div class="font-bold text-xl">{{ card.title }}</div>
       <p class="text-gray-700 text-base">{{ card.description }}</p>
       <span @click="readMore(card)" class="text-blue-500 rounded flex items-center cursor-pointer mt-3">
         Read more
         <svg
           class="w-6 h-3 text-blue-400 dark:text-white ml-1"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </span>
     </div>
   </template>
   
   <script>
   export default {
     props: {
       card: Object,
       readMore: Function,
     },
   };
   </script>
  
 
