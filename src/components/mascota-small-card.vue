<template>
  <div  id="elemento-catalogo">
    <v-card class="with-radius" ripple=true>
      <v-img
          :src="imagen"
          class="foto-michi">
      </v-img>
      <v-card-title primary-title>
          <div>
              <div class="headline">{{ nombre }}</div>
              <span v-if="esterilizado">Esterilizado</span>
              <span v-else>Cochino</span>
          </div>
      </v-card-title>
      

    </v-card>
  </div>
</template>


<script>
  export default {
    name: 'elemento-catalogo',
    props: ['nombre', 'fotos', 'esterilizado', "imagen"]
  }
</script>

<style>
    #elemento-catalogo .foto-michi {
        max-height: 200px;
        box-sizing: border-box;
        color: black;
    }

    #elemento-catalogo .mascota-info h2 {
        margin: 0px;
    }

    #elemento-catalogo .mascota-info p {
        margin: 0px;
    }
</style>