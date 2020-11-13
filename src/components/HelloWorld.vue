<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-06 16:28:51
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-13 10:30:51
-->
<template>
	<div class="hello">
		<button @click="addCount">{{count}}</button>
		<div>{{msg}}</div>
		<div class="line"></div>
		<!-- <div>{{x}},{{y}}</div> -->
		<my-component :count="count"/>
		<hello-hooks />
	</div>
</template>

<script>
import { ref,watchEffect,onMounted } from 'vue';
import MyComponent from './MyHooks';
import HelloHooks from './HelloHooks';
export default {
    props:['msg'],
    components:{
		MyComponent,
		HelloHooks 
    },
    setup() {
		let count = ref(0); 
        const addCount = () => {
			count.value++;
		};
   
		watchEffect(() => console.log(count.value))
		onMounted(() => console.log('mounted!'));
		
		return { count, addCount };
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
.line {
	height: 1px;
	background: #42b983;
	width: 100%;
}
</style>
