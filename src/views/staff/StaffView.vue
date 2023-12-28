<template>
    <div class="md:mx-20 mx-10 mt-10">
        <span class="md:text-4xl lg:text-5xl text-xl font-bold ">Our staffs in each department</span><br>
        <div class="flex flex-wrap md:justify-start">
            <button type="button" class="fiter bg-002 mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">All</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Training Team</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Social Affair Team</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Project Team</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">External Relationship Team</button>
        </div>
        <div class="flex flex-wrap">
            <StaffComponent 
                v-for="(staff,index) in staffs" 
                :key="index"
                :staff="staff"
            />
        </div>
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

<style scoped>
    .fiter {
        border: 1px solid gray;
    }
</style>>