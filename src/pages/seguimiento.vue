<template>
    <div id="seguimiento">
        <header>
            <navbar active="/seguimiento"></navbar>
        </header>
        <main>
            <div class="perfil-mascota">
                <v-layout>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card>
                            <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                    aspect-ratio="2.75"
                            ></v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ mascota.nombres }}</h3>
                                    <div> Nacimiento: {{ mascota.nacimiento }} </div>
                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn flat color="orange">Share</v-btn>
                                <v-btn flat color="orange">Explore</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
                info de mascota adoptada
            </div>
            <div class="perfil-adoptante">
                info de adoptante y solicitud
            </div>
            <div class="adopcion">
                estado de adopcion y actualizaciones
            </div>
        </main>
        <footer>
            <pie/>
        </footer>
    </div>
</template>

<script>
    import Navbar from '../components/navbar.vue'
    import Pie from '../components/pie.vue'
    export default {
        name: 'seguimiento',
        components: {
            Navbar,
            Pie
        },
        data(){
            return {
                mascota: {
                    id: 2,
                    nombres: 'Turbochela',
                    nacimiento: '2018-05-17',
                    sexo: 'Macho',
                    pelaje: 'Corto',
                    colorId: 2,
                    patronId: 2,
                    tamaño: 1,
                    habitat: 'Campo',
                    esterilizado: true,
                    especie: true,
                    userId: 2
                },
                solicitud: {
                    cuidados: 'lalala',
                    leycholito: false,
                    vivienda: '2',
                    poseemascotas: 2,
                    numeromascotas: 4,
                    ninios: false,
                    razon: 'gay',
                    seguimiento: true
                },
                adopciones: {
                    estado: true
                },
                actualizaciones: [
                    {
                        fecha: '2019-01-01',
                        comentario: 'hola'
                    },
                    {
                        fecha: '2019-02-02',
                        comentario: 'bai'
                    }]
            }

        }
    }
</script>

<style></style>