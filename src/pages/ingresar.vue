<template>
    <div id="ingreso-mascotas">
        <header>
            <navbar active="/ingreso-mascotas"></navbar>
        </header>
        <main>
            <v-layout align-content-center>
                <v-flex xs12 sm8 md6>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation>

                    <v-text-field
                    v-model="rut"
                    :rules="nameRules"
                    label="Nombre de la mascota"
                    prepend-icon="pets"
                    required>
                    </v-text-field>

                    <v-radio-group v-model="row" row>
                        <v-radio label="Doggo" value="radio-1"></v-radio>
                        <v-radio label="Michi" value="radio-2"></v-radio>
                    </v-radio-group>

                    <v-text-field
                    v-model="rut"
                    :rules="nameRules"
                    label="Raza"
                    prepend-icon="pets"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="rut"
                    :rules="nameRules"
                    label="Pelaje"
                    prepend-icon="pets"
                    required>
                    </v-text-field>

                    <v-divider></v-divider>

                    <v-text-field
                    v-model="rut"
                    :rules="rutRules"
                    label="RUT"
                    prepend-icon="person"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="nombres"
                    :rules="nombresRules"
                    label="Nombres"
                    prepend-icon="person"
                    required>
                    </v-text-field>

                    <v-text-field
                    v-model="apellidos"
                    :rules="apellidosRules"
                    label="Apellidos"
                    prepend-icon="person"
                    required>
                    </v-text-field>

                    <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    required
                    lazy
                    full-width
                    width="290px"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        v-model="date"
                        label="Edad"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable locale="es-mx" color="primary">
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                    </v-dialog>

                    <v-divider></v-divider>

                    <v-select
                    v-model="selectRegion"
                    :items="regiones"
                    :loading="regiones == null"
                    :rules="[v => !!v || 'Item is required']"
                    prepend-icon="event"
                    label="Región"
                    item-text="nombre"
                    item-value="codigo"
                    @change="getProvincias"
                    required>
                    </v-select>

                    <v-select
                    v-model="selectProvincia"
                    :items="provincias"
                    :loading="provincias == null"
                    :rules="[v => !!v || 'Item is required']"
                    prepend-icon="event"
                    label="Provincia"
                    
                    required>
                    </v-select>

                    <v-select
                    v-model="selectComuna"
                    :items="comunas"
                    :loading="comunas == null"
                    :rules="[v => !!v || 'Item is required']"
                    prepend-icon="event"
                    label="Comuna"
                    required>
                    </v-select>

                </v-form>
                </v-flex>
            </v-layout>
        </main>
        <footer>
            <pie></pie>
        </footer>
    </div>

</template>

<script>
  import axios from 'axios'
  import Navbar from '../components/navbar.vue'
  import Pie from '../components/pie.vue'

  export default {
    name: 'iniciar',
    components: {
      Navbar,
      Pie
    },
    data: () => ({
      regiones: [],
      provincias: [],
      comunas: [],
      valid: true,
      date: new Date().toISOString().substr(0, 10),
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 3) || 'Name must be less than 3 characters'
      ],
      select: null,
      checkbox: false
    }),
    mounted() {
      axios.get('https://apis.digital.gob.cl/dpa/regiones')
        .then(response => {
          this.regiones = response.data;
        })
      
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      getProvincias() {
        axios.get(`http://apis.modernizacion.cl/dpa/regiones/04/provincias`)
        .then(response => {
          var lista = [];
          console.info(response.data);
          response.data.forEach(provincia => {
            lista.push({text: provincia.nombre});
          });
          this.provincias = lista;
        })
        
      }
    }
  }
</script>