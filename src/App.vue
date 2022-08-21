<template>

  <router-view/>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data(){
    return {
    }
  },
   created () {
    this.fetchCharacters();
        this.fetchQuotes();
  },
  methods:{
    ...mapActions(['fetchCharacters','fetchQuotes'])
  }
}
</script>
<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css";
@import url('https://fonts.googleapis.com/css?family=Nunito:bold');
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,html{
   background:#fffbeb;
}


</style>
