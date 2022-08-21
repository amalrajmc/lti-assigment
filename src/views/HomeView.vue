<template>
  <div class="home container-fluid">
    <home-header :input-text="inputText" v-model="inputText"></home-header>

    <section class="container">
      <div class="columns is-multiline">
        <home-card
          v-for="item in filteredCharacters"
          class="column is-3 is-3-fullhd is-3-desktop is-4-tablet is-8-mobile mx-auto"
          :key="item.id"
          :item="item"
        ></home-card>
      </div>
    </section>
  </div>
</template>

<script>
import HomeCard from "../components/Home/HomeCard.vue";
import HomeHeader from "../components/Home/HomeHeader.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    HomeCard,
    HomeHeader,
  },
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    ...mapGetters(["getCharacters"]),
    filteredCharacters() {
      return this.getCharacters.filter((x) => {
        return x.fullName.toLowerCase().includes(this.inputText);
      });
    },
  },
};
</script>
<style lang="scss">
.search-image-wrap {
  padding: 6px;
}
.search-bar__input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #2c3e50;
  box-shadow: none;
  border-radius: 0;
  &:focus,
  &:hover {
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #2c3e50;
  }
}
.search-bar {
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #4a4a4a;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #4a4a4a;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #4a4a4a;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #4a4a4a;
  }
}
</style>
