<template>
    <div class="w-2/3 mx-auto my-20">
        <h6 class="text-3xl font-medium text-center mb-3">Become an Early Adopter</h6>
        <p class="text-center text-lg px-20 mb-6">Be part of a community-driven startup. Your voice matters—help shape the app
            everyone wants!</p>
        <form action="POST">
            <div class="flex mb-8">
                <div class="w-1/2 lg:pe-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" name="firstName"
                        placeholder="First Name *" required>
                </div>
                <div class="w-1/2 lg:ps-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" type="text" name="lastName"
                        placeholder="Last Name *" required>
                </div>
            </div>
            <div class="mb-8">
                <input class="rounded-lg border-2 ps-2 py-2 w-full" type="email" name="email" placeholder="Email *"
                    required>
                <!-- <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid email.
                      </p> -->
            </div>
            <div class="flex mb-8">
                <div class="w-1/2 lg:pe-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" type="text" name="city"
                        placeholder="City *" required>
                </div>
                <div class="w-1/2 lg:ps-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" type="text" name="country"
                        placeholder="Country *" required>
                </div>
            </div>
            <div class="mb-8">
                <select class="rounded-lg border-2 px-2 h-[44px] w-full text-gray-400" name="appUse" id="appUse">
                    <option value="" disabled selected>How would you use the app? *</option>
                    <option value="">Rent</option>
                    <option value="">Lend</option>
                    <option value="">Both</option>
                </select>
            </div>
            <div class="mb-8">
                <textarea class="rounded-lg border-2 ps-2 py-2 w-full" name="suggestions"
                    id="suggestions" rows="10" placeholder="Do you have any ideas or suggestions for the service? (Optional) 
(E.g., features you’d like to see, how you’d like the app to work, or things you dislike in an app)"></textarea>
            </div>
            <div class="w-full text-center">
                <button class="text-white bg-[#0174BE] hover:bg-[#FFC436] hover:text-black py-3 px-5 rounded-xl">Join the journey</button>
            </div>
            <!-- success message: “Now Join Our Community and shape the future of vehicle mobility, links below“ -->
        </form>
    </div>
</template>

<style scoped>
    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url(../assets/img/chevron_right.svg) 99% center no-repeat;
    }
</style>