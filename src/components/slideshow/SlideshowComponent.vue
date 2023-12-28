<template>
    <div class="slides relative h-56 overflow-hidden md:h-96">
        <button-component v-slot="{ currentSlides }">
            <carousel-component v-for="(slide, index) in slideshows" :key="index">
                <div v-show="currentSlides === index + 1" class="duration-700 ease-in-out">
                    <div class="absolute inset-0">
                        <img :src="require(`../../assets/slideshow/${slide.image}`)" class="absolute block w-full h-full object-cover" alt="">
                        <div v-if="slide.heading || slide.description" class="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                    <span class="absolute text-white inset-20 flex items-center">
                        <div class="w-full text-center md:block md:text-start">
                            <p v-if="slide.heading || slide.description" class="font-bold text-2xl mb-1 md:text-5xl md:mb-3">{{ slide.heading }}</p>
                            <p class="text-xs md:text-2xl">{{ slide.description }}</p>
                        </div>
                    </span>
                </div>
            </carousel-component>
        </button-component>
    </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import CarouselComponent from "./CarouselComponent.vue";

export default {
    components: { ButtonComponent, CarouselComponent },
    setup() {
        const slideshows = [
            { image: 'slide1.png', heading: 'Passerellesnumeriques Cambodai', description: 'Welcome class 2025 for coming and join with our mission to get a better life in future!'},
            { image: 'slide2.png', heading: 'Passerellesnumeriques Cambodai Family', description: 'Welcome class 2025 for coming and join with our mission to get a better life in future!'},
            { image: 'slide3.png', heading: 'Passerellesnumeriques Cambodai Building', description: 'Our School still support all of you all the time you need us' },
            { image: 'slide4.png', heading: '', description: '' },
            { image: 'slide5.png', heading: 'Giveaway a bicycle for girls', description: 'To make sure all of the girls at pn will recive it' },
        ];
        return {slideshows}
    }
}
</script>