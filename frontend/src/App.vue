<template>
  <div id="app" class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Movie Collection</h1>
    <MovieList />
  </div>
</template>

<script setup>
import MovieList from './components/MovieList.vue'
</script>

<style>
body {
  background-color: #f4f4f4;
}
</style>