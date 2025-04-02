<template>
    <div class="lg:w-2/3 mx-auto">
        <div class="h-screen flex justify-center items-center">
            <div>
                <h1 id="teamAnimation" class="text-center text-3xl font-semibold">
                    Meet our team
                </h1>
                <svg class="mx-auto my-5 blink" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="black">
                    <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                </svg>
            </div>
        </div>
        <div id="scrollStart" class="my-0 pt-32 h-screen">
            <div class="teamMember1 flex justify-end mt-0">
                <div class="relative w-fit me-[20%]">
                    <figure class="w-[200px] aspect-square bg-slate-200 rounded-2xl">
                        <img src="" alt="">
                    </figure>
                    <div class="absolute top-1/3 -right-32">
                        <h3 class="font-bold text-2xl text-[#0174BE]">Gabriele Main</h3>
                        <h6 class="font-medium text-lg">Founder</h6>
                        <div class="bg-[#FFC436] h-[2px] w-[65px]"></div>
                    </div>
                </div>
            </div>
            <div class="teamMember2">
                <div class="relative w-fit ms-[15%]">
                    <figure class="w-[200px] aspect-square bg-slate-200 rounded-2xl">
                        <img src="" alt="">
                    </figure>
                    <div class="absolute top-1/3 -right-32">
                        <h3 class="font-bold text-2xl text-[#0174BE]">Jacopo Quattrone</h3>
                        <h6 class="font-medium text-lg">Commercial Director</h6>
                        <div class="bg-[#FFC436] h-[2px] w-[65px]"></div>
                    </div>
                </div>
            </div>
            <div class="teamMember3 flex justify-end">
                <div class="relative w-fit me-[23%]">
                    <figure class="w-[200px] aspect-square bg-slate-200 rounded-2xl">
                        <img src="" alt="">
                    </figure>
                    <div class="absolute top-1/3 -right-32">
                        <h3 class="font-bold text-2xl text-[#0174BE]">Aleandro Guri</h3>
                        <h6 class="font-medium text-lg">Advisor</h6>
                        <div class="bg-[#FFC436] h-[2px] w-[65px]"></div>
                    </div>
                </div>
            </div>
            <div class="teamMember4">
                <div class="relative w-fit ms-[10%]">
                    <figure class="w-[200px] aspect-square bg-slate-200 rounded-2xl">
                        <img src="" alt="">
                    </figure>
                    <div class="absolute top-1/3 -right-32">
                        <h3 class="font-bold text-2xl text-[#0174BE]">Name surname</h3>
                        <h6 class="font-medium text-lg">Role</h6>
                        <div class="bg-[#FFC436] h-[2px] w-[65px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const main = ref();
    let ctx;

    onMounted(() => {
        ctx = gsap.context((self) => {
            setTimeout(() => {
                const bottomScreen = window.innerHeight;

                let tl = gsap.timeline({
                    force3D: false,
                    scrollTrigger: {
                        trigger: "#scrollStart",
                        start: "top top",
                        pin: "#scrollStart",
                        scrub: true,
                        markers: false,
                        pinSpacing: true
                        // toggleActions: "restart none restart none"
                    },
                })

                tl.from(
                    '.teamMember1',
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )

                tl.from(
                    '.teamMember2',
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )

                tl.from(
                    '.teamMember3',
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )

                tl.from(
                    '.teamMember4',
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )
                
            }, 1000);
        }, main.value); // <- Scope!
    });

    onUnmounted(() => {
        ctx.revert(); // <- Easy Cleanup!
    });
</script>

<style>
    .blink{
        animation: blinking;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
    }

    @keyframes blinking {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>