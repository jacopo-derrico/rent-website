<template>
    <div class="bg-[#0174BE] text-center text-white pt-10">
        <div>
            <div>
                icon icon icon
            </div>
            <a class="hover:underline" href="mailto:info@omnirent.io">info@omnirent.io</a>
        </div>
        <div class="pt-10 pb-2">
            <span v-if="currentYear > 2024">2024 - </span>{{ currentYear }} Omni Rent | <a href="">Privacy Policy</a> - <a href="">Cookie Policy</a>
        </div>
    </div>
</template>

<script setup>
let currentYear = new Date().getFullYear();
</script>