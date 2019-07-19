<template>
  <v-layout>
    <v-toolbar>
      <v-toolbar-side-icon class="small-screen-only" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      
      <img :src="logo" style="height: 40px"/>
      <v-toolbar-title>
        EPA
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="wide-screen-only">
        <v-btn v-for="item in items" :key="item.titulo" :to="item.ruta" flat>{{ item.titulo }}</v-btn>
      </v-toolbar-items>
      
      <div class="text-xs-center">
        <v-btn
          color="primary"
          round
          depressed
          to="/entrar"
          dark
          @click.stop="dialog = true">
          Entrar
        </v-btn>
      </div>
        
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      class="white"
      absolute
      temporary >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.titulo"
          :to="item.ruta">
          <v-list-tile-action>
            <v-icon>{{ item.icono }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>

  export default {
    name: 'navbar',
    data: () => {
      return {
        drawer: null,
        logo: require("../assets/images/logo.png"),
        items: [
          {
            titulo: 'Inicio',
            icono: 'dashboard',
            ruta: "/",
          },
          {
            titulo: 'Catálogo',
            icono: 'question_answer',
            ruta: "/catalogo"
          },
          {
            titulo: 'Mascota',
            icono: 'pet',
            ruta: "/mascota/1"
          },
          {
            titulo: 'Perfil',
            icono: 'portraits',
            ruta: "/perfil/1"
          }
        ]
      }
    },
    mounted () {
    }
  }
</script>

<style>

  .wide-screen-only {
    display: none !important;
  }

  @media (min-width: 768px) {

    .small-screen-only {
      display: none !important;
    }

    .wide-screen-only {
      display: flex !important;
    }
  }

</style>