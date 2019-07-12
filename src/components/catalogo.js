
Vue.component('info', {
    props: {}
    ,
    template:`
    <div class='mascota-info'>
        <div class="foto-michi"><img v-bind:src="image"/></div>
        <h2>{{ nombreA }}</h2>
        <p v-if="estado">Disponible para adopcion</p>
        <p v-else>Adoptado</p>
    </div>`,
    data() {
        return {
            nombreA : "Gatito",
            product: 'Michi ',
            image: '../assets/Chico_excremento.jpg',
            esterilizado: true,
            estado: false
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {}
});
