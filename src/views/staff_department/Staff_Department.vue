<template>
    <!-- <div class="mt-0"> -->
        <DepartmentView />
        <StaffView />
        <MapComponent />
    <!-- </div> -->
</template>

<script>
import MapComponent from '../../components/map/MapComponent.vue'
import DepartmentView from '../department/DepartmentView.vue'
import StaffView from '../staff/StaffView.vue'
export default {
    components:{
        DepartmentView, 
        StaffView,
        MapComponent
    }
}
</script>