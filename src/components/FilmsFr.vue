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
      
    <!-- DISPLAY -->
    <div v-if="loading"><p>Chargement en cours</p></div>

    <div v-else>
      <div class="container">

        <!-- Sorting Buttons -->
        <div class="row text-center">
          <div class="col-2 offset-3">
              <button class="btn btn-primary" type="submit" @click="sortByTitle()">Trier par titre</button>
          </div>
          <div class="col-2">
              <button class="btn btn-primary" type="submit" @click="sortByDate()">Trier par date de sortie</button>
          </div>
          <div class="col-2">
              <button class="btn btn-primary" type="submit" @click="sortByNote()">Trier par note</button>
          </div>
        </div>

        <!-- French Movies -->
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

    data() {
      return {
      movies: [],
      loading: true,
                  titleSort: false,
              dateSort: false,
              noteSort: false
      }
    },
    methods: {
      // GET FRENCH MOVIES
      getAllMovies(component) {
        axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&sort_by=popularity.desc&include_adult=false&with_original_language=fr')
            .then(res => {
                component.loading = false;
                component.movies = res.data.results;
            })
      },

      // SORTING BUTTONS FUNCTIONS
      // Titre
      sortByTitle() {
          if (this.titleSort) {
              this.movies.sort((a, b) => {
                  this.titleSort = false;
                  if (a.original_title > b.original_title) return -1;
                  if (a.original_title < b.original_title) return 1;
                  return 0;
              });
          } else {
              this.movies.sort((a, b) => {
                  this.titleSort = true;
                  if (a.original_title < b.original_title) return -1;
                  if (a.original_title > b.original_title) return 1;
                  return 0;
              });
          }
      },

      // Date
      sortByDate() {
          if (this.dateSort) {
              this.movies.sort((a, b) => {
                  this.dateSort = false;
                  if (a.release_date > b.release_date) return -1;
                  if (a.release_date < b.release_date) return 1;
                  return 0;
              });
          } else {
              this.movies.sort((a, b) => {
                  this.dateSort = true;
                  if (a.release_date < b.release_date) return -1;
                  if (a.release_date > b.release_date) return 1;
                  return 0;
              });
          }
      },

      // Note
      sortByNote() {
          if (this.noteSort) {
              this.movies.sort((a, b) => {
                  this.noteSort = false;
                  if (a.vote_average < b.vote_average) return -1;
                  if (a.vote_average > b.vote_average) return 1;
                  return 0;
              });
          } else {
              this.movies.sort((a, b) => {
                  this.noteSort = true;
                  if (a.vote_average > b.vote_average) return -1;
                  if (a.vote_average < b.vote_average) return 1;
                  return 0;
              });
          }
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