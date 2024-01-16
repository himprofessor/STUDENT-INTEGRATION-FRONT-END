<template>
  <div>
    <CurrculumnComponent/>
    <SubjectComponent/>
    <TermsComponent/>
    <InternShipView/>
   <ImpactComponent/>
  </div>
</template>
<script>
import CurrculumnComponent from '@/components/currculumn/CurrculumnComponent.vue';
import TermsComponent from '@/components/term/TermsComponent.vue';
import SubjectComponent from '@/components/subject/SubjectComponent.vue';
import InternShipView from '../internship/InternShipView.vue';
import ImpactComponent from '@/components/impact/ImpactComponent.vue';
export default {
  components: {
    CurrculumnComponent,
    TermsComponent,
    SubjectComponent,
    InternShipView,
    ImpactComponent
  }
}
</script>

 