<template>
    <div class="lg:w-2/3 mx-auto">
        <div class="h-screen flex justify-center items-center">
            <div>
                <h1 id="teamAnimation" class="text-center text-3xl font-semibold">
                    Meet our team
                </h1>
                <svg class="mx-auto my-5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="black">
                    <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                </svg>
            </div>
        </div>
        <div id="scrollStart" class="mb-20">
            <div class="teamMember flex justify-end">
                <div class="relative w-fit me-[20%]">
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
            <div class="teamMember">
                <div class="relative w-fit ms-[15%]">
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
            <div class="teamMember flex justify-end">
                <div class="relative w-fit me-[23%]">
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
            <div class="teamMember">
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
        <div class="h-screen w-full bg-red-500">

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
                        start: "top center",
                        pin: "#scrollStart",
                        scrub: true,
                        markers: true,
                        pinSpacing: false
                        // toggleActions: "restart none restart none"
                    },
                })

                tl.from(
                    '.teamMember',
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