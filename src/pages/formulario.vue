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
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                    ></v-select>

                    <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                    ></v-checkbox>

                    <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                    >
                    Validate
                    </v-btn>

                    <v-btn
                    color="error"
                    @click="reset"
                    >
                    Reset Form
                    </v-btn>

                    <v-btn
                    color="warning"
                    @click="resetValidation"
                    >
                    Reset Validation
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
                items: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4'
                ],
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
        #formulario .wrapper {
        display: grid;
        grid-template-columns: 700px 1fr;
        }

        #formulario .catalogo-grid {
        flex: 1;
        margin: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        }

        #formulario aside {
            width: 100%;
            background-color: transparent;
            padding: 0 1rem 1rem 1rem;
        }
    }
</style>