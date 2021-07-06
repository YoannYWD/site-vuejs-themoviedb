<template>
  <div id="app">

    <!-- DISPLAY MOVIE -->
    <div class="container containerMovieDetails">
        <div class="row">
            <button class="col-1 mt-5 btn btn-primary" onclick="history.back()"><i class="fas fa-arrow-left"></i></button>
            <div class="col-10 p-5">

              <!-- Title -->
              <div class="row text-center">
                <div class="col-12">
                  <h2>{{movies.title}}</h2>
                </div>
              </div>

              <div class="row movieDetails">
                <!-- Image -->
                <div class="col-4">
                  <img v-bind:src="'http://image.tmdb.org/t/p/w300/' + movies.poster_path" class="p-1 mb-5 mt-2 bg-white posterImg" alt="Affiche film">
                </div>
                <div class="col-8">
                  <!-- details -->
                  <div class="row">
                    <div class="col-3">
                      <p class="runtime"><i class="fas fa-history"></i>{{movies.runtime}}min</p>
                    </div>
                    <div class="col-3 text-center">
                      <p class="voteAverage">{{movies.vote_average}}/10 <span>({{movies.vote_count}} votes)</span></p>
                    </div>
                    <div class="col-3 text-center">
                      <p class="realeaseDate">{{movies.release_date}}</p>
                    </div>
                    <div class="col-3">
                      <p class="homepage"><a v-bind:href="movies.homepage" target="_blank">Page officielle</a></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <p class="overviewTitle">SYNOPSIS</p>
                      <p class="overview">{{movies.overview}}</p>
                    </div>
                  </div>
                </div>
              </div>
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

  .containerMovieDetails {
    margin-top: 50px;
    color: #FFFFFF;
  }

  .btn {
    height: 35px;
    align-items: center;
  }

  h2 {
    font-family: 'Encode Sans SC', sans-serif;
  }

  p {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1em;
    font-weight: 400;
  }

  .movieDetails {
    margin-top: 30px;
  }

  .posterImg {
    box-shadow: 10px 10px 15px #202020;
  }

  .runtime {

    font-weight: 800;
  }
  .runtime .fas {
    margin-right: 5px;
  }

  .voteAverage {
    background-color: #202020;
    color: #ffdf2c;
  }
  .voteAverage span {
    color: #FFFFFF;
  }

  .homepage {
    text-align: right;
    text-decoration: none;
  }
  .homepage a {
    color: #FFFFFF;
  }

  .overviewTitle {
    text-decoration: underline;
    font-weight: 800;
    margin: 20px 0 10px 0;
  }
  .overview {
    text-align: justify;
  }

</style>
