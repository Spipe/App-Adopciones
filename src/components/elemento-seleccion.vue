
<template>
    <div>
      <v-card class="product">
        <h1>{{ nombreA }}</h1>
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
      </v-card >
      
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
    .product{
    padding: 0.5em; 
    }

    .product-info {
        text-align:center;
        width: 100%;
        background: #eee;
    }

    .btn-1 {
        border: black;
        background-color: rgb(40, 167, 72);
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        display: inline-block;
        border-radius: 12px;
        
    }
    .seleccion-grid {
    margin: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 0.5rem;
  }
</style>