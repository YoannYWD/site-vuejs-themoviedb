<template>
    <div class="container">
        <div class="row text-center">
            <h1>Home</h1>
        </div>
        <div class="row">
            <!-- <div class="col-3" v-for="movie in movies" v-bind:key="movie[id]">
                <p>{{ overview }}</p>
            </div> -->
        </div>
    </div>
</template>


<script>
import axios from 'axios';

const apiKey = '5d4ce1d094143acd92ffb8e223c2abf8';
const baseUrl = 'https://api.themoviedb.org/3/';
const language = "&language=fr-FR";
const url = baseUrl + "movie/now_playing?api_key=" + apiKey + language;

export default {
  data() {
    return {
      movies: null
    }
  },
  created: function() {
    axios
    .get(url)
    .then(res => {
      this.movies = res.data;
      console.log(this.movies);
    })
  }
}
</script>


<style scoped>

</style>