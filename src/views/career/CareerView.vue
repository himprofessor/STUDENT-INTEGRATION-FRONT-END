<template>
  <div class="group-card">
    <CareerComponent/>
    <ImageComponent :images="imagesArray" />
  </div>
</template>

<script>
import CareerComponent from '../../components/career/CareerComponent.vue';
import ImageComponent from '../../components/career/ImageComponent.vue';

export default {
  components: {
    CareerComponent,
    ImageComponent,
  },
    data() {
    return {
      imagesArray: [
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/05/PNP_Centre1_-1.jpg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/05/DSC_0088-2.jpeg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/PNC_students_outside_classroom_2015-30.jpg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/PNC_students_outside_classroom_2015-30.jpg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/PNC_students_outside_classroom_2015-30.jpg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2019/01/IMG_8032-Copy.png",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/PNC_streetArt_in_mySchool_2015-10-1.jpg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/08/Become-our-partner-2.jpg",
        "https://www.passerellesnumeriques.org/wp-content/uploads/2016/06/DSC_1937.jpg",
      ],
    };
  },
}
</script>

<style>

</style>