<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">      
            <router-link to="/" class="navbar-brand">Movie Movie Movie</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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

    nav {
        background-color: #202020!important;
    }

    .navbar .navbar-brand {
        color: #ffdf2c!important;
        font-family: 'Zen Tokyo Zoo', sans-serif;
        letter-spacing: 0.4em;
        text-transform: uppercase;
    }

    nav .navbar-brand {
        color: #FFFFFF!important;
    }
    nav .nav-link {
        color: #FFFFFF!important;
        font-family: 'Encode Sans SC', sans-serif;
        font-weight: 200;
    }
    nav .nav-link:after {
        display: block;
        height: 1px;
        background: #ffdf2c;
        width: 0px;
        content:" ";
        margin: 0 auto;
        margin-top: 1px;
        transition: width 500ms ease;
    }
    nav .nav-link:hover:after {
        width:100%;
    }


    @media screen and (max-width: 575px) {
        .navbar .navbar-brand {
            font-size: 1em;
        }
    }
</style>