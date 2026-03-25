<script setup>

import { useNoteStore } from '../stores/note_store';
import { storeToRefs } from 'pinia';

const note = useNoteStore()
const {showPinned,showUnPinned} = storeToRefs(note)

</script>

<template>
    <div class="container my-4">
        <routerLink to="/add_note">
            <button class="btn btn-warning mb-3">新增筆記</button>
        </routerLink>
        <h5>筆記列表</h5>
        <h6>重要</h6>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item,id) in showPinned">
                <i class="fa-solid fa-thumbtack me-3 rotate" @click="note.selectPinned(item.id)"></i>
                <span>{{item.title}}</span>
                <div class="icon-group">
                    <routerLink :to="{ name:'edit_note',params:{id: item.id} }"><i class="fa-solid fa-pen-to-square me-3"></i></routerLink>
                    <i class="fa-solid fa-trash" @click="note.deleteNote(item.id)"></i>
                </div>
            </li>
        </ul>
        <h6 class="mt-3">一般</h6>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in showUnPinned">
                <i class="fa-solid fa-thumbtack me-3" @click="note.selectPinned(item.id)"></i>
                <span>{{item.title}}</span>
                <div class="icon-group">
                    <routerLink :to="{ name:'edit_note',params:{id: item.id} }"><i class="fa-solid fa-pen-to-square me-3"></i></routerLink>
                    <i class="fa-solid fa-trash" @click="note.deleteNote(item.id)"></i>
                </div>
            </li>
        </ul>
    </div>
</template>



<style scoped>
.rotate{
  transform: rotate(45deg);
  color: red;
}
</style>