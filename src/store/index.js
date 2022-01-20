import { createStore } from "vuex";

export default createStore({
    state: { // 所有在 store 裏的資料
        box_item: []

    },
    mutations: { // 負責改變 state 裏的資料

        change_box_data(state, data) {
            state.box_item = data;
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
                        `<div class="card">
                    <p class="title">小1</p>
                    
                     </div>
                    `,
                    title: 'title', manager: 'jack'
                },
                { id: 1, x: 4, y: 0, w: 4, h: 3, noResize: true, content: `<p class="title">小2</p>`, title: 'title', manager: 'jack' },
                { id: 2, x: 8, y: 0, w: 4, h: 3, noResize: true, content: `<p class="title">小3</p>`, title: 'title', manager: 'jack' },
                { id: 3, x: 0, y: 3, w: 12, h: 4, noResize: true, content: `<p class="title">大4</p>`, title: 'title', manager: 'jack' },
                { id: 4, x: 0, y: 7, w: 6, h: 4, noResize: true, content: `<p class="title">中5</p>`, title: 'title', manager: 'jack' },
                { id: 5, x: 6, y: 7, w: 6, h: 7, noResize: true, content: `<p class="title">中6</p>`, title: 'title', manager: 'jack' },
            ];
            commit('change_box_data', items);
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