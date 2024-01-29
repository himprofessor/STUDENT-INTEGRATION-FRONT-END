<template>
    <CurriculumView/>
    <SubjectComponent/>
    <TermsComponent/>
    <InternShipView/>
    <ImpactComponent/> 
</template>

<script>
import CurriculumView from './CurriculumView.vue';
import TermsComponent from '@/components/term/TermsComponent.vue';
import SubjectComponent from '@/components/subject/SubjectComponent.vue';
import InternShipView from '../internship/InternShipView.vue';
import ImpactComponent from '@/components/impact/ImpactComponent.vue';

export default{
    components:{
        CurriculumView,
        TermsComponent,
        SubjectComponent,
        InternShipView,
        ImpactComponent
    }
}
</script>