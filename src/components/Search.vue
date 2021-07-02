<template>
    <div class="container">   
        <div class="row">
        <div class="col-12 col-md-6 col-xl-3 p-5 text-center" v-for="movieFound in moviesFound" v-bind:key="movieFound.id">
            <router-link v-bind:to="'/MovieDetails/' + movieFound.id"><img v-bind:src="'http://image.tmdb.org/t/p/w300/' + movieFound.poster_path" class="card-img-top" alt="Affiche film"></router-link>
            <h3>{{movieFound.original_title}}</h3>
            <h6>Sortie le : {{movieFound.release_date}}</h6>
            <p>{{movieFound.vote_average}} / 10</p>
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

</style>