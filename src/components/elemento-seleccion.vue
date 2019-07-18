<template>
    <div class='product' id="elemento-seleccion">    
        <div class='product-info'>
            <h1>{{ nombreA }}</h1>
            <div class='image-select'>
                <img v-bind:src= "image"/>
            </div>
            <p>{{ description }}</p>
            <p v-if="esterilizado">Esterilizado</p>
            <p v-else>No Esterilizado</p>
            <button class ="btn-1" v-if="estado">
                Estoy interesado!
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'elemento-seleccion',
        data: () => {
            return {
                nombreA : "TurboChela",
                product: 'Michi ',
                description: 'Descripcion del michi puesto por quien lo esta dando en adopcion',
                image: require('../assets/images/1.jpeg'),
                altext: 'Foto de la mascota',
                esterilizado: true,
                estado: true,
            }
        }

};
</script>

<style>
    #elemento-seleccion .product {
    height:100%;
    width:100%;
    }

    #elemento-seleccion .image-select{
        width: 100%;
        box-sizing: border-box; 
    }

    #elemento-seleccion .image-select img{
        width: 25%;
        border-radius: 50%;
        align-content: center;
    }

    #elemento-seleccion .product-info {
        text-align:center;
        width: 100%;
        background: #eee;
    }

    #elemento-seleccion .btn-1 {
        border: black;
        background-color: rgb(40, 167, 72);
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        display: inline-block;
        border-radius: 12px;
    }
    #elemento-seleccion .btn:hover {
        background: #ffffff;
        
    }
</style>