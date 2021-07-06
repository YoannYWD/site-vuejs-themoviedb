<template>
  <div id="app">

    <Header />

    <div v-if="$route.path =='/'">

    <!-- SEARCH INPUT -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 offset-5 col-sm-4 offset-sm-8 col-xl-2 offset-xl-10">
          <form class="d-flex search">
            <i class="fas fa-search"></i><input class="form-control me-2 mt-2" v-model="search" @keyup="searchMovies" type="search" placeholder="Chercher un film" aria-label="Search">
          </form>
        </div>
      </div>
    </div>

    <!-- TITLE -->
    <div class="container containerTitle">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="color">Movie Movie Movie</h1>
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
          .catch((err) => {
            alert('FAIL', err)
          });
      },

      //FONCTION RECHERCHER
      searchMovies(component) {
        if (this.search.length > 0)
          axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=en-US&query=' + this.search + '&page=1&include_adult=false')
            .then(res => {
              component.moviesFound = res.data.results;
            })
            .catch((err) => {
              alert('FAIL', err)
            });
      },
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

  .search {
    margin-top: 76px!important;
  }

  #app {
    background-color: #303030;
  }

  .fas {
    color: #ffdf2c;
    position:relative;
    top: 20px;
    left: -10px;
  }

  input {
    font-family: 'Open Sans Condensed', sans-serif;
    border-radius: 0;
  }

  h1 {
    color: transparent;
    font-size: 3em;
    font-family: 'Zen Tokyo Zoo', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    font-weight: 200;
    margin: 25px;
    background-image: linear-gradient(to left,#FFFFFF,#00ff2a,#ff0000, #ffdf2c, #0059ff, #FFFFFF);
    -webkit-background-clip: text;
    animation: animate 5s linear infinite;
    -webkit-background-size: 500%;
    background-size: 500%;
  }
  @keyframes animate {
    0%{
      background-position: 0 100%;
    }
    50%{
      background-position: 100% 0;
    }
    100%{
      background-position: 0 100%;
    }
  }

  h2 {
    color: #FFFFFF;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 200;
    margin: 20px;
  }


  @media screen and (max-width: 575px) {
    .search {
      margin-top: 100px!important;
    }

    h1 {
      font-size: 2.7em!important;
    }
  }

</style>