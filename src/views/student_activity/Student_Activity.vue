<template>
  <div>  
    <ActivityImage/>
    <Club_Activity/>
    <Study_Activity/>
    <Sport_Activity/>
    <Weekly_Activity/>
   <Movie_Activity/>
  </div>
</template>

<script>
import ActivityImage from '@/components/student_activity/ActivityImage.vue';
import Club_Activity from '@/components/student_activity/Club_Activity.vue';
import Study_Activity from '@/components/student_activity/Study_Activity.vue';
import Sport_Activity from '@/components/student_activity/Sport_Activity.vue';
import Weekly_Activity from '@/components/student_activity/Weekly_Activity.vue';
import Movie_Activity from '@/components/student_activity/Movie_Activity.vue';

export default {
  components: {
    ActivityImage,   
    Club_Activity,
    Study_Activity,
    Sport_Activity,
    Weekly_Activity,
    Movie_Activity,
    
  },  
}
</script>