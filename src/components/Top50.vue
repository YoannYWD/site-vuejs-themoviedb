<template>
  <div id="app">

    <!-- TITLE -->
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
                <h1>TOP 20</h1>
          </div>
        </div>
      </div>
      
    <!-- DISPLAY MOVIES -->
      <MoviesList :movies="movies" :loading="loading"/>

  </div>
</template>

<script>
//https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=1
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
    .get('https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=en-US&page=1')
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