<template>
  <div class="lg:mx-0 md:mx-0 mx-4 md:w-2/2">
    <div class="lg:mx-20 md:mx-10 mx-5 mg:justify-around mt-5">
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
      <div class="flex flex-wrap gap-3">
        <StaffComponent 
          v-for="(staff, index) in displayedItems" 
          :key="index" 
          :staff="staff" 
        />
      </div>
    </div>
  </div>
  <MapComponent/>
  <div aria-label="pagination">
    <ul class="inline-flex -space-x-px text-sm my-5 lg:mx-20 md:mx-10 mx-5">
      <li>
        <a :disabled="currentPage === 1" @click="previousPage" class="flex items-center justify-center px-3 h-10 leading-tight text-black bg-white hover:bg-003 border border-e-0 border-blue-300 rounded-s cursor-pointer">Previous</a>
      </li>
      <li v-for="page in totalPages" :key="page">
        <a :class="{'text-textA font-bold border border-blue-500': page === currentPage}" class="flex items-center justify-center px-3 h-10 leading-tight bg-white border border-blue-300">{{page}}</a>
      </li>
      <li>
        <a :disabled="currentPage === totalPages" @click="nextPage" class="flex items-center justify-center px-3 h-10 leading-tight text-black bg-white hover:bg-003 border border-blue-300 rounded-e cursor-pointer">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
import StaffComponent from "@/components/staff/StaffComponent.vue";
import MapComponent from '@/components/map/MapComponent.vue';
import http from "@/http-common";

export default {
  components: {
    StaffComponent,
    MapComponent,
  },
  data() {
    return {
      pageRow: 12,
      currentPage: 1,
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
    // pagination
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },

  computed: {
    //filter staff in each department 
    filteredStaffs() {
      if (this.currentDepartment === 'all') {
        return this.staffs;
      } else {
        return this.staffs.filter(staff => staff.department === this.currentDepartment);
      }
    },
    // pagination 
    totalPages() {
      return Math.ceil(this.filteredStaffs.length / this.pageRow);
    },
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.pageRow;
      const endIndex = startIndex + this.pageRow;
      return this.filteredStaffs.slice(startIndex, endIndex);
    },
  }
};
</script>
<style scoped>
.fiter {
  border: 1px solid gray;
}
</style>