<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-06 16:37:46
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-10 09:44:17
-->
<script>
import { value, onMounted, onUnmounted } from 'vue';
function useMouse() {
  let x = value(0);
  const changeValue = () => {
    x.value ++;
  }
  onMounted(() => {
    window.addEventListener('click', changeValue)
  })
  onUnmounted(() => {
    window.removeEventListener('click', changeValue)
  })
  return x;
}

export default useMouse;
</script>
