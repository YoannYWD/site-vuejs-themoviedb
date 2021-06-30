<template>
  <div id="app">

    <Header />

    <div v-if="$route.path =='/'">

    <!-- TITLE -->
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
                <h1>Welcome</h1>
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
    .get('https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR&sort_by=popularity.desc')
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