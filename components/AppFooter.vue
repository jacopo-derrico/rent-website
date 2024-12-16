<template>
    <div class="bg-[#0174BE] text-center text-white pt-8">
        <div>
            <div class="flex justify-center gap-4 mt-4 w-full">
                <IconsGithub :width="'20'" :fillColor="'#fff'"/>
                <IconsLinkedin :width="'20'" :fillColor="'#fff'"/>
                <IconsInsta :width="'20'" :fillColor="'#fff'"/>
            </div>
            <a class="hover:underline hover:text-[#FFC436]" href="mailto:info@omnirent.io">info@omnirent.io</a>
        </div>
        <div class="pt-10 pb-2">
            <span v-if="currentYear > 2024">2024 - </span>{{ currentYear }} Omni Rent | <a class="hover:underline hover:text-[#FFC436]" href="">Privacy Policy</a> - <a class="hover:underline hover:text-[#FFC436]" href="">Cookie Policy</a>
        </div>
    </div>
</template>

<script setup>
    let currentYear = new Date().getFullYear();
</script>