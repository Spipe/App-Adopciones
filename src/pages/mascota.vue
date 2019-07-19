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
                <h3>{{dueño}}</h3>
                <h4>{{ correo }}</h4>
                <div>{{ comuna }}, {{ region }}</div>
                <GmapMap class="googlemap"
                  :center="{lat: latt, lng: lngg}"
                  :zoom="11"
                  map-type-id="terrain"
                  style="width: 300px; height: 300px; margin: 0 auto 0 auto;"
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
            dueño:'Felipito',
            correo: 'correo@gmail.com',
            comuna: 'Curacaví',
            latt: -33.4063,
            lngg: -71.1333,
            region: 'Región Metropolitana'
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
    margin:auto;
  }

  #mascota .mapa{
    background: transparent;
    text-align: center;

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
        
  }
  #mascota h4 {
    padding: 5px;
  }
</style>

