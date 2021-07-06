<template>
    <div class="container">   
        <div class="row">

            <!-- DISPLAY MOVIES FOUND -->
            <div class="col-12 col-md-6 col-xl-3 p-4 mt-3" v-for="movieFound in moviesFound" :key="movieFound.id">
                <router-link v-bind:to="'/MovieDetails/' + movieFound.id" style="text-decoration: none">
                    <div class="card mb-3">
                        <!-- <p class="index">{{index + 1}}</p> -->
                        <div class="row">
                            <div class="col-12">
                                <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movieFound.poster_path" class="card-img-top rowImg" alt="Affiche film">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12  text-center">
                                <h3>{{movieFound.title}}</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-9">
                                <p>Sortie le : {{movieFound.release_date}}</p>
                            </div>
                            <div class="col-3 text-center">
                                <p class="note">{{movieFound.vote_average}}<i class="fas fa-star"></i></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 overview text-center">
                                <h6>{{movieFound.title}}</h6>
                                <p>{{movieFound.overview.substr(0, [200])}}[...]</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>


<script>

    export default {
        name: 'Search',
        props: [
            "moviesFound"
        ]
    }
    
</script>


<style scoped>

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