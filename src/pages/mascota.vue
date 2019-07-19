<template>
    <div id="mascota">
        <header>
            <navbar active="/mascota"></navbar>
        </header>
        <main>
          <div class="wrapper">
            <div> 
              <informacion-mascota></informacion-mascota>
            </div>
            <aside >
              <v-card class="aside-card with-radius mapa">
                <v-img
                  :src="imagen"
                  class="foto-organizacion">
                </v-img>
                <h1>{{dueño}}</h1>
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
        data: ()=>{
          return{
            imagen:require('../assets/images/1.jpeg'),
            dueño:'Felipito'
          }
        },
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
    padding: 0.5em;
    text-align: center;
  }

  #mascota .foto-organizacion{
    border-radius: 100%;
    width: 12em;
    height: 12em;
    display:block;
    margin:auto
  }

  #mascota .mapa{
    height: 100%;
    background: transparent;
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

  #mascota aside {
    width: 100%;
    background-color: transparent;
    padding: 1rem 1rem 0 1rem;
  }

  #mascota .btn-1 {
        border: black;
        background-color: rgb(40, 167, 72);
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        display: inline-block;
        border-radius: 12px;
        margin-top: 0.5em;
        width: 100%;
    }
</style>

