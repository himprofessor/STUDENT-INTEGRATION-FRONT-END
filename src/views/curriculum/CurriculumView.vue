<template>
  <CurrculumnComponent />
  <CourseView />
  <TermView />
  <InternShipView />
  <ImpactComponent />
</template>

<script>
import CurrculumnComponent from "@/components/currculumn/CurrculumnComponent.vue";
import CourseView from "@/views/course/CourseView.vue";
import InternShipView from "../internship/InternShipView.vue";
import ImpactComponent from "@/components/impact/ImpactComponent.vue";
import TermView from '../term/TermView.vue';

export default {
  components: {
    CurrculumnComponent,
    TermView,
    CourseView,
    InternShipView,
    ImpactComponent,
  },
};
</script>