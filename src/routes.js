// import Home from './components/Home.vue';
import Films2020 from './components/Films2020.vue';
import FilmsFr from './components/FilmsFr.vue';
import FilmsUs from './components/FilmsUs.vue';
import Top50 from './components/Top50.vue';

export default [
    // { 
    //     path: '/', 
    //     component: Home, 
    //     name: 'Home'
    // },
    { 
        path: '/Films2020', 
        component: Films2020, 
        name: 'Films2020'
    },
    { 
        path: '/Filmsfr', 
        component: FilmsFr, 
        name: 'FilmsFr'
    },
    { 
        path: '/Filmsus',
        component: FilmsUs,
        name: 'FilmsUs'
    },
    { 
        path: '/Top50',
        component: Top50,
        name: 'Top50'
    }
]