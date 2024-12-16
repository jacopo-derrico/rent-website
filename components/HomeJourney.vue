<template>
    <div id="journey" class="w-full min-h-[800px] md:min-h-min">
        <div class="h-full bg-[#ffc336e3]">
            <div class="flex flex-col-reverse items-center justify-center md:flex-row lg:w-5/6 mx-auto">
                <div class="md:w-1/2 p-5 flex gap-3">
                    <div class="mt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                    </div>
                    <div class="text-white">
                        <div class="step-1 bg-[#0174BE] rounded-lg p-4 flex items-center gap-4 mb-3 h-[80px]">
                            <p class="text-3xl font-bold">1</p>
                            <p class="text-md lg:text-xl font-semibold">Fill Out the Early Adopter Form</p>
                        </div>
                        <div class="step-2 bg-[#0174BE] rounded-lg p-4 flex items-center gap-4 mb-3 h-[80px]">
                            <p class="text-3xl font-bold">2</p>
                            <p class="text-md lg:text-xl font-semibold">Join Our Community</p>
                        </div>
                        <div class="step-3 bg-[#0174BE] rounded-lg p-4 flex items-center gap-4 mb-3 h-[80px]">
                            <p class="text-3xl font-bold">3</p>
                            <p class="text-md lg:text-xl font-semibold">Be the First to Test<br>
                                the Prototype Upon Release</p>
                        </div>
                        <div class="step-4 bg-[#0174BE] rounded-lg p-4 flex items-center gap-4 mb-3 h-[80px]">
                            <p class="text-3xl font-bold">4</p>
                            <p class="text-md lg:text-xl font-semibold">Share Feedback and<br>
                                Help Us Improve</p>
                        </div>
                    </div>
                </div>
                <div class="mt-16 md:mt-0 text-center md:w-1/2 p-5 flex flex-col justify-center">
                    <h6 class="text-3xl font-bold mb-7">How to Join the Omni Rent Journey:</h6>
                    <p class="text-lg">Exclusive perks await our early adopters—be part of the group that leads the way!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #journey{
        background-image: url(../assets/img/bicycle.webp);
        background-position: center;
        background-size: cover;
    }
</style>

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
                        trigger: "#journey",
                        start: "center center",
                        pin: "#journey",
                        scrub: true,
                        pinSpacing: true,
                        // markers: true,
                        // toggleActions: "restart none restart none"
                    },
                })

                tl.from(
                    ".step-1",
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )

                tl.from(
                    ".step-2",
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )

                tl.from(
                    ".step-3",
                    {
                        y: bottomScreen,
                        ease: "Power4.inOut",
                        duration: 500,
                    }
                )

                tl.from(
                    ".step-4",
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