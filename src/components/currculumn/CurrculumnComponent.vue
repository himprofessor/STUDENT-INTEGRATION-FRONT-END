<template>
    <div class="flex flex-col justify-center md:h-full mt-5 ">
        <h1 class="lg:text-4xl md:text-3xl text-lg font-bold lg:my-6 md:my-5 lg:mx-20 md:mx-20 mx-5 ">Curriculum</h1>
        <div v-for="(currculum, index) in currculums" :key="index" class="relative flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 md:mx-20 mx-5 mt-3 rounded-lg">
            <div class="md:w-1/5 grid md:place-items-center w-full">
                <img :src="require(`../../assets/currculumn/${currculum.image}`)" alt="currculum logo" class="md:h-32 md:w-2/2 w-96 h-48 my-3" />
            </div>
            <div class="md:w-5/6 bg-white flex flex-col space-y-2 md:p-3 font-nunito md:text-start pb-3">
                <h3 class="font-bold text-gray-800 md:text-2xl text-lg" >
                    {{currculum.title}}
                </h3>
                <p class="md:text-base text-gray-500 text-sm">
                    {{truncateDescription(currculum.description) }}
                </p>
                <span @click="showFullDescription = !showFullDescription" class="text-blue-500 rounded flex items-center cursor-pointer mt-3">
                    {{ showFullDescription ? 'Read less' : 'Read more' }}
                    <svg class="h-5 w-5 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        "image",
        "title",
        "description",
    ],
    data(){
        return{
            currculums:[
                {image:"1.png", title:"Computer science", description:"With 16 major islands, The Bahamas is an unmatchedBahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatchedBahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationThe best kept secret of The Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destination"},
                {image:"2.png", title:"Mobile Developer", description:"Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationThe best kept secret of The Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationis an unmatched destination"},
                {image:"3.png", title:"UX/UI", description:"Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationThe best kept secret of The Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationis an unmatched destination"}
            ],
            showFullDescription: false,
        }
    },
    methods:{
        // lease text 
        truncateDescription(description) {
            if (description.length > 245 && !this.showFullDescription) {
                return description.slice(0, 245) + ' ' + '...';
            }
            return description;
        },
    }
}
</script>