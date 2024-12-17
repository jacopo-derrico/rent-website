<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'Omni Rent | Rent any vehicle, from bikes to cars',
        ogTitle: 'Omni Rent | Rent any vehicle, from bikes to cars',
        description: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!',
        ogDescription: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!',
        ogImage: 'https://rent-website.netlify.app/og_image.png',
        ogUrl: 'https://rent-website.netlify.app',
        ogType: 'website',
        ogSiteName: 'Omni Rent',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Omni Rent | Rent any vehicle, from bikes to cars',
        twitterDescription: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!',
        twitterImage: 'https://rent-website.netlify.app/og_image.png'
    })
    // useHead({
    //     title: 'Omni Rent | Rent any vehicle, from bikes to cars',
    //     meta: [
    //         { name: 'description', content: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!' },
    //         { name: 'og:title', content: 'Omni Rent | Rent any vehicle, from bikes to cars' },
    //         { name: 'og:description', content: 'Rent your vehicle while you are not using it or rent one when you need it the most. From bikes to cars, rent anything!' },
    //         { name: 'og:type', content: 'website' },
    //         { name: 'og:image', content: 'https://rent-website.netlify.app/og_image.png' },
    //         { name: 'og:url', content: 'https://rent-website.netlify.app' },
    //         { name: 'og:site_name', content: 'Omni Rent' },
    //     ],
    // })
</script>