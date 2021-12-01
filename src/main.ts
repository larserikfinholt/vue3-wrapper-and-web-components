import { createApp, defineCustomElement } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import MyWebComponent from './customElements/MyWebComponent.ce.vue';

const MyWebComponentComponent = defineCustomElement(MyWebComponent);

customElements.define('my-web-component', MyWebComponentComponent);

// A test app with all components
createApp(App).use(ElementPlus).mount('#app')
