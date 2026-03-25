<script setup>
import TopBar from './components/TopBar.vue';
import NoteList from './components/NoteList.vue'

</script>

<template>
<TopBar></TopBar>
  <div class="container">
    <div class="row">
      <div class="col col-md-3">
        <NoteList></NoteList>
      </div>
      <div class="col col-md-9">
        <RouterView></RouterView>
      </div>
      
    </div>
  </div>
  <footer>
        <p>copyright&copy; UIUX03 | 張維晏 | Vue.js_0317HK</p>
      </footer>
</template>
<style>
footer{
  background-color: black;
  height: 50px;
  color: white;
  line-height: 50px;
}
p{
  text-align: center;
}
i{
  cursor: pointer;
}
</style>
