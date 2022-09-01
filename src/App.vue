<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: "Stars";
  src: url("../Starjedi.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  background-color: #000000;
}
</style>
