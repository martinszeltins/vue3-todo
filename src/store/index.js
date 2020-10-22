import { createStore } from 'vuex'
import app from './app.js'
import languages from './languages.js'
 
export default createStore({
  modules:
  {
      app, languages
  }
})