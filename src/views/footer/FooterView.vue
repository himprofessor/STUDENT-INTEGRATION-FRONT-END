<template>
    <div class="footer bg-003">
        <FooterCardComponent/>
        <FooterComponent/>
    </div>
</template>
<script>
import FooterCardComponent from "@/components/footer/FooterCardComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
export default{
    components:{
        FooterComponent,
        FooterCardComponent,
    }
}
</script>