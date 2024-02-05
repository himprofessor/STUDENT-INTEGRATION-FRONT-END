<template>
  <nav class="bg-white p-4">
    <div class="container mx-auto flex items-center justify-between ">
      <!-- Logo -->
      <router-link to="/">
        <img src="@/assets/logo-en.png" alt="Logo" class="h-8 w-auto"/>
      </router-link>

      <!-- Menu Items -->
      <div class="space-x-4">
        <router-link to="/" class="text-black">Home</router-link>
        <router-link to="/curriculum" class="text-black">Curriculum</router-link>
        <div class="relative inline-block text-black">
          <span @click="toggleStudentLife">Student's Life</span>
          <div v-if="showStudentLife" @click="toggleStudentLife" class="absolute z-10 top-full left-0 bg-gray-800 border border-gray-700 p-2 hidden">
            <router-link to="/club-activity" class="block text-black">Club and Event Activity</router-link>
          </div>
        </div>
        <router-link to="/department-staff" class="text-black">Department & Staff</router-link>
        <router-link to="/career-opportunity" class="text-black">Career Opportunity</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showStudentLife: false,
    };
  },
  methods: {
    toggleStudentLife() {
      this.showStudentLife = !this.showStudentLife;
    },
  },
};
</script>

<style scoped>
/* //tablets */
/* .container{
 background: #895d5d;
} */

@media creen and (min-width: 768){
.container{
 background: #895d5d;
 
  
}
}
</style>
