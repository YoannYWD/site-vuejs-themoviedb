<template>
  <div id="app">

    <!-- TITLE -->
      <div class="container containerTitle">
        <div class="row">
          <div class="col-12 text-center">
                <h2>Films Français</h2>
          </div>
        </div>
      </div>
      
    <!-- DISPLAY MOVIES -->
    <div v-if="loading"><p>Chargement en cours</p></div>
    <div v-else>
      <div class="container">
        <div class="row text-center">
          <div class="col-2 offset-3">
              <button class="btn btn-primary" @click="sortBy('original_title')">Trier par titre</button>
          </div>
          <div class="col-2">
              <button class="btn btn-primary">Trier par date de sortie</button>
          </div>
          <div class="col-2">
              <button class="btn btn-primary">Trier par note</button>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 p-5 text-center" v-for="movie in movies" v-bind:key="movie.id">
            <router-link v-bind:to="'/MovieDetails/' + movie.id"><img v-bind:src="'http://image.tmdb.org/t/p/w300/' + movie.poster_path" class="card-img-top" alt="Affiche film"></router-link>
            <h3>{{movie.original_title}}</h3>
            <h6>Sortie le : {{movie.release_date}}</h6>
            <p>{{movie.vote_average}} / 10</p>
          </div>
        </div>
      </div>              
    </div>

  </div>
</template>


<script>
// https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&sort_by=popularity.desc&include_adult=false&with_original_language=fr
import axios from 'axios';

export default {
  name: 'App',
  components: {
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
          .get('https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&sort_by=popularity.desc&include_adult=false&with_original_language=fr')
          .then(res => {
              component.loading = false;
              component.movies = res.data.results;
          })
    }, 

    sortBy(prop) {
      this.movies.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
  },

  created() {
    this.getAllMovies(this)
  }
}
</script>


<style scoped>
.containerTitle{
  margin-top: 56px;
}
</style>