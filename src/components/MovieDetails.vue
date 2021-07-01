<template>
  <div id="app">

    <!-- DISPLAY MOVIE -->
    <div class="container">
        <div class="row">
            <button class="col-1 mt-5 btn btn-primary" onclick="history.back()">Retour</button>
            <div class="col-10 text-center p-5">
                <h2>{{movies.title}}</h2>
                <h6>{{movies.genres[0].name}}</h6>
                <h6>Durée: {{movies.runtime}}min</h6>
                <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movies.poster_path" class="shadow p-2 mb-5 mt-2 bg-white rounded" alt="Affiche film" width="400px">
                <p>{{movies.overview}}</p>
            </div>
        </div>
    </div>

  </div>
</template>


<script>
// https://api.themoviedb.org/3/movie/' + component.id +'?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR

import axios from 'axios';


export default {
  name: 'App',
  components: {

  },

  data() {
    return {
    id: this.$route.params.id, 
    movies: [],
    loading: true,
    }
  },

  methods: {
    getAllMovies(component) {
    axios
    .get('https://api.themoviedb.org/3/movie/' + component.id +'?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR')
    .then(res => {
      component.loading = false;
      component.movies = res.data;
      })
    } 
  },

  created() {
    this.getAllMovies(this)
  }
}


</script>


<style scoped>
.btn {
    height: 40px;
}
</style>
