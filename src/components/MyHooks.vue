<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-13 09:53:03
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-13 10:16:49
-->
<template>
    <div>{{hookName}}{{double}}</div>
</template>
<script>
import { ref,onMounted, onUpdated, onUnmounted, computed } from 'vue'

const MyComponent = {
    props:{
        count: Number
    },
    setup(props) {
        const hookName = ref('哈哈哈，我只是简单测试一下啊');
        console.log(props);
        const double = computed(() => props.count * 2);
        console.log(double,'doubledouble');
        onMounted(() => {
        console.log('mounted!')
        })
        onUpdated(() => {
        console.log('updated!')
        })
        onUnmounted(() => {
        console.log('unmounted!')
        });
        return {
            hookName,
            double
        }
    },
};
export default MyComponent;
</script>