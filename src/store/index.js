import { createStore } from "vuex";

export default createStore({
    state: { // 所有在 store 裏的資料
        box_item: [],
        chart_data: [],
        edit_data: null

    },
    mutations: { // 負責改變 state 裏的資料

        change_box_data(state, data) {
            state.box_item = data;
        },
        change_chart_data(state, data) {
            state.chart_data = data;
        },
        new_box_data(state, data) {
            state.edit_data = data;
        },
        cancel_data(state) {
            state.edit_data = null;
        }


    },
    actions: {
        // 負責觸發 mutations
        // ajax 要在 Actions 裡面做，不可以在 Mutations 裡面做
        // 可處理非同步程式（e.g: 打 API）
        //==================================================
        get_box_data({ commit }) {
            const items = [
                {
                    "id":0,
                    "x": 8,
                    "y": 0,
                    "w": 4,
                    "h": 5,
                    "noResize": true,
                    "content": `
                    <div class="card">
                        <div class="title">
                            <p class="title_header">My Chart Pie</p>
                            <p class="title_footer"><span>Harry Potter</span><span>2022-1-22</span></p>
                        </div>
                        <canvas class="myChartStatistics"></canvas>
                    </div>
                    <div class="delete" data-id="0">delete</div>
                    <div class="edit" data-id="0">edit</div>`,
                    "title": "My Chart Pie",
                    "manager": "Harry Potter",
                    "chart": "pie",
                    "chartData": "Boolean Data"
                },
                {
                    "id": 1, "x": 0, "y": 0, "w": 4, "h": 3, "noResize": true,
                    "content": `
                    <div class="card"> 
                        <div class="title">
                            <p class="title_header">My Chart Bar</p>
                             <p class="title_footer"><span>Fan</span><span>2022-1-22</span></p> 
                        </div>
                        <canvas class="myChartStatistics"></canvas>
                    </div>
                    <div class="delete" data-id="1">delete</div>
                    <div class="edit" data-id="1">edit</div>`,
                    "title": "My Chart Bar", "manager": "Fan", "chart": "bar", "chartData": "Color Data"
                },
                {
                    "id": 3, "x": 4, "y": 0, "w": 4, "h": 3, "noResize": true,
                    "content": `
                    <div class="card">
                        <div class="title"> 
                            <p class="title_header">My Textarea</p>
                            <p class="title_footer"><span>Sherry</span><span>2022-01-27</span></p>
                        </div>
                        <p class="textarea_con">Whether you’ve used a Bullet Journal for years or have never seen one before, the international best-selling book The Bullet Journal Method will show you how to go from passenger to pilot of your life through intentional living.</p>
                    </div>
                    <div class="delete" data-id="3">delete</div>
                    <div class="edit"  data-id="3">edit</div>`, "title": "My Textarea", "manager": "Sherry", "chart": "text"
                },
                {
                    "id": 4, "x": 0, "y": 4, "w": 6, "h": 3, "noResize": true,
                    "content": `<div class="card"><div class="title"><p class="title_header">My Table</p><p class="title_footer"><span>Aberforth Dumbledore</span><span>2022-01-29</span></p></div><table><tr><td>List</td><td>List2</td></tr><tr><td>Edit content1-1</td><td>Edit content2-1</td></tr><tr><td>Edit content1-2</td><td>Edit content2-2</td></tr><tr><td>Edit content1-3</td><td>Edit content2-3</td></tr>
                    </table></div><div class="delete" data-id="4">delete</div><div class="edit" data-id="4">edit</div>`, "title": "My Table", "manager": "Aberforth Dumbledore", "chart": "tablet", "table_data": `{"arr":[{"index_item":0,"list":[{"name":"Edit content1-1"},{"name":"Edit content2-1"}]},{"index_item":1,"list":[{"name":"Edit content1-2"},{"name":"Edit content2-2"}]},{"index_item":2,"list":[{"name":"Edit content1-3"},{"name":"Edit content2-3"}]}]}`, "data_title": `{"arr":[{"val":"Table"},{"val":"List"},{"val":"List2"},{"val":"⇉"},{"val":"Set"}]}`
                },
               ];

            commit('change_box_data', items);
        },
        get_chart_data({ commit }) {
            const chart_arr = [
                {
                    name: 'Color Data',
                    type: "",
                    data: {
                        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        datasets: [
                            {
                                label: "# of item",
                                data: [10, 20, 30, 20, 10, 10],
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)",
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(153, 102, 255, 0.2)",
                                    "rgba(255, 159, 64, 0.2)",
                                ],
                                borderColor: [
                                    "rgba(255, 99, 132, 1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(75, 192, 192, 1)",
                                    "rgba(153, 102, 255, 1)",
                                    "rgba(255, 159, 64, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },

                },
                {
                    name: 'Year Data',
                    type: "",
                    data: {
                        labels: ["2021", "2022", "2023", "2024", "2025"],
                        datasets: [
                            {
                                label: "# of item",
                                data: [50, 100, 80, 56, 77],
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)",
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(153, 102, 255, 0.2)",
                                ],
                                borderColor: [
                                    "rgba(255, 99, 132, 1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(75, 192, 192, 1)",
                                    "rgba(153, 102, 255, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },

                },
                {
                    name: 'Boolean Data',
                    type: "",
                    data: {
                        labels: ["Yes", "No"],
                        datasets: [
                            {
                                label: "# of item",
                                data: [222, 105],
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                ],
                                borderColor: [
                                    "rgba(255, 99, 132, 1)",
                                    "rgba(54, 162, 235, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },

                }
            ];
            commit('change_chart_data', chart_arr);
        },
        sava_box_data({ commit }, new_data) {
            commit('change_box_data', new_data);
        },
        new_edit_data({ commit }, new_data) {
            commit('new_box_data', new_data);
        },
        cancel_edit_data({ commit }) {
            commit('cancel_data');
        },




    },
    getters: {
        // 像 computed 一樣？？，運算處理 state 資料
        //==================================================

        // get_is_loading: state => {
        //     return state.is_loading
        // },


    },
    modules: {
        // 按需求分拆 module
        // 每個 module 都有自己的state, actions, mutations, getters, modules
    }
})