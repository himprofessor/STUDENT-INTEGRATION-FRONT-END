<template>
  <div class="g-title text-center mx-20">
    <h1 class="text-center p-5 text-3xl font-bold">Internship Program at The End of Year 2</h1>
    <p>
      The Department of Software Engineering aims to graduate world-class super
      engineers and global leaders by using cutting edge technologies and
      innovation-centric education to respond to the challenges of an
      ever-changing world.
    </p>
    <div class="flex justify-center items-center text-center">
      <span
        @click="readMore"
        class="text-blue-500 underline underline-offset-4 rounded flex items-center cursor-pointer mt-3"
      >
        Read more
        <svg
          class="h-4 w-5 text-blue-400"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
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
  methods: {
    readMore() {
      console.log('Read more clicked');
    }
  }
}
</script>
