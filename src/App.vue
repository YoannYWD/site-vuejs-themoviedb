<template>
  <div id="app">

    <Header />

    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" id="search" aria-label="Search">
    </form>

    <div v-if="$route.path =='/'">

    <!-- TITLE -->
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
                <h1>Bienvenue</h1>
                <h2>Découvrez les dernières sorties et celles à venir !</h2>
          </div>
        </div>
      </div>
      
    <!-- DISPLAY MOVIES -->
      <MoviesList :movies="movies" :loading="loading"/>
    </div>

    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <Footer />

  </div>
</template>


<script>
//https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&sort_by=popularity.desc

import Header from './components/Header.vue';
import MoviesList from './components/MoviesList.vue'
import Footer from './components/Footer.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    MoviesList,
    Footer
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
    .get('https://api.themoviedb.org/3/movie/upcoming?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR')
    .then(res => {
      component.loading = false;
      component.movies = res.data.results;
      })
    }   
  },

  created() {
    this.getAllMovies(this)
  }
}

// let search = document.getElementById("search")

// search.addEventListener("onkeyup", function() {
//   console.log(search);
// })










</script>


<style scoped>


</style>