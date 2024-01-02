<template>
  <div class="md:mx-20 mx-10 md:my-8 my-4">
    <div class="flex flex-wrap mt-3 lg:gap-0 md:gap-5">
      <DepartmentComponent
        v-for="(department, index) in departments"
        :key="index"
        :department="department"
      />
    </div>
  </div>
</template>

<script>
import DepartmentComponent from "@/components/department/DepartmentComponent.vue";
import http from "@/http-common";

export default {
  components: {
    DepartmentComponent,
  },
  data() {
    return {
      departments: [],
    };
  },
  methods: {
    fetchData() {
      http
        .get("api/department-list/list")
        .then((response) => {
          this.departments = response.data.data;
          console.log(this.departments);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>