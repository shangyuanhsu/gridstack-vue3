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

    const which_box = ref('EditBox');
    
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
.go_new_box {
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  padding: 10px;
  color: rgb(204, 203, 203);
  border: 2px dotted rgb(204, 203, 203);
  margin: 30px 0;
  cursor: pointer;
}
</style>
