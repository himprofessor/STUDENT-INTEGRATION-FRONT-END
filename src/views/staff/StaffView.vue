<template>
  <div class="md:mx-20 mx-10">
    <span class="md:text-3xl lg:text-4xl text-lg font-bold"
      >Our staffs in each department</span
    ><br />
    <!-- loop department for filter department name  -->
    <div class="flex flex-wrap md:justify-start mb-5">
        <button v-for="(departmentName, index) in departmentNames" :key="index" class="fiter bg-002 mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">
            {{ departmentName.department_name }}
        </button>
    </div>
    <!-- loop for list staff in each department name -->
    <div class="flex flex-wrap lg:gap-3 md:gap-5">
      <StaffComponent
        v-for="(staff, index) in staffs"
        :key="index"
        :staff="staff"/>
    </div>
  </div>
</template>

<script>
import StaffComponent from "@/components/staff/StaffComponent.vue";
import http from "@/http-common";

export default {
  components: {
    StaffComponent,
  },
  data() {
    return {
      staffs: [],
      departmentNames: [],
    };
  },
  methods: {
    fetchData() {
      http
        .get("api/staff-list/list")
        .then((response) => {
          this.staffs = response.data.data;
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    },
    fetchDataDepartment() {
      http
        .get("api/department-list/list")
        .then((response) => {
          this.departmentNames = response.data.data;
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();
    this.fetchDataDepartment();
  },
};
</script>

<style scoped>
.fiter {
  border: 1px solid gray;
}
</style>