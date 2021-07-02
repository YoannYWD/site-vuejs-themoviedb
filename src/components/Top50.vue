<template>
  <div id="app">

    <!-- TITLE -->
      <div class="container containerTitle">
        <div class="row">
          <div class="col-12 text-center">
                <h2>TOP 50</h2>
          </div>
        </div>
      </div>
      
    <!-- DISPLAY MOVIES -->
      <MoviesList :movies="movies" :loading="loading"/>

  </div>
</template>

<script>
//https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=1
//https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=2
//https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=3
import MoviesList from './MoviesList.vue'
import axios from 'axios';

let reqOne = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=1';
let reqTwo = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=2';
let reqThree = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&page=3'

export default {
  name: 'App',
  components: {
    MoviesList,
  },

  data() {
    return {
    movies: [],
    loading: true
    }
  },

  methods: {
    getAllMovies(component) {
      axios
        .all([axios.get(reqOne), axios.get(reqTwo), axios.get(reqThree)])
        .then(axios.spread((...res) => {
          component.loading = false;
          let movies1 = res[0].data.results;
          let movies2 = res[1].data.results;
          let movies3 = res[2].data.results.slice(10);
          component.movies = movies1.concat(movies2, movies3);
        }))
    }
  },

  created() {
    this.getAllMovies(this)
  }
}

</script>


<style scoped>
.containerTitle {
  margin-top: 56px;
}

</style>