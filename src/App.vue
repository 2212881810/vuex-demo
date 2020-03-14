<template>
  <div>
    <!--    <p>click {{$store.state.count}} times ,count is {{evenOrOdd}}</p>-->
    <!--    上面的代码可以简化成下面这样-->
    <p>click {{count}} times ,count is {{evenOrOdd}}</p>
    <button @click='increment'>+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {

    computed: { // 计算属性
      ...mapState(['count']),  // 返回值： {count(){return this.$store.state['count']}}
      ...mapGetters(['evenOrOdd']),  // mapGetters()返回值： {evenOrOdd(){this.$store.getters['evenOrOdd']}}
      // 下面的代码可以简化成上面这样
      /*      evenOrOdd() {
              return this.$store.getters.evenOrOdd  // 从$store中获取计算属性
            },
            count() {
              return this.$store.state.count  // 从$store中获取计算属性
            }*/
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
    // 下面的代码可以简化成上面这样
    /*    methods: {
          increment() {
            // 通知vuex去增加
            this.$store.dispatch('increment') // 触发store中的actions
          },
          decrement() {
            this.$store.dispatch('decrement');
          },
          incrementIfOdd() {
            this.$store.dispatch('incrementIfOdd');
          },
          // 异步增加，过1秒才添加
          incrementAsync() {
            this.$store.dispatch('incrementAsync');
          },
        }*/

  }
</script>

<style>

</style>
