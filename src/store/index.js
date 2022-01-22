import { createStore } from "vuex";

export default createStore({
    state: { // 所有在 store 裏的資料
        box_item: [],
        chart_data: [],

    },
    mutations: { // 負責改變 state 裏的資料

        change_box_data(state, data) {
            state.box_item = data;
        },
        change_chart_data(state, data) {
            state.chart_data = data;
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
                    id: 0, x: 0, y: 11, w: 4, h: 4, noResize: true, content:
                        ` <div class="card">
                        <div class="title">
                        <p class="title_header">My Chart</p>
                        <p class="title_footer"><span>Sherry Hsu</span><span>2022-1-22</span></p>
                        </div>
                        <canvas class="myChartStatistics"></canvas>
                        </div>
                    `,
                    title: 'Title', manager: 'Sherry Hsu',
                    chart: 'pie',
                    chartDate: 'Boolean Data'
                },
                {
                    id: 1, x: 4, y: 0, w: 4, h: 3, noResize: true, content:
                        ` <div class="card">
                    <div class="title">
                    <p class="title_header">My Chart2</p>
                    <p class="title_footer"><span>Sara</span><span>2022-1-22</span></p>
                    </div>
                    <canvas class="myChartStatistics"></canvas>
                    </div>
                `,
                    title: 'Title', manager: 'Sara',
                    chart: 'bar',
                    chartDate: 'Color Data'
                },

                {
                    id: 2, x: 0, y: 3, w: 12, h: 4, noResize: true, content: `<div class="card">
                    <div class="title">
                    <p class="title_header">Title</p>
                    <p class="title_footer">
                    <span>Fan</span><span>2022-01-29</span></p>
                    </div>
                    </div>`, title: 'Title', manager: 'Fan'
                },
                {
                    id: 3, x: 8, y: 0, w: 4, h: 3, noResize: true, content: `<div class="card">
                    <div class="title">
                    <p class="title_header">Title</p>
                    <p class="title_footer">
                    <span>Amy</span><span>2022-01-27</span></p>
                    </div>
                    </div>`, title: 'Title', manager: 'Amy'
                },
                {
                    id: 4, x: 0, y: 7, w: 6, h: 4, noResize: true, content: `<div class="card">
                <div class="title">
                <p class="title_header">Title</p>
                <p class="title_footer">
                <span>Aberforth Dumbledore</span><span>2022-01-29</span></p>
                </div>
             </div>`, title: 'title', manager: 'Aberforth Dumbledore'
                },
                {
                    id: 5, x: 6, y: 7, w: 6, h: 7, noResize: true, content: `<div class="card">
                <div class="title">
                <p class="title_header">Title</p>
                <p class="title_footer">
                <span>Elizabeth Alexandra Mary</span><span>2022-01-29</span></p>
                </div>
             </div>`, title: 'Title', manager: 'Elizabeth Alexandra Mary'
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