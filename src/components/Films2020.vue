<template>
  <div id="app">

    <!-- TITLE -->
    <div class="container containerTitle">
      <div class="row">
        <div class="col-12 text-center">
              <h2>Les films sorties en 2020</h2>
        </div>
      </div>
    </div>
      
    <!-- DISPLAY MOVIES -->
    <MoviesList :movies="movies" :loading="loading"/>

  </div>
</template>


<script>
// https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&year=2020
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
        .get('https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&year=2020')
        .then(res => {
          component.loading = false;
          component.movies = res.data.results;
        })
    }, 
  },

  created() {
    this.getAllMovies(this)
  },
}
</script>


<style scoped>
.containerTitle {
  margin-top: 56px;
}
</style>

