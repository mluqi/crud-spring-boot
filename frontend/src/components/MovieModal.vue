<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg w-96">
      <h2 class="text-2xl font-bold mb-4">
        {{ movie.id ? 'Edit Movie' : 'Add New Movie' }}
      </h2>
      
      <form @submit.prevent="saveMovie">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input 
            v-model="localMovie.title" 
            type="text" 
            required 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="director">
            Director
          </label>
          <input 
            v-model="localMovie.director" 
            type="text" 
            required 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="summary">
            Summary
          </label>
          <textarea 
            v-model="localMovie.summary" 
            required 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Genres
          </label>
          <div class="flex flex-wrap">
            <div 
              v-for="genre in availableGenres" 
              :key="genre" 
              class="mr-2 mb-2"
            >
              <label class="inline-flex items-center">
                <input 
                  type="checkbox" 
                  :value="genre"
                  v-model="localMovie.genres"
                  class="form-checkbox"
                >
                <span class="ml-2">{{ genre }}</span>
              </label>
            </div>
          </div>
        </div>
        
        <div class="flex justify-between">
          <button 
            type="button" 
            @click="$emit('close')" 
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

const availableGenres = [
  'Drama', 'Action', 'Animation', 'Sci-Fi', 'Horror'
]

const localMovie = ref({ ...props.movie })

watch(() => props.movie, (newMovie) => {
  localMovie.value = { ...newMovie }
})

const saveMovie = () => {
  if (!localMovie.value.title || !localMovie.value.director || !localMovie.value.summary) {
    alert('Please fill in all required fields')
    return
  }

  emit('save', localMovie.value)
}
</script>