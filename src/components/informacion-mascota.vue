<template>
    <div id="informacion-mascota">    
        <div class="product-info">
            <v-carousel hide-delimiters>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <h1>{{ nombreA }}</h1>
            <p>{{description}}</p>
            <h4>{{product}}</h4>
            <h4 v-if="esterilizado">Esterilizado {{sexo}}</h4>
            <h4>{{color}} {{patron}}</h4>

            <v-btn class="btn-1" v-if="estado" href="/" >
                Estoy Interesado :)
            </v-btn>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'informacion-mascota',
        data: () => {
            return {
                nombreA : "TurboChela",
                product: 'Michi ',
                altext: 'Foto de la mascota',
                description: 'Descripcion del michi puesto por quien lo esta dando en adopcion ',
                sexo:"Masculino",
                color:"Negro",
                patron:"Manchas",
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
    #elemento-seleccion {
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
        height: 100%;
    }
</style>