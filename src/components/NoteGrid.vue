<script setup>
import { useNoteStore } from '../stores/note_store';
import { storeToRefs } from 'pinia';

const note = useNoteStore()
const{notes} = storeToRefs(note)

</script>


<template>
    <main id="result" class="container mt-4">
    <div class="row d-flex justify-content-start">
        <div class="col col-sm-6 col-md-4 mr-2 mb-4" v-for="item in notes">            
            <div class="card">
                <i v-if="item.isPinned" class="fa-solid fa-thumbtack me-3 mb-3 rotate" @click="note.selectPinned(item.id)"></i>
                <i v-else class="fa-solid fa-thumbtack me-3 mb-3" @click="note.selectPinned(item.id)"></i>
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <hr>
                    <p class="card-text">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</main>
    
</template>



<style scoped>
.card i{
  position: relative;
  top: 10px;
  left: 10px;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}
</style>