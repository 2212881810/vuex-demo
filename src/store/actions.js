/*
包含n个用于间接更新状态的方法的对象模块
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS,RECEIVE_TODO} from './mutation-types'
import storageUtils from '../utils/storageUtils'
export default {

  addTodo({commit}, todo) {
    // 提交一个mutation请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll({commit}, isCheck) {
    commit(SELECT_ALL_TODOS, {isCheck})
  },

  deleteCompleteTodos({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },
  // 异步获取todos,并更新状态
  reqTodos({commit}) {
    //模拟
    setTimeout(() => {
      // 从localStorage中获取
      const todos = storageUtils.readTodos();
      // 提交commit
      commit(RECEIVE_TODO,{todos})
    },1000);
  }
}
