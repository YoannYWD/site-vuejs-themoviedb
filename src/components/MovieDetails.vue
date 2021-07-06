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
                      <p class="realeaseDate">Sortie le: {{movies.release_date | moment}}</p>
                    </div>
                    <div class="col-3">
                      <p class="homepage"><a v-bind:href="movies.homepage" target="_blank">Page officielle</a></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 genre">
                      <div v-for="genre in movies.genres" v-bind:key="genre.id">
                        <p>{{genre.name}}</p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div v-if="movies.tagline" class="blockQuote">
                      <p><i class="fas fa-quote-left"></i></p>
                      <blockquote>{{movies.tagline}}</blockquote>


                      </div>


                    </div>
                    <div class="col-6"> 
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
                  <div class="row">
                    <div class="col-12">
                      <p class="detailTitle">Synopsis</p>
                      <p class="overview">{{movies.overview}}</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="row">
                <p class="detailTitle">Casting</p>
                <div class="col-12 creditList text-center">
                  <div v-for="credit in credits" :key="credit.id" class="creditItem">
                    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + credit.profile_path" class="" alt="Photo acteur" height="100px">
                    <p>{{credit.name}}</p>
                  </div>
                </div>
              </div>



              <div class="row">
                <div class="col-12">
                  <p class="detailTitle">Production</p>
                    <div class="productionList">
                      <div v-for="company in movies.production_companies" v-bind:key="company.id" >
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
            component.loading = false;
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
          component.loading = false;
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
    margin: 0 10px
  }
  .creditItem img {
    border: 1px solid #FFFFFF;
  }

  
  .blockQuote {
    position: absolute;
    margin-top: 50px;
    width: 15vw;
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


</style>
