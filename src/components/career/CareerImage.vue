<template>
  <div class="w-full">
    <div class="relative transition-all w-full duration-300 cursor-pointer">
      <img :src="require(`../../assets/slideshow/slide4.png`)" class="w-full h-full min-h-0 object-cover" alt="">
      <div class="absolute font-bold text-3xl text-white mb-1 md:text-3xl text-center md:mb-3 lg:bottom-44 md:bottom-24 bottom-10 mx-4 md:mx-40">
        <p class="text-sm md:text-xl lg:text-4xl mx-10 lg:mx-20 md:mx-10">
          Do you want to get notified when a new component is added to Flowbite?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* Tailwind CSS responsive classes */
@media (max-width: 639px) {
  /* Small screens (mobile) - 1 column */
  .bg-002 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  /* Medium screens (landscape phones) - 1 column */
  .bg-002 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  /* Medium screens (tablets) - 2 columns */
  .bg-002 {
    grid-template-columns: repeat(2, 1fr);
  }

  .figcaption {
    grid-column: span 2; /* Make the caption span two columns on tablets */
  }
}

/* Add more media queries for larger screens if needed */
</style>
