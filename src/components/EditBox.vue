<template>
  <div class="editBox">
    <section>
      <!-- template size -->
      <div class="btn_and_tip">
        <div>
          <Button
            :class="which_size == 2 ? 'btn_checked' : ''"
            :txt="'large'"
            :size="'btn_s'"
            :is_bgc="true"
            @click="add_new_widget(2)"
          />
          <Button
            :class="which_size == 1 ? 'btn_checked' : ''"
            :txt="'middle'"
            :size="'btn_s'"
            :is_bgc="true"
            @click="add_new_widget(1)"
          />
          <Button
            :class="which_size == 0 ? 'btn_checked' : ''"
            :txt="'small'"
            :size="'btn_s'"
            :is_bgc="true"
            @click="add_new_widget(0)"
          />
        </div>
        <p class="tip">*You can adjust the height yourself</p>
      </div>

      <!-- template preview -->
      <section class="grid-stack"></section>

      <!-- step bar -->
      <div class="progress_all">
        <div class="progress_bar"></div>
        <div
          class="progress_bar"
          :style="[
            {
              width: which_progress == 0 ? '75%' : which_progress == 1 ? '30%' : '0%',
            },
          ]"
        ></div>
        <div class="progress">
          <h2 :class="[which_progress <= 2 ? 'onprogress' : '']">step 1</h2>
          <h2 :class="[which_progress > 0 ? 'onprogress' : '']">step 2</h2>
          <h2 :class="[which_progress == 2 ? 'onprogress' : '']">step 3</h2>
        </div>
      </div>

      <!-- template set -->
      <div class="progress_content">
        <div class="content_header">
          <h2>title</h2>
          <p>instruction</p>
        </div>
        <!-- 第一步 -->
        <div class="step" v-show="which_progress == 0">
          <p>Creator :</p>
          <input type="text" v-model="creator" @change="check_node" />
          <p>Title :</p>
          <input type="text" v-model="title" @change="check_node" />
        </div>
        <!-- 第二步 -->
        <div class="step" v-show="which_progress == 1">
          <div class="select_con">
            <slot v-for="(element, index) in select_option" :key="index">
              <div @click="selected_txt = element.name">
                <img
                  :src="require('../assets/img/' + element.src)"
                  :alt="element.name"
                  :class="[selected_txt == element.name ? 'select_con_click' : '']"
                />
                <p>{{ element.name }}</p>
              </div>
            </slot>
          </div>
          <p>selected :{{ selected_txt }}</p>
        </div>
        <!-- 第三步 -->
        <div class="step" v-show="which_progress == 2">
          <!-- 文字 -->
          <div v-if="selected_txt == 'text'">
            <textarea v-model="textarea_text" @change="change_content"></textarea>
          </div>
          <!-- chart -->
          <div v-else-if="selected_txt == 'bar' || selected_txt == 'pie'">
            <select v-model="select_index">
              <option v-for="(item, index) in chart_item.arr" :key="index" :value="index">
                {{ item.name }}
              </option>
            </select>
            <button @click="add_chart">Add Chart</button>
          </div>
          <div v-else-if="selected_txt == 'tablet'">
            <TabletForm
              :data="table_data"
              :title="data_title"
              @go_show_table="change_table_data"
            />
          </div>
        </div>

        <div class="content_footer">
          <div>
            <Button
              :txt="'Back'"
              :size="'btn_s'"
              :is_bgc="true"
              :disabled="which_progress == 0"
              @click="control_step(false)"
            />
            <Button
              :txt="'Next'"
              :size="'btn_s'"
              :is_bgc="true"
              :disabled="which_progress == 2"
              @click="control_step(true)"
            />
          </div>
          <div>
            <Button
              :txt="'Save'"
              :size="'btn_s'"
              :is_bgc="false"
              v-show="which_progress == 2"
              @click="save"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import Chart from "chart.js/auto";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import Button from "@/components/Button.vue";
import TabletForm from "@/components/TabletForm.vue";

