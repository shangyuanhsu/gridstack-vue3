<template>
  <div class="tabletForm">
    <table>
      <tr>
        <td v-for="(item, index) in data_title.arr" :key="index">
          <slot
            v-if="
              index != data_title.arr.indexOf('⇉') &&
              (item.val == 'Table' || item.val == 'Set')
            "
          >
            {{ item.val }}
          </slot>

          <slot v-else-if="index == data_title.arr.length - 2">
            <span title="add column" @click="add_column(index)">{{ item.val }}</span>
          </slot>
          <slot v-else>
            <span @click="remove_column(index)">✖</span>
            <input type="text" v-model="item.val" @blur="save(index, item.val)" />
          </slot>
        </td>
      </tr>

      <tr v-for="(item, index) in data_arr.arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td v-for="(con, index_list) in item.list" :key="index_list">
          <span>&nbsp;&nbsp;&nbsp;</span>
          <input
            type="text"
            v-model="con.name"
            @blur="save_con(index, index_list, con.name)"
          />
        </td>
        <td @click="add_data(index)" title="add row"><span>+</span></td>
        <td>
          <span @click="moveforward(index)" title="up"><b>⇈</b></span>
          <span @click="moveback(index)" title="down"><b>⇊</b></span>
          <span @click="removeTr(index)">✖</span>
        </td>
      </tr>
    </table>
    <button @click="new_table_data">Add Table</button>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: "TabletForm",
  props: { data: Object },
  emits: ["go_show_table"],
  setup(props, context) {
    // 標題區
    const data_title = reactive({
      arr: [{ val: "Table" }, { val: "List" }, { val: "⇉" }, { val: "Set" }],
    });
    // 資料結構
    const data_arr = reactive({
      arr: [],
    });

    onMounted(() => {
      data_arr.arr = props.data.arr.map((x) => x);
    });

    // 新增資料
    const add_data = (index) => {
      const data_temp = {
        index_item: data_arr.arr.length,
        list: [],
      };

      for (let i = 0; i < data_title.arr.length - 3; i++) {
        data_temp.list.push({ name: "" });
      }
      data_arr.arr.splice(index + 1, 0, data_temp);
    };
    // 新增標題
    const add_column = () => {
      data_title.arr.splice(data_title.arr.length - 2, 0, { val: "List" });
      data_arr.arr.forEach((element) => {
        element.list.push({});
      });
    };

    // 打完字推到資料中
    const save_con = (index, index_list, con) => {
      console.log(index);
      console.log(index_list);
      console.log(con);
      data_arr.arr[index].list[index_list].name = con;
    };

    // 打完字推到標題中
    const save = (index, con) => {
      data_title.arr[index].val = con;
    };

    // 往前
    const moveforward = (index) => {
      if (index != 0) {
        const change_data = data_arr.arr[index];
        data_arr.arr.splice(index - 1, 2, change_data, data_arr.arr[index - 1]);
      }
    };

    // 往後
    const moveback = (index) => {
      if (index != data_arr.arr.length - 1) {
        const change_data = data_arr.arr[index];
        data_arr.arr.splice(index, 2, data_arr.arr[index + 1], change_data);
      }
    };
    // 刪掉
    const removeTr = (index) => {
      if (data_arr.arr.length > 1) {
        data_arr.arr.splice(index, 1);
      }
    };

    // 刪一整欄
    const remove_column = (index) => {
      data_title.arr.splice(index, 1);
      data_arr.arr.forEach((element) => {
        element.list.splice(index - 1, 1);
      });
    };

    const new_table_data = () => {
      context.emit("go_show_table", data_arr, data_title);
    };

    return {
      data_title,
      add_data,
      add_column,
      save_con,
      save,
      data_arr,
      moveforward,
      moveback,
      removeTr,
      remove_column,
      new_table_data,
    };
  },
};
</script>

<style scoped>
table,
tr,
td {
  border: 1px solid rgb(255, 255, 255);
  text-align: center;
}
table {
  width: 100%;
}
td {
  padding: 8px 12px;
}

span {
  padding: 5px 8px;
  cursor: pointer;
}

.tabletForm input[type="text"] {
  width: 80%;
  border: 1px solid white;
  background: none;
}
button {
  margin: 20px 0;
}
</style>
