<template>
  <div id="app">

    <!-- TITLE -->
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
                <h1>Films Américains</h1>
          </div>
        </div>
      </div>
      
    <!-- DISPLAY MOVIES -->
      <MoviesList :movies="movies" :loading="loading"/>

  </div>
</template>

<script>
// https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&region=US
import MoviesList from './MoviesList.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {

    MoviesList,

  },

  data() {
    return {
    movies: [],
    loading: true,
    }
  },

  methods: {
    getAllMovies(component) {
    axios
    .get('https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&region=US')
    .then(res => {
      component.loading = false;
      component.movies = res.data.results;
      console.log(component.movies);
      })
    } 
  },

  created() {
    this.getAllMovies(this)
  }
  
}

</script>


<style scoped>

</style>