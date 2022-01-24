<template>
  <div class="newBox">
    <component :is="which_box"></component>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useStore } from "vuex";
import EditBox from "@/components/EditBox.vue";

export default {
  name: "NewBox",
  props: {},
  components: {
    EditBox,
  },
  setup() {
    // const store = useStore();

    const which_box = ref("EditBox");

    return {
      which_box,
    };
  },
};
</script>

<style scope>
.newBox {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
</style>
