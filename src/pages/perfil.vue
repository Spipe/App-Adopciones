<template>
    <div id="perfil">
        <header>
            <navbar/>
        </header>
        <main>
            <div class="wrapper">
                <div class="">

                </div>
                <aside>
                    <v-expansion-panel expand=true>
                        <div class="catalogo-grid"> 
                            <mascota-small-card
                            v-for="michi in michis"
                            :key="michi.nombre"
                            :nombre="michi.nombre"
                            :esterilizado="michi.esterilizado"
                            :adoptado="michi.adoptado"
                            :imagen="michi.imagen">
                            </mascota-small-card>
                        </div>
                    </v-expansion-panel>
                </aside>
            </div>
        </main>
        <footer>
            <pie/>
        </footer>
    </div>
</template>

<script>
    import MascotaSmallCard from "../components/mascota-small-card"
    import Navbar from '../components/navbar.vue'
    import Pie from '../components/pie.vue'
    import axios from 'axios'

    export default{
        name: 'perfil',
        components: {
            MascotaSmallCard,
            Navbar,
            Pie
        },
        data (){
            return {
                michis: null,
            }
        },
        mounted () {
            axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then(response => {
                let lista = [];
                response.data.results.forEach(pokemon => {
                    lista.push({
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
#perfil .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


  @media (min-width: 768px) {
    #perfil .wrapper {
      display: grid;
      grid-template-columns: 700px 1fr;
    }

    #perfil aside {
      padding: 0.5em 0 0,5rem 1rem !important;
    }

    #perfil .catalogo-grid {
    flex: 1;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    }

    #perfil aside {
        width: 100%;
        background-color: transparent;
        padding: 0 1rem 1rem 1rem;
    }
  }
</style>