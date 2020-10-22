<template>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  setup()
  {
      const store = useStore();

      alert( store.state.languages.lang )

      store.dispatch('app/doSomething')
  }
}
</script>

<style>
    .m-5 {
        margin: 5px;
    }
</style>