/*
vuex的核心管理对象模块
 */

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
  count: 0// 初始化状态
};
const mutations = {
  // 增加的mutation ,
  INCREMENT(state) {
    state.count++
  },

  // 减少的mutation ,
  DECREMENT(state) {
    state.count--
  }
};
//  包含多个对应事件回调函数
const actions = {
  increment({commit}) {
    // 提交mutation
    commit('INCREMENT');
  },
  decrement({commit}) {
    commit('DECREMENT');
  },
  //带条件的action
  incrementIfOdd({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT');
    }
  },

  // 在action中可以直接执行异步代码
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT');
    }, 1000);
  }
};
const getters = {
  evenOrOdd() {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
};

export default new Vuex.Store({
  state,  // 状态对象
  mutations,// 包含多个更新state函数的对象
  actions,
  getters//包含多个getter的计算属性
});



