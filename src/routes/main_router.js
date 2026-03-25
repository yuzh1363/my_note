import { createRouter, createWebHistory } from 'vue-router';

// 1. 定義路由組件 (通常會從外部檔案匯入)
// 靜態載入：頁面一開啟就載入，適合首頁
import NoteGrid from '../components/NoteGrid.vue';
import AddNote from '../components/AddNote.vue'
import EditNote from '../components/EditNote.vue'
import SearchNote from '../components/SearchNote.vue'

// 2. 定義路由表
const routes = [
  {
    path: '/',
    name: 'noteGrid',
    component: NoteGrid
  },
  {
    path: '/add_note',
    name: 'add-note',
    component: AddNote
  },
  {
    path: '/edit_note/:id',
    name: 'edit_note',
    props:true,
    component: EditNote
  },
  {
    path: '/search',
    name: 'search',
    component: SearchNote
  }
];

// 3. 建立路由實例
const router = createRouter({
  // 使用 HTML5 History 模式，URL 不會有 # 號
  history: createWebHistory(),
  routes
});

export default router;