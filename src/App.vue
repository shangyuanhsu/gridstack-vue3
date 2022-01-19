<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ShowBox">ShowBox</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "../node_modules/gridstack/dist/gridstack.min.css";
</style>
