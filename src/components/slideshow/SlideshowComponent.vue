<template>
    <div class="slides relative h-56 overflow-hidden md:h-96">
        <button-component v-slot="{ currentSlides }">
            <carousel-component v-for="(slide, index) in slideshows" :key="index">
                <div v-show="currentSlides === index + 1" class="duration-700 ease-in-out">
                    <div class="absolute inset-0">
                        <img :src="require(`../../assets/slideshow/${slide.image}`)" class="absolute block w-full h-full object-cover" alt="">
                        <div v-if="slide.title || slide.description" class="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                    <span class="absolute text-white inset-20 flex items-center">
                        <div class="w-full text-center md:block md:w-2/4 md:text-start">
                            <p v-if="slide.title || slide.description" class="uppercase font-bold text-2xl mb-1 md:text-5xl md:mb-3">{{ slide.title }}</p>
                            <p class="text-xs md:text-2xl">{{ slide.description }}</p>
                        </div>
                    </span>
                </div>
            </carousel-component>
        </button-component>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import CarouselComponent from './CarouselComponent.vue';

export default {
    components: { ButtonComponent, CarouselComponent },
    setup() {
        const slideshows = [
            { image: 'slide1.png', title: '', description: ''},
            { image: 'slide2.png', title: 'Professional Life', description: 'Code Camp is an intensive short working professionals about coding'},
            { image: 'slide3.png', title: 'IT Support', description: 'To make the text white in your code snippet Camp is an intensive short working professionals' },
            { image: 'slide4.png', title: 'Mobile Development', description: 'Camp is an intensive short Code Camp is an intensive short working professCamp is an intensive short working professionals' },
            { image: 'slide5.png', title: 'school environment5', description: 'To make the text white in your code Code Camp is an intensive short snippet' },
        ];
        return {slideshows}
    }
}
</script>