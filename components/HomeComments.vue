<template>
    <div class="lg:w-2/3 mx-auto my-24 flex flex-col lg:flex-row justify-center items-center">
        <div class="mb-16">
            <h2 class="text-3xl font-semibold text-center">
                What Early Adopters<br>
                are saying
            </h2>
        </div>
        <div id="comments" class="w-full ps-3 lg:w-2/3 lg:ps-14">
            <el-carousel direction="vertical" type="card" :autoplay="true" trigger="hover">
                <el-carousel-item v-for="slide in list" :key="slide.title" class="flex items-center pe-14">
                    <div class="left-borders rounded-s-md"></div>
                    <div class="flex w-full h-full items-center border-2 border-s-0 p-4 rounded-r-md border-slate-200 bg-white">
                        <!-- <div class="mx-4">
                            <div class="rounded-full bg-slate-300 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]"></div>
                        </div> -->
                        <div class="relative w-full">
                            <h6 class="text-2xl mb-3">{{ slide.title }}</h6>
                            <svg class="absolute top-2 right-0 w-[35px]" width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4091 0.909088V10.1818C19.4091 12.8485 18.8939 15.6212 17.8636 18.5C16.8636 21.3485 15.4848 24.0758 13.7273 26.6818C11.9697 29.2576 9.9697 31.4697 7.72727 33.3182L0.0909092 28.3636C1.75758 25.8485 3.21212 23.1364 4.45455 20.2273C5.69697 17.2879 6.31818 13.9697 6.31818 10.2727V0.909088H19.4091ZM42.3636 0.909088V10.1818C42.3636 12.8485 41.8485 15.6212 40.8182 18.5C39.8182 21.3485 38.4394 24.0758 36.6818 26.6818C34.9242 29.2576 32.9394 31.4697 30.7273 33.3182L23.0909 28.3636C24.7273 25.8485 26.1667 23.1364 27.4091 20.2273C28.6515 17.2879 29.2727 13.9697 29.2727 10.2727V0.909088H42.3636Z"/>
                                </svg>
                            <p class="text-xs text-ellipsis">{{ slide.descr }}</p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
    const list = [
        {
            title: 'Lourine Immesout',
            descr: 'Hi, I’m Lourine, and I work in wealth management. I’ve been living in Milan for two years. I mainly use buses and the metro to get around, but overcrowding and delays often disrupt my daily life. OMNI is a revolutionary idea that could give me the flexibility to choose transportation based on my needs, making my time more efficient and even enjoyable.'
        },
        {
            title: 'Massimo Pozzo',
            descr: 'Hi, I’m Massimo, a psychologist in Turin. I rely on my car for transportation, which is convenient but comes with high costs. OMNI could not only give me access to a variety of vehicles but also allow me to offset the expenses of owning a car by making it profitable through their platform.'
        },
        {
            title: 'Eleonora Merlino',
            descr: 'Hi, I’m Eleonora, a barista in Turin. I use buses to commute, but delays often make me rush to work, starting my day on the wrong foot. I’m confident OMNI can bring back the reliability and peace of mind I’ve lost with public transportation. Its diverse range of vehicles could improve my efficiency and even offer exciting new commuting options.'
        },
        // {
        //     title: 'titolo4',
        //     descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla dui. Vivamus efficitur eros non ex euismod ullamcorper. Morbi ornare libero et sem faucibus.'
        // }
    ]
</script>

<style scoped>
    .left-borders {
        width: 8px;
        height: 100%;
        background-color: #C4C4C4;
    }

    .el-carousel__item {
        display: flex;
    }

    .el-carousel__item svg {
        fill: #C4C4C4;
    }

    .el-carousel__item:not(.is-active) {
        margin-left: 50px;
    }

    .is-active .left-borders {
        background-color: #0174BE;
    }

    .is-active h6{
        color: #0174BE;
        font-weight: bold;
    }
    
    .is-active svg {
        fill: #0174BE;
    }
</style>