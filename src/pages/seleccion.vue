<template>
    <div id=#seleccion>
        <header>
            <navbar></navbar>
        </header>
        <main>
      <div class="wrapper">
        
        <div> 
            <elemento-seleccion></elemento-seleccion>
        </div>
        <aside>
          <v-card class="aside-card with-radius">
            
          </v-card>
        </aside>
      </div>
    </main>
        <footer>
            <pie></pie>
        </footer>
    </div>

</template>

<script>
    import ElementoSeleccion from '../components/elemento-seleccion'
    import Navbar from '../components/navbar.vue'
    import Pie from '../components/pie.vue'
    export default {
        name:'seleccion',
        components: {
            ElementoSeleccion,
            Navbar,
            Pie
        }
    }
</script>

<style>
    #seleccion .wrapper {
        display: flex;
        flex-direction: column;
    }


    @media (min-width: 768px) {
        #seleccion .wrapper {
            display: grid;
            flex-direction: row;
        }

        #seleccion aside {
            padding: 1rem 0 1rem 1rem !important;
        }
    }

  #seleccion .catalogo-grid {
    flex: 1;
    margin: 1rem;
  }

  #seleccion aside {
    background-color: red;
    height: 200px;
    padding: 1rem 1rem 0 1rem;
  }
  #seleccion .aside-card {
    height: 100%;
  }

</style>


