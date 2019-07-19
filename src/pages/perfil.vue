<template>
    <div id="perfil">
        <header>
            <navbar active="/perfil"></navbar>
        </header>
        <main>
            <div class="wrapper">
                <v-layout class="perfil-layout" style="width: 100%">
                    <perfil-card
                            :nombre="organizacion.nombre"
                            :correo="organizacion.correo"
                            :comuna="organizacion.comuna"
                            :latitud="organizacion.latitud"
                            :longitud="organizacion.longitud"
                            :telefono="organizacion.telefono"
                            :region="organizacion.region">
                    </perfil-card>
                </v-layout>
                <aside>
                    <mascota-small-card
                            v-for="michi in michis"
                            :key="michi.nombre"
                            :nombre="michi.nombre"
                            :esterilizado="michi.esterilizado"
                            :adoptado="michi.adoptado"
                            :imagen="michi.imagen">
                    </mascota-small-card>
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
    import PerfilCard from '../components/perfil-card.vue'
    import Pie from '../components/pie.vue'
    import axios from 'axios'



    export default{
        name: 'perfil',
        components: {
            MascotaSmallCard,
            Navbar,
            PerfilCard,
            Pie
        },
        data (){
            return {
                michis: null,
                organizacion: {
                    nombre: 'Organización Patitas',
                    correo: 'correo@gmail.com',
                    comuna: 'Curacaví',
                    latitud: -33.4063,
                    longitud: -71.1333,
                    telefono: "+56 9 9876 5432",
                    region: 'Región Metropolitana'
                }
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
    }

    #perfil .perfil-layout {
        display: flex;
        flex-direction: column;
        padding: 1%;
        text-align: center;
        width: fit-content;
    }

    #perfil aside {
        background-color: transparent;
    }

    #perfil h4 {
        padding: 5px;
    }

    @media (min-width: 768px) {
        #perfil .wrapper {
            display: grid;
            padding: 5px;
            grid-template-columns: 300px 1fr;
            grid-gap: 10px;
        }

        #perfil aside {
            padding: 10px 10px 10px !important;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 2rem;
        }
    }
</style>