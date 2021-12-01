import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue( {
    // customElement:true
    template: {
     compilerOptions: {
      //  isCustomElement: (tag)=> tag.startsWith('el')
     } 
    },
     
  })]

})
