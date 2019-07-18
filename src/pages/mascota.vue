<template>
    <div id="mascota">
        <header>
            <navbar active="/mascota"></navbar>
        </header>
        <main>
            <div class="wrapper">
                <div class="contenido"> 
                    <informacion-mascota></informacion-mascota>
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
    import Navbar from '../components/navbar.vue'
    import InformacionMascota from '../components/informacion-mascota.vue'
    import Pie from '../components/pie.vue'

    export default {
        name: 'mascota',
        components: {
            Navbar,
            Pie,
            InformacionMascota
        }
    }
</script>

<style>
#mascota .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


  @media (min-width: 768px) {
    #mascota .wrapper {
      display: grid;
      grid-template-columns: 1fr 500px;
    }

    #mascota aside {
      padding: 1rem 0 1rem 1rem !important;
    }
  }

  #mascota .contenido {
    flex: 1;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  #mascota aside {
    width: 100%;
    background-color: red;
    padding: 1rem 1rem 0 1rem;
  }

  #mascota .aside-card {
    max-height: calc(100vh - 90px);
    overflow: auto;
  }

  #mascota .radio-container {
    padding: 0 24px;
    margin: 0;
  }
</style>

