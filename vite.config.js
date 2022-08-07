import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base:'/myhome/'   // 对应GitHub项目名称
})
