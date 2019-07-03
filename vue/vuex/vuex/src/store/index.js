import Vue from 'vue'
//1.引入
import Vuex from 'vuex'
//2.挂载
Vue.use(Vuex)
    // 3.声明store对象
export default new Vuex.Store({
    strict: process.env.NODE_ENV != 'production',
    getters: {
        count(state) {
            return state.a + state.b;
        },
        onlineUsers(state) {
            return state.users.filter(user => user.online)
        }
    },
    state: {
        a: 2,
        b: 6,
        users: [],
    },
    mutations: {
        // add(state, n) {
        //     state.a += n;
        // },
        // set_a(state, n) {
        //     state.a = n
        // },
        // set_b(state, n) {
        //     state.b = n
        // },
        addA(state, n) {
            state.a += n;
        },
        addB(state, n) {
            state.b += n
        },
        setOnline(state, id) {
            // state.users[n].online = true
            console.log(id)
            state.users.forEach(user => {
                if (id == user.id) {
                    user.online = true
                }
            })
        },
        setUsers(state, users) {
            state.users = users
        }
    },
    modules: {},
    actions: {
        // add(context, n) {
        //     context.commit('add', n)
        // },
        // set_a({ commit }, n) {
        //     commit('set_a', n)
        // },
        // set_b({ commit }, n) {
        //     commit('set_b', n)
        // },
        addA({ commit }, n) {
            commit('addA', n)
        },
        addB({ commit }, n) {
            commit('addB', n)
        },
        setOnline({ commit }, id) {
            commit('setOnline', id)
        },
        async readUsers({ commit }) {
            let res = await fetch('http://localhost:8888/user.txt');
            let users = await res.json();
            commit('setUsers', users)
        }
    }
})