<template>
  <div class="showBox">
    <section class="grid-stack"></section>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import Chart from "chart.js/auto";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
export default {
  name: "ShowBox",
  props: {},
  setup() {
    const store = useStore();
    let grid = null;
    const items = reactive({ arr: [] }); //目前有創建的box data
    const chart_item = reactive({ arr: [] }); //會需要的chart資料

    onMounted(() => {
      store.dispatch("cancel_edit_data");
      items.arr = store.state.box_item.map((item) => item);
      chart_item.arr = store.state.chart_data.map((item) => item);
      init();
    });

    const init = () => {
      count = 0;
      grid = GridStack.init({
        float: true,
        minRow: 1,
        minWidth: 500,
        column: 12,
        cellHeight: "80px",
      });

      // 有移動box就存一下
      grid.on("dragstop", () => {
        // (event, element)
        // const node = element.gridstackNode;

        items.arr.forEach((box) => {
          const new_node = grid.engine.nodes.filter((item) => box.id === item.id)[0];
          box.x = new_node.x;
          box.y = new_node.y;
        });

        store.dispatch("sava_box_data", items.arr);
      });

      //把box渲染到畫面上
      items.arr.forEach((element) => {
        add_new_widget(element);
      });

      //修改
      document.querySelectorAll(".edit").forEach((element) => {
        element.addEventListener("click", function () {
          items.arr.forEach((element2) => {
            if (element2.id === Number(this.dataset.id)) {
              store.dispatch("new_edit_data", element2);
            }
          });
          router.push("/NewBox");
        });
      });
      // 刪除
      document.querySelectorAll(".delete").forEach((element) => {
        element.addEventListener("click", function () {
          let title = "";
          let items_index;
          items.arr.forEach((element2, index) => {
            if (element2.id === Number(this.dataset.id)) {
              title = element2.title;
              items_index = index;
            }
          });

          let ans = confirm(`DELETE "${title}" ?`);
          if (ans) {
            items.arr.splice(items_index, 1);
            store.dispatch("sava_box_data", items.arr);
            grid.removeAll(true);
            init();
          }
        });
      });
    };

    //產生chart
    let count = 0;
    const show_chart = (item) => {
      var ctx = document.querySelectorAll(".myChartStatistics")[count].getContext("2d");
      let config = chart_item.arr.filter((x) => x.name == item.chartData)[0];
      config.type = item.chart;
      new Chart(ctx, config);
      count++;
    };

    //產生box
    const add_new_widget = (item) => {
      const node = item;

      grid.addWidget(node);
      if (item.chart === "pie" || item.chart === "bar") {
        show_chart(item);
      }
    };

    return {
      chart_item,
      init,
    };
  },
};
</script>

<style>
@import "../../node_modules/gridstack/dist/gridstack.min.css";

.btn-primary {
  color: #fff;
  background-color: #007bff;
}

