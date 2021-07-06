<template>
  <div id="app">

    <!-- DISPLAY MOVIE -->
    <div class="container containerMovieDetails">
        <div class="row">
            <button class="col-3 offset-1 col-lg-2 col-xl-1 col-xxl-1 mt-5 btn btn-primary btnBack" onclick="history.back()"><i class="fas fa-arrow-left"></i></button>
            <div class="col-12 col-xxl-10 p-5">

              <!-- Title -->
              <div class="row text-center">
                <div class="col-12">
                  <h2>{{movies.title}}</h2>
                </div>
              </div>

              <div class="row movieDetails">
                <!-- Image -->
                <div class="col-12 col-lg-5 col-xl-4 text-center">
                  <img v-bind:src="'http://image.tmdb.org/t/p/w300/' + movies.poster_path" class="p-1 mb-5 mt-2 bg-white img-fluid posterImg" alt="Affiche film">
                </div>
                <div class="col-12 col-lg-7 col-xl-8">

                  <!-- ligne 4 détails -->
                  <div class="row">
                    <div class="col-6 col-sm-3">
                      <p class="runtime"><i class="fas fa-history"></i>{{movies.runtime}}min</p>
                    </div>
                    <div class="col-6 col-sm-3 text-center">
                      <p class="voteAverage">{{movies.vote_average}}/10 <span>({{movies.vote_count}} votes)</span></p>
                    </div>
                    <div class="col-6 col-sm-3 text-sm-center">
                      <p class="realeaseDate">Sortie le: {{movies.release_date | moment}}</p>
                    </div>
                    <div class="col-6 col-sm-3">
                      <p class="homepage"><a v-bind:href="movies.homepage" target="_blank">Page officielle</a></p>
                    </div>
                  </div>

                  <!-- genre -->
                  <div class="row">
                    <div class="col-12 genre">
                      <div v-for="genre in movies.genres" v-bind:key="genre.id">
                        <p>{{genre.name}}</p>
                      </div>
                    </div>
                  </div>

                  <!-- citation -->
                  <div class="row">
                    <div class="col-12 col-md-5 col-xl-6">
                      <div v-if="movies.tagline" class="blockQuote">
                      <p><i class="fas fa-quote-left"></i></p>
                      <blockquote>{{movies.tagline}}</blockquote>
                      </div>
                    </div>

                    <!-- bande-annonce -->
                    <div class="col-md-7 col-xl-6 announced"> 
                      <div v-if="video.results">
                        <p class="detailTitle">Bande-Annonce</p>
                        <iframe width="318" height="200" v-bind:src="'https://www.youtube.com/embed/' + video.results[0].key" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div v-else>
                        <p class="detailTitle">Bande-Annonce</p>
                        <p>Pas de bande-annonce</p>
                      </div>
                    </div>
                  </div>

                  <!-- synopsis -->
                  <div class="row">
                    <div class="col-12">
                      <p class="detailTitle">Synopsis</p>
                      <p class="overview">{{movies.overview}}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- casting -->
              <div class="row">
                <p class="detailTitle">Casting</p>
                <div v-for="credit in credits" :key="credit.id" class="col-3 col-sm-2 col-md-1 creditItem text-center">
                    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + credit.profile_path" class="" alt="Photo acteur" height="100px">
                    <p>{{credit.name}}</p>
                </div>
              </div>

              <!-- production -->
              <div class="row">
                <p class="detailTitle">Production</p>
                <div v-for="company in movies.production_companies" v-bind:key="company.id" class="col-12 col-sm-6 col-lg-4 col-xxl-3 p-2" >
                  <div v-if="company.logo_path">
                    <img v-bind:src="'http://image.tmdb.org/t/p/w300/' + company.logo_path" class="ml-2" alt="Logo production" height="30px">
                  </div> 
                  <div v-else>
                    <p>{{company.name}}</p> 
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
import moment from 'moment';

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
    id: this.$route.params.id, 
    movies: [],
    video: [],
    credits: [],
    loading: true
    }
  },

  filters: {
    moment: function (date) {
      return moment(date).format('DD/MM/YYYY');
    }
  },

  methods: {
    // GET MOVIES
    getAllMovies(component) {
      axios
        .get('https://api.themoviedb.org/3/movie/' + component.id +'?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR')
        .then(res => {
            component.movies = res.data;

        })
        .catch((err) => {
          alert('FAIL', err)
        });
    },

    // GET VIDEO
    getVideo(component) {
      axios
        .get('https://api.themoviedb.org/3/movie/' + component.id + '/videos?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=fr-FR')
        .then((res) => {
          component.video = res.data;
        })
        .catch((err) => {
          alert('FAIL', err)
        });
    },
    
    // GET CREDITS
    getCredits(component) {
      axios
        .get('https://api.themoviedb.org/3/movie/' + component.id + '/credits?api_key=5d4ce1d094143acd92ffb8e223c2abf8&language=en-US')
        .then((res) => {
          component.loading = false;
          component.credits = res.data.cast.splice(0, 10);

        })
        .catch((err) => {
          alert('FAIL', err)
        });
    }
  },

  created() {
    this.getAllMovies(this)
    this.getVideo(this)
    this.getCredits(this)
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

  .detailTitle {
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 800;
    margin: 20px 0 10px 0;
  }
  .overview {
    text-align: justify;
  }

  .genre {
    display: flex;
  }
  .genre p {
    margin-right: 15px;
    font-style: italic;
  }

  .productionList {
    display: flex;
  }
  .productionList img,p {
    margin-right: 15px;
  }

  .creditList {
    display: flex;
  }
  .creditItem {
    margin: 0 10px;
    box-sizing: border-box;
  }
  .creditItem img {
    border: 1px solid #FFFFFF;
  }
  
  .blockQuote {
    margin-top: 50px;
  }

  .blockQuote .fas {
    font-size: 6em;
    opacity: 0.3;
    font-style: italic;
  }
  .blockQuote blockquote {
    position: relative;
    font-style: italic;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 2em;
    top: -70px;
    left: 30px;
  }


  @media screen and (max-width: 575px) {
    .btnBack {
      margin-top: 80px!important;
    }

    .genre {
      margin-top: 25px;
    }

    .blockQuote {
      margin-top: 30px;
      width: 60vw;
    }

    .announced iframe {
      width: 70vw;
    }

  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    .blockQuote {
      margin-top: 30px;
    }
     
     .genre {
      margin-top: 25px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
     .genre {
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .blockQuote {
      margin-top: 20px;
      width: 15vw;
    }
    .blockQuote blockquote {
      left: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    .blockQuote {
      margin-top: 20px;
      width: 15vw;
    }
  }
    


</style>
