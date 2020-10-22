import { createStore } from 'vuex'
 
export default createStore({

namespaced: true,

  state()
  {
    return {
      count: 911
    }
  },

  actions:
  {
      doSomething()
      {
          alert('action doing something..')
      },
  },
})