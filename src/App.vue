<template>
  <div class="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/NewBox">EditBoxData</router-link> |
      <router-link to="/ShowBox">ShowBox</router-link>
    </div>
    <router-view />
    <footer>shang @ 2022</footer>
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
      store.dispatch("get_chart_data");
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  width: 920px;
  margin: 30px auto 50px auto;
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
footer {
  text-align: center;
  color: rgb(44, 44, 44);
  margin: 20px 0;
  font-size: 12px;
}
</style>
