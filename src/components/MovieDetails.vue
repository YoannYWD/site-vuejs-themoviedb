<template>
  <div id="app">

    <!-- TITLE -->
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
                <h2>En détail</h2>
          </div>
        </div>
      </div>
      
    <!-- DISPLAY MOVIE -->
    <div class="container">
        <div class="row">
            <div class="col">
                <p>{{movies.title}}</p>
            </div>
        </div>
    </div>

  </div>
</template>


<script>
// https://api.themoviedb.org/3/movie/' + req.params.id + '?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR

import axios from 'axios';


export default {
  name: 'App',
  components: {

  },

  data() {
    return {
    id: this.$route.params, 
    movies: [],
    loading: true,
    }
  },

  methods: {
    getAllMovies(component, id) {
    axios
    .get('https://api.themoviedb.org/3/movie/' + id + '?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR')
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

</style>
