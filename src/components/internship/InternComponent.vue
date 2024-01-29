<template>
  <div class="text-center lg:mx-20 md:mx-10 mx-5">
    <h1 class="text-center py-3 lg:text-3xl md:text-2xl text-xl font-bold">
      Internship Program at The End of Year 2
    </h1>
    <span>{{ truncateDescription(description) }}</span>
    <div class="flex justify-center items-center text-center mb-5" v-if="description.length > 450">
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
      description: "Since 2005, 1,485 young people graduated from Passerelles numériques Cambodia and over 625 of them are active members of the alumni association. Founded in 2008, PNC Alumni Association organises many activities such as professional workshops, an annual football contest, party, charity trip, etc. They support financially some of PNC’s activities such as the Graduation Ceremony. PNC Alumni Association also closely supports the External Relations department in the guidance to employment program (internship and job search, training courses for students and leadership skills, entrepreneurship, Since 2012, PN Cambodia alumni joined the Solidarity Act program after graduating and finding a job. Each month, they give back a small amount to PNC to contribute to the future generations of students.",
    };
  },
  methods: {
    truncateDescription(description) {
      const maxLength = 450;
      if (description.length > maxLength && !this.showFullDescription) {
        return description.slice(0, maxLength) + " ...";
      }
      return description;
    },
  },
};
</script>