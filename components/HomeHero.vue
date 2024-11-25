<template>
    <div class="mt-24 lg:w-5/6 mx-auto">
        <figure class="relative">
            <div class="absolute z-10 left-0 right-0 text-white top-32">
                <h1 class="text-center text-5xl font-semibold">
                    Rent Anything, Anytime: <br>
                    From Bikes to Cars, Directly from Owners
                </h1>
                <h4 class="text-center text-">
                    Visionary Early-Stage Startup. Built with community feedback and powered by your insights
                </h4>
                <div class="mt-14 flex w-full justify-center gap-4">
                    <NuxtLink
                        class="bg-[#FFC436] text-black hover:bg-[#0174BE] hover:text-white py-3 px-5 rounded-xl cursor-pointer"
                        to="/">
                        Join as an Early adopter
                    </NuxtLink>
                    <NuxtLink
                        class="bg-[#0174BE] hover:bg-[#FFC436] hover:text-white py-3 px-5 rounded-xl cursor-pointer"
                        to="/">
                        Watch the pitch deck
                    </NuxtLink>
                </div>
            </div>
            <div class="w-full h-full bg-[#0174BE] absolute rounded-2xl opacity-50"></div>
            <img src="../assets/img/headlight.webp" alt="car light closeup">
        </figure>
        <div class="text-white text-center flex justify-center gap-3 lg:mt-[-50px]">
            <div class="z-20 bg-[#0174BE] px-14 py-8 rounded-lg flex flex-col items-center">
                <figure class="w-[124px] mb-8">
                    <img class="w-full h-full" src="../assets/img/car-bike.webp" alt="car and bike icon">
                </figure>
                <h6>
                    One app for<br>
                    all vehicles
                </h6>
            </div>
            <div class="z-20 bg-[#0174BE] px-20 py-8 rounded-lg flex flex-col items-center">
                <figure class="w-[89px] mb-9">
                    <img class="w-full h-full" src="../assets/img/handshake.webp" alt="handshake icon">
                </figure>
                <h6>
                    Rent directly<br>
                    from owners
                </h6>
            </div>
            <div class="z-20 bg-[#0174BE] px-14 py-8 rounded-lg flex flex-col items-center">
                <figure class="w-[80px] mb-8">
                    <img class="w-full h-full" src="../assets/img/affordable.webp" alt="affordable icon">
                </figure>
                <h6>
                    Competitive &<br>
                    affordable prices
                </h6>
            </div>
        </div>
    </div>
</template>