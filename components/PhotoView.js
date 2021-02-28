app.component('photo-view', {
  props: {
    hasview: Boolean,
    viewpic: String
  },
  template:   /*html*/
  `
  <div v-show="hasview" class="grid justify-items-stretch flex flex-col  p-3 m-2 bg-blue-200">
        <span class="material-icons" style="color: white;" v-on:click="closePic">
          disabled_by_default
        </span>
        <div>
           <img v-bind:src="viewpic" style="width: 40%;" class="justify-self-center" />
        </div>
  </div>
  `,
  data() { 
    return {}
  },
  methods: {
    closePic() {
      this.$emit('close');
    }
  }
})