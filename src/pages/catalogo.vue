<template>
  <div id="catalogo">
    <header>
      <navbar active="/catalogo"></navbar>
    </header>
    <main>
      <div class="wrapper">
        <aside>
          <v-card class="aside-card with-radius">
            <v-card-title>Filtros</v-card-title>
            <v-expansion-panel expand=true>
              <v-expansion-panel-content
                v-for="(item,i) in filtros"
                :key="i"
              >
                <template v-slot:header>
                  <div>{{item.titulo}}</div>
                </template>
                <v-card>
                  <v-radio-group class="radio-container" v-model="radios" v-if="item.tipo == 'Radio'">
                      <v-radio
                      color = "orange"
                      :label="opcion.titulo"
                      :value="opcion.valor" v-for="(opcion, j) in item.opciones"
                      :key="j"></v-radio>
                  </v-radio-group>
                  <v-container class="checkbox-container" v-else>
                    <v-checkbox v-model="selected"
                    color = "orange"
                    :label="opcion.titulo"
                    :value="opcion.valor" v-for="(opcion, k) in item.opciones"
                    :key="k"></v-checkbox>
                  </v-container>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
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
        michis: null,
        filtros: [
            {titulo: "Patron",
            tipo: "Checkbox",
            opciones: [
              {titulo: "Atigrado",
              valor: "checkbox-1"},
              {titulo: "Manchado",
              valor: "checkbox-2"},
              {titulo: "Cochino",
              valor: "checkbox-3"}
            ]},
            {titulo: "Color",
            tipo: "Checkbox",
            opciones: [
              {titulo: "Calico",
              valor: "checkbox-1"},
              {titulo: "Arcoiris",
              valor: "checkbox-2"},
              {titulo: "Ragdoll",
              valor: "checkbox-3"}
            ]},
            {titulo: "Esterilizado",
            tipo: "Radio",
            opciones: [
              {titulo: "No, ta cochino",
              valor: "radio-1"},
              {titulo: "Se lavó ayer",
              valor: "radio-2"}
            ]},
            {titulo: "Edad"},
            {titulo: "Sexo"},
            {titulo: "Tamaño"}
        ]
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
#catalogo .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


  @media (min-width: 768px) {
    #catalogo .wrapper {
      display: grid;
      grid-template-columns: 300px 1fr;
    }

    #catalogo aside {
      padding: 1rem 0 1rem 1rem !important;
    }
  }

  #catalogo .catalogo-grid {
    flex: 1;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  #catalogo aside {
    width: 100%;
    background-color: transparent;
    padding: 1rem 1rem 0 1rem;
  }

  #catalogo .aside-card {
    max-height: calc(100vh - 90px);
    overflow: auto;
  }

  #catalogo .radio-container {
    padding: 0 24px;
    margin: 0;
  }
</style>