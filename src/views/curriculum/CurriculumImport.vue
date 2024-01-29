<template>
    <CurriculumView/>
    <CourseView/>
    <TermView/>
    <InternShipView/>
    <ImpactComponent/> 
</template>

<script>
import CurriculumView from './CurriculumView.vue';
import TermView from '@/views/term/TermView.vue'
import CourseView from '@/views/course/CourseView.vue'
import InternShipView from '../internship/InternShipView.vue';
import ImpactComponent from '@/components/impact/ImpactComponent.vue';

export default{
    components:{
        CurriculumView,
        TermView,
        CourseView,
        InternShipView,
        ImpactComponent
    }
}
</script>