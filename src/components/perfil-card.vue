<template>
    <v-card class="perfil-card with-radius">
        <v-avatar :size="100" padding="15px">
            <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="avatar">
        </v-avatar>
        <v-card-title primary-title class="primary-title">
            <h3 class="headline mb-0">{{ nombre }}</h3>
        </v-card-title>
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="primary">email</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ correo }}</v-list-tile-title>
                </v-list-tile-content>
                
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="primary">phone</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ telefono }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="primary">email</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ comuna }}, {{ region }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <GmapMap
            :center="{lat: latitud, lng: longitud}"
            :zoom="11"
            map-type-id="roadmap"
            :options="{
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false
            }"
            style="width: 100%; height: 300px">
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"/>
        </GmapMap>
    </v-card>
</template>

<script>
  export default {
    name: 'perfil-card',
    props: ['nombre', 'correo', 'telefono', "comuna", "region", "latitud", "longitud"]
  }
</script>

<style>
    #perfil .perfil-card{
        min-height: calc(100vh - 90px);
        width: 100%;
        padding-top: 20px;
    }

    #perfil .primary-title{
        justify-content: center;
    }
</style>