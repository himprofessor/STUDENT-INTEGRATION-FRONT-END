<template>
  <div class="lg:mx-20 md:mx-10 mx-5">
    <div class="flex flex-wrap lg:gap-3 md:gap-5">
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