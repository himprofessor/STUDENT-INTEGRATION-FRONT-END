<template>
    <SlideshowComponent />
    <DepartmentView />
    <div class="md:mx-20 mx-10">
        <span class="md:text-3xl lg:text-4xl text-lg font-bold ">Our staffs in each department</span><br>
        <div class="flex flex-wrap md:justify-start mb-5">
            <button type="button" class="fiter bg-002 mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">All</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Training Team</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Social Affair Team</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Project Team</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">External Relation Team</button>
        </div>
        <div class="flex flex-wrap lg:gap-3 md:gap-5">
            <StaffComponent 
                v-for="(staff,index) in staffs" 
                :key="index"
                :staff="staff"
            />
        </div>
    </div>
    <!-- map  -->
    <div class="campusmap md:mx-20 mx-10 mt-5">
        <span class="md:text-3xl lg:text-4xl text-lg font-bold ">Campus Map</span><br>
        <div class="flex flex-wrap md:justify-start mb-5">
            <button type="button" class="fiter bg-002 mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Ground Floor</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">First Floor</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">First Second</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">First Third</button>
        </div>
        <MapComponent />
    </div>
</template>

<script>
import MapComponent from '@/components/map/MapComponent.vue'
import DepartmentView from '@/views/department/DepartmentView.vue'
import StaffComponent from '@/components/staff/StaffComponent.vue'
import http from "@/http-common"
import SlideshowComponent from '@/components/slideshow/SlideshowComponent.vue'

export default {
    components:{
        StaffComponent,
        DepartmentView,
        MapComponent,
        SlideshowComponent
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
                    console.log("Error fetching data:", error);
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
</style>