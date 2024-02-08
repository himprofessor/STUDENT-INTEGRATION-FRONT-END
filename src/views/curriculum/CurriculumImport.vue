<template>
    <CurriculumView/>
    <CourseView/>
    <TermView/>
    <InternShipView/>
    <ImpactView/> 
</template>

<script>
import CurriculumView from './CurriculumView.vue';
import TermView from '@/views/term/TermView.vue'
import CourseView from '@/views/course/CourseView.vue'
import InternShipView from '@/views/internship_program/InternshipView.vue';
import ImpactView from '@/views/impact/ImpactView.vue';

export default{
    components:{
        CurriculumView,
        TermView,
        CourseView,
        InternShipView,
        ImpactView
    }
}
</script>