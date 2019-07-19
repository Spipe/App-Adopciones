<template>
    <div id="mascota">
        <header>
            <navbar active="/mascota/1"></navbar>
        </header>
        <main>
          <div class="wrapper">
            <div> 
              <informacion-mascota></informacion-mascota>
            </div>
            <aside >
              <v-layout class="perfil-layout" style="width: 100%; margin-right:0em" >
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
    import PerfilCard from '../components/perfil-card.vue'
    export default {
      components: {
            Navbar,
            Pie,
            InformacionMascota,
            PerfilCard
        },
        name: 'mascota',
        data: ()=>{
          return{
            imagen:require('../assets/images/1.jpeg'),
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
    #mascota .perfil-layout {
        display: flex;
        flex-direction: column;
        padding: 1%;
        text-align: center;
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
        margin-top: 0.2em;
    }
</style>

