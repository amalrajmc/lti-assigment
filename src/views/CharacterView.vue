<template>
  <div class="container-fluid">
    <section class="hero">
      <div class="hero-body">
        <character-breadcrumb :char="char"></character-breadcrumb>
      </div>
    </section>

    <section class="container has-text-centered" v-if="char">
      <div class="columns is-centered is-multiline">
        <div class="column is-4">
          <figure class="image is-1by1">
            <img :src="char.picture" class="object-fit-contain" />
          </figure>
        </div>
        <div class="column is-8 is-flex is-flex-direction-column">
          <div v-for="quote in quotes" :key="quote._id" class="mb-5 mx-5 p-5">
            <blockquote class="">{{ quote.phrase }}</blockquote>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CharacterBreadcrumb from "../components/Character/CharacterBreadcrumb.vue";
export default {
  data() {
    return {};
  },
  components: {
    CharacterBreadcrumb,
  },
  computed: {
    ...mapGetters(["getCharacters", "getCharacter", "getQuotes"]),
    char() {
      return this.getCharacter(this.$route.params.id);
    },
    quotes() {
      return this.getQuotes(this.$route.params.id);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
blockquote {
  font-weight: 100;
  font-size: 2rem;
  /* max-width:300px; */
  line-height: 1.4;
  position: relative;
  margin: 30px auto;
  padding: 0.5rem;
}

blockquote:before,
blockquote:after {
  position: absolute;
  color: #ffdd57;
  font-size: 8rem;
  width: 4rem;
  height: 4rem;
}

blockquote:before {
  content: "“";
  left: -3rem;
  top: -2rem;
}

blockquote:after {
  content: "”";
  right: -3rem;
  bottom: 1rem;
}
</style>
