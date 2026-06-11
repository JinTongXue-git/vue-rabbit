// 全局组件打包
import Sku from '@/components/XtxSku/index.vue'
import ImageView from '@/components/ImageView/index.vue'  // ✅ 正确路径


export const componenntPlugin = {
  install(app){
    app.component('XtxSku', Sku )
    app.component('XtxImageView', ImageView )
  }
}