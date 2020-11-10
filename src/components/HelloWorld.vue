<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-06 16:28:51
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-10 09:59:30
-->
<template>
	<div class="hello">
		<button @click="addCount">{{count}}</button>
	</div>
</template>

<script>
import { ref,watchEffect,onMounted } from 'vue';
export default {

    setup() {
		let count = ref(0); 
        const addCount = () => {
            count.value++;
		};
		watchEffect(() => console.log(count.value))
		onMounted(() => console.log('mounted!'));
		
		return { count, addCount};
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
