
import { useIntersectionObserver } from '@vueuse/core'



/**
 * 图片懒加载插件
 * 
 * 这个插件的作用：
 * 1. 注册一个全局指令叫 v-img-lazy
 * 2. 图片进入视口前不会加载，节省网络流量
 * 3. 图片进入视口后自动加载
 * 
 * 使用方式：
 * <img v-img-lazy="图片的URL" />
 */
export const imgLazyPlugin = {
  install(app) {
    /**
     * 注册全局指令：v-img-lazy
     * 
     * @param {Object} app - Vue 应用实例
     */
    app.directive('img-lazy', {
      /**
       * 当元素挂载到 DOM 上时执行
       * 
       * @param {HTMLElement} el - 绑定指令的那个元素，就是那个 img 标签
       * @param {Object} binding - 指令相关的一堆信息
       * @param {any} binding.value - 就是 v-img-lazy="这里面的值"，也就是图片 URL
       */
      mounted(el, binding) {
        // 使用 @vueuse/core 提供的 IntersectionObserver 来监听元素是否进入视口
        const { stop } = useIntersectionObserver(
          el,
          /**
           * @param {Array} entries - 包含观察元素信息的数组
           * @param {boolean} entries[0].isIntersecting - 元素是否进入视口
           */
          ([{ isIntersecting }]) => {
            console.log('图片是否进入视口:', isIntersecting)
            
            // 只要图片进入视口了，就给 img 标签设置 src 属性加载图片
            if (isIntersecting) {
              el.src = binding.value
              // 图片加载成功后，就停止监听，省得一直监听浪费性能
              stop()
            }
          }
        )
      }
    })
  }
}

