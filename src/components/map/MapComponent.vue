<template>
    <div class="mt-10 lg:mx-20 md:mx-10 mx-5">
        <span class="md:text-3xl lg:text-4xl text-lg font-bold ">Campus Map</span><br>
        <!-- button filter each floor  -->
        <div class="flex flex-wrap md:justify-start mb-5">
            <button @click="showFloor('ground')" type="button" :class="{'fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2 lg:w-40': true, 'bg-002': currentFloor === 'ground'}">Ground Floor</button>
            <button @click="showFloor('first')" type="button" :class="{'fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2 lg:w-40': true, 'bg-002': currentFloor === 'first'}">First Floor</button>
            <button @click="showFloor('second')" type="button" :class="{'fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2 lg:w-40': true, 'bg-002': currentFloor === 'second'}">Second Floor</button>
            <button @click="showFloor('third')" type="button" :class="{'fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2 lg:w-40': true, 'bg-002': currentFloor === 'third'}">Third Floor</button>
        </div>
        <div class="list-of-compass lg:text-xl md:text-lg text-sm mx-5 mb-5">
            <ul class="list-disc flex flex-col md:flex-row lg:gap-20 md:gap-10">
                <li><strong>N:</strong> North direction</li>
                <li><strong>S:</strong> South direction</li>
                <li><strong>E:</strong> East direction</li>
                <li><strong>W:</strong> West direction</li>
            </ul>
        </div>
    </div>
    <div class="lg:mx-20 md:mx-10 mx-0">
        <svg class="svg" width="1094" height="906" viewBox="0 0 1094 906" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- ground floor  -->
            <g @mousemove="showTooltip" @mouseleave="hideTooltip" v-if="currentFloor === 'ground'" fill="none">
                <GroundFloor/>
            </g>
            <!-- first floor  -->
            <g @mousemove="showTooltip" @mouseleave="hideTooltip" v-if="currentFloor === 'first'">
                <FirstFloor/>
            </g>
            <!-- second floor  -->
            <g @mousemove="showTooltip" @mouseleave="hideTooltip" v-if="currentFloor === 'second'">
                <SecondFloor/>
            </g>
            <!-- top floor  -->
            <g @mousemove="showTooltip" @mouseleave="hideTooltip" v-if="currentFloor === 'third'">
                <TopFloor/>
            </g>
        </svg>
        
        <div class="description absolute text-textA lg:w-[30%] md:w-[30%] w-[70%] bg-white py-2 px-2 z-5 shadow-2xl border border-1" :style="tooltipStyle" v-if="isTooltipVisible">
            <span class="title font-bold">{{ tooltipContent }}</span><br />
            <span class="desc whitespace-normal break-all">{{ tooltipDesc }}</span>
        </div>
    </div>
</template>

<script>
import FirstFloor from './FirstFloor.vue';
import GroundFloor from './GroundFloor.vue';
import SecondFloor from './SecondFloor.vue';
import TopFloor from './TopFloor.vue';
export default {
    components:{
        FirstFloor, 
        GroundFloor,
        SecondFloor,
        TopFloor,
    },
    data() {
        return {
            currentFloor: "ground",
            isTooltipVisible: false,
            tooltipContent: "",
            tooltipDesc: "",
            tooltipStyle: {
                display: "none",
                left: 0,
                top: 0,
            },
        };
    },
    methods: {
        showTooltip(event) {
            this.isTooltipVisible = true;
            // Get the data-title and data-description attributes of the hovered element
            const title = event.target.getAttribute("data-title");
            const desc = event.target.getAttribute("data-description");
            // Set the tooltip content and description
            this.tooltipContent = title;
            this.tooltipDesc = desc;
            // Update the position of the tooltip
            this.tooltipStyle = {
                display: "block",
                left: `${event.clientX + window.scrollX}px`,
                top: `${event.clientY + window.scrollY}px`,
            };
        },
        hideTooltip() {
            this.isTooltipVisible = false;
            this.tooltipContent = "";
            this.tooltipDesc = "";
        },
        showFloor(floor){
            this.currentFloor = floor;
        }
    },
};
</script>

<style scoped>
    .description.active {
        display: block;
    }
    .description {
        pointer-events: none;
        text-align: center;
        line-height: 1.4;
        border-radius: 5px;
        transform: translate(-50%, -130%);
        display: none;
        white-space: nowrap;
    }
    .description::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        width: 0;
        height: 0;
        transform: translateX(-50%);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid white;
        pointer-events: none;
    }
    .fiter{
        border: 1px solid gray;
    }
    /* Styles for mobile devices */
    @media (min-width: 360px) {
        .svg {
            height: 10%;
            width: 100%;
        }
    }
</style>