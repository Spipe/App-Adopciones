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
    
        <div>
            <elemento-seleccion></elemento-seleccion>
        </div>
    </main>

</template>

<script>
    import ElementoSeleccion from '../components/elemento-seleccion'
    export default {
        name:'seleccion',
        components: {
            ElementoSeleccion
        }
    }
</script>

