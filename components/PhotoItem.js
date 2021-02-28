app.component('photo-item', {
    props: {
        picture: {
            type: Array
        }
    },
    template: 
    /*html*/
    `
    <div class="pb-20">
        <div v-for="(task,index) in picture" class="text-center object-center">
            <div class="flex ml-96">
                <img v-bind:src="task.url" class="mt-16 rounded shadow-xl transition w-1/4 h-auto" v-on:click="toggleView(index)" />
                    <p class="font-semibold ml-10 mt-16 text-red-500 text-opacity-75 text-2xl hover:text-red-700">{{task.title}}</p>
                    <p class="font-semibold -ml-6 mr-96 mt-28 text-gray-500 text-md">{{task.detail}}</p>
            </div>
            <div class="-mt-10 ml-20">
                <span v-on:click="toggleLike(index)" class="material-icons cursor-pointer border-none">
                    favorite_border
                <img v-show="task.done" src="./images/4.png" class="w-6 h-6 -mt-6">
                </span>
                <p class="-mt-7 ml-16">{{task.count}}</p>
            </div>
        </div>
    </div>
    `,
    methods: {
        toggleView(index) {
            this.$emit('viewing', index);
        },
        toggleLike(index) {
            this.$emit('liking', index);
        },
    }
})