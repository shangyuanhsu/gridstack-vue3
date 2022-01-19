<template>
  <div class="editBox">
    <div class="new_box">&#43;</div>
    <section>
      <form>
        <table>
          <tr>
            <td>標題 :</td>
            <td><input type="text" /></td>
            <td>負責人 :</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>模板大小 :</td>
            <td colspan="3">
              <label><input type="radio" />大</label>
              <label><input type="radio" />中</label>
              <label><input type="radio" />小</label>
            </td>
          </tr>
        </table>
      </form>
    </section>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "EditBox",
  props: {},
  setup() {
    const store = useStore();
    const items = reactive({ arr: [] });
    onMounted(() => {
      items.arr = store.state.box_item.map((item) => item);
    });

    return {
      items,
    };
  },
};
</script>

<style scope>
.editBox {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.new_box {
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  padding: 10px;
  color: rgb(204, 203, 203);
  border: 2px dotted rgb(204, 203, 203);
  margin: 30px 0;
  cursor: pointer;
}
.editBox section {
  overflow-y: auto;
}

.editBox table tr td {
  border: 1px solid gray;
}
.editBox table {
  border-collapse: collapse;
  width: 100%;
}
.editBox td {
  padding: 20px;
}

input[type="text"] {
  width: 100%;
  height: 30px;
  padding: 0 5px;
}
</style>
