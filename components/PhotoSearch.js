app.component('photo-search', {
    props: {

    },

    template:   
    /*html*/
    `
    <button v-on:click="toggleSearch" v-show="!useSearch" class="inline-block float-right pt-5 pr-5">
      <span class="material-icons">
        search
      </span>
    </button>

    <div v-show="useSearch" class="inline-block float-right pt-5 pr-5">
      <input @keyup ="inputdata"  v-model="inputSearch" placeholder="please type picture name to search">
      <button v-on:click="toggleSearch" class="btn btn-danger btn-sm ml-2">cancel</button>
    </div>
    `,
    data() {
        return {
            useSearch: false,
            inputSearch: ''
        }
    },
    methods: {
        toggleSearch() {
            this.filterResult = null;
            this.useSearch = !this.useSearch
        }
        ,
        inputdata() {
          let input = this.inputSearch
          this.$emit('input-data', input)

      }

    }
})