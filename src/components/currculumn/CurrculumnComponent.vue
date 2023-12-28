<template>
    <div class="flex flex-col justify-center md:h-full mt-5 ">
        <div v-for="(currculum, index) in currculums" :key="index" class="relative flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 md:mx-20 mx-5 mt-3 rounded-lg">
            <div class="md:w-1/5 grid md:place-items-center w-full">
                <img :src="require(`../../assets/currculumn/${currculum.image}`)" alt="currculum logo" class="md:h-32 md:w-1/2 w-96 h-48 my-3" />
            </div>
            <div class="md:w-5/6 bg-white flex flex-col space-y-2 md:p-3 font-nunito md:text-start pb-3">
                <h3 class="font-bold text-gray-800 md:text-3xl text-lg" >
                    {{currculum.title}}
                </h3>
                <p class="md:text-base text-gray-500 text-sm">
                    {{currculum.description}}
                </p>
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
                {image:"1.png", title:"Computer science", description:"Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationThe best kept secret of The Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destination"},
                {image:"2.png", title:"Mobile Developer", description:"Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationThe best kept secret of The Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destination"},
                {image:"3.png", title:"UX/UI", description:"Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destinationThe best kept secret of The Bahamas is the country's sheersize and diversity. With 16 major islands, The Bahamas is an unmatched destination"}
            ]
        }
    }
}
</script>

<style>

</style>