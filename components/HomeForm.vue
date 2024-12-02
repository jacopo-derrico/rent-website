<template>
    <div class="w-2/3 mx-auto my-20">
        <h6 class="text-3xl font-medium text-center mb-3">Become an Early Adopter</h6>
        <p class="text-center text-lg px-20 mb-6">Be part of a community-driven startup. Your voice matters—help shape
            the app
            everyone wants!</p>
        <form action="POST" novalidate>
            <div class="flex mb-8">
                <div class="w-1/2 lg:pe-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" v-model="name" v-bind="nameAttrs" type="text"
                        name="firstName" placeholder="First Name *" required
                        :class="errors.name ? 'border-pink-600' : '' ">
                    <p v-if="errors.name && meta.touched" class="mt-2 text-pink-600 text-sm">
                        {{ errors.name }}
                    </p>
                </div>
                <div class="w-1/2 lg:ps-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" v-model="lastName" v-bind="lastNameAttrs"
                        type="text" name="lastName" placeholder="Last Name *" required
                        :class="errors.lastName ? 'border-pink-600' : '' ">
                    <p v-if="errors.lastName && meta.touched" class="mt-2 text-pink-600 text-sm">
                        {{ errors.lastName }}
                    </p>
                </div>
            </div>
            <div class="mb-8">
                <input class="rounded-lg border-2 ps-2 py-2 w-full" v-model="email" v-bind="emailAttrs" type="email"
                    name="email" placeholder="Email *" required :class="errors.email ? 'border-pink-600' : '' ">
                <p v-if="errors.email && meta.touched" class="mt-2 text-pink-600 text-sm">
                    {{ errors.email }}
                </p>
            </div>
            <div class="flex mb-8">
                <div class="w-1/2 lg:pe-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" v-model="city" v-bind="cityAttrs" type="text"
                        name="city" placeholder="City *" required>
                    <p v-if="errors.city && meta.touched" class="mt-2 text-pink-600 text-sm">
                        {{ errors.city }}
                    </p>
                </div>
                <div class="w-1/2 lg:ps-2">
                    <input class="rounded-lg border-2 ps-2 py-2 w-full" v-model="country" v-bind="countryAttrs"
                        type="text" name="country" placeholder="Country *" required>
                </div>
                <p v-if="errors.country && meta.touched" class="mt-2 text-pink-600 text-sm">
                    {{ errors.country }}
                </p>
            </div>
            <div class="mb-8">
                <Field class="rounded-lg border-2 px-2 h-[44px] w-full text-gray-400" as="select" v-model="appUse"
                    v-bind="appUseAttrs" name="appUse" id="appUse">
                    <option value="" disabled selected>How would you use the app? *</option>
                    <option value="rent">Rent</option>
                    <option value="lend">Lend</option>
                    <option value="both">Both</option>
                </Field>
                <p v-if="errors.appUse && meta.touched" class="mt-2 text-pink-600 text-sm">
                    {{ errors.appUse }}
                </p>
            </div>
            <div class="mb-8">
                <textarea class="rounded-lg border-2 ps-2 py-2 w-full" name="suggestions" id="suggestions" rows="10"
                    placeholder="Do you have any ideas or suggestions for the service? (Optional) 
(E.g., features you’d like to see, how you’d like the app to work, or things you dislike in an app)"></textarea>
            </div>
            <div class="w-full text-center">
                <button @click.prevent="sendMail"
                    class="text-white bg-[#0174BE] hover:bg-[#FFC436] hover:text-black py-3 px-5 rounded-xl">Join
                    the journey</button>
            </div>
            <div class="p-6 mt-10 bg-green-200 border-green-500 border-2 text-green-500 text-center">
                <h6 class="text-lg font-medium">Message sent correctly</h6>
                <p>Now Join Our Community and shape the future of vehicle mobility, links below</p>
            </div>
        </form>
        <pre>values: {{ values }}</pre>
        <pre>errors: {{ errors }}</pre>
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

<script setup>
    import { useForm } from 'vee-validate';
    import { toTypedSchema } from '@vee-validate/yup';
    import * as yup from 'yup';

    const { values, errors, meta, defineField } = useForm({
        validationSchema: yup.object({
            email: yup.string().email().required(),
            name: yup.string().min(2).required(),
            lastName: yup.string().min(2).required(),
            city: yup.string().required(),
            country: yup.string().required(),
            appUse: yup.string().required()
        }),
    });

    const [email, emailAttrs] = defineField('email');
    const [name, nameAttrs] = defineField('name');
    const [lastName, lastNameAttrs] = defineField('lastName');
    const [city, cityAttrs] = defineField('city');
    const [country, countryAttrs] = defineField('country');
    const [appUse, appUseAttrs] = defineField('appUse');

    const mail = useMail()

    function sendMail() {
        if (!errors) {
            mail.send({
                from: 'Omni Rent Website',
                subject: 'New customer',
                text: 'This is an incredible test message',
            })
            console.log('sent')
        }
    }
</script>