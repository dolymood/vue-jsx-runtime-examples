<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Hello :txt="txt"></Hello>
  <button type="button" @click="txt = 'Hello World'">change txt</button>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hello } from './components/Hello'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    Hello,
    HelloWorld
  },
  data () {
    return {
      txt: 'Hello'
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
