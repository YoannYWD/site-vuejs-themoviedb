<template>
  <div id="app">

    <!-- TITLE -->
      <div class="container containerTitle">
        <div class="row">
          <div class="col-12 text-center">
                <h2>Tous les films de l'hexagone</h2>
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
                <div class="col-12 col-md-6 col-xl-3 p-4 mt-3" v-for="movie in movies" :key="movie.id">
                    <router-link v-bind:to="'/MovieDetails/' + movie.id" style="text-decoration: none">
                        <div class="card mb-3">
                            <!-- <p class="index">{{index + 1}}</p> -->
                            <div class="row">
                                <div class="col-12">
                                    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img-top rowImg" alt="Affiche film">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12  text-center">
                                    <h3>{{movie.original_title}}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9">
                                    <p>Sortie le : {{movie.release_date | moment}}</p>
                                </div>
                                <div class="col-3 text-center">
                                    <p class="note">{{movie.vote_average}}<i class="fas fa-star"></i></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 overview text-center">
                                    <h6>{{movie.original_title}}</h6>
                                    <p>{{movie.overview.substr(0, [200])}}...</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
      </div>              
    </div>

  </div>
</template>


<script>
  // https://api.themoviedb.org/3/discover/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&sort_by=popularity.desc&include_adult=false&with_original_language=fr
  import axios from 'axios';
  import moment from 'moment';


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

    filters: {
        moment: function (date) {
            return moment(date).format('DD/MM/YYYY');
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
            .catch((err) => {
                alert('FAIL', err)
            });
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
    margin-top: 50px;
  }

  h2 {
    color: #FFFFFF;
    font-family: 'Rajdhani', sans-serif;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 2.5em;
    margin: 40px;
  }

    .card {
        font-family: 'Encode Sans SC', sans-serif;
        color: #FFFFFF;
        background-color: #303030!important;
        border: 0!important;

    }

    .card img {
        border: 3px solid #FFFFFF;
        border-radius: 0!important;
        box-shadow: 10px 10px 15px #202020;
        min-height: 420px;
    }

    h3 {
        font-family: 'Encode Sans SC', sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        margin: 20px 0px;
        
    }
    h3:after {
        display: block;
        height: 1px;
        background: #FFFFFF;
        width: 100%;
        content:" ";
        margin: 0 auto;
        margin-top: 20px;
    }

    p {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1em;
        font-weight: 400;
    }

    .note {
        color: #ffdf2c;
        background-color: #202020;

    }
    .note .fas {
        margin-left: 5px;
    }


    .overview {
        position: absolute;
        background-image: linear-gradient(to bottom, #ffffff, #ffffff00) ;
        color: #000000;
        font-size: 0.95em;
        padding: 1em;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: 0.5s;
        max-height: 60%;
    }
    .card:hover .overview {
        opacity: 100;
        transition: 0.5s;  
    }

</style>