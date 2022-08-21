import { createStore } from 'vuex'

const store=createStore({
  state: {
    characters:[],
    phrases:[]

  },
  getters: {
    characters(state) {
      return state.characters.map(x=>{x.fullName=x.firstName+' '+x.lastName;
      return x;
    })
    },
  },
  mutations: {
    setCharacters(state,payload){
      state.characters=payload;
    }
  },
  actions: {
    async fetchData(context) {
      try {
        await fetch('./data/characters.json').then(response => {
          if(response.ok){return response.json()}}).then(data=>{
          context.commit('setCharacters', data.data)
        });
    
        }
        catch (error) {
            console.log(error)
        }
    }
  },
  modules: {
  }
})
export default store;