<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-06 16:37:46
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-13 10:32:32
-->
<script>
import { ref, onMounted, onUnmounted } from 'vue';
export function useMousePosition() {
  let x = ref(0);
  let y = ref(0);

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}
</script>
