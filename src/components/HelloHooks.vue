<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-13 09:46:28
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-13 10:31:49
-->
<script>
import { ref, watchEffect, onMounted,reactive, computed, watch ,toRefs } from 'vue'
export default {
  setup() {
    const number = ref(0)
    let state = reactive({number: 0});
    const double = computed(() => number.value * 2); 
    function increment() {
      number.value++
    }
     //监听ref类型
     watch(number, (number, preNumber) => { //number新值， preNumber旧值
       console.log('我在监听呀',number, preNumber) //这里是监听数据变化后执行的函数
     })
      //监听reactive类型
     watch(() => state.number,(number, preNumber) => { 
         console.log('hello',number, preNumber)
     }, {lazy:false}) //在第一次创建不监听)


    watchEffect(() => console.log(number.value))

    onMounted(() => console.log('mounted!'))

    return {
      number,
      double,
      increment,
      ...toRefs(state)
    }
  }
}
</script>
