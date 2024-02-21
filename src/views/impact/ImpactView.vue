<template>
    <div class="bg-002 text-white my-10">
        <div >
            <h1 class="p-4 text-center lg:text-3xl md:text-2xl text-xl font-bold text-white" >
                Impact
            </h1>
            <p
                class="flex whitespace-normal break-all text-center mx-3 justify-center text-white whitespace-normal flex-wrap font-normal lg:text-xl sm:px-16 xl:px-47"> 
                Once they have found a job, all our graduates support their family and
                their community. On average, our alumni give back 31% of their salary to
                their families.
            </p>
        </div>
        <div class="w-full flex flex-wrap dark:text-white text-center justify-center">
            <div v-for="(impact,index) in impacts" :key="index" class="pair-container lg:w-[18%] md:w-[45%] w-full">
                <div class="my-5">
                    <!-- //Loop in icons svg-->
                    <div class="card-image mb-5 w-36 h-36 rounded-full outline-none border-gray-200 bg-gray-300 border-2 flex items-center justify-center m-auto">
                        <div v-html="icons[index % icons.length].icon"></div>
                    </div>
                    <p class="mb-2 text-3xl md:text-2xl">{{ impact.data }}</p>
                    <p v-html="impact.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import http from "@/http-common";

export default {
    data() {
    return {
        impacts: [],
        icons: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" height="72" width="72" viewBox="0 0 640 512">
                    <path d="M622.3 153.2L343.4 67.5c-15.2-4.7-31.6-4.7-46.8 0L17.7 153.2c-23.5 7.2-23.5 38.4 0 45.6l48.6 14.9c-10.7 13.2-17.2 29.3-17.9 46.9C38.8 266.2 32 276.1 32 288c0 10.8 5.7 19.9 13.9 25.7L20.3 428.5C18.1 438.5 25.7 448 35.9 448h56.1c10.2 0 17.8-9.5 15.6-19.5L82.1 313.7C90.3 307.9 96 298.8 96 288c0-11.6-6.5-21.3-15.7-26.9 .8-15 8.4-28.3 20.7-36.7L296.6 284.5c9.1 2.8 26.4 6.3 46.8 0l279-85.7c23.6-7.2 23.6-38.4 0-45.6zM352.8 315.1c-28.5 8.8-52.8 3.9-65.6 0l-145-44.6L128 384c0 35.4 86 64 192 64s192-28.7 192-64l-14.2-113.5-145 44.6z"/>
                </svg>`
            },
            {
                icon: `<svg class="h-16 w-16 text-black" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/> <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /> <path d="M12 3v3m0 12v3" />
                        </svg>`
            },
            {
                icon: `<svg class="h-16 w-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>`
            },
            {
                icon: `<svg class="h-16 w-16 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>  `
            },
        ]
    };
},
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
        .get("api/impact/list")
        .then((response) => {
          console.log("API Response:", response);
          this.impacts = response.data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          this.impacts = this.impacts.slice(0, 4);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
