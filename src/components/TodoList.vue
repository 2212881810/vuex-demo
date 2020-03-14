<template>
  <ul class="todo-main">
    <!--    因为这儿需要拿到todos数据，所以下面使用computed计算属性去state中拿值，
        为什么不使用method方法，因为使用method方法，每次都会调用执行，而computed只要state中的
        todo数据不发生变化，它就不会变，相当于缓存着数据-->
    <TodoItem v-for="(todo, index) in todos" :key="index"
              :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from './TodoItem.vue'
  import storageUtils from '../utils/storageUtils'

  export default {
    // 只要是从state中获取数据，都使用computed属性
    computed: {
      ...mapState(['todos'])
    },

    watch: {// 监视todos的所有变化
      todos: {
        deep: true, // 深度监视
        handler: storageUtils.saveTodos,  // todos发生变化，存储在localStorage中
      }
    },

    components: {
      TodoItem
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
