<template>
  <div class="home container">
<section class="hero">
  <div class="hero-body">
   <div class="level">
    <div class="level-left">
      <div class="level-item">
        <h1 class="is-size-1">
          Simpsons Quotes
        </h1>
      </div>
    </div>
       <div class="level-right">
      <div class="level-item">
        <div class="field">
  <p class="control has-icons-left search-bar">
    <input class="input search-bar__input " type="text" placeholder="Search Character">
    <span class="icon is-small is-left search-image-wrap">
     <img class="image "  src="https://img.icons8.com/ios-filled/20/2c3e50/search--v1.png">
    </span>
  </p>
</div>

      </div>
    </div>
   </div>
  </div>
</section>
<section>
<div class="columns is-desktop is-multiline is-variable is-1-mobile is-0-tablet is-5-desktop ">
<item-card v-for="item in characters" class="column is-3 my-4" :key="item.id" :item="item"></item-card>
</div>
</section>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue';
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'HomeView',
  components: {
    ItemCard
  },
  data(){
    return {
    }
  },
   created () {
    this.fetchData();
  },
    computed: {
    ...mapGetters(["characters"]),
  },
  methods:{
    ...mapActions(['fetchData'])
  }
}
</script>
<style lang="scss">
.search-image-wrap{
  padding:6px;
}
.search-bar__input {
      background-color: transparent;
    border: none;
    border-bottom: 1px solid #2c3e50;
    box-shadow: none;
    border-radius: 0;
    &:focus, &:hover {
      outline:none;
      box-shadow:none;
          border-bottom: 1px solid #2c3e50;
    }
 
}
.search-bar{
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #4a4a4a;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #4a4a4a;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #4a4a4a;
}
:-moz-placeholder { /* Firefox 18- */
  color: #4a4a4a;
}}
</style>