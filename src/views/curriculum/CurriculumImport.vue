<template>
    <CurriculumView/>
    <CourseView/>
    <TermView/>
    <InternshipProgramView/>
    <ImpactComponent/> 
</template>

<script>
import CurriculumView from './CurriculumView.vue';
import TermView from '@/views/term/TermView.vue'
import CourseView from '@/views/course/CourseView.vue'
import ImpactComponent from '@/components/impact/ImpactComponent.vue';
import InternshipProgramView from '@/views/internship_program/InternshipView.vue';
export default{
    components:{
        CurriculumView,
        TermView,
        CourseView,
        InternshipProgramView,
        ImpactComponent
    }
}
</script>