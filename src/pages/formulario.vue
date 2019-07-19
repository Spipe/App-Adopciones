<template>
    <div id="formulario">
        <header>
            <navbar/>
        </header>
        <main>
            <v-container column xs12 sm8 md6 align-center>
                <v-form
                class="formato"
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-subheader><h1>Información Personal</h1></v-subheader>
                    <v-divider/>
                    <v-container>
                        <v-layout>
                            <v-flex
                            xs12
                            md6
                            >
                            <h3>¿Cuántas mascotas posee actualmente?</h3>
                                <v-flex
                                xs12
                                md2>
                                <v-select
                                :items=[0,1,2,3,4]
                                ></v-select>
                                </v-flex>
                            </v-flex>

                            <v-flex
                            xs12
                            md6
                            >
                            <h3>¿Hay menores de edad en la casa?</h3>
                            <v-radio-group v-model="radioGroup">
                                <v-radio
                                    :label="`Si`"
                                    :value="0"
                                ></v-radio>
                                <v-radio
                                    :label="`No`"
                                    :value="1"
                                ></v-radio>
                            </v-radio-group>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-container>
                        <v-layout>
                            <v-flex
                            xs12
                            md6
                            >
                            <h3>¿Está al tanto de los cuidados que requiere la mascota?</h3>
                            <v-radio-group v-model="radioGroup">
                                <v-radio
                                    :label="`Si`"
                                    :value="0"
                                ></v-radio>
                                <v-radio
                                    :label="`No`"
                                    :value="1"
                                ></v-radio>
                            </v-radio-group>
                            </v-flex>
                            <v-flex
                            xs12
                            md6
                            >
                            <h3>Tipo de vivienda</h3>
                                <v-flex
                                xs12
                                md6>
                                <v-select
                                :items=items
                                ></v-select>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-container>
                        <h3>Motivación</h3>
                        <v-layout>
                            <v-textarea
                            outline
                            name="input-7-4"
                            placeholder="Una breve explicación de la razón que le lleva a adoptar esta mascota"
                            value=""
                            ></v-textarea>
                        </v-layout>
                    </v-container>

                    <v-subheader><h1>Información Legal</h1></v-subheader>
                    <v-divider/>
                    <v-container>
                        <h3>Ley 20.380</h3>
                        <p>Toda persona dueña de un animal debe darle alimento y albergue de acuerdo a sus necesidades mínimas y no restringir su libertad de movimiento de forma innecesaria, en especial si le causa sufrimiento o alteración de su desarrollo normal. Esto también se aplica al transporte de animales, que debe realizarse de tal forma que no cause maltrato y que esté acorde con la especie y medio de transporte utilizado.</p>
                        <a href="http://maltratoanimal.cl/legislacion/ley-20-380-de-proteccion-animal/">Más detalles</a>
                        <v-checkbox
                        v-model="checkbox1"
                        :label="'Declaro tener conocimiento y total entendimiento'"></v-checkbox>
                    </v-container>
                    <v-divider/>
                    <v-container>
                        <h3>Ley 21.020</h3>
                        <p>La Ley de Tenencia Responsable de Mascotas y Animales de Compañía, conocida también como "Ley Cholito", establece una serie de obligaciones que una persona contrae cuando decide aceptar y mantener una mascota o animal de compañía.</p>
                        <a href="https://www.leychile.cl/Navegar?idNorma=1106037">Más detalles</a>
                        <v-checkbox
                        v-model="checkbox2"
                        :label="'Declaro tener conocimiento y total entendimiento'"></v-checkbox>
                    </v-container>
                    <v-divider/>
                    <v-container>
                        <h3>Incumplimiento</h3>
                        <p>De obtener constantemente una calificación negativa en los distintos seguimientos a realizar, la organización se verá en la necesidad de acudir en ayuda de la mascota, rescatarla, y tomar las medidas necesarias según sea el caso. </p>
                        <v-checkbox
                        v-model="checkbox3"
                        :label="'Declaro estar de acuerdo con las condiciones y brindarle el derecho a la organización'"></v-checkbox>
                    </v-container>
                    <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                    >
                    Enviar
                    </v-btn>
                </v-form>
            </v-container>
        </main>
        <footer>
            <pie/>
        </footer>
    </div>
</template>

<script>
    import Navbar from '../components/navbar.vue'
    import Pie from '../components/pie.vue'

    export default{
        name: 'perfil',
        components: {
            Navbar,
            Pie
        },
        data (){
            return {
                michis: null,
                valid: true,
                checkbox1: true,
                firstname: '',
                lastname: '',
                items: ['Casa con patio', 'Casa sin patio', 'Departamento con malla', 'Departamento sin malla'],
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
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
            }
        },
    }
</script>

<style>
    #formulario .formato {
        width: 85%;
    }

    @media (min-width: 768px) {
        #formulario .formato{
            width: 85%;
        }

        #formulario v-flex{
            margin: 5px;
        }
    }
</style>