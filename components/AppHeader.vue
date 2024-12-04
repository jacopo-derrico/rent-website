<template>
    <div class="flex justify-between items-center lg:w-5/6 mx-auto py-5 bg-white z-50">
        <div>
            <NuxtLink to="/">
                <AppLogo class="w-[100px]"/>
            </NuxtLink>
        </div>
        <ul class="flex items-center gap-4">
            <li>
                <NuxtLink class="linkAnimation" to="/">
                    What we do
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="linkAnimation" to="/faq">
                    FAQ
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="linkAnimation" to="/">
                    Team
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="bg-[#FFC436] hover:bg-[#0174BE] hover:text-white py-3 px-5 rounded-xl cursor-pointer" to="/">
                    Join as an Early adopter
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style>
    .linkAnimation {
        position: relative;
        /* color: #FFF;
        text-decoration: none; */
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