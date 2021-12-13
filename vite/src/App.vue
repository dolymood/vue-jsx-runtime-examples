<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Hello } from './components/Hello'
import { ref } from 'vue'
const txt = ref('Hello')
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Hello :txt="txt" />
  <button type="button" @click="txt = 'Hello World'">change txt</button>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

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
