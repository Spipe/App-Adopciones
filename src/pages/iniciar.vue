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

            <v-btn
              color="primary"
              round
              depressed
              block
              @click="login"
              dark>
              Entrar
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
      regiones: [],
      provincias: [],
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
        
      }
    }
  }
</script>
