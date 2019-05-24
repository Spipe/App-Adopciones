Vue.component('info', {
    props: {},
    template: `
    <div class='product'>
    
        <div class='product-image'>
            <img v-bind:src="image" v-bind:alt="altext" />
        </div>

        <div class='product-info'>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="esterilizado">Esterilizado</p>
            <p v-else>No Esterilizado</p>

            <p v-if="estado">Disponible para adopcion</p>
            <p v-else>Adoptado</p>

            <ul>
                <li v-for="detalle in variants">{{ detalle.variantSexo }}</li>
            </ul>

            <button v-on:click="addInteresados" :disabled="!estado" :class="{disabledButton: !estado}">Estoy interesado!</button>
        </div>
    </div>`,
    data() {
        return {
            nombreA: 'Nombre ',
            product: 'Michi ',
            description: 'Descripcion del michi puesto por quien lo esta dando en adopcion',
            image: './assets/Chico_excremento.jpg',
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
            this.$emit('add-michi')
        }
    },
    computed: {
        title() {
            return this.nombreA + ' ' + this.product
        }
    }

})

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
})