<template>
    <div class="row text-center">
        <div class="col-4 col-lg-2 offset-lg-3">
            <button class="btn btn-primary" type="submit" @click="sortByTitle()">Trier par titre</button>
        </div>
        <div class="col-4 col-lg-2">
            <button class="btn btn-primary" type="submit" @click="sortByDate()">Trier par date</button>
        </div>
        <div class="col-4 col-lg-2">
            <button class="btn btn-primary" type="submit" @click="sortByNote()">Trier par note</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Buttons',
        props: [
            'movies'
        ],

        data() {
            return {
                titleSort: false,
                dateSort: false,
                noteSort: false
            }
        },

        methods: {
            // TITLE
            sortByTitle() {
                if (this.titleSort) {
                    this.movies.sort((a, b) => {
                        this.titleSort = false;
                        if (a.title > b.title) return -1;
                        if (a.title < b.title) return 1;
                        return 0;
                    });
                } else {
                    this.movies.sort((a, b) => {
                        this.titleSort = true;
                        if (a.title < b.title) return -1;
                        if (a.title > b.title) return 1;
                        return 0;
                    });
                }
            },

            // DATE
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

            // NOTE
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
    };
</script>

<style>

    button {
        border-radius: 0!important;
        font-family: 'Rajdhani', sans-serif;
        background-color: #202020!important;
        border: 1px solid #202020!important;
    }

    button:hover {
        background-color: #303030!important;
        border: 1px solid #FFFFFF!important;
    }

    button:focus {
        border: 1px solid #ffdf2c!important;
        color: #ffdf2c!important;
        outline: none!important;
        box-shadow: none!important;
    }

</style>>

