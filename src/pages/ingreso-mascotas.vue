<template>
    <div id="ingreso-mascotas">
        <header>
            <navbar active="/ingreso-mascotas"></navbar>
        </header>
        <footer>
            <pie></pie>
        </footer>
    </div>

</template>

<script>
    import Navbar from '../components/navbar.vue'
    import Pie from '../components/pie.vue'
    export default {
        name: 'ingreso-mascotas',
        components: {
            Navbar,
            Pie,
            InformacionMascota
        }
    }
</script>