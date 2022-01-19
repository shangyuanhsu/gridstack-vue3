<template>
  <div class="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/EditBox">EditBoxData</router-link> |
      <router-link to="/ShowBox">ShowBox</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("get_box_data");
    });
    console.log(store.state);
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  padding: 20px;
}
.app {
  width: 920px;
  margin: 0 auto;
}
#nav {
  margin: 20px auto;
}
#nav a {
  margin: 0 10px;
  font-weight: bold;
  text-decoration: none;
  color: black;
}
#nav a.router-link-exact-active {
  color: black;
  border-bottom: 2px solid black;
}
</style>
