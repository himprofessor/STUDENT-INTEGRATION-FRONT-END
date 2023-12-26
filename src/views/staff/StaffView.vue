<template>
    <div class="flex flex-wrap justify-between mx-20">
        <StaffComponent 
            v-for="(staff,index) in staffs" 
            :key="index"
            :staff="staff"
        />
    </div>
</template>

<script>
import StaffComponent from '@/components/staff/StaffComponent.vue'
import http from "@/http-common"

export default {
    components:{
        StaffComponent
    },
    data(){
        return {
            staffs:[],
        };
    },
    methods: {
        fetchData(){
            http
                .get("api/staff-list/list")
                .then((response) =>{
                    this.staffs = response.data.data;
                })
                .catch((error) =>{
                    console.log("Error fetching dasta:", error);
                });
        },
    },
    mounted(){
        this.fetchData();
    },
}
</script>

<style>

</style>