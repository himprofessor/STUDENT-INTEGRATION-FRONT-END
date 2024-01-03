<template>
  <div class="md:mx-20 mx-10">
    <span class="md:text-3xl lg:text-4xl text-lg font-bold">
      Our staffs in each department
    </span>
    
    <!-- list and filter department name-->
    <div class="flex flex-wrap md:justify-start mb-5">
      <button @click="filterDepartmentName('all')" 
        :class="{'fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2': true, 
        'bg-002': currentDepartment === 'all'}">All
      </button>
      <button @click="filterDepartmentName(departmentName.department_name)" 
        v-for="(departmentName, index) in departmentNames" :key="index" 
        :class="{'fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2': true, 
        'bg-002': currentDepartment === departmentName.department_name}">{{ departmentName.department_name }}
      </button>
    </div>

    <!-- loop for staff in each department name  -->
    <div class="flex flex-wrap lg:gap-3 md:gap-5">
      <StaffComponent 
        v-for="(staff, index) in filteredStaffs" 
        :key="index" 
        :staff="staff" 
      />
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
      currentDepartment: 'all',
      staffs: [],
      departmentNames: [],
    };
  },
  mounted() {
    this.fetchData();
    this.fetchDataDepartment();
  },
  methods: {
    // fetch data staffs
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

    // fetch data department
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

    // filter department name
    filterDepartmentName(departmentName) {
      this.currentDepartment = departmentName;
    },
  },

  // computed for filter each staff in each department 
  computed: {
    filteredStaffs() {
      if (this.currentDepartment === 'all') {
        return this.staffs;
      } else {
        return this.staffs.filter(staff => staff.department === this.currentDepartment);
      }
    }
  }
};
</script>

<style scoped>
.fiter {
  border: 1px solid gray;
}
</style>