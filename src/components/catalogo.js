
Vue.component('info', {
    props: {}
    ,
    template:`
    <div class='mascota-info'>
        <div class="foto-michi"><img v-bind:src="image"/></div>
        <h2>{{ nombre }}</h2>
        <p v-if="estado">Disponible para adopcion</p>
        <p v-else>Adoptado</p>
    </div>`,
    data() {
        return {
            nombre : "Turbochela",
            product: 'Michi ',
            image: '../assets/Chico_excremento.jpg',
            esterilizado: true,
            estado: true
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {}
});
