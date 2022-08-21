import { createStore } from "vuex";

const store = createStore({
  state: {
    characters: [],
    quotes: [],
  },
  getters: {
    getCharacters(state) {
      return state.characters.map((x) => {
        x.fullName = x.firstName + " " + x.lastName;
        return x;
      });
    },
    getCharacter(state, getters) {
      return (id) => {
        return getters.getCharacters.find((x) => x._id == id);
      };
    },
    getQuotes(state) {
      return (id) => {
        return state.quotes.filter((x) => x.character == id);
      };
    },
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setQuotes(state, payload) {
      state.quotes = payload;
    },
  },
  actions: {
    async fetchCharacters(context) {
      try {
        await fetch("/data/characters.json")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            context.commit("setCharacters", data.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchQuotes(context) {
      try {
        await fetch("/data/phrases.json")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            context.commit("setQuotes", data.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
export default store;
