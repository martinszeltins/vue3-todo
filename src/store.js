import { createStore } from 'vuex'
 
export const store = createStore({
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