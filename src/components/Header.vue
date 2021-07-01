<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Movie Movie Movie</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" aria-current="page">Accueil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Films2020" class="nav-link">Films 2020</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/FilmsFr" class="nav-link">Films Français</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/FilmsUs" class="nav-link">Films Americains</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Top50" class="nav-link">Top 50</router-link>
                </li>                           
            </ul>
            <!-- <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" id="search" aria-label="Search">
            </form> -->
            </div>
        </div>
    </nav>
</template>


<script>
export default {
  name: 'Header'
}
</script>


<style scoped>

</style>