<template>
  <div id="app">

    <Header />

    <div class="container">
      <div class="row">
        <form class="d-flex">
          <input class="col-3 offset-9 form-control me-2 mt-2 search fixed-top" v-model="search" @keyup="searchMovies" type="search" placeholder="Chercher un film" aria-label="Search">
        </form>
      </div>
    </div>

    <div v-if="$route.path =='/'">

      <!-- TITLE -->
      <div class="container title">
        <div class="row">
          <div class="col-12 text-center">
                <h1>Bienvenue</h1>
                <h2>Découvrez les dernières sorties et celles à venir !</h2>
          </div>
        </div>
      </div>
      
      <!-- DISPLAY MOVIES -->
        <!-- search -->
      <div v-if="search">
        <Search :moviesFound="moviesFound"/>
      </div>
        <!-- home movies -->
      <div v-else>
        <MoviesList :movies="movies" :loading="loading"/>
      </div>
    </div>

    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <Footer />

  </div>
</template>


<script>
//https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&sort_by=popularity.desc
//https://api.themoviedb.org/3/search/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=en-US&query=avengers&page=1&include_adult=false

import Header from './components/Header.vue';
import Search from './components/Search.vue';
import MoviesList from './components/MoviesList.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';



export default {
  name: 'App',
  components: {
    Header,
    Search,
    MoviesList,
    Footer
  },

  data() {
    return {
    search: "",
    movies: [],
    moviesFound: [],
    loading: true,
    }
  },

  methods: {

    //RECUPERER LES MOVIES DE LA PAGE D'ACCUEIL
    getAllMovies(component) {
      axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR')
        .then(res => {
          component.loading = false;
          component.movies = res.data.results;
        })
    },

    //FONCTION RECHERCHER
    searchMovies(component) {
      if (this.search.length > 0)
        axios
          .get('https://api.themoviedb.org/3/search/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=en-US&query=' + this.search + '&page=1&include_adult=false')
          .then(res => {
            component.moviesFound = res.data.results;
          })

    }   
  },

  created() {
    this.getAllMovies(this);

  },

  updated() {
  this.searchMovies(this)
  },
}
</script>


<style scoped>
.title {
  margin-top: 56px;
}

.search {
  width: 300px;
}

</style>