export default {
  name: "EditBox",
  components: {
    Button,
    TabletForm,
  },
  props: {},
  setup() {
    const store = useStore();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const created_day = `${year}-${month}-${day}`; //日期形式

    const items = reactive({ arr: [] }); //目前有創建的box data
    const chart_item = reactive({ arr: [] }); //會需要的chart資料
    const new_box_grid = reactive({
      node: {
        x: 0,
        y: 0,
        maxW: 0,
        minW: 0,
        h: 0,
        noResize: false,
        content: "",
        noMove: true,
      },
    }); //預設box內容
    const which_size = ref(1); //選擇哪一種寬度的box
    const which_progress = ref(0); //進度條在哪一步
    const title = ref("My title"); //box的標題
    const creator = ref("Your Name"); //創建者的名字
    const select_option = reactive([
      {
        id: 0,
        name: "text",
        src: "text.png",
      },
      {
        id: 1,
        name: "pie",
        src: "pie-chart.png",
      },
      {
        id: 2,
        name: "bar",
        src: "statistics.png",
      },
      {
        id: 3,
        name: "tablet",
        src: "tablet.png",
      },
    ]); //形式的種類
    const selected_txt = ref("no selected"); //選擇哪種形式
    const textarea_text = ref(""); //文字形式的文字內容
    const select_index = ref(0);
    let grid = null; //創建可以使用box的套件
    var myChart = null;
    const table_data = reactive({
      arr: [
        {
          index_item: 0,
          list: [{ name: "Edit content" }],
        },
        {
          index_item: 1,
          list: [{ name: "Edit content" }],
        },
      ],
    });

    const data_title = reactive({
      arr: [{ val: "Table" }, { val: "List" }, { val: "⇉" }, { val: "Set" }],
    });

    onMounted(() => {
      items.arr = store.state.box_item.map((item) => item);
      chart_item.arr = store.state.chart_data.map((item) => item);

      grid = GridStack.init({
        float: true,
        minRow: 1,
        minWidth: 500,
        column: 12,
        cellHeight: "80px",
      });

      add_new_widget(which_size.value);

      //修改資料
      if (store.state.edit_data) {
        if (store.state.edit_data.w === 4) {
          which_size.value = 0;
        } else if (store.state.edit_data.w === 6) {
          which_size.value = 1;
        } else if (store.state.edit_data.w === 12) {
          which_size.value = 2;
        }
        title.value = store.state.edit_data.title;
        creator.value = store.state.edit_data.manager;
        selected_txt.value = store.state.edit_data.chart;
        grid.engine.nodes[0].content = store.state.edit_data.content;

        add_new_widget(which_size.value, store.state.edit_data.h);

        if (selected_txt.value == "text") {
          textarea_text.value = document.querySelector(".textarea_con").innerHTML;
        }
        if (selected_txt.value == "pie" || selected_txt.value == "bar") {
          chart_item.arr.forEach((element, index) => {
            if (element.name === store.state.edit_data.chartData) {
              select_index.value = index;
            }
          });
          add_chart();
        }
        if (selected_txt.value == "tablet") {
          table_data.arr = JSON.parse(store.state.edit_data.table_data).arr.map((x) => x);
          data_title.arr = JSON.parse(store.state.edit_data.data_title).arr.map((x) => x);
        }
      }
    });

    /**
     * 下一步上一步
     *  @param is_step : Boolean : true:下一步/false:上一步
     **/
    const control_step = (is_step) => {
      if (is_step) {
        let is_go = false;
        switch (which_progress.value) {
          case 0:
            if (
              title.value == "" ||
              creator.value == "" ||
              title.value == "My title" ||
              creator.value == "Your Name"
            ) {
              alert("check your name and check your title");
            } else {
              is_go = true;
            }
            break;
          case 1:
            if (selected_txt.value == "no selected") {
              alert("click image");
            } else {
              is_go = true;
            }
            break;
          case 2:
            break;
        }
        if (is_go) {
          which_progress.value++;
        }
      } else {
        which_progress.value--;
      }

      if (
        which_progress.value == 2 &&
        (selected_txt.value == "pie" || selected_txt.value == "bar")
      ) {
        if (!store.state.edit_data) {
          grid.engine.nodes[0].content = `
          <div class="card">
          <div class="title">
          <p class="title_header">${title.value}</p>
          <p class="title_footer"><span>${
            creator.value
          }</span><span>${created_day}</span></p>
          </div>
          <canvas class="myChartStatistics"></canvas>
          </div><div class="edit" data-id="${date.getTime()}">edit</div>`;
          add_new_widget(which_size.value, grid.engine.nodes[0].h);
        } else {
          grid.engine.nodes[0].content = "";
          grid.engine.nodes[0].content = `
          <div class="card">
          <div class="title">
          <p class="title_header">${title.value}</p>
          <p class="title_footer"><span>${
            creator.value
          }</span><span>${created_day}</span></p>
          </div>
          <canvas class="myChartStatistics"></canvas>
          </div><div class="edit" data-id="${date.getTime()}">edit</div>`;
          add_new_widget(which_size.value, grid.engine.nodes[0].h);
        }
      }
    };

    /**
     * 確認創建者與標題輸入的內容
     **/
    const check_node = () => {
      if (store.state.edit_data) {
        if (selected_txt.value == "pie" || selected_txt.value == "bar") {
          grid.engine.nodes[0].content = `<div class="card"><div class="title"><p class="title_header">${title.value}</p><p class="title_footer"><span>${creator.value}</span><span>${created_day}</span></p></div>`;
          grid.engine.nodes[0].content += `<canvas class="myChartStatistics"></canvas>`;
          grid.engine.nodes[0].content += `</div><div class="edit" data-id="${date.getTime()}">edit</div>`;
          grid.engine.nodes[0].content += `</div><div class="edit" data-id="${date.getTime()}">edit</div>`;

          add_new_widget(which_size.value, grid.engine.nodes[0].h);
          add_chart();
        }
        if (selected_txt.value == "tablet") {
          change_table_data(table_data, data_title);
        }
      } else {
        grid.engine.nodes[0].content = `<div class="card"><div class="title"><p class="title_header">${title.value}</p><p class="title_footer"><span>${creator.value}</span><span>${created_day}</span></p></div>`;
        grid.engine.nodes[0].content += `</div><div class="edit" data-id="${date.getTime()}">edit</div>`;
        add_new_widget(which_size.value, grid.engine.nodes[0].h);
      }
      if (textarea_text.value != "") {
        //文字的形式
        grid.engine.nodes[0].content = `<div class="card"><div class="title"><p class="title_header">${title.value}</p><p class="title_footer"><span>${creator.value}</span><span>${created_day}</span></p></div>`;
        const replace_textarea_text = textarea_text.value.replace(/\n/g, "<br>");
        grid.engine.nodes[0].content += `<p class="textarea_con">${replace_textarea_text}</p>`;
        grid.engine.nodes[0].content += `</div><div class="edit" data-id="${date.getTime()}">edit</div>`;
        add_new_widget(which_size.value, grid.engine.nodes[0].h);
      }
    };

    /**
     * textrea放到預覽中
     **/
    const change_content = () => {
      if (selected_txt.value == "text") {
        //文字的方式呈現
        const replace_textarea_text = textarea_text.value.replace(/\n/g, "<br>");

        grid.engine.nodes[0].content = `
        <div class="card">
        <div class="title">
        <p class="title_header">${title.value}</p>
        <p class="title_footer"><span>${
          creator.value
        }</span><span>${created_day}</span></p>
        </div>
        <p class="textarea_con">${replace_textarea_text}</p>
        </div><div class="edit" data-id="${date.getTime()}">edit</div>`;
      }

      add_new_widget(which_size.value, grid.engine.nodes[0].h);
    };

    //產生chart
    const add_chart = () => {
      let type = selected_txt.value;

      if (myChart) {
        myChart.destroy();
      }

      var ctx = document.querySelector(".myChartStatistics").getContext("2d");
      let config = chart_item.arr[select_index.value];
      config.type = type;
      myChart = new Chart(ctx, config);
    };

    /**
     * 產生box
     * @param size : number : 0:small/1:middle/2:large
     * @param h : number : 如果沒有換大小但有拉高度的狀況留著高
     **/
    const add_new_widget = (size, h = 0) => {
      which_size.value = size;
      let show_x = 0;
      let show_maxW = 0;
      let show_minW = 0;
      //預設的寬度
      switch (size) {
        case 0:
          show_x = 4;
          show_maxW = 4;
          show_minW = 4;
          break;
        case 1:
          show_x = 3;
          show_maxW = 6;
          show_minW = 6;
          break;
        case 2:
          show_maxW = 12;
          show_minW = 12;
          break;
      }

      new_box_grid.node.x = show_x;
      new_box_grid.node.maxW = show_maxW;
      new_box_grid.node.minW = show_minW;
      new_box_grid.node.h = h != 0 ? h : 3;

      if (grid.engine.nodes[0]) {
        //已產生box
        new_box_grid.node.content = grid.engine.nodes[0].content;
      } else {
        //尚未產生box
        new_box_grid.node.content = `
        <div class="card">
        <div class="title">
        <p class="title_header">${title.value}</p>
        <p class="title_footer"><span>${
          creator.value
        }</span><span>${created_day}</span></p>
        </div></div><div class="edit" data-id="${date.getTime()}">edit</div>`;
      }

      grid.removeAll(true); // 清掉原本的box
      grid.addWidget(new_box_grid.node); //新的bpx
    };

    /**
     * 產生table
     * @param data : array : td的資料
     * @param table_t : array : 表頭的資料
     **/
    const change_table_data = (data, table_t) => {
      table_data.arr = data.arr.map((x) => x);
      data_title.arr = table_t.arr.map((x) => x);
      let html = "<table>";
      html += `<tr>`;
      table_t.arr.forEach((title, index) => {
        if (
          index != 0 &&
          index != table_t.arr.length - 1 &&
          index != table_t.arr.length - 2
        ) {
          html += `<td>${title.val}</td>`;
        }
      });
      html += `</tr>`;
      data.arr.forEach((item) => {
        html += `<tr>`;
        item.list.forEach((elemet) => {
          html += `<td>${elemet.name}</td>`;
        });
        html += `</tr>`;
      });
      html += `
      </table>
      `;

      grid.engine.nodes[0].content = `<div class="card"><div class="title"><p class="title_header">${
        title.value
      }</p><p class="title_footer"><span>${
        creator.value
      }</span><span>${created_day}</span></p></div> ${html}</div><div class="edit" data-id="${date.getTime()}">edit</div>`;

      add_new_widget(which_size.value, grid.engine.nodes[0].h);
    };

    /**
     * 新增並儲存
     **/
    const save = () => {
      let ans = confirm("Are u sure?");
      //整理格式
      if (ans) {
        let node = {
          id: date.getTime(), //用時間戳
          x: grid.engine.nodes[0].x,
          y: grid.engine.nodes[0].y,
          w: grid.engine.nodes[0].w,
          h: grid.engine.nodes[0].h,
          noResize: true,
          content: grid.engine.nodes[0].content,
          title: title.value,
          manager: creator.value,
          chart: selected_txt.value,
          chartData: "",
          table_data: "",
          data_title: "",
        };
        if (selected_txt.value == "pie" || selected_txt.value == "bar") {
          node.chartData = chart_item.arr[select_index.value].name;
        }
        if (selected_txt.value == "tablet") {
          node.table_data = JSON.stringify(table_data);
          node.data_title = JSON.stringify(data_title);
        }

        if (store.state.edit_data) {
          items.arr.forEach((element, index) => {
            if (element.id === store.state.edit_data.id) {
              node.x = store.state.edit_data.x;
              node.y = store.state.edit_data.y;
              items.arr.splice(index, 1);
            }
          });
        }
        items.arr.push(node);
        store.dispatch("sava_box_data", items.arr);
        router.push("/ShowBox");
      }
    };

    return {
      items,
      add_new_widget,
      new_box_grid,
      title,
      check_node,
      which_progress,
      selected_txt,
      select_option,
      textarea_text,
      change_content,
      save,
      creator,
      which_size,
      control_step,
      chart_item,
      select_index,
      add_chart,
      change_table_data,
      table_data,
      data_title,
    };
  },
};
</script>

