<template>
    <div class="sbg mt-10 md:mx-20 mx-10 mt-10">
        <span class="md:text-3xl lg:text-4xl text-lg font-bold ">Campus Map</span><br>
        <div class="flex flex-wrap md:justify-start mb-5">
            <button type="button" class="fiter bg-002 mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Ground Floor</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">First Floor</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Second Floor</button>
            <button type="button" class="fiter mt-5 focus:outline-none font-sm rounded-full text-sm px-5 py-2.5 text-center me-2">Third Floor</button>
        </div>
        
        <svg  @mousemove="showTooltip" @mouseleave="hideTooltip" width="1007" height="1254" viewBox="0 0 1007 1254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="enabled" data-title="Canteen" data-description="This is the description about canteen" x="308.5" y="0.5" width="698" height="1253" fill="#D9D9D9" stroke="white"/>
            <mask id="path-2-inside-1_283_102" fill="white">
                <path d="M0 834H308V1254H0V834Z"/>
            </mask>
            <path class="enabled" data-title="A01" data-description="This is the description about A01" d="M0 834H308V1254H0V834Z" fill="#D9D9D9"/>
            <path class="enabled" data-title="Girl WC" data-description="This is the description about Girl WC" d="M0 834V833H-1V834H0ZM0 1254H-1V1255H0V1254ZM0 835H308V833H0V835ZM308 1253H0V1255H308V1253ZM1 1254V834H-1V1254H1Z" fill="white" mask="url(#path-2-inside-1_283_102)"/>
            <rect class="enabled" data-title="B05" data-description="This is the description about B05" x="308.5" y="0.5" width="698" height="365" fill="#D9D9D9" stroke="white"/>
            <rect class="enabled" data-title="Girl WC" data-description="This is the description about Girl WC" x="719.5" y="366.5" width="287" height="101" fill="#D9D9D9" stroke="white"/>
            <rect class="enabled" data-title="B05" data-description="This is the description about B05" x="308.5" y="366.5" width="410" height="162" fill="#D9D9D9" stroke="white"/>
            <rect class="enabled" data-title="B05" data-description="This is the description about B05" x="308.5" y="529.5" width="410" height="185" fill="#D9D9D9" stroke="white"/>
            <rect class="enabled" data-title="Boy WC" data-description="This is the description about Boy WC" x="719.5" y="469.5" width="287" height="101" fill="#D9D9D9" stroke="white"/>
            <rect class="enabled" data-title="Storage" data-description="This is the description about storage room" x="719.5" y="571.5" width="287" height="143" fill="#D9D9D9" stroke="white"/>
        </svg>
        <div class="description" :style="tooltipStyle" v-if="isTooltipVisible">
            <span class="title">{{ tooltipContent }}</span>
            <br />
            <span class="desc">{{ tooltipDesc }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
    },
};
</script>

<style scoped>
    .enabled {
        cursor: pointer;
    }
    .description.active {
        display: block;
    }
    .description .title{
        font-weight: bold;
    }
    .enabled:hover {
        fill: #CC6600;
        transition: 0.3s;
    }
    .description {
        pointer-events: none;
        position: absolute;
        font-size: 18px;
        text-align: center;
        padding: 10px 15px;
        z-index: 5;
        height: auto;
        line-height: 1.4;
        margin: 0 auto;
        color: #21669e;
        border-radius: 5px;
        background-color: white;
        box-shadow: 0 0 0 1px #eee;
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
</style>