
Vue.component('info', {
    props: {}
    ,
    template:`
    <div class='product'>

        <div class='product-info'>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="esterilizado">Esterilizado</p>
            <p v-else>No Esterilizado</p>

            <p v-if="estado">Disponible para adopcion</p>
            <p v-else>Adoptado</p>

            <ul style="list-style-type:none;">
                <li v-for="detalle in variants">
                    {{detalle.variantSexo}}
                    {{detalle.variantEdad}}
                    {{detalle.variantPelo}}
                </li>
                
            </ul>

            <button class ="btn success" v-if="estado" v-on:click="addInteresados">
                Estoy interesado!
            </button>
        </div>
    </div>`,
    data() {
        return {
            nombreA : "Gatito",
            product: 'Michi ',
            description: 'Descripcion del michi puesto por quien lo esta dando en adopcion',
            image: '../assets/Chico_excremento.jpg',
            altext: 'popo de arale',
            esterilizado: true,
            estado: true,
            variants: [{
                    variantId: 233,
                    variantSexo: "Macho"
                },
                {
                    variantId: 455,
                    variantEdad: "2 Años, 1 mes"
                },
                {
                    variantId: 766,
                    variantPelo: "Corto"
                }
            ]
        }
    },
    methods: {
        addInteresados() {
            this.$emit('ingresar-gato')
        }
    },
    computed: {
        title() {
            return this.nombreA
        }
    }

});

var app = new Vue({
    el: '#app',
    data: {
        interesados: 0,
    },
    methods: {
        updatemichis() {
            this.interesados += 1
        }
    }
});
