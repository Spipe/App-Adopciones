<template>
  <main>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Título</v-toolbar-title>
  
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar-items>
        
    </v-toolbar>

    <div class="grid">
      <aside></aside>
      <div id="catalogo"> 
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
        <elemento-catalogo></elemento-catalogo>
      </div>
    </div>
  </main>
</template>

<script>
  import ElementoCatalogo from '../components/elemento-catalogo.vue'

  export default {
    name: 'catalogo',
    components: {
      ElementoCatalogo
    }
  }
</script>

<style>
  .grid {
    display: grid;
    margin: 0.2;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap: 10px;
  }

  #catalogo {
      display: grid;
      grid-column-start: 2;
      margin: 0.25em;
      grid-template-columns: auto auto auto;
      grid-gap: 10px;
  }

  aside {
      grid-column-start: 1;
      margin: 0px;
      width: 250px;
      background-color: brown;
  }

  @media only screen and (max-width: 800px) {
      #catalogo {
          grid-template-columns: auto auto auto;
          grid-column-start: 1;
          grid-row-start: 2;
      }

      aside {
          grid-row-start: 1;
          width: 100%;
          height: 250px;
      }
  }

  @media only screen and (max-width: 500px) {
      #catalogo{
          grid-template-columns: auto auto;
          grid-column-start: 1;
          grid-row-start: 2;
      }
      aside{
          grid-row-start: 1;
          width: 100%;
          height: 250px;
      }
  }

  @media only screen and (max-width: 250px) {
      #catalogo {
          grid-template-columns: auto;
          grid-column-start: 1;
          grid-row-start: 2;
      }

      aside {
          grid-row-start: 1;
          width: 100%;
          height: 250px;
      }
  }
</style>