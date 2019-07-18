<template>
    <div id="elemento-seleccion">    
        <div class="product">
            <h1>{{ nombreA }}</h1>
            <v-carousel hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
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
                items:[
                    {
                         src: require('../assets/images/1.jpeg')
                    },
                    {
                        src: require('../assets/images/2.jpeg')
                    },
                    {
                        src: require('../assets/images/3.jpeg')
                    },
                    {
                        src: require('../assets/images/4.jpeg')
                    }
                ]
            }
        }

};
</script>

<style>
    #elemento-seleccion .product {
    margin:0.5em;
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