<style>
.btn_and_tip .btn_checked {
  background: rgb(189, 189, 189);
}
.editBox {
  width: 900px;
  margin: 0 auto;
}

.editBox section.grid-stack {
  margin: 20px 0 30px 0;
}

.editBox .grid-stack {
  width: 100%;
  height: auto;
  margin: 20px auto 50px auto;
  border: 1px dotted gray;
}

.editBox .grid-stack-item-content {
  background-color: #e5e5e5;
  border-radius: 8px;
}
.grid-stack .title {
  font-weight: bolder;
  background-color: rgb(202, 202, 202);

  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.grid-stack-item-content {
  background-color: #e5e5e5;
  border-radius: 8px;
}

.editBox .tip {
  color: gray;
  font-size: 12px;
}

.editBox .btn_and_tip {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  /* padding: 5px; */
  margin: 0 5px 0 0;
  /* cursor: pointer; */
}
.editBox .progress_all {
  width: 70%;
  margin: 0 auto;
  position: relative;
}
.editBox .progress_bar {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  height: 8px;
  background-color: rgb(85, 85, 85);
}
.editBox .progress_bar:nth-child(2) {
  background-color: rgb(216, 216, 216);
  transition: width 1s;
}
.editBox .progress_all .progress {
  width: 100%;
  position: absolute;
  top: -18px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.editBox .progress h2 {
  background: white;
  padding: 5px 8px;
  color: rgb(209, 209, 209);
}
.editBox .progress h2.onprogress {
  color: rgb(32, 32, 32);
}
.progress_content {
  margin: 70px 0;
  min-height: 300px;
  background-color: rgb(233, 233, 233);
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.step p {
  margin: 10px 0 5px 0;
}
.step input[type="text"] {
  width: 45%;
  padding: 5px;
}
.select_con {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.select_con > div {
  margin: 20px 0;
  width: 100px;
  text-align: center;
}
.select_con > div > img {
  width: 100%;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s;
}
.select_con > div > img:hover,
.select_con > div > img.select_con_click {
  opacity: 0.8;
}

.content_header {
  padding: 10px 0;
}
.content_footer {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
textarea {
  width: 45%;
  height: 200px;
  resize: none;
  line-height: 1.5em;
  padding: 5px;
}
.textarea_con {
  padding: 10px;
  word-break: break-word;
  line-height: 1.5em;
}
.title_header {
  word-break: break-all;
  padding: 10px 20px;
  font-size: 18px;
}
.title_footer {
  min-width: 100px;
  padding: 10px 20px;
  word-break: break-word;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  flex-direction: column;
  text-align: right;
}
.myChartStatistics {
  width: 90%;
  margin: 16px auto 0 auto;
}
select,
button {
  padding: 5px 8px;
}
tr:nth-child(1) {
  font-weight: bold;
}
.editBox .edit {
  display: none;
}
</style>
