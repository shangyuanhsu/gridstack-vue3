<template>
  <button :class="[is_bgc ? 'bgc' : 'bgc_main', size]">
    {{ txt }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    txt: String,
    size: String,
    is_bgc: Boolean,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
.bgc {
  background-color: rgb(241 241 241);
}
.bgc_main {
  background-color: rgb(70 70 70);
  color: white;
}
.btn_b {
  width: 150px;
  padding: 10px;
  border-radius: 12px;
}
.btn_m {
  width: 100px;
  padding: 10px;
  border-radius: 12px;
}
.btn_s {
  width: 80px;
  padding: 10px;
  border-radius: 12px;
}
</style>
