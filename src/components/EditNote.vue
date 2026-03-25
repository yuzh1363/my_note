<script setup>
import { useNoteStore } from '../stores/note_store';
import { watch,ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';

//路由與儲存筆記
const route = useRoute()
const router = useRouter()
const note = useNoteStore()
//更新標題與內文
const new_title = ref('')
const new_content  =ref('')
//訊息提示
const showalert = ref(false)
//取得當前筆記ID與內文
let id = Number(route.params.id)
let current_note = note.notes.find(n => n.id == id)
//初次點選：如果標題內文有內容，顯示在框框中
new_title.value = current_note ? current_note.title : ''
new_content.value = current_note ? current_note.content : ''
//監聽網址變化
watch(()=> route.params.id ,(newID)=>{
    id = Number(newID)
    current_note = note.notes.find(n => n.id == id)
    new_title.value = current_note ? current_note.title : ''
    new_content.value = current_note ? current_note.content : ''
} )
//更新筆記
function updatenote(){
  if(current_note){
    const res = note.editNote(current_note.id,new_title.value,new_content.value)
    if(res){
      showalert.value = true
      setTimeout(()=>{
        showalert.value = false
        router.push('/')
      },2000)
    }
  }
}
</script>

<template>
    <div class="container p-5">
  <div v-show="showalert" class="alert alert-success text-left" role="alert">
    更新成功!
  </div>
  <h2 class="mb-2">編輯筆記</h2>
  <form @submit.prevent="updatenote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." v-model="new_title">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="10" v-model="new_content"></textarea>
    </div>
    <button class="btn btn-outline-success">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>
</template>



<style scoped>

</style>