.btn {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.showBox {
  position: relative;
}
.showBox .grid-stack {
  width: 900px;
  min-height: 80vh;
  margin: 20px auto 50px auto;
  border: 1px dotted gray;
}

.grid-stack-item-content {
  background-color: #e5e5e5;
  border-radius: 8px;
}

.grid-stack-item-removing {
  opacity: 0.5;
}
.trash {
  height: 100px;
  background: rgba(255, 0, 0, 0.1) center center
    url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQzOC41MjkgNDM4LjUyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUyOSA0MzguNTI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQxNy42ODksNzUuNjU0Yy0xLjcxMS0xLjcwOS0zLjkwMS0yLjU2OC02LjU2My0yLjU2OGgtODguMjI0TDMwMi45MTcsMjUuNDFjLTIuODU0LTcuMDQ0LTcuOTk0LTEzLjA0LTE1LjQxMy0xNy45ODkgICAgQzI4MC4wNzgsMi40NzMsMjcyLjU1NiwwLDI2NC45NDUsMGgtOTEuMzYzYy03LjYxMSwwLTE1LjEzMSwyLjQ3My0yMi41NTQsNy40MjFjLTcuNDI0LDQuOTQ5LTEyLjU2MywxMC45NDQtMTUuNDE5LDE3Ljk4OSAgICBsLTE5Ljk4NSw0Ny42NzZoLTg4LjIyYy0yLjY2NywwLTQuODUzLDAuODU5LTYuNTY3LDIuNTY4Yy0xLjcwOSwxLjcxMy0yLjU2OCwzLjkwMy0yLjU2OCw2LjU2N3YxOC4yNzQgICAgYzAsMi42NjQsMC44NTUsNC44NTQsMi41NjgsNi41NjRjMS43MTQsMS43MTIsMy45MDQsMi41NjgsNi41NjcsMi41NjhoMjcuNDA2djI3MS44YzAsMTUuODAzLDQuNDczLDI5LjI2NiwxMy40MTgsNDAuMzk4ICAgIGM4Ljk0NywxMS4xMzksMTkuNzAxLDE2LjcwMywzMi4yNjQsMTYuNzAzaDIzNy41NDJjMTIuNTY2LDAsMjMuMzE5LTUuNzU2LDMyLjI2NS0xNy4yNjhjOC45NDUtMTEuNTIsMTMuNDE1LTI1LjE3NCwxMy40MTUtNDAuOTcxICAgIFYxMDkuNjI3aDI3LjQxMWMyLjY2MiwwLDQuODUzLTAuODU2LDYuNTYzLTIuNTY4YzEuNzA4LTEuNzA5LDIuNTctMy45LDIuNTctNi41NjRWODIuMjIxICAgIEM0MjAuMjYsNzkuNTU3LDQxOS4zOTcsNzcuMzY3LDQxNy42ODksNzUuNjU0eiBNMTY5LjMwMSwzOS42NzhjMS4zMzEtMS43MTIsMi45NS0yLjc2Miw0Ljg1My0zLjE0aDkwLjUwNCAgICBjMS45MDMsMC4zODEsMy41MjUsMS40Myw0Ljg1NCwzLjE0bDEzLjcwOSwzMy40MDRIMTU1LjMxMUwxNjkuMzAxLDM5LjY3OHogTTM0Ny4xNzMsMzgwLjI5MWMwLDQuMTg2LTAuNjY0LDguMDQyLTEuOTk5LDExLjU2MSAgICBjLTEuMzM0LDMuNTE4LTIuNzE3LDYuMDg4LTQuMTQxLDcuNzA2Yy0xLjQzMSwxLjYyMi0yLjQyMywyLjQyNy0yLjk5OCwyLjQyN0gxMDAuNDkzYy0wLjU3MSwwLTEuNTY1LTAuODA1LTIuOTk2LTIuNDI3ICAgIGMtMS40MjktMS42MTgtMi44MS00LjE4OC00LjE0My03LjcwNmMtMS4zMzEtMy41MTktMS45OTctNy4zNzktMS45OTctMTEuNTYxVjEwOS42MjdoMjU1LjgxNVYzODAuMjkxeiIgZmlsbD0iI2ZmOWNhZSIvPgoJCTxwYXRoIGQ9Ik0xMzcuMDQsMzQ3LjE3MmgxOC4yNzFjMi42NjcsMCw0Ljg1OC0wLjg1NSw2LjU2Ny0yLjU2N2MxLjcwOS0xLjcxOCwyLjU2OC0zLjkwMSwyLjU2OC02LjU3VjE3My41ODEgICAgYzAtMi42NjMtMC44NTktNC44NTMtMi41NjgtNi41NjdjLTEuNzE0LTEuNzA5LTMuODk5LTIuNTY1LTYuNTY3LTIuNTY1SDEzNy4wNGMtMi42NjcsMC00Ljg1NCwwLjg1NS02LjU2NywyLjU2NSAgICBjLTEuNzExLDEuNzE0LTIuNTY4LDMuOTA0LTIuNTY4LDYuNTY3djE2NC40NTRjMCwyLjY2OSwwLjg1NCw0Ljg1MywyLjU2OCw2LjU3QzEzMi4xODYsMzQ2LjMxNiwxMzQuMzczLDM0Ny4xNzIsMTM3LjA0LDM0Ny4xNzJ6IiBmaWxsPSIjZmY5Y2FlIi8+CgkJPHBhdGggZD0iTTIxMC4xMjksMzQ3LjE3MmgxOC4yNzFjMi42NjYsMCw0Ljg1Ni0wLjg1NSw2LjU2NC0yLjU2N2MxLjcxOC0xLjcxOCwyLjU2OS0zLjkwMSwyLjU2OS02LjU3VjE3My41ODEgICAgYzAtMi42NjMtMC44NTItNC44NTMtMi41NjktNi41NjdjLTEuNzA4LTEuNzA5LTMuODk4LTIuNTY1LTYuNTY0LTIuNTY1aC0xOC4yNzFjLTIuNjY0LDAtNC44NTQsMC44NTUtNi41NjcsMi41NjUgICAgYy0xLjcxNCwxLjcxNC0yLjU2OCwzLjkwNC0yLjU2OCw2LjU2N3YxNjQuNDU0YzAsMi42NjksMC44NTQsNC44NTMsMi41NjgsNi41N0MyMDUuMjc0LDM0Ni4zMTYsMjA3LjQ2NSwzNDcuMTcyLDIxMC4xMjksMzQ3LjE3MnogICAgIiBmaWxsPSIjZmY5Y2FlIi8+CgkJPHBhdGggZD0iTTI4My4yMiwzNDcuMTcyaDE4LjI2OGMyLjY2OSwwLDQuODU5LTAuODU1LDYuNTctMi41NjdjMS43MTEtMS43MTgsMi41NjItMy45MDEsMi41NjItNi41N1YxNzMuNTgxICAgIGMwLTIuNjYzLTAuODUyLTQuODUzLTIuNTYyLTYuNTY3Yy0xLjcxMS0xLjcwOS0zLjkwMS0yLjU2NS02LjU3LTIuNTY1SDI4My4yMmMtMi42NywwLTQuODUzLDAuODU1LTYuNTcxLDIuNTY1ICAgIGMtMS43MTEsMS43MTQtMi41NjYsMy45MDQtMi41NjYsNi41Njd2MTY0LjQ1NGMwLDIuNjY5LDAuODU1LDQuODUzLDIuNTY2LDYuNTdDMjc4LjM2NywzNDYuMzE2LDI4MC41NSwzNDcuMTcyLDI4My4yMiwzNDcuMTcyeiIgZmlsbD0iI2ZmOWNhZSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
    no-repeat;
}
.sidebar {
  background: rgba(0, 255, 0, 0.1);
  padding: 25px 0;
  height: 100px;
  text-align: center;
}
.sidebar .grid-stack-item {
  width: 120px;
  height: 50px;
  border: 2px dashed green;
  text-align: center;
  line-height: 35px;
  z-index: 10;
  background: rgba(0, 255, 0, 0.1);
  cursor: default;
  display: inline-block;
}
.sidebar .grid-stack-item .grid-stack-item-content {
  background: none;
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
.card table {
  margin: 20px auto;
  border-collapse: collapse;
  width: 90%;
}
.card table,
.card tr,
.card td {
  border-bottom: 1px solid gray;
  text-align: center;
}
.card td {
  padding: 5px;
}
.showBox .edit {
  width: 50px;
  position: absolute;
  bottom: 8px;
  right: 6px;
  background-color: rgb(46, 46, 46);
  padding: 4px 6px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  text-align: center;
  display: none;
}
.showBox .grid-stack-item-content:hover .edit {
  display: block;
}

.showBox .delete {
  width: 50px;
  position: absolute;
  bottom: 40px;

  right: 6px;
  background-color: rgb(137 42 42);
  padding: 4px 6px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: none;
}
.showBox .grid-stack-item-content:hover .delete {
  display: block;
}
</style>
