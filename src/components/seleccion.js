
Vue.component('info', {
    props: {}
    ,
    template:`
    <div class='product'>    
        <div class='product-info'>
            <h1>{{ title }}</h1>
            <div class='image-select'>
                <img v-bind:src="image"/>
            </div>
            <p>{{ description }}</p>
            <p v-if="esterilizado">Esterilizado</p>
            <p v-else>No Esterilizado</p>
            <ul>
                <li v-for="detalle in variants">
                    <p v-if=detalle.variantSexo>Sexo: {{detalle.variantSexo}}</p>
                    <p v-if=detalle.variantEdad>Edad: {{detalle.variantEdad}}</p>
                    <p v-if=detalle.variantPelo>Tipo de pelo: {{detalle.variantPelo}}</p>
                </li>
                
            </ul>

            <button class ="btn-1" v-if="estado">
                Estoy interesado!
            </button>
        </div>
    </div>`,
    data() {
        return {
            nombreA : "Gatito",
            product: 'Michi ',
            description: 'Descripcion del michi puesto por quien lo esta dando en adopcion',
            image: '../assets/Turbochela.jpeg',
            altext: 'Foto de la mascota',
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
                    variantPelo: "Largo"
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
