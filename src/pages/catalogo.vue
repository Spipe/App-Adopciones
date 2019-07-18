<template>
  <div>
    <header>
      <navbar active="/catalogo"></navbar>
    </header>
    <main>
      <div class="wrapper">
        <aside>
          <v-card class="aside-card with-radius" ripple=true>
            
          </v-card>
        </aside>
        
        <div class="catalogo-grid"> 
          <elemento-catalogo
            v-for="michi in michis"
            :key="michi.id"
            :nombre="michi.nombre"
            :esterilizado="michi.esterilizado"
            :adoptado="michi.adoptado"
            :imagen="michi.imagen">
          </elemento-catalogo>
        </div>
      </div>
    </main>
    <footer>
      <pie></pie>
    </footer>
  </div>
</template>

<script>
  import ElementoCatalogo from '../components/elemento-catalogo.vue'
  import Navbar from '../components/navbar.vue'
  import Pie from '../components/pie.vue'
  import axios from 'axios'

  export default {
    name: 'catalogo',
    components: {
      ElementoCatalogo,
      Navbar,
      Pie
    },
    data () {
      return {
        michis: null
      }
    },
    mounted () {
      axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
          let lista = [];
          response.data.results.forEach((pokemon, i) => {
            lista.push({
              id: i,
              nombre: pokemon.name.toUpperCase()[0] + pokemon.name.slice(1),
              imagen: require(`../assets/images/${Math.floor(Math.random() * 4) + 1}.jpeg`),
              esterilizado: Math.floor(Math.random() * 2) == 0,
            });
          })
          
          this.michis = lista.splice(0, 12);
        })
    }
  }
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


  @media (min-width: 768px) {
    .wrapper {
      display: grid;
      grid-template-columns: 300px 1fr;
    }

    aside {
      padding: 1rem 0 1rem 1rem !important;
    }
  }

  .catalogo-grid {
    flex: 1;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  aside {
    width: 100%;
    background-color: transparent;
    padding: 1rem 1rem 0 1rem;
  }

  .aside-card {
    height: 100%;
  }
</style>