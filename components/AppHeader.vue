<template>
    <div class="flex justify-between items-center bg-white z-50 fixed top-0 w-full">
        <div class="flex justify-between items-center w-full md:w-5/6 px-3 md:px-0 py-5 mx-auto">
            <div>
                <NuxtLink to="/">
                    <AppLogo class="w-[100px]" />
                </NuxtLink>
            </div>
            <!-- lg menu -->
            <div class="hidden lg:flex  items-center gap-4">
                <NuxtLink class="linkAnimation" to="/">
                    What we do
                </NuxtLink>
                <NuxtLink class="linkAnimation" to="/faq">
                    FAQ
                </NuxtLink>
                <NuxtLink class="linkAnimation" to="/meetTeam">
                    Team
                </NuxtLink>
                <NuxtLink class="bg-[#FFC436] hover:bg-[#0174BE] hover:text-white py-3 px-5 rounded-xl cursor-pointer"
                    to="/#contact-form">
                    Join as an Early adopter
                </NuxtLink>
            </div>
            <!-- mobile menu button -->
            <button @click="isMobileOpen = !isMobileOpen" class="lg:hidden">
                <svg :class="{'block': !isMobileOpen, 'hidden': isMobileOpen}" xmlns="http://www.w3.org/2000/svg"
                    height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
                <svg :class="{'block': isMobileOpen, 'hidden': !isMobileOpen}" xmlns="http://www.w3.org/2000/svg"
                    height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </button>
    
            <!-- actual mobile menu -->
            <div :class="{'block': isMobileOpen, 'hidden': !isMobileOpen}"
                class="absolute top-[75px] left-0 right-0 py-10 bg-[#0174BE] font-medium">
                <div class="flex flex-col items-center gap-3 ">
                    <NuxtLink to="/" @click="isMobileOpen = !isMobileOpen"
                        class="cursor-pointer flex items-center h-full text-white hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                        What we do</NuxtLink>
                    <NuxtLink to="/faq" @click="isMobileOpen = !isMobileOpen"
                        class="cursor-pointer flex items-center h-full text-white hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                        FAQ</NuxtLink>
                    <NuxtLink to="/meetTeam" @click="isMobileOpen = !isMobileOpen"
                        class="cursor-pointer flex items-center h-full text-white hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                        Team</NuxtLink>
                    <NuxtLink class="bg-[#FFC436] hover:bg-[#0174BE] hover:text-white py-3 px-5 rounded-xl cursor-pointer"
                        to="/#contact-form" @click="isMobileOpen = !isMobileOpen">
                        Join as an Early adopter
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
    .linkAnimation {
        position: relative;
    }

    .linkAnimation:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: #FFC436;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    .linkAnimation:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
</style>

<script setup>
    let isMobileOpen = ref(false);
</script>