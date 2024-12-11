<template>
  <div>
    <!-- Add Movie Button -->
    <div class="mb-4">
      <button 
        @click="openAddMovieModal" 
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Add New Movie
      </button>
    </div>

    <!-- Search Input -->
    <div class="mb-4">
      <input 
        v-model="searchTitle" 
        @input="searchMovies"
        placeholder="Search movies by title" 
        class="w-full p-2 border rounded"
      />
    </div>

    <!-- Movie List -->
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="movies.length === 0" class="text-center">No movies found</div>
    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="movie in movies" 
        :key="movie.id" 
        class="bg-white shadow-md rounded-lg p-4"
      >
        <h2 class="text-xl font-bold mb-2">{{ movie.title }}</h2>
        <p class="text-gray-600 mb-2">Director: {{ movie.director }}</p>
        <p class="text-gray-600 mb-2">Summary: {{ movie.summary }}</p>
        <p class="text-gray-600 mb-4">Genres: {{ movie.genres.join(', ') }}</p>
        
        <div class="flex justify-between">
          <button 
            @click="editMovie(movie)" 
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
          <button 
            @click="deleteMovie(movie.id)" 
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Movie Modal (Add/Edit) -->
    <MovieModal 
      v-if="showModal" 
      :movie="currentMovie"
      @close="closeModal"
      @save="saveMovie"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MovieModal from './MovieModal.vue'

const movies = ref([])
const loading = ref(true)
const showModal = ref(false)
const currentMovie = ref(null)
const searchTitle = ref('')

// Fetch movies
const fetchMovies = async () => {
  try {
    loading.value = true
    const response = await axios.get('http://localhost:8080/movies')
    movies.value = response.data
  } catch (error) {
    console.error('Error fetching movies:', error)
    alert('Failed to fetch movies')
  } finally {
    loading.value = false
  }
}

// Search movies
const searchMovies = async () => {
  if (searchTitle.value.trim() === '') {
    fetchMovies()
    return
  }
  
  try {
    loading.value = true
    const response = await axios.get(`http://localhost:8080/movies/search`, {
      params: { title: searchTitle.value }
    })
    movies.value = response.data
  } catch (error) {
    console.error('Error searching movies:', error)
    alert('Failed to search movies')
  } finally {
    loading.value = false
  }
}

// Delete movie
const deleteMovie = async (id) => {
  if (confirm('Are you sure you want to delete this movie?')) {
    try {
      await axios.delete(`http://localhost:8080/movies/${id}`)
      movies.value = movies.value.filter(movie => movie.id !== id)
    } catch (error) {
      console.error('Error deleting movie:', error)
      alert('Failed to delete movie')
    }
  }
}

// Open modal for adding movie
const openAddMovieModal = () => {
  currentMovie.value = {
    title: '',
    director: '',
    summary: '',
    genres: []
  }
  showModal.value = true
}

// Open modal for editing movie
const editMovie = (movie) => {
  currentMovie.value = { ...movie }
  showModal.value = true
}

// Close modal
const closeModal = () => {
  showModal.value = false
  currentMovie.value = null
}

// Save movie (add or update)
const saveMovie = async (movie) => {
  try {
    if (movie.id) {
      // Update existing movie
      const response = await axios.put(`http://localhost:8080/movies/${movie.id}`, movie)
      const index = movies.value.findIndex(m => m.id === movie.id)
      movies.value[index] = response.data
    } else {
      // Add new movie
      const response = await axios.post('http://localhost:8080/movies', movie)
      movies.value.push(response.data)
    }
    closeModal()
  } catch (error) {
    console.error('Error saving movie:', error)
    alert('Failed to save movie')
  }
}

// Fetch movies on component mount
onMounted(fetchMovies)
</script>