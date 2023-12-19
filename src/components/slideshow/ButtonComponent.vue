<template>
    <div class="carousel">
        <slot :currentSlides="currentSlides" />
    </div>
    
    <div class="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-4 rtl:space-x-reverse">
        <!-- prevous  -->
        <button @click="onPrevous">
            <svg class="w-4 h-3 text-white dark:text-gray-400 rtl:rotate-180 hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </button>
        
        <!-- indicators  -->
        <button @click="onIndicator(index)" v-for="(slide, index) in getSlideCount" :key="index" type="button" :class="{active:index + 1 === currentSlides}" class="w-3 h-3 rounded-full bg-white bg-opacity-30 text-white-400 dark:text-gray-400 font-normal hidden md:block" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
       
        <!-- next  -->
        <button @click="onNext">
            <svg class="w-4 h-3 text-white dark:text-gray-400 rtl:rotate-180 hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup(){
        const currentSlides = ref(1);
        const getSlideCount = ref(null);
        const autoPlayEnabled = ref(true);
        const timeoutDuration = ref(7000);

        // next button 
        const onNext =()=>{
            if(currentSlides.value === getSlideCount.value){
                currentSlides.value = 1;
                return;
            }
            currentSlides.value += 1;
        };
        // prevous button 
        const onPrevous =()=>{
            if (currentSlides.value === 1) {
                currentSlides.value = getSlideCount.value;
                return;
            }
            currentSlides.value -= 1;
        }
        // indicators
        const onIndicator =(index)=>{
            currentSlides.value = index + 1
        }
        //autoplay
        const autoPlay =()=>{
            setInterval(()=>{
                onNext();
            }, timeoutDuration.value);
        }
        if(autoPlayEnabled.value){
            autoPlay();
        }

        onMounted(() =>{
            getSlideCount.value = document.querySelectorAll(".slide").length ;
        })
        return {
            currentSlides,
            getSlideCount,
            onNext,
            onPrevous,
            onIndicator
        }
    }
}
</script>

<style  scoped>
.active{
    background-color: #e2eaee;
}
</style>