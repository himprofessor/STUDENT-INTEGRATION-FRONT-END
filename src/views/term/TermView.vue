<template>
    <div class="lg:mx-20 md:mx-10 mx-5">
        <h1 class="text-center lg:text-3xl md:text-2xl text-xl font-bold my-5">
            There will be separated into four terms such as:
        </h1>
        <!-- table  -->
        <div class="flex justify-center items-center">
            <div class="overflow-x-auto w-full">
                <table class="table-auto border-collapse border-1 border-gray-500 sm:overflow-x-auto w-full">
                    <thead>
                        <tr>
                            <th class="border border-gray-400 px-4 py-2 lg:text-lg md:text-lg text-sm">Terms</th>
                            <th v-for="(course, index) in courses" :key="index" class="border border-gray-400 px-4 py-2 lg:text-lg md:text-lg text-sm">{{ course.course_name }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="lg:text-lg md:text-lg text-xs" v-for="(term, index) in terms" :key="index">
                            <td class="border border-gray-400 px-4 py-2 lg:text-lg md:text-lg text-sm">{{ term.term }}</td>
                            <td v-for="(course, index) in courses" :key="index" class="border border-gray-400 px-4 py-2">
                                <div v-for="(subject, index) in subjects" :key="index">
                                    <ul v-if="subject.course_name === course.course_name && subject.term_name === term.term && subject.subject_name" class="lg:text-lg md:text-lg text-xs">
                                        <li>- {{ subject.subject_name }}</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/http-common";

export default {
    data() {
        return {
            terms: [],
            courses: [],
            subjects: [],
        };
    },
    mounted() {
        this.fetchDataCourse();
        this.fetchDataTerm();
        this.fetchDataSubject();
    },
    methods: {
        // course fetchdata
        fetchDataCourse() {
            http
                .get("api/course/list")
                .then((response) => {
                    this.courses = response.data.data;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        },
        // term fetchdata
        fetchDataTerm() {
            http
                .get("api/term/list")
                .then((response) => {
                    this.terms = response.data.data;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        },
        // subject fetchdata
        fetchDataSubject() {
            http
                .get("api/subject/list")
                .then((response) => {
                    this.subjects = response.data.data;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        },
    },
};
</script>