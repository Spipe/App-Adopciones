
<template>
    <div class='mascota-info'>
        <div class="foto-michi">
            <img v-bind:src="image"/>
        </div>
        <h2>{{ nombreA }}</h2>
        <p v-if="estado">Disponible para adopcion</p>
        <p v-else>Adoptado</p>
    </div>
</template>


<script>
  export default {
    name: 'elemento-catalogo',
    data: () => {
        return {
            nombreA : "Gatito",
            product: 'Michi ',
            image: '../assets/images/turbochela.jpeg',
            esterilizado: true,
            estado: false
        }
    }
  }
</script>

<style>
    .mascota-info{
        padding: 1em;
        align-items: center;
        text-align: center;
        background-color: rgb(255, 248, 219);
    }

    .foto-michi{
        width: 100%;
        box-sizing: border-box;
    }

    .foto-michi img{
        width: 100%;
        border-radius: 50%;

    }

    .mascota-info h2{
        margin: 0px;
    }

    .mascota-info p{
        margin: 0px;
    }
</style>