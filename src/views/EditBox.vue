<template>
  <div class="editBox">
    <!-- <div class="new_box">&#43;</div> -->
    <section>
      <!-- template size -->
      <div class="btn_and_tip">
        <div>
          <button type="button" @click="add_new_widget(2)">large</button>
          <button type="button" @click="add_new_widget(1)">middle</button>
          <button type="button" @click="add_new_widget(0)">small</button>
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
              width:
                which_progress == 0
                  ? '100%'
                  : which_progress == 1
                  ? '50%'
                  : '0%',
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
        <div class="step" v-if="which_progress == 0">
          <p>Creator :</p>
          <input type="text" v-model="creator" @change="check_node" />
          <p>Title :</p>
          <input type="text" v-model="title" @change="check_node" />
        </div>
        <!-- 第二步 -->
        <div class="step" v-else-if="which_progress == 1">
          <div class="select_con">
            <slot v-for="(element, index) in select_option" :key="index">
              <div @click="selected_txt = element.name">
                <img
                  :src="require('../assets/img/' + element.src)"
                  :alt="element.name"
                  :class="[
                    selected_txt == element.name ? 'select_con_click' : '',
                  ]"
                />
                <p>{{ element.name }}</p>
              </div>
            </slot>
          </div>
          <p>selected :{{ selected_txt }}</p>
        </div>
        <!-- 第三步 -->
        <div class="step" v-else-if="which_progress == 2">
          <!-- 文字 -->
          <div v-if="selected_txt == 'text'">
            <textarea
              v-model="textarea_text"
              @change="change_content()"
            ></textarea>
          </div>
        </div>

        <div class="content_footer">
          <button @click="which_progress--" :disabled="which_progress == 0">
            Back
          </button>
          <button @click="which_progress++" :disabled="which_progress == 2">
            Next
          </button>
          <button v-show="which_progress == 2" @click="save">Save</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
export default {
  name: "EditBox",
  props: {},
  setup() {
    const store = useStore();
    const items = reactive({ arr: [] });
    const select_option = reactive([
      {
        id: 0,
        name: "text",
        src: "text.png",
      },
      {
        id: 1,
        name: "pie-chart",
        src: "pie-chart.png",
      },
      {
        id: 2,
        name: "statistics",
        src: "statistics.png",
      },
      {
        id: 3,
        name: "tablet",
        src: "tablet.png",
      },
    ]);
    const title = ref("My title");
    const creator = ref("Your Name");
    const selected_txt = ref("no selected");
    const textarea_text = ref("");
    const which_size = ref(1);
    const which_progress = ref(0);
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
    });

    let grid = null;
    onMounted(() => {
      items.arr = store.state.box_item.map((item) => item);
      grid = GridStack.init({
        float: true,
        minRow: 1,
        minWidth: 500,
        column: 12,
        cellHeight: "80px",
      });
      add_new_widget(which_size.value);
    });
    const check_node = () => {
      console.log(grid.engine.nodes[0]);
      grid.engine.nodes[0].content = `
          <div class="card">
          <p class="title">${title.value}</p>`;
      if (textarea_text.value != "") {
        const replace_textarea_text = textarea_text.value.replace(
          /\n/g,
          "<br>"
        );

        grid.engine.nodes[0].content += `<p class="textarea_con">${replace_textarea_text}</p>`;
      }
      grid.engine.nodes[0].content += `   <p class="title_footer"><span>${creator.value}</span><span>2022-01-20</span></p>
          </div>`;

      add_new_widget(which_size.value, grid.engine.nodes[0].h);
    };

    const change_content = () => {
      if (selected_txt.value == "text") {
        const replace_textarea_text = textarea_text.value.replace(
          /\n/g,
          "<br>"
        );
        grid.engine.nodes[0].content = `
          <div class="card">
          <p class="title">${title.value}</p>
          <p class="textarea_con">${replace_textarea_text}</p>
          <p class="title_footer"><span>${creator.value}</span><span>2022-01-20</span></p>
          </div>`;

        add_new_widget(which_size.value, grid.engine.nodes[0].h);
      }
    };

    const add_new_widget = (size, h = 0) => {
      which_size.value = size;
      let show_x = 0;

      let show_maxW = 0;
      let show_minW = 0;
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
      console.log(grid.engine.nodes[0]);
      if (grid.engine.nodes[0]) {
        // console.log(grid.engine.nodes[0].content);
        new_box_grid.node.content = grid.engine.nodes[0].content;
      } else {
        new_box_grid.node.content = `
          <div class="card">
          <p class="title">${title.value}</p>
           <p class="title_footer"><span>${creator.value}</span><span>2022-01-20</span></p>
          </div>`;
      }
      grid.removeAll(true);
      grid.addWidget(new_box_grid.node);
    };

    const save = () => {
      let date = new Date("2019/12/9 13:25:08:800");
      let node = {
        id: date.getTime(),
        x: grid.engine.nodes[0].x,
        y: grid.engine.nodes[0].y,
        w: grid.engine.nodes[0].w,
        h: grid.engine.nodes[0].h,
        noResize: true,
        content: grid.engine.nodes[0].content,
        title: title.value,
        manager: "jack",
      };

      items.arr.push(node);
      store.dispatch("sava_box_data", items.arr);
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
  padding: 5px;
  margin: 0 5px 0 0;
  cursor: pointer;
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
  transition: opacity 0.5s;
}
.select_con > div > img:hover,
.select_con > div > img.select_con_click {
  opacity: 0.8;
}

.content_header {
  padding: 10px 0;
}
.content_footer {
  padding: 20px 0;
}
textarea {
  width: 45%;
  height: 200px;
  resize: none;
}
.textarea_con {
  padding: 10px;
  word-break: break-word;
  line-height: 1.5em;
}
.title_footer {
  width: 100%;
  background-color: rgb(202, 202, 202);
  padding: 5px 10px;
  word-break: break-word;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
