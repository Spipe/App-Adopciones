<template>
    <div id="perfil">
        <header>
            <navbar active="/perfil"></navbar>
        </header>
        <main>
            <div class="wrapper">
                <v-layout class="perfil-layout">
                    <v-card class="perfil-card">
                        <v-avatar :size="100" padding="15px">
                            <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="avatar">
                        </v-avatar>
                        <v-card-title primary-title class="primary-title">
                            <div>
                                <h3 class="headline mb-0">{{ nombre }}</h3>
                                <h4>{{ correo }}</h4>
                                <div>{{ comuna }}, {{ region }}</div>
                                <br>
                                <GmapMap
                                        :center="{lat: latt, lng: lngg}"
                                        :zoom="11"
                                        map-type-id="terrain"
                                        style="width: 300px; height: 300px"
                                >
                                    <GmapMarker
                                            :key="index"
                                            v-for="(m, index) in markers"
                                            :position="m.position"
                                            :clickable="true"
                                            :draggable="true"
                                            @click="center=m.position"
                                    />
                                </GmapMap>
                            </div>
                        </v-card-title>
                    </v-card>
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
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
                nombre: 'Organización Patitas',
                correo: 'correo@gmail.com',
                comuna: 'Curacaví',
                latt: -33.4063,
                lngg: -71.1333,
                region: 'Región Metropolitana'
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

#perfil .perfil-card{
    min-height: calc(100vh - 90px);
}

#perfil .primary-title{
    justify-content: center;
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
        grid-gap: 3rem;
    }
      #perfil .perfil-layout {
          padding-top: 15px;
          display: flex;
      }

      #perfil v-avatar {
          size: 15;
      }

      #perfil aside {
          padding: 10px 10px 10px !important;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 2rem;
    }
  }
</style>