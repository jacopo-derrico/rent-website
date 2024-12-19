<template>
    <div class="bg-[#0174BE] text-center text-white pt-8">
        <div>
            <div class="flex justify-center gap-4 mt-4 w-full">
                <IconsTwitter :link="twitterLink" :width="'20'" :fillColor="'#fff'"/>
                <IconsTelegram :link="telegramLink" :width="'20'" :fillColor="'#fff'"/>
                <IconsInsta :link="instaLink" :width="'20'" :fillColor="'#fff'"/>
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

    const twitterLink = 'https://x.com/OMNI_RENT';
    const instaLink = 'https://www.instagram.com/omni.rent/profilecard/?igsh=MWFxNnYxcDZicG82ZA==';
    const telegramLink = 'https://t.me/omnirent';
</script>