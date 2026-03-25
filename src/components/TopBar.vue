<script setup>
import { useNoteStore } from '../stores/note_store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const note = useNoteStore()
const router = useRouter()
const keyword = ref('')

function searchresult() {
    const results = note.searchNote(keyword.value)
    if(results && results.length>0){
        router.push({name:'search'})
    }else{
        alert('找不到相關筆記')
    }
    keyword.value = ''
    
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/"><img src="../../public/logo.png" alt=""> 我的筆記應用</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <form class="d-flex" role="search" @submit.prevent="searchresult">
                <input class="form-control me-2" type="search" placeholder="搜尋關鍵字" aria-label="Search" v-model="keyword" />
                <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass" @keyup.enter="searchresult"></i></button>
            </form>
            </div>
        </div>
    </nav>
</template>

<style scoped>
img{
    height: 50px;
}

</style>