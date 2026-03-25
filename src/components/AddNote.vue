<script setup>
import { useNoteStore } from '../stores/note_store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('')
const content = ref('')
const note = useNoteStore()
const showalert = ref(false)
const router = useRouter()

function clearPlaceholder(){
  document.querySelector('#title').placeholder = ''
}
function addPlaceholder(){
  document.querySelector('#title').placeholder = '請輸入標題...'
}

function createNote(){
  if (title.value =='') return
  const result = note.addNote({
    title:title.value,
    content: content.value
  })

  if(result){
    title.value = ''
    content.value = ''
    showalert.value = true
  setTimeout(()=>{
    showalert.value = false
    router.push('/')
  },2000)
  }
  
}
</script>

<template>
    <div class="container p-5">
  <div v-if="showalert" class="alert alert-success text-left" role="alert">
    新增成功!
  </div>
  <h2 class="mb-2">新增筆記</h2>
  <form @submit.prevent="createNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder" @blur="addPlaceholder" v-model="title">
        <p v-if="!title">請輸入標題</p>
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="10" v-model="content"></textarea>
        <p v-if="!content">請輸入內容</p>
    </div>
    <button class="btn btn-outline-success">新增 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>
</template>



<style scoped>
p{
  color: red;
  text-align: left;
}
</style>