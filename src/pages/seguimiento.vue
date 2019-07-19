<template>
    <div id="seguimiento">
        <header>
            <navbar active="/seguimiento"></navbar>
        </header>
        <main>
            <div class="wrapper">
                <div class="">
                    <v-layout class="perfil-layout">
                        <v-card class="perfil-card">
                            <v-avatar :size="100">
                                <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="avatar">
                            </v-avatar>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">Nombre Adoptante</h3>
                                    <div> {{ card_text }} </div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-layout>
                </div>
                <aside>
                    <div class="">
                        <v-layout class="perfil-layout">
                            <v-card class="perfil-card">
                                <v-avatar :size="100">
                                    <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="avatar">
                                </v-avatar>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">Nombre Mascota</h3>
                                        <div> {{ card_text }} </div>
                                    </div>
                                </v-card-title>
                            </v-card>
                        </v-layout>
                    </div>
                </aside>
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
                _id: {
                    nombres: 'Juan',
                    apellidos: 'Pérez'
                },
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
                    seguimiento: true,
                    _id: 2,
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

<style>
    #seguimiento .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    #seguimiento .perfil-layout {
        display: flex;
        flex-direction: column;
        padding: 1%;
    }
    #seguimiento .perfil-card{
        min-height: calc(100vh - 90px);
        padding: 5%;
    }
    @media (min-width: 768px) {
        #seguimiento .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        #seguimiento aside {
            padding: 0.5em 0 0, 5rem 1rem !important;
        }

        #seguimiento .catalogo-grid {
            flex: 1;
            margin: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 1rem;
        }

        #seguimiento aside {
            width: 100%;
            background-color: transparent;
            padding: 0 1rem 1rem 1rem;
        }
    }
</style>