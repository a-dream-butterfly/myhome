import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css';
createApp(App).use(MdEditor).mount('#app')
