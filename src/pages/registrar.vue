<template>
  <div>
    <header>
      <navbar active="/catalogo"></navbar>
    </header>
    <main>
      <v-layout align-content-center>
        <v-flex xs12 sm8 md6>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation>

            <v-text-field
              v-model="correo"
              :rules="correoRules"
              label="Correo"
              prepend-icon="email"
              required>
            </v-text-field>

            <v-text-field
              v-model="contrasenia"
              :rules="contraseniaRules"
              label="Contraseña"
              prepend-icon="lock"
              required>
            </v-text-field>

            <v-text-field
              v-model="contraseniaC"
              :rules="contraseniaCRules"
              label="Repetir contraseña"
              prepend-icon="lock"
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
                  label="Nacimiento"
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
              v-model="selectComuna"
              :items="comunas"
              :loading="comunas == null"
              :rules="[v => !!v || 'Item is required']"
              prepend-icon="event"
              label="Comuna"
              item-text="nombre"
              item-value="codigo">
            </v-select>

            <v-btn
              color="primary"
              round
              depressed
              block
              @click="registrarUsuario"
              dark>
              Registrarme
            </v-btn>

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
      comunas: [],
      valid: true,
      date: new Date().toISOString().substr(0, 10),
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      checkbox: false
    }),
    mounted() {
      axios.get('https://apis.digital.gob.cl/dpa/comunas')
        .then(response => {
          this.comunas = response.data;
        })
      
    },
    methods: {
      registrarUsuario() {
        for (let i = 0; i < this.$refs.form.$el.length; i++) {
          const elemento = this.$refs.form.$el[i];
          console.info(elemento.value);
        }
        
        axios({
          method: 'post',
          url: `https://safe-fortress-62409.herokuapp.com/usuario?tipo=1`,
          data: {
            correo: this.$refs.form.$el[0].value,
            contrasenia: this.$refs.form.$el[1].value,
            rut: this.$refs.form.$el[3].value,
            nombres: this.$refs.form.$el[4].value,
            apellidos: this.$refs.form.$el[5].value,
            nacimiento: this.$refs.form.$el[6].value,
            direccion: "En tus pesadillas",
            comunaId: 13
          }
        }).then(response => {
          console.info(response.data);
        });
        
      },
      registrarOrganizacion() {
        for (let i = 0; i < this.$refs.form.$el.length; i++) {
          const elemento = this.$refs.form.$el[i];
          console.info(elemento.value);
        }
        
        axios({
          method: 'post',
          url: `https://safe-fortress-62409.herokuapp.com/usuario?tipo=2`,
          data: {
            correo: this.$refs.form.$el[0].value,
            contrasenia: this.$refs.form.$el[1].value,
            rut: this.$refs.form.$el[3].value,
            nombre: this.$refs.form.$el[4].value,
            direccion: "En tus pesadillas",
            comunaId: 13
          }
        }).then(response => {
          console.info(response.data);
        });
        
      }
    }
  }
</script>
