<template>

    <div v-if="loading"><p>Chargement en cours</p></div>

    <div v-else>
        <div class="container">

            <!-- DISPLAY SORTING BUTTONS -->
            <Buttons :movies="movies"/>

            <!-- DISPLAY MOVIES -->
            <div class="row">
                <div class="col-12 col-md-6 col-xl-3 p-5 text-center" v-for="movie in movies" v-bind:key="movie.id">
                    <router-link v-bind:to="'/MovieDetails/' + movie.id"><img v-bind:src="'http://image.tmdb.org/t/p/w300/' + movie.poster_path" class="card-img-top" alt="Affiche film"></router-link>
                    <h3>{{movie.title}}</h3>
                    <h6>Sortie le : {{movie.release_date}}</h6>
                    <p>{{movie.vote_average}} / 10</p>
                </div>
            </div>
        </div>              
    </div>
</template>


<script>
    import Buttons from './Buttons.vue';

    export default {
        name: 'MoviesList',

        components: {
            Buttons
        },

        props: [
            "movies",
            "loading",
        ]
    }
</script>


<style scoped>

</style>