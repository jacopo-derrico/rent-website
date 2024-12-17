<template>
    <div>
        <HomeHero />
        <HomeComments />
        <HomeJourney />
        <HomeForm />
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'Omni Rent | Rent any vehicle, from bikes to cars',
        ogTitle: 'Omni Rent | Rent any vehicle, from bikes to cars',
        description: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!',
        ogDescription: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!',
        ogImage: '/public/og_image.png',
        twitterCard: 'summary_large_image',
    })
</script>