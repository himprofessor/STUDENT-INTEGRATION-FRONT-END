<template>
    <DepartmentView />
    <StaffView />
</template>

<script>
import DepartmentView from '../department/DepartmentView.vue'
import StaffView from '../staff/StaffView.vue'
export default {
    components:{
        DepartmentView, 
        StaffView
    }
}
</script>