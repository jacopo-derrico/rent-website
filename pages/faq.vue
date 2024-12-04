<template>
    <div class="mt-36 lg:w-2/3 mx-auto">
        <h1 class="text-center text-3xl font-semibold">
            Frequently Asked Questions
        </h1>
        <div class="demo-collapse border-2 border-[#0174BE] rounded-3xl my-20 overflow-hidden cursor-pointer">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item :name="faq.q" v-for="(faq, index) in faqs" :key="faq.q" :class="{'border-b-0': index+1 == faqs.length}">
                    <template #title>
                        <h6 class="text-lg font-semibold ps-6 py-4">{{faq.q}}</h6>
                    </template>
                    <div class="px-6 py-2">
                        {{faq.a}}
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="mb-36 text-xl">
            <p>
                Couldn't find what you where looking for? Send us an email <a href="mailto:info@omnirent.io?subject=Question from a " class="text-[#0174BE] font-bold underline italic">here</a>, we want to know your opinion!
            </p>
        </div>
    </div>
</template>

<script setup>
    const faqs = [
        {
            q: 'What types of vehicles are available?',
            a: 'From bikes to scooters to luxury cars, we’re covering all forms of transportation—even exploring future options like water & flying vehicles!'
        },
        {
            q: 'Can I rent a spaceship?',
            a: 'Not yet, but who knows? It all depends on what a certain genius, eccentric billionaire decides next!'
        },
        {
            q: 'Are there any sci-fi transformative vehicles?',
            a: 'Not that we know of... but we’re keeping an eye out!'
        },
        {
            q: 'Can I suggest new features?',
            a: 'Absolutely. As an early adopter, your input helps shape the future of the app!'
        },
        {
            q: 'How do I become an early adopter?',
            a: 'Simply sign up using the form above and join our growing community of pioneers!'
        },
        {
            q: 'Will I get exclusive perks as an early adopter?',
            a: 'Yes! Enjoy early access, feature previews, rewards, and a direct voice in the app’s evolution.'
        }
    ]

    const activeName = ref('')
</script>

<style>
    .el-collapse-item__header {
        border-bottom: 1px solid #0174BE;
    }
    .el-icon {
        margin-right: 2rem;
    }
</style>