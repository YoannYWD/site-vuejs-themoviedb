<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Movie Movie Movie</h1>
                    <p>Partenaire non officiel de tous les cinémas et de toutes les plateformes de streaming</p>
                </div>
            </div>
            <div class="row">

                <!-- SOCIAL MEDIA -->
                <div class="col-12 col-sm-3">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2>Suivez-nous</h2>
                        </div>
                    <div class="row text-center">
                        <div class="col-3">
                            <p><i class="fab fa-facebook-square"></i></p>
                        </div>
                        <div class="col-3">
                            <p><i class="fab fa-instagram"></i></p>
                        </div>
                        <div class="col-3">
                            <p><i class="fab fa-twitter-square"></i></p>
                        </div>
                        <div class="col-3">
                            <p><i class="fas fa-envelope-square"></i></p>
                        </div>
                    </div>
                    </div>
                </div>


                <!-- MOBILE -->
                <div class="col-12 col-sm-4 offset-sm-1">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2>Movie Movie Movie sur Mobile</h2>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-3 offset-3">
                            <p><i class="fab fa-apple"></i></p>
                        </div>
                        <div class="col-3">
                            <p><i class="fab fa-android"></i></p>
                        </div>
                    </div>
                </div>

                <!-- CG -->
                <div class="col-12 col-sm-3 offset-sm-1 condGen text-center">
                    <p>Conditions générales</p>
                    <p>Vos informations personnelles</p>
                    <p>Cookies</p>
                    <p>Annonces basées sur vos centres d’intérêt</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12 text-center signature">
                    <p>© 2021, YWD.</p>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'Footer'
}
</script>


<style scoped>

  footer {
    background-color: #202020;
  }

  h1 {
    color: transparent;
    font-size: 2em;
    font-family: 'Zen Tokyo Zoo', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    font-weight: 200;
    margin: 25px 0 10px 0;
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
    font-size: 1.5em;
    text-transform: uppercase;
    margin: 20px 0;
  }

  p {
    color: #FFFFFF;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1.2em;
  }

  p .fab,.fas {
    font-size: 1.3em;
  }

  .condGen {
      margin-top: 20px;
  }

  .condGen p {
      font-size: 0.8em;
      margin: 0;
  }

  .signature p {
      font-size: 0.9em;
  }


</style>